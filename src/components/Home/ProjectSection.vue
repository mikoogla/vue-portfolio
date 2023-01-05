<script setup>
import ProjectItem from "./ProjectItem.vue"
import { mapActions, mapGetters } from "vuex"
</script>

<template>
	<div class="project-container" ref="position">
		<h1>{{ text.projectsSection.title }}</h1>

		<div class="cards-container">
			<ProjectItem
				v-for="(_, index) in 3"
				:key="getProjects[index].id"
				:project="getProjects[index]"
				:buttonText="text.projectsSection.buttonText"
			>
			</ProjectItem>
		</div>
		<div class="cards-container-second">
			<ProjectItem
				:key="getProjects[3].id"
				:project="getProjects[3]"
				:buttonText="text.projectsSection.buttonText"
			>
			</ProjectItem>
			<ProjectItem
				:key="getProjects[4].id"
				:project="getProjects[4]"
				:buttonText="text.projectsSection.buttonText"
			>
			</ProjectItem>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			position: 0,
		}
	},
	components: {
		ProjectItem,
	},
	methods: {
		...mapActions(["setProjectsPosition"]),
		setPosition() {
			this.setProjectsPosition(this.$refs.position.offsetTop || 0)
		},
	},
	computed: {
		...mapGetters(["getProjects"]),
		...mapGetters({
			text: "getTexts",
		}),
	},
	mounted() {
		this.setProjectsPosition(this.$refs.position.offsetTop || 0)
		// window.addEventListener("resize", this.setPosition);
	},
}
</script>

<style scoped>
h1 {
	text-align: left;
	font-weight: var(--weight-normal);
	font-size: var(--size-h1);
	overflow: hidden;
}
.project-container {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 20px;
}

.cards-container {
	width: 80%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-gap: 20px;

	padding: 0px;
	border-radius: 10px;
}
.cards-container-second {
	width: 80%;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 1fr;
	grid-gap: 20px;
	margin-top: 4rem;
	padding: 0px;
	border-radius: 10px;
}
@media (min-width: 1600px) {
	.cards-container {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		grid-gap: 20px;
	}
}
@media (max-width: 1300px) {
	.cards-container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
}
@media (max-width: 768px) {
	.project-container {
		padding: 20px 20px;
	}
	h1 {
		padding-left: 20px;
	}
}
</style>
