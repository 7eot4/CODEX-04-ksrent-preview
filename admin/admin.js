const config = window.MARE_LENTO_CONFIG || {};
const configured = Boolean(config.SUPABASE_URL && config.SUPABASE_PUBLISHABLE_KEY);
const loginSection = document.querySelector("[data-login]");
const dashboard = document.querySelector("[data-dashboard]");
const loginForm = document.querySelector("#login-form");
const manualForm = document.querySelector("#manual-block-form");
const adminStatus = document.querySelector("[data-admin-status]");
const refreshButton = document.querySelector("[data-refresh]");
const signOutButton = document.querySelector("[data-sign-out]");
const todayKey = new Date().toISOString().slice(0, 10);
let client = null;
let session = null;
let state = { inquiries: [], blocks: [] };

function setStatus(element, message, error = false) {
  element.textContent = message;
  element.classList.toggle("error", error);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  return new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

async function adminRequest(method = "GET", body) {
  const response = await fetch(`${config.SUPABASE_URL.replace(/\/$/, "")}/functions/v1/owner-admin`, {
    method,
    headers: {
      apikey: config.SUPABASE_PUBLISHABLE_KEY,
      authorization: `Bearer ${session.access_token}`,
      "content-type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Operacja nie powiodła się.");
  return payload;
}

function statusLabel(status) {
  return { pending: "Oczekujące", accepted: "Zaakceptowane", rejected: "Odrzucone", cancelled: "Anulowane" }[status] || status;
}

function renderInquiries() {
  const root = document.querySelector("[data-inquiries]");
  if (!state.inquiries.length) {
    root.innerHTML = '<p class="empty-state">Brak zapytań.</p>';
    return;
  }
  root.innerHTML = state.inquiries.map((inquiry) => {
    const actions = inquiry.status === "pending"
      ? `<button class="action-button accept" data-action="accept" data-inquiry-id="${inquiry.id}">Akceptuj</button><button class="action-button reject" data-action="reject" data-inquiry-id="${inquiry.id}">Odrzuć</button>`
      : inquiry.status === "accepted"
        ? `<button class="action-button cancel" data-action="cancel" data-inquiry-id="${inquiry.id}">Anuluj rezerwację</button>`
        : "";
    return `<article class="inquiry-card">
      <div class="inquiry-card-top"><div><p class="eyebrow">${escapeHtml(formatDate(inquiry.created_at.slice(0, 10)))}</p><h3>${escapeHtml(inquiry.guest_name)}</h3></div><span class="status-badge ${escapeHtml(inquiry.status)}">${escapeHtml(statusLabel(inquiry.status))}</span></div>
      <div class="inquiry-meta"><strong>${escapeHtml(formatDate(inquiry.check_in))} – ${escapeHtml(formatDate(inquiry.check_out))}</strong><span>${inquiry.guest_count} os.</span><a href="mailto:${encodeURIComponent(inquiry.guest_email)}">${escapeHtml(inquiry.guest_email)}</a>${inquiry.guest_phone ? `<a href="tel:${encodeURIComponent(inquiry.guest_phone.replace(/\s/g, ""))}">${escapeHtml(inquiry.guest_phone)}</a>` : ""}<span>Język: ${escapeHtml(inquiry.language.toUpperCase())}</span></div>
      <div class="inquiry-message">${escapeHtml(inquiry.message || "Bez dodatkowej wiadomości.")}</div>
      ${actions ? `<div class="inquiry-actions">${actions}</div>` : ""}
    </article>`;
  }).join("");
}

function renderBlocks() {
  const active = state.blocks.filter((block) => !block.cancelled_at);
  const root = document.querySelector("[data-blocks]");
  if (!active.length) {
    root.innerHTML = '<p class="empty-state">Brak aktywnych blokad.</p>';
    return;
  }
  root.innerHTML = active.map((block) => `<article class="block-card">
    <div><span class="status-badge ${block.kind === "manual" ? "pending" : "accepted"}">${block.kind === "manual" ? "Blokada ręczna" : "Rezerwacja"}</span><h3>${escapeHtml(formatDate(block.check_in))} – ${escapeHtml(formatDate(block.check_out))}</h3><p>${escapeHtml(block.note || "Bez notatki")}</p></div>
    ${block.kind === "manual" ? `<button class="action-button cancel" data-action="unblock" data-block-id="${block.id}">Odblokuj</button>` : ""}
  </article>`).join("");
}

function render() {
  const activeBlocks = state.blocks.filter((block) => !block.cancelled_at);
  document.querySelector("[data-count-pending]").textContent = state.inquiries.filter((item) => item.status === "pending").length;
  document.querySelector("[data-count-accepted]").textContent = state.inquiries.filter((item) => item.status === "accepted").length;
  document.querySelector("[data-count-blocks]").textContent = activeBlocks.length;
  renderInquiries();
  renderBlocks();
}

async function loadDashboard() {
  setStatus(adminStatus, "Pobieranie danych…");
  try {
    state = await adminRequest();
    render();
    setStatus(adminStatus, "Dane są aktualne.");
  } catch (error) {
    setStatus(adminStatus, error.message, true);
  }
}

function showSession(nextSession) {
  session = nextSession;
  const signedIn = Boolean(session);
  loginSection.hidden = signedIn;
  dashboard.hidden = !signedIn;
  refreshButton.hidden = !signedIn;
  signOutButton.hidden = !signedIn;
  document.querySelector("[data-session-label]").textContent = signedIn ? session.user.email : "";
  if (signedIn) loadDashboard();
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = loginForm.querySelector(".status");
  if (!configured || !client) {
    setStatus(status, "Najpierw uzupełnij publiczną konfigurację Supabase w config.js.", true);
    return;
  }
  const button = loginForm.querySelector("button");
  button.disabled = true;
  setStatus(status, "Wysyłamy jednorazowy link…");
  const { error } = await client.auth.signInWithOtp({
    email: loginForm.elements.email.value.trim(),
    options: { shouldCreateUser: false, emailRedirectTo: new URL("./", window.location.href).href },
  });
  button.disabled = false;
  setStatus(status, error ? error.message : "Sprawdź skrzynkę e-mail i kliknij otrzymany link.", Boolean(error));
});

manualForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(manualForm);
  const button = manualForm.querySelector("button");
  button.disabled = true;
  setStatus(adminStatus, "Zapisujemy blokadę…");
  try {
    await adminRequest("POST", { action: "manual-block", check_in: data.get("check_in"), check_out: data.get("check_out"), note: data.get("note") });
    manualForm.reset();
    manualForm.elements.check_in.min = todayKey;
    manualForm.elements.check_out.min = todayKey;
    await loadDashboard();
  } catch (error) {
    setStatus(adminStatus, error.message, true);
  } finally {
    button.disabled = false;
  }
});

