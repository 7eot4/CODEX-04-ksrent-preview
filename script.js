const translations = {
  pl: {
    locale: "pl-PL",
    pageTitle: "Apartament w Falerna Marina | Mare Lento",
    pageDescription: "Mare Lento to apartament wakacyjny blisko morza w Falerna Marina w Kalabrii: dwie sypialnie, balkon i spokojna baza nad Riviera dei Tramonti.",
    skip: "Przejdź do treści",
    language: { label: "Wybierz język" },
    headerCta: "Zapytaj o pobyt",
    nav: { apartment: "Apartament", availability: "Dostępność", gallery: "Galeria", location: "Okolica", contact: "Kontakt" },
    hero: { kicker: "Falerna Marina · Kalabria", title: "Morze na wyciągnięcie ręki.", description: "Spokojny apartament stworzony dla niespiesznych, południowych dni.", link: "Poznaj miejsce", caption: "Wybrzeże Kalabrii" },
    intro: { kicker: "Włoski rytm", title: "Tu poranki zaczynają się od światła, a kończą szumem morza.", text: "Mare Lento to miejsce na wakacyjny oddech w Falerna Marina. Jasne wnętrza, balkon i widok na wybrzeże tworzą prostą bazę do plażowania, odkrywania Kalabrii i prawdziwego odpoczynku.", link: "Zobacz zdjęcia" },
    stay: { kicker: "Twój pobyt", title: "W sam raz na wspólny wyjazd.", text: "Apartament zawiera klimatyzację, dwie sypialnie — jedna z łóżkiem podwójnym, druga z dwoma pojedynczymi łóżkami — a także część dzienna z jadalnią, kompaktowa kuchnia, łazienka z prysznicem i pralką oraz balkon.", note: "Szczegóły wyposażenia i warunków pobytu potwierdzimy przy zapytaniu.", cta: "Sprawdź dostępność" },
    booking: {
      kicker: "Dostępność", title: "Zaplanuj swój pobyt.", text: "Wybierz daty i wyślij zapytanie. Termin zostanie zablokowany dopiero po zaakceptowaniu go przez właściciela.",
      integrationTitle: "Jak działa zapytanie", integrationText: "Zapytanie trafia do właściciela. Oczekujące zapytania nie blokują kalendarza — robi to dopiero akceptacja.",
      cardKicker: "Zapytanie o pobyt", cardTitle: "Wybierz termin", available: "Wybierz datę", selected: "Wybrany termin", occupied: "Zajęte", checkin: "Przyjazd", checkout: "Wyjazd", guests: "Goście", decreaseGuests: "Zmniejsz liczbę gości", increaseGuests: "Zwiększ liczbę gości", cta: "Przejdź do zapytania", disclaimer: "Wysłanie zapytania nie potwierdza pobytu. Termin blokuje dopiero akceptacja właściciela.",
      previousMonth: "Poprzedni miesiąc", nextMonth: "Następny miesiąc", loading: "Pobieramy aktualną dostępność…", ready: "Kalendarz jest aktualny.", setup: "Dostępność online wymaga uzupełnienia konfiguracji Supabase.", error: "Nie udało się pobrać dostępności. Spróbuj ponownie za chwilę.", conflict: "Wybrany zakres obejmuje zajęty termin. Wybierz inne daty.", online: "ONLINE", configuration: "KONFIGURACJA"
    },
    gallery: { kicker: "Galeria", title: "Zajrzyj do środka.", description: "Jasne wnętrza, proste detale i widok, który zostaje na dłużej.", note: "Kliknij wybrane zdjęcie, aby zobaczyć je w pełnym rozmiarze.", livingDining: "Salon i jadalnia", doubleBedroom: "Sypialnia dwuosobowa", twinBedroom: "Sypialnia z dwoma łóżkami", balcony: "Balkon i widok", bathroom: "Łazienka" },
    place: {
      title: "Kalabria, w której nie trzeba się spieszyć.", text: "Falerna Marina jest spokojną bazą do odkrywania wybrzeża Morza Tyrreńskiego. Zacznij od plaży i zachodu słońca, a na dłuższy dzień wybierz Pizzo, Tropeę albo Capo Vaticano.", note: "Dokładną lokalizację i wskazówki dojazdu przekazujemy po potwierdzeniu pobytu.",
      local: "Na miejscu", nearby: "Lokalnie", pizzoTime: "Około 36 min samochodem", tropeaTime: "Około 1 godz. samochodem", capoTime: "Około 1 godz. 25 min samochodem", stromboliTime: "Wycieczka całodniowa · rejs sezonowy", maps: "Otwórz w Google Maps",
      falerna: "Plaża, nadmorska promenada i wieczorne światło, od którego wybrzeże wzięło swoją nazwę.", torre: "Historyczna wieża strażnicza i dobry kierunek na krótki spacer lub zachód słońca.", gizzeria: "Otwarte wybrzeże, laguny La Vota i przestrzeń szczególnie ceniona przez miłośników wiatru i sportów wodnych.", pizzo: "Nadmorski borgo z Castello Murat, wykutą w skale Chiesetta di Piedigrotta i słynnym tartufo di Pizzo.", tropea: "Historyczne uliczki, tarasy nad morzem i sanktuarium Santa Maria dell’Isola na skalnym cyplu.", capo: "Punkty widokowe, jasne zatoki i krystaliczna woda Costa degli Dei — dobry cel na cały dzień.", stromboli: "Wycieczka na Wyspy Liparyjskie wymaga wcześniejszego sprawdzenia operatora, pogody i aktualnego rozkładu rejsów."
    },
    contact: { title: "Masz w głowie termin? Napisz do nas.", text: "Wybierz daty, opowiedz, czego potrzebujesz — wrócimy z informacją o dostępności.", emailCta: "Wyślij zapytanie", directEmail: "Napisz e-mail", whatsappCta: "Napisz na WhatsApp", whatsappUnavailable: "WhatsApp zostanie uruchomiony po dodaniu numeru właściciela." },
    footer: { top: "Do góry ↑", note: "Zapytania o pobyt wymagają potwierdzenia właściciela." },
    modal: { kicker: "Zapytanie o pobyt", title: "Daj znać, kiedy chcesz przyjechać." },
    form: { name: "Imię i nazwisko", namePlaceholder: "Twoje imię", email: "E-mail", phone: "Telefon", phonePlaceholder: "+48 123 456 789", guests: "Liczba gości", arrival: "Od", departure: "Do", message: "Wiadomość", messagePlaceholder: "Napisz nam coś o swoim wyjeździe.", consent: "Zgadzam się na wykorzystanie podanych danych wyłącznie do obsługi zapytania o pobyt.", submit: "Wyślij zapytanie", note: "Dane wykorzystamy wyłącznie do odpowiedzi na zapytanie. Wysłanie formularza nie jest potwierdzeniem rezerwacji.", sending: "Wysyłamy zapytanie…", success: "Zapytanie zostało wysłane do właściciela. Termin pozostaje dostępny do chwili akceptacji.", notificationIssue: "Zapytanie zostało zapisane poprawnie i jest widoczne w panelu właściciela. Automatyczne powiadomienie e-mail wymaga jeszcze aktywacji domeny w Resend; w pilnej sprawie skorzystaj z WhatsApp.", missingConfig: "Formularz wymaga jeszcze podłączenia Supabase. Skorzystaj z WhatsApp lub spróbuj później.", datesRequired: "Wybierz poprawną datę przyjazdu i wyjazdu.", phoneInvalid: "Podaj prawidłowy numer telefonu wraz z numerem kierunkowym.", tryAgain: "Odczekaj chwilę i wyślij formularz ponownie.", rateLimit: "Wysłano zbyt wiele zapytań. Spróbuj ponownie później.", conflict: "Ten termin właśnie stał się niedostępny. Wybierz inne daty.", error: "Nie udało się zapisać zapytania. Spróbuj ponownie za chwilę." },
    whatsapp: { message: "Dzień dobry, interesuje mnie pobyt w Mare Lento{dates}. Liczba gości: {guests}. Czy termin jest dostępny?", dates: " w terminie {from} – {to}" },
    aria: { home: "Mare Lento — strona główna", navigation: "Główna nawigacja", openMenu: "Otwórz menu", closeInquiry: "Zamknij formularz zapytania", closeImage: "Zamknij zdjęcie", lightbox: "Powiększone zdjęcie", regionGallery: "Zdjęcia wybrzeża Kalabrii" },
    alt: { hero: "Balkon apartamentu z widokiem na Morze Tyrreńskie", interior: "Salon z jadalnią i wyjściem na balkon", sea: "Jadalnia apartamentu Mare Lento", livingDining: "Salon z jadalnią i wyjściem na balkon", doubleBedroom: "Sypialnia z łóżkiem podwójnym i wyjściem na balkon", twinBedroom: "Sypialnia z dwoma pojedynczymi łóżkami", bathroom: "Łazienka z prysznicem i pralką", regionGallery1: "Widok na turkusowe wybrzeże Kalabrii z tarasu", regionGallery2: "Widok na wybrzeże z belwederu Capo Vaticano", regionGallery3: "Panorama Pizzo Calabro i turkusowego wybrzeża Morza Tyrreńskiego", regionGallery4: "Fale rozbijające się o skalną grotę na wybrzeżu Kalabrii", regionGallery5: "Sanktuarium Santa Maria dell’Isola na skalnym cyplu w Tropei" }
  },
  en: {
    locale: "en-GB", pageTitle: "Holiday apartment in Falerna Marina | Mare Lento", pageDescription: "Mare Lento is a Calabria apartment near the sea in Falerna Marina, with two bedrooms, a balcony and a peaceful Riviera dei Tramonti setting.", skip: "Skip to content", language: { label: "Choose language" }, headerCta: "Enquire about a stay",
    nav: { apartment: "Apartment", availability: "Availability", gallery: "Gallery", location: "Area", contact: "Contact" },
    hero: { kicker: "Falerna Marina · Calabria", title: "The sea within reach.", description: "A peaceful apartment made for slow, southern days.", link: "Discover the place", caption: "The Calabrian coast" },
    intro: { kicker: "Italian rhythm", title: "Here, mornings begin with light and end with the sound of the sea.", text: "Mare Lento is a place to pause on holiday in Falerna Marina. Bright interiors, a balcony and a view of the coast make an easy base for beach days, exploring Calabria and genuine rest.", link: "See the gallery" },
    stay: { kicker: "Your stay", title: "Just right for a shared escape.", text: "The apartment includes air conditioning, two bedrooms — one with a double bed and one with two single beds — plus a living and dining area, compact kitchen, shower room with washing machine and a balcony.", note: "We will confirm the full amenities and stay conditions with your enquiry.", cta: "Check availability" },
    booking: { kicker: "Availability", title: "Plan your stay.", text: "Choose your dates and send an enquiry. The period is blocked only after the owner accepts it.", integrationTitle: "How enquiries work", integrationText: "Your enquiry goes to the owner. Pending enquiries do not block the calendar — only an acceptance does.", cardKicker: "Stay enquiry", cardTitle: "Choose dates", available: "Choose a date", selected: "Selected dates", occupied: "Unavailable", checkin: "Check-in", checkout: "Check-out", guests: "Guests", decreaseGuests: "Decrease the number of guests", increaseGuests: "Increase the number of guests", cta: "Continue to enquiry", disclaimer: "Sending an enquiry does not confirm a stay. Dates are blocked only after the owner accepts.", previousMonth: "Previous month", nextMonth: "Next month", loading: "Loading current availability…", ready: "The calendar is up to date.", setup: "Online availability requires the Supabase configuration.", error: "Availability could not be loaded. Please try again shortly.", conflict: "The selected range includes unavailable dates. Choose another period.", online: "ONLINE", configuration: "SETUP" },
    gallery: { kicker: "Gallery", title: "Take a look inside.", description: "Bright interiors, simple details and a view that stays with you.", note: "Select any photo to view it at full size.", livingDining: "Living and dining room", doubleBedroom: "Double bedroom", twinBedroom: "Twin bedroom", balcony: "Balcony and view", bathroom: "Bathroom" },
    place: { title: "Calabria does not need to be rushed.", text: "Falerna Marina is a peaceful base for exploring the Tyrrhenian coast. Start with the beach and sunset, then choose Pizzo, Tropea or Capo Vaticano for a longer day out.", note: "We share the exact location and directions once your stay is confirmed.", local: "On your doorstep", nearby: "Nearby", pizzoTime: "Around 36 min by car", tropeaTime: "Around 1 hour by car", capoTime: "Around 1 hour 25 min by car", stromboliTime: "Full-day trip · seasonal sailings", maps: "Open in Google Maps", falerna: "Beach, seafront walks and the evening light that gives the Sunset Coast its name.", torre: "A historic watchtower and a good direction for a short walk or sunset.", gizzeria: "Open coastline, the La Vota lagoons and space popular with wind and water-sport enthusiasts.", pizzo: "A seaside town with Murat Castle, the rock-cut Piedigrotta Church and famous tartufo di Pizzo.", tropea: "Historic lanes, sea-view terraces and Santa Maria dell’Isola on its rocky promontory.", capo: "Viewpoints, bright coves and clear Costa degli Dei water — a fine full-day destination.", stromboli: "An Aeolian Islands trip requires checking the operator, weather and current sailing schedule in advance." },
    contact: { title: "Have dates in mind? Write to us.", text: "Choose your dates and tell us what you need — we will get back to you with availability.", emailCta: "Send an enquiry", directEmail: "Send an e-mail", whatsappCta: "Message on WhatsApp", whatsappUnavailable: "WhatsApp will be enabled once the owner number is configured." },
    footer: { top: "Back to top ↑", note: "Stay enquiries require owner confirmation." },
    modal: { kicker: "Stay enquiry", title: "Let us know when you would like to visit." },
    form: { name: "Full name", namePlaceholder: "Your name", email: "E-mail", phone: "Phone", phonePlaceholder: "+44 7123 456789", guests: "Number of guests", arrival: "From", departure: "To", message: "Message", messagePlaceholder: "Tell us a little about your trip.", consent: "I agree that the details I provide may be used solely to handle this stay enquiry.", submit: "Send enquiry", note: "We use your details only to answer this enquiry. Submitting the form does not confirm a booking.", sending: "Sending your enquiry…", success: "Your enquiry was sent to the owner. The dates remain available until acceptance.", notificationIssue: "Your enquiry was saved correctly and is visible in the owner panel. Automatic e-mail notification still requires domain activation in Resend; please use WhatsApp if your request is urgent.", missingConfig: "The form still needs its Supabase connection. Please use WhatsApp or try later.", datesRequired: "Choose a valid check-in and check-out date.", phoneInvalid: "Enter a valid phone number including the country code.", tryAgain: "Wait a moment and submit the form again.", rateLimit: "Too many enquiries have been sent. Please try again later.", conflict: "These dates have just become unavailable. Please select another period.", error: "The enquiry could not be saved. Please try again shortly." },
    whatsapp: { message: "Hello, I am interested in a stay at Mare Lento{dates}. Number of guests: {guests}. Are the dates available?", dates: " from {from} to {to}" },
    aria: { home: "Mare Lento home", navigation: "Main navigation", openMenu: "Open menu", closeInquiry: "Close enquiry form", closeImage: "Close image", lightbox: "Enlarged photo", regionGallery: "Photos of the Calabrian coast" },
    alt: { hero: "Apartment balcony overlooking the Tyrrhenian Sea", interior: "Living and dining room with balcony access", sea: "Mare Lento apartment dining area", livingDining: "Living and dining room with balcony access", doubleBedroom: "Double bedroom with balcony access", twinBedroom: "Bedroom with two single beds", bathroom: "Bathroom with shower and washing machine", regionGallery1: "Terrace view over Calabria’s turquoise coast", regionGallery2: "Coastal view from the Capo Vaticano viewpoint", regionGallery3: "Panorama of Pizzo Calabro and the turquoise Tyrrhenian coast", regionGallery4: "Waves breaking against a rocky cave on the Calabrian coast", regionGallery5: "Santa Maria dell’Isola sanctuary on its rocky promontory in Tropea" }
  },
  it: {
    locale: "it-IT", pageTitle: "Appartamento vacanze a Falerna Marina | Mare Lento", pageDescription: "Mare Lento è un appartamento vacanze a Falerna Marina vicino al mare, con due camere, balcone e una posizione tranquilla sulla Riviera dei Tramonti.", skip: "Vai al contenuto", language: { label: "Scegli la lingua" }, headerCta: "Richiedi un soggiorno",
    nav: { apartment: "Appartamento", availability: "Disponibilità", gallery: "Galleria", location: "Dintorni", contact: "Contatti" },
    hero: { kicker: "Falerna Marina · Calabria", title: "Il mare a portata di mano.", description: "Un appartamento tranquillo, pensato per lente giornate del sud.", link: "Scopri il luogo", caption: "Costa della Calabria" },
    intro: { kicker: "Ritmo italiano", title: "Qui le mattine iniziano con la luce e finiscono con il suono del mare.", text: "Mare Lento è un luogo per respirare in vacanza a Falerna Marina. Interni luminosi, un balcone e la vista sulla costa creano una base semplice per il mare, la scoperta della Calabria e il vero riposo.", link: "Guarda le foto" },
    stay: { kicker: "Il tuo soggiorno", title: "Perfetto per una fuga insieme.", text: "L’appartamento comprende aria condizionata, due camere da letto — una con letto matrimoniale e una con due letti singoli — oltre a zona giorno con pranzo, cucina compatta, bagno con doccia e lavatrice e balcone.", note: "Confermeremo i dettagli dei servizi e le condizioni di soggiorno con la tua richiesta.", cta: "Verifica la disponibilità" },
    booking: { kicker: "Disponibilità", title: "Organizza il tuo soggiorno.", text: "Scegli le date e invia una richiesta. Il periodo viene bloccato solo dopo l’accettazione del proprietario.", integrationTitle: "Come funziona la richiesta", integrationText: "La richiesta arriva al proprietario. Le richieste in attesa non bloccano il calendario: solo l’accettazione lo fa.", cardKicker: "Richiesta di soggiorno", cardTitle: "Scegli le date", available: "Scegli una data", selected: "Date selezionate", occupied: "Non disponibile", checkin: "Arrivo", checkout: "Partenza", guests: "Ospiti", decreaseGuests: "Riduci il numero di ospiti", increaseGuests: "Aumenta il numero di ospiti", cta: "Prosegui alla richiesta", disclaimer: "L’invio della richiesta non conferma il soggiorno. Le date vengono bloccate solo dopo l’accettazione.", previousMonth: "Mese precedente", nextMonth: "Mese successivo", loading: "Caricamento della disponibilità…", ready: "Il calendario è aggiornato.", setup: "La disponibilità online richiede la configurazione di Supabase.", error: "Impossibile caricare la disponibilità. Riprova tra poco.", conflict: "L’intervallo selezionato comprende date non disponibili. Scegli un altro periodo.", online: "ONLINE", configuration: "CONFIGURAZIONE" },
    gallery: { kicker: "Galleria", title: "Entra e dai un’occhiata.", description: "Interni luminosi, dettagli semplici e una vista che resta con te.", note: "Seleziona una foto per visualizzarla a tutto schermo.", livingDining: "Soggiorno e sala da pranzo", doubleBedroom: "Camera matrimoniale", twinBedroom: "Camera doppia", balcony: "Balcone e vista", bathroom: "Bagno" },
    place: { title: "La Calabria non va vissuta di fretta.", text: "Falerna Marina è una base tranquilla per scoprire la costa tirrenica. Inizia dalla spiaggia e dal tramonto, poi scegli Pizzo, Tropea o Capo Vaticano per una giornata più lunga.", note: "Condivideremo posizione esatta e indicazioni dopo la conferma del soggiorno.", local: "Sul posto", nearby: "Nei dintorni", pizzoTime: "Circa 36 min in auto", tropeaTime: "Circa 1 ora in auto", capoTime: "Circa 1 ora e 25 min in auto", stromboliTime: "Gita di un giorno · partenze stagionali", maps: "Apri in Google Maps", falerna: "Spiaggia, passeggiate sul lungomare e la luce serale che dà il nome alla Riviera dei Tramonti.", torre: "Una torre di avvistamento storica e una buona meta per una breve passeggiata o il tramonto.", gizzeria: "Costa aperta, lagune La Vota e spazi apprezzati dagli amanti del vento e degli sport acquatici.", pizzo: "Borgo sul mare con il Castello Murat, la Chiesetta di Piedigrotta scavata nella roccia e il celebre tartufo di Pizzo.", tropea: "Vicoli storici, terrazze sul mare e Santa Maria dell’Isola sul promontorio roccioso.", capo: "Belvedere, baie chiare e acqua cristallina della Costa degli Dei: ideale per una giornata intera.", stromboli: "La gita alle Isole Eolie richiede di verificare in anticipo operatore, meteo e orari aggiornati." },
    contact: { title: "Hai già una data in mente? Scrivici.", text: "Scegli le date e raccontaci di cosa hai bisogno — ti risponderemo con la disponibilità.", emailCta: "Invia una richiesta", directEmail: "Scrivi un’e-mail", whatsappCta: "Scrivi su WhatsApp", whatsappUnavailable: "WhatsApp sarà attivato dopo la configurazione del numero del proprietario." },
    footer: { top: "Torna su ↑", note: "Le richieste di soggiorno richiedono la conferma del proprietario." },
    modal: { kicker: "Richiesta di soggiorno", title: "Facci sapere quando desideri arrivare." },
    form: { name: "Nome e cognome", namePlaceholder: "Il tuo nome", email: "E-mail", phone: "Telefono", phonePlaceholder: "+39 333 123 4567", guests: "Numero di ospiti", arrival: "Dal", departure: "Al", message: "Messaggio", messagePlaceholder: "Raccontaci qualcosa del tuo viaggio.", consent: "Acconsento all’uso dei dati forniti esclusivamente per gestire questa richiesta di soggiorno.", submit: "Invia richiesta", note: "Utilizziamo i tuoi dati solo per rispondere alla richiesta. L’invio non conferma la prenotazione.", sending: "Invio della richiesta…", success: "La richiesta è stata inviata al proprietario. Le date restano disponibili fino all’accettazione.", notificationIssue: "La richiesta è stata salvata correttamente ed è visibile nel pannello del proprietario. La notifica e-mail automatica richiede ancora l’attivazione del dominio in Resend; per urgenze usa WhatsApp.", missingConfig: "Il modulo richiede ancora il collegamento a Supabase. Usa WhatsApp o riprova più tardi.", datesRequired: "Scegli date di arrivo e partenza valide.", phoneInvalid: "Inserisci un numero di telefono valido con prefisso internazionale.", tryAgain: "Attendi un momento e invia nuovamente il modulo.", rateLimit: "Sono state inviate troppe richieste. Riprova più tardi.", conflict: "Queste date sono appena diventate non disponibili. Scegli un altro periodo.", error: "Impossibile salvare la richiesta. Riprova tra poco." },
    whatsapp: { message: "Buongiorno, sono interessato a un soggiorno presso Mare Lento{dates}. Numero di ospiti: {guests}. Le date sono disponibili?", dates: " dal {from} al {to}" },
    aria: { home: "Mare Lento — pagina iniziale", navigation: "Navigazione principale", openMenu: "Apri il menu", closeInquiry: "Chiudi il modulo di richiesta", closeImage: "Chiudi la foto", lightbox: "Foto ingrandita", regionGallery: "Foto della costa calabrese" },
    alt: { hero: "Balcone dell’appartamento con vista sul Mar Tirreno", interior: "Soggiorno e sala da pranzo con accesso al balcone", sea: "Sala da pranzo dell’appartamento Mare Lento", livingDining: "Soggiorno e sala da pranzo con accesso al balcone", doubleBedroom: "Camera matrimoniale con accesso al balcone", twinBedroom: "Camera con due letti singoli", bathroom: "Bagno con doccia e lavatrice", regionGallery1: "Vista dalla terrazza sulla costa turchese della Calabria", regionGallery2: "Vista sulla costa dal belvedere di Capo Vaticano", regionGallery3: "Panorama di Pizzo Calabro e della costa tirrenica turchese", regionGallery4: "Onde che si infrangono contro una grotta rocciosa sulla costa calabrese", regionGallery5: "Santuario di Santa Maria dell’Isola sul promontorio roccioso di Tropea" }
  },
  de: {
    locale: "de-DE", pageTitle: "Ferienwohnung in Falerna Marina | Mare Lento", pageDescription: "Mare Lento ist eine Ferienwohnung in Kalabrien nahe am Meer: zwei Schlafzimmer, Balkon und ruhige Lage an der Riviera dei Tramonti in Falerna Marina.", skip: "Zum Inhalt springen", language: { label: "Sprache wählen" }, headerCta: "Aufenthalt anfragen",
    nav: { apartment: "Apartment", availability: "Verfügbarkeit", gallery: "Galerie", location: "Umgebung", contact: "Kontakt" },
    hero: { kicker: "Falerna Marina · Kalabrien", title: "Das Meer zum Greifen nah.", description: "Ein ruhiges Apartment für entspannte Tage im Süden.", link: "Den Ort entdecken", caption: "Kalabrische Küste" },
    intro: { kicker: "Italienischer Rhythmus", title: "Hier beginnen die Morgen im Licht und enden mit dem Rauschen des Meeres.", text: "Mare Lento ist ein Ort zum Durchatmen in Falerna Marina. Helle Räume, ein Balkon und der Blick auf die Küste bilden einen unkomplizierten Ausgangspunkt für Strandtage, Entdeckungen in Kalabrien und echte Erholung.", link: "Galerie ansehen" },
    stay: { kicker: "Ihr Aufenthalt", title: "Wie gemacht für eine gemeinsame Auszeit.", text: "Das Apartment verfügt über eine Klimaanlage, zwei Schlafzimmer — eines mit Doppelbett und eines mit zwei Einzelbetten — sowie einen Wohn- und Essbereich, eine kompakte Küche, ein Bad mit Dusche und Waschmaschine und einen Balkon.", note: "Details zur Ausstattung und zu den Aufenthaltsbedingungen bestätigen wir mit Ihrer Anfrage.", cta: "Verfügbarkeit prüfen" },
    booking: { kicker: "Verfügbarkeit", title: "Planen Sie Ihren Aufenthalt.", text: "Wählen Sie Ihre Reisedaten und senden Sie eine Anfrage. Der Zeitraum wird erst nach Bestätigung durch den Eigentümer blockiert.", integrationTitle: "So funktioniert die Anfrage", integrationText: "Ihre Anfrage geht direkt an den Eigentümer. Offene Anfragen blockieren den Kalender nicht — erst eine Bestätigung reserviert den Zeitraum.", cardKicker: "Aufenthaltsanfrage", cardTitle: "Zeitraum wählen", available: "Datum wählen", selected: "Gewählter Zeitraum", occupied: "Belegt", checkin: "Anreise", checkout: "Abreise", guests: "Gäste", decreaseGuests: "Gästezahl verringern", increaseGuests: "Gästezahl erhöhen", cta: "Weiter zur Anfrage", disclaimer: "Das Absenden der Anfrage bestätigt noch keinen Aufenthalt. Der Zeitraum wird erst nach Annahme durch den Eigentümer blockiert.", previousMonth: "Vorheriger Monat", nextMonth: "Nächster Monat", loading: "Aktuelle Verfügbarkeit wird geladen…", ready: "Der Kalender ist aktuell.", setup: "Für die Online-Verfügbarkeit muss Supabase noch konfiguriert werden.", error: "Die Verfügbarkeit konnte nicht geladen werden. Bitte versuchen Sie es gleich noch einmal.", conflict: "Der gewählte Zeitraum enthält belegte Tage. Bitte wählen Sie andere Daten.", online: "ONLINE", configuration: "EINRICHTUNG" },
    gallery: { kicker: "Galerie", title: "Werfen Sie einen Blick hinein.", description: "Helle Räume, schlichte Details und ein Ausblick, der in Erinnerung bleibt.", note: "Wählen Sie ein Foto aus, um es in voller Größe anzusehen.", livingDining: "Wohn- und Esszimmer", doubleBedroom: "Doppelzimmer", twinBedroom: "Zweibettzimmer", balcony: "Balkon und Ausblick", bathroom: "Badezimmer" },
    place: { title: "Kalabrien lässt sich nicht überstürzen.", text: "Falerna Marina ist ein ruhiger Ausgangspunkt, um die tyrrhenische Küste zu entdecken. Beginnen Sie mit Strand und Sonnenuntergang und planen Sie für einen längeren Ausflug Pizzo, Tropea oder Capo Vaticano ein.", note: "Die genaue Lage und Anfahrtsbeschreibung teilen wir nach Bestätigung des Aufenthalts mit.", local: "Direkt vor Ort", nearby: "In der Nähe", pizzoTime: "Etwa 36 Min. mit dem Auto", tropeaTime: "Etwa 1 Std. mit dem Auto", capoTime: "Etwa 1 Std. 25 Min. mit dem Auto", stromboliTime: "Ganztagesausflug · saisonale Verbindungen", maps: "In Google Maps öffnen", falerna: "Strand, Spaziergänge an der Promenade und das Abendlicht, dem die Riviera dei Tramonti ihren Namen verdankt.", torre: "Ein historischer Wachturm und ein schönes Ziel für einen kurzen Spaziergang oder den Sonnenuntergang.", gizzeria: "Offene Küste, die Lagunen von La Vota und viel Raum für Wind- und Wassersportbegeisterte.", pizzo: "Küstenort mit dem Castello Murat, der in den Fels gehauenen Chiesetta di Piedigrotta und dem berühmten Tartufo di Pizzo.", tropea: "Historische Gassen, Terrassen über dem Meer und Santa Maria dell’Isola auf ihrem Felsvorsprung.", capo: "Aussichtspunkte, helle Buchten und kristallklares Wasser an der Costa degli Dei — ideal für einen Tagesausflug.", stromboli: "Für einen Ausflug zu den Liparischen Inseln sollten Anbieter, Wetter und aktueller Fahrplan vorab geprüft werden." },
    contact: { title: "Sie haben schon einen Zeitraum im Kopf? Schreiben Sie uns.", text: "Wählen Sie Ihre Daten und sagen Sie uns, was Sie benötigen — wir melden uns mit der aktuellen Verfügbarkeit.", emailCta: "Anfrage senden", directEmail: "E-Mail schreiben", whatsappCta: "Über WhatsApp schreiben", whatsappUnavailable: "WhatsApp wird aktiviert, sobald die Nummer des Eigentümers hinterlegt ist." },
    footer: { top: "Nach oben ↑", note: "Aufenthaltsanfragen müssen vom Eigentümer bestätigt werden." },
    modal: { kicker: "Aufenthaltsanfrage", title: "Sagen Sie uns, wann Sie anreisen möchten." },
    form: { name: "Vor- und Nachname", namePlaceholder: "Ihr Name", email: "E-Mail", phone: "Telefon", phonePlaceholder: "+49 151 23456789", guests: "Anzahl der Gäste", arrival: "Von", departure: "Bis", message: "Nachricht", messagePlaceholder: "Erzählen Sie uns kurz von Ihrer Reise.", consent: "Ich stimme zu, dass meine Angaben ausschließlich zur Bearbeitung dieser Aufenthaltsanfrage verwendet werden.", submit: "Anfrage senden", note: "Wir verwenden Ihre Daten ausschließlich zur Beantwortung der Anfrage. Das Absenden bestätigt keine Buchung.", sending: "Anfrage wird gesendet…", success: "Ihre Anfrage wurde an den Eigentümer gesendet. Die Daten bleiben bis zur Bestätigung verfügbar.", notificationIssue: "Ihre Anfrage wurde korrekt gespeichert und ist im Eigentümerbereich sichtbar. Die automatische E-Mail-Benachrichtigung benötigt noch die Domain-Aktivierung in Resend; in dringenden Fällen nutzen Sie bitte WhatsApp.", missingConfig: "Das Formular muss noch mit Supabase verbunden werden. Nutzen Sie bitte WhatsApp oder versuchen Sie es später erneut.", datesRequired: "Bitte wählen Sie ein gültiges An- und Abreisedatum.", phoneInvalid: "Geben Sie eine gültige Telefonnummer mit Ländervorwahl ein.", tryAgain: "Warten Sie einen Moment und senden Sie das Formular erneut.", rateLimit: "Es wurden zu viele Anfragen gesendet. Bitte versuchen Sie es später erneut.", conflict: "Diese Daten sind soeben nicht verfügbar geworden. Bitte wählen Sie einen anderen Zeitraum.", error: "Die Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es gleich noch einmal." },
    whatsapp: { message: "Guten Tag, ich interessiere mich für einen Aufenthalt bei Mare Lento{dates}. Anzahl der Gäste: {guests}. Ist der Zeitraum verfügbar?", dates: " vom {from} bis {to}" },
    aria: { home: "Mare Lento — Startseite", navigation: "Hauptnavigation", openMenu: "Menü öffnen", closeInquiry: "Anfrageformular schließen", closeImage: "Foto schließen", lightbox: "Vergrößertes Foto", regionGallery: "Fotos der kalabrischen Küste" },
    alt: { hero: "Balkon des Apartments mit Blick auf das Tyrrhenische Meer", interior: "Wohn- und Esszimmer mit Zugang zum Balkon", sea: "Essbereich des Apartments Mare Lento", livingDining: "Wohn- und Esszimmer mit Zugang zum Balkon", doubleBedroom: "Doppelzimmer mit Zugang zum Balkon", twinBedroom: "Schlafzimmer mit zwei Einzelbetten", bathroom: "Badezimmer mit Dusche und Waschmaschine", regionGallery1: "Terrassenblick auf die türkisfarbene Küste Kalabriens", regionGallery2: "Küstenblick vom Aussichtspunkt Capo Vaticano", regionGallery3: "Panorama von Pizzo Calabro und der türkisfarbenen tyrrhenischen Küste", regionGallery4: "Wellen an einer felsigen Grotte an der kalabrischen Küste", regionGallery5: "Wallfahrtskirche Santa Maria dell’Isola auf dem Felsvorsprung in Tropea" }
  },
  fr: {
    locale: "fr-FR", pageTitle: "Appartement à Falerna Marina | Mare Lento", pageDescription: "Mare Lento est un appartement de vacances près de la mer à Falerna Marina, en Calabre, avec deux chambres, un balcon et un cadre paisible.", skip: "Aller au contenu", language: { label: "Choisir la langue" }, headerCta: "Demander un séjour",
    nav: { apartment: "Appartement", availability: "Disponibilités", gallery: "Galerie", location: "Alentours", contact: "Contact" },
    hero: { kicker: "Falerna Marina · Calabre", title: "La mer à portée de main.", description: "Un appartement paisible, pensé pour de douces journées dans le Sud.", link: "Découvrir le lieu", caption: "Côte calabraise" },
    intro: { kicker: "Rythme italien", title: "Ici, les matins commencent dans la lumière et s’achèvent au son de la mer.", text: "Mare Lento est une invitation à respirer à Falerna Marina. Des intérieurs lumineux, un balcon et une vue sur la côte composent un pied-à-terre simple pour profiter de la plage, découvrir la Calabre et vraiment se reposer.", link: "Voir la galerie" },
    stay: { kicker: "Votre séjour", title: "Idéal pour une escapade à plusieurs.", text: "L’appartement comprend la climatisation, deux chambres — l’une avec un lit double et l’autre avec deux lits simples — ainsi qu’un espace salon-repas, une cuisine compacte, une salle de bains avec douche et lave-linge et un balcon.", note: "Nous confirmerons les détails des équipements et les conditions du séjour lors de votre demande.", cta: "Voir les disponibilités" },
    booking: { kicker: "Disponibilités", title: "Organisez votre séjour.", text: "Choisissez vos dates et envoyez une demande. La période n’est bloquée qu’après acceptation par le propriétaire.", integrationTitle: "Comment fonctionne la demande", integrationText: "Votre demande est envoyée au propriétaire. Les demandes en attente ne bloquent pas le calendrier — seule leur acceptation réserve les dates.", cardKicker: "Demande de séjour", cardTitle: "Choisissez vos dates", available: "Choisir une date", selected: "Dates sélectionnées", occupied: "Indisponible", checkin: "Arrivée", checkout: "Départ", guests: "Voyageurs", decreaseGuests: "Réduire le nombre de voyageurs", increaseGuests: "Augmenter le nombre de voyageurs", cta: "Continuer la demande", disclaimer: "L’envoi d’une demande ne confirme pas le séjour. Les dates ne sont bloquées qu’après acceptation par le propriétaire.", previousMonth: "Mois précédent", nextMonth: "Mois suivant", loading: "Chargement des disponibilités…", ready: "Le calendrier est à jour.", setup: "Les disponibilités en ligne nécessitent la configuration de Supabase.", error: "Impossible de charger les disponibilités. Veuillez réessayer dans un instant.", conflict: "La période sélectionnée comprend des dates indisponibles. Choisissez d’autres dates.", online: "EN LIGNE", configuration: "CONFIGURATION" },
    gallery: { kicker: "Galerie", title: "Entrez et découvrez les lieux.", description: "Des intérieurs lumineux, des détails simples et une vue qui reste en mémoire.", note: "Sélectionnez une photo pour l’afficher en grand.", livingDining: "Salon et salle à manger", doubleBedroom: "Chambre double", twinBedroom: "Chambre à deux lits", balcony: "Balcon et vue", bathroom: "Salle de bains" },
    place: { title: "La Calabre se savoure sans se presser.", text: "Falerna Marina est un point de départ paisible pour découvrir la côte tyrrhénienne. Commencez par la plage et le coucher de soleil, puis choisissez Pizzo, Tropea ou Capo Vaticano pour une excursion à la journée.", note: "Nous communiquons l’adresse exacte et l’itinéraire après confirmation du séjour.", local: "Sur place", nearby: "À proximité", pizzoTime: "Environ 36 min en voiture", tropeaTime: "Environ 1 h en voiture", capoTime: "Environ 1 h 25 en voiture", stromboliTime: "Excursion à la journée · traversées saisonnières", maps: "Ouvrir dans Google Maps", falerna: "La plage, les promenades en bord de mer et la lumière du soir qui a donné son nom à la Riviera dei Tramonti.", torre: "Une tour de guet historique et une belle destination pour une courte promenade ou un coucher de soleil.", gizzeria: "Un littoral ouvert, les lagunes de La Vota et de grands espaces appréciés des amateurs de vent et de sports nautiques.", pizzo: "Un bourg marin avec le Castello Murat, l’église de Piedigrotta creusée dans la roche et le célèbre tartufo di Pizzo.", tropea: "Des ruelles historiques, des terrasses sur la mer et Santa Maria dell’Isola sur son promontoire rocheux.", capo: "Des belvédères, des criques lumineuses et les eaux cristallines de la Costa degli Dei — une belle excursion à la journée.", stromboli: "Une excursion dans les îles Éoliennes nécessite de vérifier à l’avance l’opérateur, la météo et les horaires des traversées." },
    contact: { title: "Vous avez déjà des dates en tête ? Écrivez-nous.", text: "Choisissez vos dates et dites-nous ce dont vous avez besoin — nous vous répondrons avec les disponibilités.", emailCta: "Envoyer une demande", directEmail: "Écrire un e-mail", whatsappCta: "Écrire sur WhatsApp", whatsappUnavailable: "WhatsApp sera disponible une fois le numéro du propriétaire configuré." },
    footer: { top: "Haut de page ↑", note: "Les demandes de séjour doivent être confirmées par le propriétaire." },
    modal: { kicker: "Demande de séjour", title: "Dites-nous quand vous souhaitez arriver." },
    form: { name: "Nom et prénom", namePlaceholder: "Votre nom", email: "E-mail", phone: "Téléphone", phonePlaceholder: "+33 6 12 34 56 78", guests: "Nombre de voyageurs", arrival: "Du", departure: "Au", message: "Message", messagePlaceholder: "Parlez-nous brièvement de votre voyage.", consent: "J’accepte que les informations fournies soient utilisées uniquement pour traiter cette demande de séjour.", submit: "Envoyer la demande", note: "Nous utilisons vos données uniquement pour répondre à cette demande. Son envoi ne confirme pas une réservation.", sending: "Envoi de votre demande…", success: "Votre demande a été envoyée au propriétaire. Les dates restent disponibles jusqu’à son acceptation.", notificationIssue: "Votre demande a bien été enregistrée et apparaît dans le panneau du propriétaire. La notification automatique par e-mail nécessite encore l’activation du domaine dans Resend ; en cas d’urgence, utilisez WhatsApp.", missingConfig: "Le formulaire doit encore être connecté à Supabase. Utilisez WhatsApp ou réessayez plus tard.", datesRequired: "Choisissez des dates d’arrivée et de départ valides.", phoneInvalid: "Saisissez un numéro de téléphone valide avec l’indicatif du pays.", tryAgain: "Attendez un instant puis renvoyez le formulaire.", rateLimit: "Trop de demandes ont été envoyées. Veuillez réessayer plus tard.", conflict: "Ces dates viennent de devenir indisponibles. Veuillez choisir une autre période.", error: "Impossible d’enregistrer la demande. Veuillez réessayer dans un instant." },
    whatsapp: { message: "Bonjour, je souhaite séjourner à Mare Lento{dates}. Nombre de voyageurs : {guests}. Ces dates sont-elles disponibles ?", dates: " du {from} au {to}" },
    aria: { home: "Mare Lento — accueil", navigation: "Navigation principale", openMenu: "Ouvrir le menu", closeInquiry: "Fermer le formulaire de demande", closeImage: "Fermer la photo", lightbox: "Photo agrandie", regionGallery: "Photos de la côte calabraise" },
    alt: { hero: "Balcon de l’appartement avec vue sur la mer Tyrrhénienne", interior: "Salon et salle à manger avec accès au balcon", sea: "Salle à manger de l’appartement Mare Lento", livingDining: "Salon et salle à manger avec accès au balcon", doubleBedroom: "Chambre double avec accès au balcon", twinBedroom: "Chambre avec deux lits simples", bathroom: "Salle de bains avec douche et lave-linge", regionGallery1: "Vue depuis une terrasse sur la côte turquoise de Calabre", regionGallery2: "Vue sur la côte depuis le belvédère de Capo Vaticano", regionGallery3: "Panorama de Pizzo Calabro et de la côte tyrrhénienne turquoise", regionGallery4: "Vagues contre une grotte rocheuse sur la côte calabraise", regionGallery5: "Sanctuaire Santa Maria dell’Isola sur son promontoire rocheux à Tropea" }
  },
  es: {
    locale: "es-ES", pageTitle: "Apartamento en Falerna Marina | Mare Lento", pageDescription: "Mare Lento es un apartamento vacacional cerca del mar en Falerna Marina, Calabria, con dos dormitorios, balcón y un entorno tranquilo.", skip: "Ir al contenido", language: { label: "Elegir idioma" }, headerCta: "Consultar estancia",
    nav: { apartment: "Apartamento", availability: "Disponibilidad", gallery: "Galería", location: "Alrededores", contact: "Contacto" },
    hero: { kicker: "Falerna Marina · Calabria", title: "El mar al alcance de la mano.", description: "Un apartamento tranquilo, pensado para disfrutar sin prisas del sur.", link: "Descubrir el lugar", caption: "Costa de Calabria" },
    intro: { kicker: "Ritmo italiano", title: "Aquí, las mañanas empiezan con luz y terminan con el sonido del mar.", text: "Mare Lento es un lugar para respirar y descansar en Falerna Marina. Sus interiores luminosos, el balcón y las vistas de la costa crean una base sencilla para ir a la playa, descubrir Calabria y desconectar de verdad.", link: "Ver la galería" },
    stay: { kicker: "Tu estancia", title: "Perfecto para una escapada en compañía.", text: "El apartamento dispone de aire acondicionado, dos dormitorios — uno con cama doble y otro con dos camas individuales — además de zona de estar y comedor, cocina compacta, baño con ducha y lavadora y balcón.", note: "Confirmaremos los detalles del equipamiento y las condiciones de la estancia al recibir tu consulta.", cta: "Comprobar disponibilidad" },
    booking: { kicker: "Disponibilidad", title: "Organiza tu estancia.", text: "Elige las fechas y envía una consulta. El periodo solo se bloquea cuando el propietario la acepta.", integrationTitle: "Cómo funciona la consulta", integrationText: "Tu consulta llega al propietario. Las solicitudes pendientes no bloquean el calendario — solo lo hace su aceptación.", cardKicker: "Consulta de estancia", cardTitle: "Elige las fechas", available: "Elegir una fecha", selected: "Fechas seleccionadas", occupied: "No disponible", checkin: "Llegada", checkout: "Salida", guests: "Huéspedes", decreaseGuests: "Reducir el número de huéspedes", increaseGuests: "Aumentar el número de huéspedes", cta: "Continuar con la consulta", disclaimer: "Enviar una consulta no confirma la estancia. Las fechas solo se bloquean cuando el propietario la acepta.", previousMonth: "Mes anterior", nextMonth: "Mes siguiente", loading: "Cargando la disponibilidad…", ready: "El calendario está actualizado.", setup: "La disponibilidad en línea requiere configurar Supabase.", error: "No se pudo cargar la disponibilidad. Vuelve a intentarlo en unos instantes.", conflict: "El periodo elegido incluye fechas no disponibles. Selecciona otras fechas.", online: "EN LÍNEA", configuration: "CONFIGURACIÓN" },
    gallery: { kicker: "Galería", title: "Entra y descubre el interior.", description: "Interiores luminosos, detalles sencillos y una vista que permanece en el recuerdo.", note: "Selecciona una foto para verla a tamaño completo.", livingDining: "Salón y comedor", doubleBedroom: "Dormitorio doble", twinBedroom: "Dormitorio con dos camas", balcony: "Balcón y vistas", bathroom: "Baño" },
    place: { title: "Calabria se disfruta sin prisas.", text: "Falerna Marina es una base tranquila para descubrir la costa del mar Tirreno. Empieza por la playa y la puesta de sol y reserva un día más largo para Pizzo, Tropea o Capo Vaticano.", note: "Compartiremos la ubicación exacta y las indicaciones después de confirmar la estancia.", local: "En la zona", nearby: "Cerca", pizzoTime: "Unos 36 min en coche", tropeaTime: "Aproximadamente 1 h en coche", capoTime: "Aproximadamente 1 h 25 min en coche", stromboliTime: "Excursión de día completo · salidas estacionales", maps: "Abrir en Google Maps", falerna: "Playa, paseos junto al mar y la luz del atardecer que da nombre a la Riviera dei Tramonti.", torre: "Una histórica torre de vigilancia y un buen destino para un paseo corto o contemplar la puesta de sol.", gizzeria: "Costa abierta, las lagunas de La Vota y amplios espacios apreciados por los amantes del viento y los deportes acuáticos.", pizzo: "Un pueblo costero con el Castello Murat, la iglesia de Piedigrotta excavada en la roca y el famoso tartufo di Pizzo.", tropea: "Calles históricas, terrazas sobre el mar y Santa Maria dell’Isola en su promontorio rocoso.", capo: "Miradores, calas luminosas y aguas cristalinas en la Costa degli Dei — un destino perfecto para todo el día.", stromboli: "Una excursión a las islas Eolias requiere consultar previamente el operador, el tiempo y los horarios actualizados de navegación." },
    contact: { title: "¿Ya tienes unas fechas en mente? Escríbenos.", text: "Elige las fechas y cuéntanos qué necesitas — te responderemos con la disponibilidad.", emailCta: "Enviar consulta", directEmail: "Escribir por e-mail", whatsappCta: "Escribir por WhatsApp", whatsappUnavailable: "WhatsApp estará disponible cuando se configure el número del propietario." },
    footer: { top: "Volver arriba ↑", note: "Las consultas de estancia requieren la confirmación del propietario." },
    modal: { kicker: "Consulta de estancia", title: "Cuéntanos cuándo te gustaría llegar." },
    form: { name: "Nombre y apellidos", namePlaceholder: "Tu nombre", email: "Correo electrónico", phone: "Teléfono", phonePlaceholder: "+34 612 345 678", guests: "Número de huéspedes", arrival: "Desde", departure: "Hasta", message: "Mensaje", messagePlaceholder: "Cuéntanos brevemente algo sobre tu viaje.", consent: "Acepto que los datos facilitados se utilicen exclusivamente para gestionar esta consulta de estancia.", submit: "Enviar consulta", note: "Solo utilizaremos tus datos para responder a esta consulta. Enviarla no confirma una reserva.", sending: "Enviando tu consulta…", success: "Tu consulta se ha enviado al propietario. Las fechas seguirán disponibles hasta que la acepte.", notificationIssue: "La consulta se ha guardado correctamente y está visible en el panel del propietario. La notificación automática por correo aún requiere activar el dominio en Resend; si es urgente, usa WhatsApp.", missingConfig: "El formulario todavía debe conectarse a Supabase. Usa WhatsApp o inténtalo más tarde.", datesRequired: "Elige fechas válidas de llegada y salida.", phoneInvalid: "Introduce un número de teléfono válido con el prefijo internacional.", tryAgain: "Espera un momento y vuelve a enviar el formulario.", rateLimit: "Se han enviado demasiadas consultas. Inténtalo de nuevo más tarde.", conflict: "Estas fechas acaban de dejar de estar disponibles. Selecciona otro periodo.", error: "No se pudo guardar la consulta. Vuelve a intentarlo en unos instantes." },
    whatsapp: { message: "Hola, me interesa una estancia en Mare Lento{dates}. Número de huéspedes: {guests}. ¿Están disponibles esas fechas?", dates: " del {from} al {to}" },
    aria: { home: "Mare Lento — página principal", navigation: "Navegación principal", openMenu: "Abrir el menú", closeInquiry: "Cerrar el formulario de consulta", closeImage: "Cerrar la foto", lightbox: "Foto ampliada", regionGallery: "Fotos de la costa de Calabria" },
    alt: { hero: "Balcón del apartamento con vistas al mar Tirreno", interior: "Salón y comedor con acceso al balcón", sea: "Comedor del apartamento Mare Lento", livingDining: "Salón y comedor con acceso al balcón", doubleBedroom: "Dormitorio doble con acceso al balcón", twinBedroom: "Dormitorio con dos camas individuales", bathroom: "Baño con ducha y lavadora", regionGallery1: "Vista desde una terraza de la costa turquesa de Calabria", regionGallery2: "Vista de la costa desde el mirador de Capo Vaticano", regionGallery3: "Panorámica de Pizzo Calabro y la costa turquesa del mar Tirreno", regionGallery4: "Olas junto a una gruta rocosa en la costa calabresa", regionGallery5: "Santuario de Santa Maria dell’Isola sobre su promontorio rocoso en Tropea" }
  }
};

