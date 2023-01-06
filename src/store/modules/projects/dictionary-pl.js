import { mockup2, mockup3, defaultmockup, gymMockup, mockup6 } from "./Mockups"
const projects = [
	{
		id: 1,
		name: "Quizx",
		title: "Quizx - Quiz App",
		description:
			"Aplikacja, w której uczysz się poprzez rozwiązywanie testów jednokrotnego wyboru.",
		techStack: ["Vue", "Vuex", "Firebase", "Axios"],
		siteLink: "https://quiz.mikoogla.me/",
		sourceLink: "https://github.com/mikoogla/vue-quiz-project",
		background: mockup2,
	},
	{
		id: 2,
		name: "Learning",
		title: "Learning Languages App",
		description: "Aplikacja do praktycznego uczenia się języków",
		techStack: ["React", "Redux", "Firebase"],
		siteLink: "https://language.mikoogla.me/",
		sourceLink: "https://github.com/mikoogla/LearningLanguagesApp",
		background: mockup3,
	},
	{
		id: 3,
		name: "Portfolio",
		title: "Portfolio",
		description: "Strona którą właśnie przeglądasz.",
		techStack: ["Vue", "Vuex", "Firebase"],
		siteLink: "https://mikoogla.me/",
		sourceLink: "https://github.com/mikoogla/vue-portfolio",
		background: defaultmockup,
	},
	{
		id: 4,
		name: "Gym App",
		title: "Gym App",
		description: "[projekt grupowy w trakcie tworzenia]",
		techStack: ["Vue", "Vuex", "Vuetify", "Firebase"],
		siteLink: "https://gymapp.mikoogla.me/",
		sourceLink: "https://github.com/mikoogla",
		background: gymMockup,
	},
	{
		id: 5,
		name: "Other Projects",
		title: "Other Projects",
		description: "Inne projekty, nad którymi pracowałem",
		techStack: ["Vue", "React"],
		siteLink: "https://mikoogla.me/",
		sourceLink: "https://github.com/mikoogla",
		background: mockup6,
	},
]

const texts = {
	navbar: {
		home: "Strona główna",
		contact: "Kontakt",
		language: "PL",
		languagePrompt: "EN version",
	},
	heroSection: {
		title: "Projekt i wykonanie z pasją",
		workButton: "Moje projekty",
		contactButton: "Skontaktuj się",
	},
	aboutSection: {
		title: "O Mnie",
		text1:
			"Cześć, nazywam się Mikołaj, jestem studentem 3 roku informatyki na Politechnice Łódzkiej. Moim celem jest tworzenie aplikacji, które dostarczają użytkownikom rozwiązań najlepszej jakości. Aplikacje webowe są do tego najlepszym narzędziem.",
		text2:
			"W tym portfolio chciałbym zaprezentować Ci moje najnowsze projekty. Zapraszam też do kontaktu. Na dole strony znajdziesz formularz.",
	},
	projectsSection: {
		title: "Moje projekty",
		buttonText: "Zobacz więcej",
	},
	contactSection: {
		title: "Kontakt",
		emailLabel: "Twój email",
		messageLabel: "Twoja wiadomość",
		nameLabel: "Imię",
		submitButton: "Wyślij",
		emailHolder: "email",
		messageHolder: "wiadomość",
		nameHolder: "imię",
		sendPrompt: "Dziękuję za wiadomość",
		sendPrompt2: "Odpowiem jak najszybciej",
		phone: "Telefon: ",
	},
	projectInfo: {
		siteButton: "Odwiedź stronę",
		sourceButton: "Zobacz kod źródłowy",
		goBackButton: "Powrót",
	},
	more: {
		title: "Więcej projektów będzie dostępnych wkrótce",
	},
}
export { projects, texts }
