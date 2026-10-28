// ======================================
// EDIT YOUR WEBSITE DETAILS HERE
// ======================================

const business = {
    name: "",
    email: "lobkegunst08@gmail.com",
    phone: "+32 470 58 37 43",

    description:
        "Een moment voor jezelf, met persoonlijke aandacht en behandelingen die bij jou passen.",

    about:
        "Zelf wil ik me ook graag voorstellen, ik ben Lobke. Als pedicure aan huis help ik u graag om uw voeten gezond en verzorgd te houden. Met een persoonlijke aanpak en oog voor detail zorg ik ook voor een aangename en profesionele behandeling in uw vertrouwde omgeving.",

    aboutExtra:
        "Ik kijk er naar uit u te ontmoeten en voor uw voeten te zorgen.",

    social: {
        instagram: "https://www.instagram.com/lopea_pedi?obrf=Yzg1djRINDF2MHZi",
        facebook: "https://www.facebook.com/share/1C8t9GfwR9/"
    }
};

// Add, remove, or edit treatments here.
// Prices are examples: change them to your own prices.

const treatments = [
    {
        name: "Pedicure voor kinderen",
        description:
            "Tijdens een kindervoetverzorging worden de nagels zorgvuldig geknipt en gevijld. De behandeling wordt afgesloten met een leuk kleurtje naar keuze.",
        price: "€ 19",
        duration: "25 minuten"
    },
    {
        name: "Basis voetverzorging",
        description:
            "Tijdens een basis voetverzorging worden de nagels geknipt en gevijld, de nagelomgeving zorgvuldig gereinigd en oppervlakkig eelt verwijdert met een rasp. De behandeling wordt afgesloten met een korte, ontspannende voetmasage",
        price: "€ 29",
        duration: "35 minuten"
    },
    {
        name: "Gespecialiseerde voetverzorging",
        description:
            "Tijdens een gespecialiseerde voetverzorging worden de nagels geknipt en gevijld en de nagelomgeving zorgvuldig gereinigd. Daarnaast worden nagel- en huidproblemen professioneel behandeld. Nagelproblemen: ingegroeide teennagels, kalknagels, .... De behandeling wordt afgesloten met een korte, ontspannende voetmassage.",
        price: "€ 39",
        duration: "45-60 minuten"
    },
    {
        name: "+ Nagellak",
        description:
            "De teennagels worden zorgvuldig gelakt met een kleur naar keuze voor een mooie, verzorgde uitstraling.",
        price: "+ € 9",
        duration: "10 minuten"
    },
    {
        name: "+ Gel nagellak",
        description:
            "De teennagels worden zorgvuldig voorbereid en gelakt met gellak in een kleur naar keuze. De gellak wordt uitgehard onder een UV/LED-lamp voor een nooie, glanzende en langdurige afwerking.",
        price: "+ € 16",
        duration: "20-30 minuten"
    },
    {
        name: "+ Luxe voetmassage",
        description:
            "Geniet van een luxe voetmassage van 20 minuten waarbij je voeten heerlijk worden verwend. De massage helpt spanning te verminderen, stimuleert de bloedsomloop en zorgt voor een ontspannen en vezorgd gevoel.",
        price: "+ € 6",
        duration: "20 minuten"
    }
];

// ======================================
// BUSINESS INFORMATION
// ======================================

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}

setText("business-name", business.name);
setText("footer-business-name", business.name);
setText("copyright-name", business.name);
setText("hero-description", business.description);
setText("about-text", business.about);
setText("about-extra", business.aboutExtra);

const emailLink = document.getElementById("footer-email");
emailLink.textContent = business.email;
emailLink.href = `mailto:${business.email}`;

const phoneLink = document.getElementById("footer-phone");
phoneLink.textContent = business.phone;

// Use digits and an optional leading + for a valid tel: link.
const phoneForLink = business.phone.replace(/[^\d+]/g, "");
phoneLink.href = `tel:${phoneForLink}`;

document.getElementById("instagram-link").href =
    business.social.instagram;
document.getElementById("facebook-link").href =
    business.social.facebook;

document.getElementById("current-year").textContent =
    new Date().getFullYear();

// ======================================
// CREATE TREATMENT CARDS AND DROPDOWN
// ======================================

const treatmentGrid = document.getElementById("treatment-grid");
const treatmentOptions =
    document.getElementById("treatment-options");

treatments.forEach((treatment, index) => {
    // Create a treatment card.
    const card = document.createElement("article");
    card.className = "treatment-card";

    const number = document.createElement("span");
    number.className = "treatment-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("h3");
    title.textContent = treatment.name;

    const description = document.createElement("p");
    description.textContent = treatment.description;

    const price = document.createElement("span");
    price.className = "treatment-price";
    price.textContent = treatment.price;

    const duration = document.createElement("span");
    duration.className = "treatment-duration";
    duration.textContent = treatment.duration;

    card.append(number, title, description, price, duration);
    treatmentGrid.appendChild(card);

    // Add a checkbox for each treatment.
    const label = document.createElement("label");
    label.className = "treatment-checkbox";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "Gewenste behandeling[]";
    checkbox.value = treatment.name;

    const text = document.createElement("span");
    text.textContent = treatment.name;

    label.append(checkbox, text);
    treatmentOptions.appendChild(label);
});

// ======================================
// MOBILE NAVIGATION
// ======================================

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Menu sluiten" : "Menu openen"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Menu openen");
        menuToggle.textContent = "☰";
    });
});

// ======================================
// APPOINTMENT REQUEST FORM
// ======================================

// IMPORTANT:
// This demo validates the form but does NOT send an email.
// Connect a backend or form service before publishing.

const appointmentForm = document.getElementById("appointment-form");
const formStatus = document.getElementById("form-status");
const preferredDate = document.getElementById("preferred-date");

// Prevent selecting a date in the past.
const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

preferredDate.min = localToday;

appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkboxes = treatmentOptions.querySelectorAll(
        'input[type="checkbox"]'
    );
    
    const hasSelection = [...checkboxes].some(
        checkbox => checkbox.checked
    );
    
    if (!hasSelection) {
        formStatus.textContent =
            "Selecteer minstens één behandeling.";
        return;
    }

    if (!appointmentForm.reportValidity()) {
        return;
    }

    const formData = new FormData(appointmentForm);
    const request = Object.fromEntries(formData.entries());

    // At this point, request contains the customer's form information.
    // Send it securely to your backend or connected form service.

    console.log("Appointment request:", request);

    formStatus.textContent =
        "Het formulier is ingevuld, maar je aanvraag is nog niet verstuurd. " +
        "De website moet eerst met een e-maildienst worden verbonden.";

    formStatus.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});