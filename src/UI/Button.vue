<template>
	<button class="btn-main" :class="{ hoverEffects: !disabled }">
		<div class="icon">
			<slot name="icon"
				><span class="material-symbols-outlined"> diamond </span></slot
			>
		</div>
		<div class="text">
			<slot name="text">button</slot>
		</div>
	</button>
</template>
<script>
export default {
	name: "Button",
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
<style scoped>
.btn-main {
	background-color: var(--color-accent-1-opacity);
	color: var(--color-text);
	border: none;

	display: flex;
	flex-direction: row;
	font-size: var(--size-font-large);
	height: var(--height-button);
	justify-content: left;
	align-items: center;
	outline: none;
	padding: 20px 50px;
	gap: 20px;
	transition: all 0.2s ease-in-out;
	width: var(--width-button);
	border-radius: 5px;
}
.hoverEffects {
	cursor: pointer;
}
.hoverEffects:hover,
.hoverEffects:focus {
	background-color: var(--color-accent-1);
	color: var(--color-text-button-hover);
}

.icon {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
}
.text {
	text-align: left;
}

.material-symbols-outlined {
	font-size: var(--size-icon);
}

@media (max-width: 300px) {
	.btn-main {
		flex-direction: column;
		padding: 10px 5px;
		gap: 10px;
	}
}
</style>