dashboard.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const confirmation = {
    accept: "Zaakceptować zapytanie i zablokować termin?",
    reject: "Odrzucić to zapytanie?",
    cancel: "Anulować zaakceptowaną rezerwację i zwolnić termin?",
    unblock: "Usunąć ręczną blokadę i zwolnić termin?",
  }[action];
  if (!window.confirm(confirmation)) return;
  button.disabled = true;
  setStatus(adminStatus, "Wykonujemy operację…");
  try {
    const payload = await adminRequest("POST", {
      action,
      inquiry_id: button.dataset.inquiryId,
      block_id: button.dataset.blockId,
    });
    await loadDashboard();
    if (payload.guest_notification?.sent === false)
      setStatus(adminStatus, payload.guest_notification.error, true);
  } catch (error) {
    setStatus(adminStatus, error.message, true);
    button.disabled = false;
  }
});

refreshButton.addEventListener("click", loadDashboard);
signOutButton.addEventListener("click", async () => {
  await client.auth.signOut();
  showSession(null);
});
manualForm.elements.check_in.min = todayKey;
manualForm.elements.check_out.min = todayKey;

if (!configured || !window.supabase) {
  setStatus(loginForm.querySelector(".status"), "Panel wymaga uzupełnienia config.js i wdrożenia backendu Supabase.", true);
} else {
  client = window.supabase.createClient(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, detectSessionInUrl: true, flowType: "implicit" },
  });
  client.auth.getSession().then(({ data }) => showSession(data.session));
  client.auth.onAuthStateChange((_event, nextSession) => showSession(nextSession));
}
