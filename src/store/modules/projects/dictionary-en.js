import { mockup2, mockup3, defaultmockup, gymMockup, mockup6 } from "./Mockups"

const projects = [
	{
		id: 1,
		name: "Quizx",
		title: "Quizx - Quiz App",
		description:
			"Project where you can learn by solving single-choice questions.",
		techStack: ["Vue", "Vuex", "Firebase", "Axios"],
		siteLink: "https://quiz.mikoogla.me/",
		sourceLink: "https://github.com/mikoogla/vue-quiz-project",
		background: mockup2,
	},
	{
		id: 2,
		name: "Learning",
		title: "Learning Languages App",
		description: "Languages learned only with practice",
		techStack: ["React", "Redux", "Firebase"],
		siteLink: "https://language.mikoogla.me/",
		sourceLink: "https://github.com/mikoogla/LearningLanguagesApp",
		background: mockup3,
	},
	{
		id: 3,
		name: "Portfolio",
		title: "Portfolio",
		description: "It's the site you are currently browsing.",
		techStack: ["Vue", "Vuex", "Firebase"],
		siteLink: "https://mikoogla.me/",
		sourceLink: "https://github.com/mikoogla/vue-portfolio",
		background: defaultmockup,
	},
	{
		id: 4,
		name: "Gym App",
		title: "Gym App",
		description: "[project in progress]",
		techStack: ["Vue", "Vuex", "Vuetify", "Firebase"],
		siteLink: "https://gymapp.mikoogla.me/",
		sourceLink: "https://github.com/mikoogla",
		background: gymMockup,
	},
	{
		id: 5,
		name: "Other Projects",
		title: "Other Projects",
		description: "Other projects I've worked on",
		techStack: ["Vue", "React"],
		siteLink: "https://mikoogla.me/",
		sourceLink: "https://github.com/mikoogla",
		background: mockup6,
	},
]

const texts = {
	navbar: {
		home: "Home",
		contact: "Contact",
		language: "ENG",
		languagePrompt: "PL version",
	},
	heroSection: {
		title: "Creative UI and Front-End Developer",
		workButton: "See My Work",
		contactButton: "Contact Me",
	},
	aboutSection: {
		title: "About Me",
		text1:
			"Hi, I'm Mikolaj. I'm a 3rd year student of CS at the Technical University of Lodz. My goal is to create apps that deliver the best solutions for the users and clients. Web apps are the best tool for that in my opinion. ",
		text2:
			"In this portfolio I would like to show you my most recent projects. Also, feel free to contact me via the form below.",
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
		phone: "Phone: ",
	},
	projectInfo: {
		siteButton: "Visit Site",
		sourceButton: "Source Code",
	},
}

export { projects, texts }
