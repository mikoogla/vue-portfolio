<script setup>
import { mapGetters } from "vuex"
import Button from "../UI/Button.vue"
</script>

<template>
	<div class="projects-container">
		<h3>{{ text.more.title }}</h3>
		<Button @click="openSite('https://github.com/mikoogla')">
			<template #icon>
				<span class="material-symbols-outlined">
					<slot name="iconName"> link </slot></span
				>
			</template>
			<template #text>
				<slot name="buttonText"> GitHub </slot>
			</template></Button
		>
	</div>
</template>

<script>
export default {
	methods: {
		openSite(url) {
			window.open(url, "_blank")
		},
	},
	computed: {
		...mapGetters({
			text: "getTexts",
		}),
	},
}
</script>

<style scoped>
.projects-container {
	font-size: var(--size-font-medium);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px 20px;
}
</style>
