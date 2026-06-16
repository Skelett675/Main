
const texts = {
  en: {
    title: "Main Website",
    subtitle: "Welcome",
    info: "Infos",
    contact: "Contact",
    discord: "Discord",
    terms: "Terms",
    privacy: "Privacy"
  },
  de: {
    title: "Hauptseite",
    subtitle: "Willkommen",
    info: "Infos",
    contact: "Kontakt",
    discord: "Discord",
    terms: "AGB",
    privacy: "Datenschutz"
  }
};

/* SETTINGS */
function toggleSettings() {
  const s = document.getElementById("settings");
  s.style.display = s.style.display === "block" ? "none" : "block";
}

/* THEME */
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

/* LANGUAGE */
function setLang(l) {
  localStorage.setItem("lang", l);

  const t = texts[l];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerText = t[key];
  });
}

/* LOAD */
window.onload = () => {
  const theme = localStorage.getItem("theme") || "blue";
  const lang = localStorage.getItem("lang") || "en";

  document.documentElement.setAttribute("data-theme", theme);
  setLang(lang);
};
