import { mockup2, mockup3, defaultmockup } from "./Mockups";
const projects = [
  {
    id: 1,
    name: "Quizx",
    title: "Quizx - Quiz App",
    description:
      "Aplikacja, w której uczysz się poprzez rozwiązywanie testów jednokrotnego wyboru.",
    techStack: ["Vue", "Vuex", "Vue Router", "Firebase", "Bootstrap"],
    siteLink: "https://quiz.mikoogla.me/",
    sourceLink: "https://github.com/mikoogla/vue-quiz-project",
    background: mockup2,
  },
  {
    id: 2,
    name: "Learning",
    title: "Learning Languages App",
    description: "Aplikacja do praktycznego uczenia się języków",
    techStack: ["React", "Redux", "React Router", "Firebase"],
    siteLink: "https://language.mikoogla.me/",
    sourceLink: "https://github.com/mikoogla/LearningLanguagesApp",
    background: mockup3,
  },
  {
    id: 3,
    name: "Inne",
    title: "dodatkowa aplikacja",
    description: "Miejsce na aplikację która jeszcze nie powstała",
    techStack: ["React", "Redux", "React Router", "Firebase"],
    siteLink: "https://mikoogla.me/",
    sourceLink: "https://github.com/mikoogla",
    background: defaultmockup,
  },
];

const texts = {
  navbar: {
    home: "Strona główna",
    contact: "Kontakt",
    language: "PL",
    languagePrompt: "EN version",
  },
  heroSection: {
    title: "Opis stronki jeszcze nie jest gotowy",
    workButton: "Moje projekty",
    contactButton: "Skontaktuj się",
  },
  aboutSection: {
    title: "O mnie",
    text1: "Witam państwa na mojej stronie",
    text2: "Coś tam dalej",
  },
  projectsSection: {
    title: "Moje projekty",
    buttonText: "Zobacz więcej",
  },
  contactSection: {
    title: "Skontaktuj się",
    emailLabel: "Twój email",
    messageLabel: "Twoja wiadomość",
    nameLabel: "Imię",
    submitButton: "Wyślij",
    emailHolder: "email",
    messageHolder: "wiadomość",
    nameHolder: "imię",
  },
  projectInfo: {
    siteButton: "Odwiedź stronę",
    sourceButton: "Zobacz kod źródłowy",
  },
};
export { projects, texts };
