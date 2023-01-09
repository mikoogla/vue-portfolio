<script setup>
import Button from "../UI/Button.vue"
import { mapGetters } from "vuex"
</script>

<template>
	<div
		class="project-container"
		:style="{ backgroundImage: `url(${getCurrentProject.background})` }"
	>
		<div class="section">
			<Button @click="goBack" class="button-background">
				<template #icon>
					<span class="material-symbols-outlined"> arrow_back_ios </span>
				</template>
				<template #text>{{ text.projectInfo.goBackButton }}</template>
			</Button>
			<div class="title">
				<h1>{{ getCurrentProject.title || "Reading failed" }}</h1>
				<div class="description">
					{{
						getCurrentProject.description ||
						"Something went wrong. Go back to Homepage"
					}}
				</div>
			</div>

			<div class="button-container">
				<Button @click="openSite">
					<template #icon>
						<span class="material-symbols-outlined"> link </span>
					</template>
					<template #text>{{ text.projectInfo.siteButton }}</template>
				</Button>
				<Button
					:disabled="getCurrentProject.sourceCodeDisabled"
					@click="openSource"
				>
					<template #icon>
						<span class="material-symbols-outlined"> code </span>
					</template>
					<template #text>{{
						getCurrentProject.sourceCodeDisabled
							? text.projectInfo.sourceDisabled
							: text.projectInfo.sourceButton
					}}</template>
				</Button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Project",
	components: {
		Button,
	},

	data() {
		return {
			id: this.$route.params.id,
			project: {},
		}
	},
	methods: {
		openSite() {
			window.open(this.getCurrentProject.siteLink, "_blank")
		},
		openSource() {
			if (this.getCurrentProject.sourceCodeDisabled) return
			window.open(this.getCurrentProject.sourceLink, "_blank")
		},
		goBack() {
			this.$router.go(-1)
		},
	},
	beforeMount() {},
	onUpdated() {
		if (this.getCurrentProject.title) {
			console.log("Current Project")
			this.project = this.getCurrentProject()
		} else {
			console.log("Project by name")
			this.project = this.getProjectByName(this.$route.params.id)
		}
	},
	mounted() {
		console.log("current: ", this.getCurrentProject)
	},
	computed: {
		...mapGetters(["getCurrentProject", "getProjectByName"]),
		...mapGetters({
			text: "getTexts",
		}),
	},
}
</script>

<style scoped>
h1 {
	max-width: 300px;
	text-align: left;
	font-weight: var(--weight-normal);
	font-size: var(--size-h1);
	overflow: hidden;
}
.title {
	height: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
}
.description {
	max-width: 300px;
	text-align: left;
	font-size: var(--size-font-large);
	font-weight: var(--weight-light);
	overflow: hidden;
}
.section {
	background-color: var(--color-background-layout);
	height: 100%;
	width: 40%;
	min-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	backdrop-filter: blur(10px);
}
.button-container {
	max-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	padding: 50px 20px;
	gap: 20px;
}
.project-container {
	height: var(--container-height);
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
.button-background {
	background-color: rgba(0, 0, 0, 0);
	border-radius: 0;
	filter: unset;
	width: 300px;
}
.button-background:hover {
	background-color: var(--color-background-layout);
	filter: contrast(0.7);
}

@media (max-width: 768px) {
	.section {
		width: 100%;
		min-width: 0;
		overflow: hidden;
		backdrop-filter: blur(1px);
	}
}
@media (max-height: 600px) and (min-width: 560px) {
	.section {
		flex-direction: row;
		width: auto;
	}
}

@media (max-width: 500px) {
	.button-container {
		max-width: none;
	}
}
@media only screen and (max-width: 500px) {
	.button-container {
		max-width: none;
		padding-bottom: 120px;
	}
}
</style>
