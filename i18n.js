var I18N = {
  uk: {
    name: "Єгор Рухайло",
    pageTitle: "Єгор Рухайло — резюме",
    certTitle: "Сертифікат — Networking Basics",
    langBtn: "English",
    langBtnLabel: "Switch to English",
    birth: "Дата народження: 26 липня 2008 року",
    mail: "Пошта:",
    copy: "Копіювати",
    copied: "Скопійовано",
    photoAlt: "Фото Єгора Рухайла",
    aboutH: "Про мене",
    aboutP: "Студент 4 курсу коледжу КАІ ТЕХ, спеціальність «Кібербезпека». Цікавлюся кібербезпекою, програмуванням і комп’ютерними мережами та хочу створити власну домашню лабораторію для практики.",
    skillsH: "Навички",
    skProg: "Програмування:",
    skNet: "Мережі:",
    skApps: "Програми:",
    codeH: "Приклад коду",
    codeP: "Проста функція на JavaScript: перевіряє, чи число може бути частиною IP-адреси (від 0 до 255).",
    tryLabel: "Спробуйте число:",
    eduH: "Освіта",
    college: "КАІ ТЕХ",
    collegeDate: "2023 — зараз",
    collegeP: "Коледж. Спеціальність: кібербезпека, 4 курс.",
    school: "СЗШ № 258",
    schoolDate: "2014 — 2023",
    schoolP: "Школа.",
    coursesH: "Курси:",
    certAlt: "Сертифікат Cisco Networking Academy «Networking Basics»",
    certText: "Основи мереж (Cisco Networking Academy), 22 листопада 2025",
    certLink: "Переглянути сертифікат",
    langsH: "Мови",
    uaLang: "Українська — рідна",
    enLang: "Англійська — A2",
    projH: "Проєкти",
    proj1: "Форма входу",
    proj1P: "Веб-сторінка з формою входу на HTML, CSS і JavaScript.",
    proj2: "Це резюме",
    proj2P: "Сторінка на HTML, CSS і JavaScript.",
    back: "Назад до резюме",
    openPdf: "Відкрити PDF",
    download: "Завантажити",
    certH1: "Networking Basics — Cisco Networking Academy",
    certViewAlt: "Сертифікат, виданий Єгору Рухайлу за успішне проходження курсу Networking Basics",
    certMeta: "Курс запропонований коледжем КАІ ТЕХ для проходження дисципліни «Організація комп’ютерних мереж». Дата завершення: 22 листопада 2025. Викладач: Володимир Заболотний."
  },
  en: {
    name: "Yehor Rukhailo",
    pageTitle: "Yehor Rukhailo — Resume",
    certTitle: "Certificate — Networking Basics",
    langBtn: "Українська",
    langBtnLabel: "Переключити на українську",
    birth: "Date of birth: July 26, 2008",
    mail: "Email:",
    copy: "Copy",
    copied: "Copied",
    photoAlt: "Photo of Yehor Rukhailo",
    aboutH: "About me",
    aboutP: "4th-year student at KAI TECH college, majoring in Cybersecurity. I am interested in cybersecurity, programming and computer networks, and I want to build my own home lab for practice.",
    skillsH: "Skills",
    skProg: "Programming:",
    skNet: "Networking:",
    skApps: "Software:",
    codeH: "Code example",
    codeP: "A simple JavaScript function that checks whether a number can be part of an IP address (0 to 255).",
    tryLabel: "Try a number:",
    eduH: "Education",
    college: "KAI TECH",
    collegeDate: "2023 — present",
    collegeP: "College. Major: Cybersecurity, 4th year.",
    school: "School No. 258",
    schoolDate: "2014 — 2023",
    schoolP: "Secondary school.",
    coursesH: "Courses:",
    certAlt: "Cisco Networking Academy certificate “Networking Basics”",
    certText: "Networking Basics (Cisco Networking Academy), November 22, 2025",
    certLink: "View certificate",
    langsH: "Languages",
    uaLang: "Ukrainian — native",
    enLang: "English — A2",
    projH: "Projects",
    proj1: "Login form",
    proj1P: "A web page with a login form built with HTML, CSS and JavaScript.",
    proj2: "This resume",
    proj2P: "A page built with HTML, CSS and JavaScript.",
    back: "Back to resume",
    openPdf: "Open PDF",
    download: "Download",
    certH1: "Networking Basics — Cisco Networking Academy",
    certViewAlt: "Certificate awarded to Yehor Rukhailo for completing the Networking Basics course",
    certMeta: "Course offered by KAI TECH college for completing the discipline “Computer Network Organization”. Completion date: November 22, 2025. Instructor: Volodymyr Zabolotnyi."
  }
};

var currentLang = "uk";
try {
  var saved = localStorage.getItem("lang");
  if (saved === "uk" || saved === "en") currentLang = saved;
} catch (e) {}

function t(key) {
  return I18N[currentLang][key];
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    el.alt = t(el.dataset.i18nAlt);
  });
  var title = document.body.dataset.title;
  if (title) document.title = t(title);

  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = t("langBtn");
    btn.setAttribute("aria-label", t("langBtnLabel"));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      currentLang = currentLang === "uk" ? "en" : "uk";
      try { localStorage.setItem("lang", currentLang); } catch (e) {}
      applyLang();
    });
  }
  applyLang();
});