const getValue = (source, path) => path.split(".").reduce((value, key) => value?.[key], source);
const rules = window.MareLentoBookingRules;
const config = window.MARE_LENTO_CONFIG || {};
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
const guestCountValue = document.querySelector("#guest-count-value");
const guestDecreaseButton = document.querySelector("[data-guest-decrease]");
const guestIncreaseButton = document.querySelector("[data-guest-increase]");
const modalGuestCountValue = document.querySelector("#modal-guest-count-value");
const modalGuestDecreaseButton = document.querySelector("[data-modal-guest-decrease]");
const modalGuestIncreaseButton = document.querySelector("[data-modal-guest-increase]");
const languageSelect = document.querySelector("#language-select");
const today = new Date();
today.setHours(0, 0, 0, 0);

let language = document.documentElement.dataset.initialLanguage || "it";
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

function setGuestCount(nextValue) {
  const count = Math.min(4, Math.max(1, Number.parseInt(nextValue, 10) || 1));
  guestSelect.value = String(count);
  guestCountValue.textContent = String(count);
  guestDecreaseButton.disabled = count === 1;
  guestIncreaseButton.disabled = count === 4;
  modalGuestCountValue.textContent = String(count);
  modalGuestDecreaseButton.disabled = count === 1;
  modalGuestIncreaseButton.disabled = count === 4;
  updateBookingSummary();
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

function updateEmailLinks() {
  const email = String(config.CONTACT_EMAIL || "").trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    if (valid) {
      link.href = `mailto:${email}`;
      link.removeAttribute("aria-disabled");
    } else {
      link.removeAttribute("href");
      link.setAttribute("aria-disabled", "true");
    }
  });
  document.querySelectorAll("[data-contact-email]").forEach((element) => {
    element.textContent = valid ? email : "";
  });
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
  const phone = String(formData.get("phone") || "").trim();
  const phoneDigits = phone.replace(/\D/g, "");
  if (!rules.isValidStay(checkIn, checkOut)) {
    setFormStatus(copy.datesRequired, true);
    return;
  }
  if (rules.hasConflict(checkIn, checkOut, busyPeriods)) {
    setFormStatus(copy.conflict, true);
    await loadAvailability();
    return;
  }
  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    setFormStatus(copy.phoneInvalid, true);
    inquiryForm.elements.phone.focus();
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
        phone,
        check_in: checkIn,
        check_out: checkOut,
        guest_count: Number(formData.get("guests")),
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
    if (!response.ok) {
      const errorCopy = {
        INVALID_PHONE: copy.phoneInvalid,
        FORM_TIMING: copy.tryAgain,
        RATE_LIMIT: copy.rateLimit,
        SPAM_CHECK_FAILED: copy.tryAgain,
      }[payload.code] || copy.error;
      setFormStatus(errorCopy, true);
      return;
    }
    setFormStatus(payload.notification_sent === false ? copy.notificationIssue : copy.success);
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
  language = translations[nextLanguage] ? nextLanguage : "it";
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
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getValue(copy, element.dataset.i18nAriaLabel);
    if (value) element.setAttribute("aria-label", value);
  });
  languageSelect?.querySelectorAll("[data-language]").forEach((option) => {
    option.selected = option.dataset.language === language;
  });
  document.querySelector("[data-calendar-prev]").setAttribute("aria-label", copy.booking.previousMonth);
  document.querySelector("[data-calendar-next]").setAttribute("aria-label", copy.booking.nextMonth);
  setAvailabilityMessage(availabilityState);
  renderCalendar();
  updateWhatsAppLinks();
  updateEmailLinks();
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
guestSelect.addEventListener("change", () => setGuestCount(guestSelect.value));
guestDecreaseButton.addEventListener("click", () => setGuestCount(Number(guestSelect.value) - 1));
guestIncreaseButton.addEventListener("click", () => setGuestCount(Number(guestSelect.value) + 1));
modalGuestDecreaseButton.addEventListener("click", () => setGuestCount(Number(guestSelect.value) - 1));
modalGuestIncreaseButton.addEventListener("click", () => setGuestCount(Number(guestSelect.value) + 1));
languageSelect?.addEventListener("change", () => {
  window.location.assign(languageSelect.value);
});
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
const lightboxImage = lightbox.querySelector("img");
const sizeLightbox = () => {
  if (!lightboxImage.naturalWidth || !lightboxImage.naturalHeight) return;
  const viewportGap = 32;
  const scale = Math.min(
    (window.innerWidth - viewportGap) / lightboxImage.naturalWidth,
    (window.innerHeight - viewportGap) / lightboxImage.naturalHeight,
    1,
  );
  lightbox.style.width = `${Math.floor(lightboxImage.naturalWidth * scale)}px`;
  lightbox.style.height = `${Math.floor(lightboxImage.naturalHeight * scale)}px`;
};

document.querySelectorAll(".gallery-card").forEach((card) =>
  card.addEventListener("click", () => {
    const openLightbox = () => {
      sizeLightbox();
      if (!lightbox.open) lightbox.showModal();
    };
    lightboxImage.src = card.dataset.image;
    lightboxImage.alt = getValue(translations[language], card.dataset.altKey);
    if (lightboxImage.complete && lightboxImage.naturalWidth) openLightbox();
    else lightboxImage.addEventListener("load", openLightbox, { once: true });
  }),
);
window.addEventListener("resize", () => {
  if (lightbox.open) sizeLightbox();
});
document.querySelector("[data-close-lightbox]").addEventListener("click", () => lightbox.close());
[inquiryModal, lightbox].forEach((dialog) =>
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  }),
);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && backendConfigured) loadAvailability();
});

setGuestCount(guestSelect.value);
applyLanguage(language);
loadAvailability();
setInterval(() => {
  if (backendConfigured && !document.hidden) loadAvailability();
}, 300000);
