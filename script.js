const translations = {
  pl: {
    locale: "pl-PL",
    pageTitle: "Apartament wakacyjny w Falerna Marina | KS Rent",
    pageDescription: "Apartament wakacyjny z widokiem na morze w Falerna Marina w Kalabrii. Dwie sypialnie, balkon i spokojna baza do odkrywania południowych Włoch.",
    skip: "Przejdź do treści",
    headerCta: "Zapytaj o pobyt",
    nav: { apartment: "Apartament", availability: "Dostępność", gallery: "Galeria", location: "Okolica", contact: "Kontakt" },
    hero: { kicker: "Falerna Marina · Kalabria", title: "Morze na wyciągnięcie ręki.", description: "Spokojny apartament stworzony dla niespiesznych, południowych dni.", link: "Poznaj miejsce", caption: "Widok z balkonu" },
    intro: { kicker: "Włoski rytm", title: "Tu poranki zaczynają się od światła, a kończą szumem morza.", text: "KS Rent to miejsce na wakacyjny oddech w Falerna Marina. Jasne wnętrza, balkon i widok na wybrzeże tworzą prostą bazę do plażowania, odkrywania Kalabrii i prawdziwego odpoczynku.", link: "Zobacz zdjęcia" },
    stay: { kicker: "Twój pobyt", title: "W sam raz na wspólny wyjazd.", text: "W apartamencie znajdziemy klimatyzację, dwie sypialnie — jedna z łóżkiem podwójnym, druga z dwoma pojedynczymi łóżkami — a także część dzienna z jadalnią, kompaktowa kuchnia, łazienka z prysznicem i pralką oraz balkon.", note: "Szczegóły wyposażenia i warunków pobytu potwierdzimy przy zapytaniu.", cta: "Sprawdź dostępność" },
    booking: {
      kicker: "Dostępność", title: "Zaplanuj swój pobyt.", text: "Wybierz daty i wyślij zapytanie. Termin zostanie zablokowany dopiero po zaakceptowaniu go przez właściciela.",
      integrationTitle: "Jak działa zapytanie", integrationText: "Zapytanie trafia do właściciela. Oczekujące zapytania nie blokują kalendarza — robi to dopiero akceptacja.",
      cardKicker: "Zapytanie o pobyt", cardTitle: "Wybierz termin", available: "Wybierz datę", selected: "Wybrany termin", occupied: "Zajęte", checkin: "Przyjazd", checkout: "Wyjazd", guests: "Goście", cta: "Przejdź do zapytania", disclaimer: "Wysłanie zapytania nie potwierdza pobytu. Termin blokuje dopiero akceptacja właściciela.",
      previousMonth: "Poprzedni miesiąc", nextMonth: "Następny miesiąc", loading: "Pobieramy aktualną dostępność…", ready: "Kalendarz jest aktualny.", setup: "Dostępność online wymaga uzupełnienia konfiguracji Supabase.", error: "Nie udało się pobrać dostępności. Spróbuj ponownie za chwilę.", conflict: "Wybrany zakres obejmuje zajęty termin. Wybierz inne daty.", online: "ONLINE", configuration: "KONFIGURACJA"
    },
    gallery: { kicker: "Galeria", title: "Zajrzyj do środka.", livingDining: "Salon i jadalnia", doubleBedroom: "Sypialnia dwuosobowa", twinBedroom: "Sypialnia z dwoma łóżkami", balcony: "Balkon i widok", kitchen: "Kuchnia", bathroom: "Łazienka" },
    place: {
      title: "Kalabria, w której nie trzeba się spieszyć.", text: "Falerna Marina jest spokojną bazą do odkrywania wybrzeża Morza Tyrreńskiego. Zacznij od plaży i zachodu słońca, a na dłuższy dzień wybierz Pizzo, Tropeę albo Capo Vaticano.", note: "Dokładną lokalizację i wskazówki dojazdu przekazujemy po potwierdzeniu pobytu.",
      local: "Na miejscu", nearby: "Lokalnie", pizzoTime: "Około 36 min samochodem", tropeaTime: "Około 1 godz. samochodem", capoTime: "Około 1 godz. 25 min samochodem", stromboliTime: "Wycieczka całodniowa · rejs sezonowy", maps: "Otwórz w Google Maps",
      falerna: "Plaża, nadmorska promenada i wieczorne światło, od którego wybrzeże wzięło swoją nazwę.", torre: "Historyczna wieża strażnicza i dobry kierunek na krótki spacer lub zachód słońca.", gizzeria: "Otwarte wybrzeże, laguny La Vota i przestrzeń szczególnie ceniona przez miłośników wiatru i sportów wodnych.", pizzo: "Nadmorski borgo z Castello Murat, wykutą w skale Chiesetta di Piedigrotta i słynnym tartufo di Pizzo.", tropea: "Historyczne uliczki, tarasy nad morzem i sanktuarium Santa Maria dell’Isola na skalnym cyplu.", capo: "Punkty widokowe, jasne zatoki i krystaliczna woda Costa degli Dei — dobry cel na cały dzień.", stromboli: "Wycieczka na Wyspy Liparyjskie wymaga wcześniejszego sprawdzenia operatora, pogody i aktualnego rozkładu rejsów."
    },
    contact: { title: "Masz w głowie termin? Napisz do nas.", text: "Wybierz daty, opowiedz, czego potrzebujesz — wrócimy z informacją o dostępności.", emailCta: "Wyślij zapytanie", whatsappCta: "Napisz na WhatsApp", whatsappUnavailable: "WhatsApp zostanie uruchomiony po dodaniu numeru właściciela." },
    footer: { top: "Do góry ↑", note: "Zapytania o pobyt wymagają potwierdzenia właściciela." },
    modal: { kicker: "Zapytanie o pobyt", title: "Daj znać, kiedy chcesz przyjechać." },
    form: { name: "Imię i nazwisko", namePlaceholder: "Twoje imię", email: "E-mail", arrival: "Od", departure: "Do", message: "Wiadomość", messagePlaceholder: "Napisz nam coś o swoim wyjeździe.", consent: "Zgadzam się na wykorzystanie podanych danych wyłącznie do obsługi zapytania o pobyt.", submit: "Wyślij zapytanie", note: "Dane wykorzystamy wyłącznie do odpowiedzi na zapytanie. Wysłanie formularza nie jest potwierdzeniem rezerwacji.", sending: "Wysyłamy zapytanie…", success: "Zapytanie zostało wysłane do właściciela. Termin pozostaje dostępny do chwili akceptacji.", notificationIssue: "Zapytanie zostało zapisane, ale powiadomienie e-mail nie zostało wysłane. Skontaktuj się także przez WhatsApp.", missingConfig: "Formularz wymaga jeszcze podłączenia Supabase. Skorzystaj z WhatsApp lub spróbuj później.", datesRequired: "Wybierz poprawną datę przyjazdu i wyjazdu.", conflict: "Ten termin właśnie stał się niedostępny. Wybierz inne daty.", error: "Nie udało się wysłać zapytania. Spróbuj ponownie za chwilę." },
    whatsapp: { message: "Dzień dobry, interesuje mnie pobyt w KS Rent{dates}. Liczba gości: {guests}. Czy termin jest dostępny?", dates: " w terminie {from} – {to}" },
    alt: { hero: "Balkon apartamentu z widokiem na Morze Tyrreńskie", interior: "Salon z jadalnią i wyjściem na balkon", sea: "Jadalnia apartamentu KS Rent", livingDining: "Salon z jadalnią i wyjściem na balkon", doubleBedroom: "Sypialnia z łóżkiem podwójnym i wyjściem na balkon", twinBedroom: "Sypialnia z dwoma pojedynczymi łóżkami", kitchen: "Kompaktowa kuchnia z płytą grzewczą i piekarnikiem", bathroom: "Łazienka z prysznicem i pralką", regionPanorama: "Panorama wybrzeża Kalabrii nad Morzem Tyrreńskim", tropea: "Sanktuarium Santa Maria dell’Isola na skalnym cyplu w Tropei", capoVaticano: "Widok na wybrzeże z belwederu Capo Vaticano", pizzoCalabro: "Pizzo Calabro położone na klifie nad Morzem Tyrreńskim", regionCove: "Skalna zatoka na wybrzeżu Kalabrii" }
  },
  en: {
    locale: "en-GB", pageTitle: "Holiday apartment in Falerna Marina | KS Rent", pageDescription: "A holiday apartment with a sea view in Falerna Marina, Calabria. Two bedrooms, a balcony and a peaceful base for exploring southern Italy.", skip: "Skip to content", headerCta: "Enquire about a stay",
    nav: { apartment: "Apartment", availability: "Availability", gallery: "Gallery", location: "Area", contact: "Contact" },
    hero: { kicker: "Falerna Marina · Calabria", title: "The sea within reach.", description: "A peaceful apartment made for slow, southern days.", link: "Discover the place", caption: "View from the balcony" },
    intro: { kicker: "Italian rhythm", title: "Here, mornings begin with light and end with the sound of the sea.", text: "KS Rent is a place to take a holiday breath in Falerna Marina. Bright interiors, a balcony and a view of the coast make an easy base for beach days, exploring Calabria and genuine rest.", link: "See the gallery" },
    stay: { kicker: "Your stay", title: "Just right for a shared escape.", text: "The apartment has air conditioning, two bedrooms — one with a double bed and one with two single beds — plus a living and dining area, compact kitchen, shower room with washing machine and a balcony.", note: "We will confirm the full amenities and stay conditions with your enquiry.", cta: "Check availability" },
    booking: { kicker: "Availability", title: "Plan your stay.", text: "Choose your dates and send an enquiry. The period is blocked only after the owner accepts it.", integrationTitle: "How enquiries work", integrationText: "Your enquiry goes to the owner. Pending enquiries do not block the calendar — only an acceptance does.", cardKicker: "Stay enquiry", cardTitle: "Choose dates", available: "Choose a date", selected: "Selected dates", occupied: "Unavailable", checkin: "Check-in", checkout: "Check-out", guests: "Guests", cta: "Continue to enquiry", disclaimer: "Sending an enquiry does not confirm a stay. Dates are blocked only after the owner accepts.", previousMonth: "Previous month", nextMonth: "Next month", loading: "Loading current availability…", ready: "The calendar is up to date.", setup: "Online availability requires the Supabase configuration.", error: "Availability could not be loaded. Please try again shortly.", conflict: "The selected range includes unavailable dates. Choose another period.", online: "ONLINE", configuration: "SETUP" },
    gallery: { kicker: "Gallery", title: "Take a look inside.", livingDining: "Living and dining room", doubleBedroom: "Double bedroom", twinBedroom: "Twin bedroom", balcony: "Balcony and view", kitchen: "Kitchen", bathroom: "Bathroom" },
    place: { title: "Calabria does not need to be rushed.", text: "Falerna Marina is a peaceful base for exploring the Tyrrhenian coast. Start with the beach and sunset, then choose Pizzo, Tropea or Capo Vaticano for a longer day out.", note: "We share the exact location and directions once your stay is confirmed.", local: "On your doorstep", nearby: "Nearby", pizzoTime: "Around 36 min by car", tropeaTime: "Around 1 hour by car", capoTime: "Around 1 hour 25 min by car", stromboliTime: "Full-day trip · seasonal sailings", maps: "Open in Google Maps", falerna: "Beach, seafront walks and the evening light that gives the Sunset Coast its name.", torre: "A historic watchtower and a good direction for a short walk or sunset.", gizzeria: "Open coastline, the La Vota lagoons and space popular with wind and water-sport enthusiasts.", pizzo: "A seaside town with Murat Castle, the rock-cut Piedigrotta Church and famous tartufo di Pizzo.", tropea: "Historic lanes, sea-view terraces and Santa Maria dell’Isola on its rocky promontory.", capo: "Viewpoints, bright coves and clear Costa degli Dei water — a fine full-day destination.", stromboli: "An Aeolian Islands trip requires checking the operator, weather and current sailing schedule in advance." },
    contact: { title: "Have dates in mind? Write to us.", text: "Choose your dates and tell us what you need — we will get back to you with availability.", emailCta: "Send an enquiry", whatsappCta: "Message on WhatsApp", whatsappUnavailable: "WhatsApp will be enabled once the owner number is configured." },
    footer: { top: "Back to top ↑", note: "Stay enquiries require owner confirmation." },
    modal: { kicker: "Stay enquiry", title: "Let us know when you would like to visit." },
    form: { name: "Full name", namePlaceholder: "Your name", email: "E-mail", arrival: "From", departure: "To", message: "Message", messagePlaceholder: "Tell us a little about your trip.", consent: "I agree that the details I provide may be used solely to handle this stay enquiry.", submit: "Send enquiry", note: "We use your details only to answer this enquiry. Submitting the form does not confirm a booking.", sending: "Sending your enquiry…", success: "Your enquiry was sent to the owner. The dates remain available until acceptance.", notificationIssue: "Your enquiry was saved, but the e-mail notification was not sent. Please also use WhatsApp.", missingConfig: "The form still needs its Supabase connection. Please use WhatsApp or try later.", datesRequired: "Choose a valid check-in and check-out date.", conflict: "These dates have just become unavailable. Please select another period.", error: "The enquiry could not be sent. Please try again shortly." },
    whatsapp: { message: "Hello, I am interested in a stay at KS Rent{dates}. Number of guests: {guests}. Are the dates available?", dates: " from {from} to {to}" },
    alt: { hero: "Apartment balcony overlooking the Tyrrhenian Sea", interior: "Living and dining room with balcony access", sea: "KS Rent apartment dining area", livingDining: "Living and dining room with balcony access", doubleBedroom: "Double bedroom with balcony access", twinBedroom: "Bedroom with two single beds", kitchen: "Compact kitchen with hob and oven", bathroom: "Bathroom with shower and washing machine", regionPanorama: "Panorama of Calabria's Tyrrhenian coast", tropea: "Santa Maria dell’Isola sanctuary on its rocky promontory in Tropea", capoVaticano: "Coastal view from the Capo Vaticano viewpoint", pizzoCalabro: "Pizzo Calabro rising above the Tyrrhenian coast", regionCove: "Rocky cove on the Calabrian coast" }
  },
  it: {
    locale: "it-IT", pageTitle: "Casa vacanze a Falerna Marina | KS Rent", pageDescription: "Casa vacanze con vista mare a Falerna Marina, Calabria. Due camere da letto, balcone e una base tranquilla per scoprire il sud Italia.", skip: "Vai al contenuto", headerCta: "Richiedi un soggiorno",
    nav: { apartment: "Appartamento", availability: "Disponibilità", gallery: "Galleria", location: "Dintorni", contact: "Contatti" },
    hero: { kicker: "Falerna Marina · Calabria", title: "Il mare a portata di mano.", description: "Un appartamento tranquillo, pensato per lente giornate del sud.", link: "Scopri il luogo", caption: "Vista dal balcone" },
    intro: { kicker: "Ritmo italiano", title: "Qui le mattine iniziano con la luce e finiscono con il suono del mare.", text: "KS Rent è un luogo per respirare in vacanza a Falerna Marina. Interni luminosi, un balcone e la vista sulla costa creano una base semplice per il mare, la scoperta della Calabria e il vero riposo.", link: "Guarda le foto" },
    stay: { kicker: "Il tuo soggiorno", title: "Perfetto per una fuga insieme.", text: "L’appartamento dispone di aria condizionata, due camere da letto — una con letto matrimoniale e una con due letti singoli — oltre a zona giorno con pranzo, cucina compatta, bagno con doccia e lavatrice e balcone.", note: "Confermeremo i dettagli dei servizi e le condizioni di soggiorno con la tua richiesta.", cta: "Verifica la disponibilità" },
    booking: { kicker: "Disponibilità", title: "Organizza il tuo soggiorno.", text: "Scegli le date e invia una richiesta. Il periodo viene bloccato solo dopo l’accettazione del proprietario.", integrationTitle: "Come funziona la richiesta", integrationText: "La richiesta arriva al proprietario. Le richieste in attesa non bloccano il calendario: solo l’accettazione lo fa.", cardKicker: "Richiesta di soggiorno", cardTitle: "Scegli le date", available: "Scegli una data", selected: "Date selezionate", occupied: "Non disponibile", checkin: "Arrivo", checkout: "Partenza", guests: "Ospiti", cta: "Prosegui alla richiesta", disclaimer: "L’invio della richiesta non conferma il soggiorno. Le date vengono bloccate solo dopo l’accettazione.", previousMonth: "Mese precedente", nextMonth: "Mese successivo", loading: "Caricamento della disponibilità…", ready: "Il calendario è aggiornato.", setup: "La disponibilità online richiede la configurazione di Supabase.", error: "Impossibile caricare la disponibilità. Riprova tra poco.", conflict: "L’intervallo selezionato comprende date non disponibili. Scegli un altro periodo.", online: "ONLINE", configuration: "CONFIGURAZIONE" },
    gallery: { kicker: "Galleria", title: "Entra e dai un’occhiata.", livingDining: "Soggiorno e sala da pranzo", doubleBedroom: "Camera matrimoniale", twinBedroom: "Camera doppia", balcony: "Balcone e vista", kitchen: "Cucina", bathroom: "Bagno" },
    place: { title: "La Calabria non va vissuta di fretta.", text: "Falerna Marina è una base tranquilla per scoprire la costa tirrenica. Inizia dalla spiaggia e dal tramonto, poi scegli Pizzo, Tropea o Capo Vaticano per una giornata più lunga.", note: "Condivideremo posizione esatta e indicazioni dopo la conferma del soggiorno.", local: "Sul posto", nearby: "Nei dintorni", pizzoTime: "Circa 36 min in auto", tropeaTime: "Circa 1 ora in auto", capoTime: "Circa 1 ora e 25 min in auto", stromboliTime: "Gita di un giorno · partenze stagionali", maps: "Apri in Google Maps", falerna: "Spiaggia, passeggiate sul lungomare e la luce serale che dà il nome alla Riviera dei Tramonti.", torre: "Una torre di avvistamento storica e una buona meta per una breve passeggiata o il tramonto.", gizzeria: "Costa aperta, lagune La Vota e spazi apprezzati dagli amanti del vento e degli sport acquatici.", pizzo: "Borgo sul mare con il Castello Murat, la Chiesetta di Piedigrotta scavata nella roccia e il celebre tartufo di Pizzo.", tropea: "Vicoli storici, terrazze sul mare e Santa Maria dell’Isola sul promontorio roccioso.", capo: "Belvedere, baie chiare e acqua cristallina della Costa degli Dei: ideale per una giornata intera.", stromboli: "La gita alle Isole Eolie richiede di verificare in anticipo operatore, meteo e orari aggiornati." },
    contact: { title: "Hai già una data in mente? Scrivici.", text: "Scegli le date e raccontaci di cosa hai bisogno — ti risponderemo con la disponibilità.", emailCta: "Invia una richiesta", whatsappCta: "Scrivi su WhatsApp", whatsappUnavailable: "WhatsApp sarà attivato dopo la configurazione del numero del proprietario." },
    footer: { top: "Torna su ↑", note: "Le richieste di soggiorno richiedono la conferma del proprietario." },
    modal: { kicker: "Richiesta di soggiorno", title: "Facci sapere quando desideri arrivare." },
    form: { name: "Nome e cognome", namePlaceholder: "Il tuo nome", email: "E-mail", arrival: "Dal", departure: "Al", message: "Messaggio", messagePlaceholder: "Raccontaci qualcosa del tuo viaggio.", consent: "Acconsento all’uso dei dati forniti esclusivamente per gestire questa richiesta di soggiorno.", submit: "Invia richiesta", note: "Utilizziamo i tuoi dati solo per rispondere alla richiesta. L’invio non conferma la prenotazione.", sending: "Invio della richiesta…", success: "La richiesta è stata inviata al proprietario. Le date restano disponibili fino all’accettazione.", notificationIssue: "La richiesta è stata salvata, ma l’e-mail non è stata inviata. Contattaci anche su WhatsApp.", missingConfig: "Il modulo richiede ancora il collegamento a Supabase. Usa WhatsApp o riprova più tardi.", datesRequired: "Scegli date di arrivo e partenza valide.", conflict: "Queste date sono appena diventate non disponibili. Scegli un altro periodo.", error: "Impossibile inviare la richiesta. Riprova tra poco." },
    whatsapp: { message: "Buongiorno, sono interessato a un soggiorno presso KS Rent{dates}. Numero di ospiti: {guests}. Le date sono disponibili?", dates: " dal {from} al {to}" },
    alt: { hero: "Balcone dell’appartamento con vista sul Mar Tirreno", interior: "Soggiorno e sala da pranzo con accesso al balcone", sea: "Sala da pranzo dell’appartamento KS Rent", livingDining: "Soggiorno e sala da pranzo con accesso al balcone", doubleBedroom: "Camera matrimoniale con accesso al balcone", twinBedroom: "Camera con due letti singoli", kitchen: "Cucina compatta con piano cottura e forno", bathroom: "Bagno con doccia e lavatrice", regionPanorama: "Panorama della costa tirrenica calabrese", tropea: "Santuario di Santa Maria dell’Isola sul promontorio roccioso di Tropea", capoVaticano: "Vista sulla costa dal belvedere di Capo Vaticano", pizzoCalabro: "Pizzo Calabro sulla costa tirrenica", regionCove: "Baia rocciosa sulla costa calabrese" }
  }
};

