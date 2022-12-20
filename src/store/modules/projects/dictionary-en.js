import { mockup2, mockup3, defaultmockup } from "./Mockups";

const projects = [
  {
    id: 1,
    name: "Quizx",
    title: "Quizx - Quiz App",
    description:
      "Project where you can learn by solving single-choice questions.",
    techStack: ["Vue", "Vuex", "Vue Router", "Firebase", "Bootstrap"],
    siteLink: "https://quiz.mikoogla.me/",
    sourceLink: "https://github.com/mikoogla/vue-quiz-project",
    background: mockup2,
  },
  {
    id: 2,
    name: "Learning",
    title: "Learning Languages App",
    description: "Languages learned only with practice",
    techStack: ["React", "Redux", "React Router", "Firebase"],
    siteLink: "https://language.mikoogla.me/",
    sourceLink: "https://github.com/mikoogla/LearningLanguagesApp",
    background: mockup3,
  },
  {
    id: 3,
    name: "Some",
    title: "Some other app",
    description: "some description about this app",
    techStack: ["React", "Redux", "React Router", "Firebase"],
    siteLink: "https://mikoogla.me/",
    sourceLink: "https://github.com/mikoogla",
    background: defaultmockup,
  },
];

const texts = {
  navbar: {
    home: "Home",
    contact: "Contact",
    language: "ENG",
    languagePrompt: "PL version",
  },
  heroSection: {
    title: "Outspoken Front end design",
    workButton: "See My Work",
    contactButton: "Contact Me",
  },
  aboutSection: {
    title: "About Me",
    text1: "Text 1 about me",
    text2: "Text 2 about me",
  },
  projectsSection: {
    title: "My Projects",
    buttonText: "More Info",
  },
  contactSection: {
    title: "Contact Me",
    emailLabel: "Your Email",
    messageLabel: "Message",
    nameLabel: "Your Name",
    submitButton: "Send",
    emailHolder: "email",
    messageHolder: "message",
    nameHolder: "name",
    sendPrompt: "Thanks for the message!",
    sendPrompt2: "I will reply ASAP",
  },
  projectInfo: {
    siteButton: "Visit Site",
    sourceButton: "Source Code",
  },
};

export { projects, texts };