const getValue = (source, path) => path.split(".").reduce((value, key) => value?.[key], source);
const rules = window.KSRentBookingRules;
const config = window.KS_RENT_CONFIG || {};
const backendConfigured = Boolean(config.SUPABASE_URL && config.SUPABASE_PUBLISHABLE_KEY);
const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const inquiryModal = document.querySelector("#inquiry-modal");
const inquiryForm = document.querySelector("#inquiry-form");
const lightbox = document.querySelector("#lightbox");
const calendarRoot = document.querySelector("#calendars");
const availabilityStatus = document.querySelector("#availability-status");
const systemPill = document.querySelector("#booking-system-pill");
const guestSelect = document.querySelector("#guest-count");
const today = new Date();
today.setHours(0, 0, 0, 0);

let language = document.documentElement.dataset.initialLanguage || "pl";
let viewMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedStart = null;
let selectedEnd = null;
let busyPeriods = [];
let availabilityState = backendConfigured ? "loading" : "setup";
let formStartedAt = Date.now();
let clientRequestId = crypto.randomUUID();
let turnstileToken = "";
let turnstileWidgetId = null;

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function dateFromKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function sameDay(first, second) {
  return first && second && dateKey(first) === dateKey(second);
}
function formatDate(date) {
  return date
    ? new Intl.DateTimeFormat(translations[language].locale, { day: "numeric", month: "short", year: "numeric" }).format(date)
    : "—";
}
function escapeAttribute(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function setAvailabilityMessage(state, customMessage = "") {
  availabilityState = state;
  const copy = translations[language].booking;
  availabilityStatus.textContent = customMessage || copy[state] || "";
  availabilityStatus.classList.toggle("error", state === "error" || state === "conflict");
  systemPill.textContent = backendConfigured ? copy.online : copy.configuration;
  systemPill.classList.toggle("offline", !backendConfigured || state === "error");
}

function updateBookingSummary() {
  document.querySelector("#checkin-value").textContent = formatDate(selectedStart);
  document.querySelector("#checkout-value").textContent = formatDate(selectedEnd);
  inquiryForm.elements.guests.value = guestSelect.value;
  updateWhatsAppLinks();
}

function renderMonth(month) {
  const copy = translations[language];
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);
  const lastDay = new Date(year, monthIndex + 1, 0);
  const firstWeekday = (firstDay.getDay() + 6) % 7;
  const monthName = new Intl.DateTimeFormat(copy.locale, { month: "long", year: "numeric" }).format(month);
  const weekdayFormatter = new Intl.DateTimeFormat(copy.locale, { weekday: "short" });
  const weekdays = Array.from({ length: 7 }, (_, index) => `<span>${weekdayFormatter.format(new Date(2024, 0, index + 1)).replace(".", "").slice(0, 2)}</span>`).join("");
  let days = Array.from({ length: firstWeekday }, () => "<span></span>").join("");

  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(year, monthIndex, day);
    const key = dateKey(date);
    const occupied = rules.isOccupied(key, busyPeriods);
    const candidateCheckout = selectedStart && !selectedEnd && date > selectedStart;
    const checkoutConflicts = candidateCheckout
      ? rules.hasConflict(dateKey(selectedStart), key, busyPeriods)
      : occupied;
    const disabled = date < today || (backendConfigured && availabilityState === "loading") || checkoutConflicts;
    const inRange = selectedStart && selectedEnd && date > selectedStart && date < selectedEnd;
    const start = sameDay(date, selectedStart);
    const end = sameDay(date, selectedEnd);
    const classNames = ["calendar-day"];
    if (occupied) classNames.push("occupied");
    if (inRange) classNames.push("in-range");
    if (start) classNames.push("selected", "range-start");
    if (end) classNames.push("selected", "range-end");
    if (start && end) classNames.push("range-end");
    const fullDate = new Intl.DateTimeFormat(copy.locale, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(date);
    days += `<button class="${classNames.join(" ")}" type="button" data-date="${key}" aria-label="${escapeAttribute(fullDate)}" ${disabled ? "disabled" : ""}>${day}</button>`;
  }
  return `<div class="calendar-month"><h3>${monthName}</h3><div class="weekdays">${weekdays}</div><div class="calendar-days">${days}</div></div>`;
}

function renderCalendar() {
  const nextMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1);
  calendarRoot.innerHTML = `${renderMonth(viewMonth)}${renderMonth(nextMonth)}`;
  document.querySelector("#calendar-months").textContent = `${new Intl.DateTimeFormat(translations[language].locale, { month: "long" }).format(viewMonth)} — ${new Intl.DateTimeFormat(translations[language].locale, { month: "long", year: "numeric" }).format(nextMonth)}`;
  calendarRoot.querySelectorAll("[data-date]").forEach((button) =>
    button.addEventListener("click", () => selectDate(button.dataset.date)),
  );
  updateBookingSummary();
}

function selectDate(key) {
  const date = dateFromKey(key);
  if (!selectedStart || selectedEnd || date < selectedStart) {
    selectedStart = date;
    selectedEnd = null;
    setAvailabilityMessage(backendConfigured ? "ready" : "setup");
  } else if (sameDay(date, selectedStart)) {
    selectedEnd = null;
  } else if (rules.hasConflict(dateKey(selectedStart), key, busyPeriods)) {
    selectedEnd = null;
    setAvailabilityMessage("conflict");
  } else {
    selectedEnd = date;
    setAvailabilityMessage(backendConfigured ? "ready" : "setup");
  }
  renderCalendar();
}

async function callPublicFunction(name, options = {}) {
  const response = await fetch(`${config.SUPABASE_URL.replace(/\/$/, "")}/functions/v1/${name}`, {
    ...options,
    headers: {
      apikey: config.SUPABASE_PUBLISHABLE_KEY,
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  return { response, payload };
}

async function loadAvailability() {
  if (!backendConfigured) {
    busyPeriods = [];
    setAvailabilityMessage("setup");
    renderCalendar();
    return;
  }
  setAvailabilityMessage("loading");
  renderCalendar();
  try {
    const { response, payload } = await callPublicFunction("public-availability", { method: "GET" });
    if (!response.ok || !Array.isArray(payload.periods)) throw new Error("Invalid availability response");
    busyPeriods = rules.activePeriods(payload.periods);
    if (selectedStart && selectedEnd && rules.hasConflict(dateKey(selectedStart), dateKey(selectedEnd), busyPeriods)) {
      selectedStart = null;
      selectedEnd = null;
      setAvailabilityMessage("conflict");
    } else {
      setAvailabilityMessage("ready");
    }
  } catch (error) {
    console.error("availability", error);
    setAvailabilityMessage("error");
  }
  renderCalendar();
}

function updateWhatsAppLinks() {
  const digits = String(config.WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const copy = translations[language];
  const dates = selectedStart && selectedEnd
    ? copy.whatsapp.dates.replace("{from}", formatDate(selectedStart)).replace("{to}", formatDate(selectedEnd))
    : "";
  const message = copy.whatsapp.message
    .replace("{dates}", dates)
    .replace("{guests}", guestSelect.value);
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    if (digits.length >= 8) {
      link.href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
      link.removeAttribute("aria-disabled");
    } else {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
    }
  });
  const status = document.querySelector("[data-contact-status]");
  status.textContent = digits.length >= 8 ? "" : copy.contact.whatsappUnavailable;
}

function setFormStatus(message, isError = false) {
  const status = inquiryForm.querySelector(".form-status");
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function openInquiry() {
  inquiryForm.elements.arrival.value = selectedStart ? dateKey(selectedStart) : "";
  inquiryForm.elements.departure.value = selectedEnd ? dateKey(selectedEnd) : "";
  inquiryForm.elements.guests.value = guestSelect.value;
  formStartedAt = Date.now();
  setFormStatus("");
  inquiryModal.showModal();
  initializeTurnstile();
}

function initializeTurnstile() {
  const siteKey = String(config.TURNSTILE_SITE_KEY || "").trim();
  const container = document.querySelector("#turnstile-container");
  if (!siteKey) {
    container.hidden = true;
    return;
  }
  container.hidden = false;
  const renderWidget = () => {
    if (!window.turnstile || turnstileWidgetId !== null) return;
    turnstileWidgetId = window.turnstile.render(container, {
      sitekey: siteKey,
      theme: "light",
      callback: (token) => { turnstileToken = token; },
      "expired-callback": () => { turnstileToken = ""; },
      "error-callback": () => { turnstileToken = ""; },
    });
  };
  if (window.turnstile) renderWidget();
  else if (!document.querySelector("script[data-turnstile-script]")) {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.turnstileScript = "true";
    script.addEventListener("load", renderWidget);
    document.head.append(script);
  }
}

async function submitInquiry(event) {
  event.preventDefault();
  const copy = translations[language].form;
  if (!backendConfigured) {
    setFormStatus(copy.missingConfig, true);
    return;
  }
  const formData = new FormData(inquiryForm);
  const checkIn = String(formData.get("arrival") || "");
  const checkOut = String(formData.get("departure") || "");
  if (!rules.isValidStay(checkIn, checkOut)) {
    setFormStatus(copy.datesRequired, true);
    return;
  }
  if (rules.hasConflict(checkIn, checkOut, busyPeriods)) {
    setFormStatus(copy.conflict, true);
    await loadAvailability();
    return;
  }

  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  setFormStatus(copy.sending);
  try {
    const { response, payload } = await callPublicFunction("submit-inquiry", {
      method: "POST",
      body: JSON.stringify({
        client_request_id: clientRequestId,
        name: formData.get("name"),
        email: formData.get("email"),
        check_in: checkIn,
        check_out: checkOut,
        guest_count: Number(guestSelect.value),
        message: formData.get("message"),
        language,
        company: formData.get("company"),
        started_at: formStartedAt,
        turnstile_token: turnstileToken,
      }),
    });
    if (response.status === 409) {
      setFormStatus(copy.conflict, true);
      await loadAvailability();
      return;
    }
    if (!response.ok) throw new Error(payload.error || "Submission failed");
    setFormStatus(payload.notification_sent === false ? copy.notificationIssue : copy.success, payload.notification_sent === false);
    clientRequestId = crypto.randomUUID();
    if (window.turnstile && turnstileWidgetId !== null) {
      window.turnstile.reset(turnstileWidgetId);
      turnstileToken = "";
    }
    await loadAvailability();
  } catch (error) {
    console.error("inquiry", error);
    setFormStatus(copy.error, true);
  } finally {
    submitButton.disabled = false;
  }
}

function applyLanguage(nextLanguage) {
  language = translations[nextLanguage] ? nextLanguage : "pl";
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", copy.pageDescription);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(copy, element.dataset.i18n);
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = getValue(copy, element.dataset.i18nAlt);
    if (value) element.alt = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = getValue(copy, element.dataset.i18nPlaceholder);
    if (value) element.placeholder = value;
  });
  document.querySelectorAll("[data-language]").forEach((link) => {
    if (link.dataset.language === language) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  document.querySelector("[data-calendar-prev]").setAttribute("aria-label", copy.booking.previousMonth);
  document.querySelector("[data-calendar-next]").setAttribute("aria-label", copy.booking.nextMonth);
  setAvailabilityMessage(availabilityState);
  renderCalendar();
  updateWhatsAppLinks();
}

document.querySelector("#year").textContent = new Date().getFullYear();
inquiryForm.elements.arrival.min = dateKey(today);
inquiryForm.elements.departure.min = dateKey(today);
menuButton?.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".desktop-nav a").forEach((link) =>
  link.addEventListener("click", () => {
    header.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }),
);
document.querySelector("[data-calendar-prev]").addEventListener("click", () => {
  const candidate = new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1);
  if (candidate >= new Date(today.getFullYear(), today.getMonth(), 1)) {
    viewMonth = candidate;
    renderCalendar();
  }
});
document.querySelector("[data-calendar-next]").addEventListener("click", () => {
  viewMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1);
  renderCalendar();
});
guestSelect.addEventListener("change", updateBookingSummary);
document.querySelectorAll("[data-open-inquiry]").forEach((button) => button.addEventListener("click", openInquiry));
document.querySelector("[data-close-inquiry]").addEventListener("click", () => inquiryModal.close());
inquiryForm.addEventListener("submit", submitInquiry);
inquiryForm.elements.arrival.addEventListener("change", () => {
  selectedStart = rules.isIsoDate(inquiryForm.elements.arrival.value) ? dateFromKey(inquiryForm.elements.arrival.value) : null;
  selectedEnd = rules.isIsoDate(inquiryForm.elements.departure.value) ? dateFromKey(inquiryForm.elements.departure.value) : null;
  renderCalendar();
});
inquiryForm.elements.departure.addEventListener("change", () => {
  selectedStart = rules.isIsoDate(inquiryForm.elements.arrival.value) ? dateFromKey(inquiryForm.elements.arrival.value) : null;
  selectedEnd = rules.isIsoDate(inquiryForm.elements.departure.value) ? dateFromKey(inquiryForm.elements.departure.value) : null;
  renderCalendar();
});
document.querySelectorAll(".gallery-card").forEach((card) =>
  card.addEventListener("click", () => {
    const image = lightbox.querySelector("img");
    image.src = card.dataset.image;
    image.alt = getValue(translations[language], card.dataset.altKey);
    lightbox.showModal();
  }),
);
document.querySelector("[data-close-lightbox]").addEventListener("click", () => lightbox.close());
[inquiryModal, lightbox].forEach((dialog) =>
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }),
);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && backendConfigured) loadAvailability();
});

applyLanguage(language);
loadAvailability();
setInterval(() => {
  if (backendConfigured && !document.hidden) loadAvailability();
}, 300000);
