<template>
	<div class="navbar-container">
		<MobileMenu
			:style="{ display: isMenuVisible ? '' : 'none' }"
			@click="showMenu"
		/>
		<RouterLink to="/"> <div class="logo">Mikoogla</div></RouterLink>
		<div class="navigation">
			<RouterLink class="mobile-off navtext" to="/">{{
				text.navbar.home
			}}</RouterLink>
			<RouterLink class="mobile-off navtext" to="/contact">{{
				text.navbar.contact
			}}</RouterLink>
			<div @click="switchLanguage" class="language mobile-off navtext">
				{{ text.navbar.language
				}}<span class="material-symbols-outlined"> translate </span>
			</div>
			<span @click="showMenu" class="material-symbols-outlined mobile-on">
				{{ menuIcon }}
			</span>
		</div>
	</div>
</template>

<script setup>
import MobileMenu from "./MobileMenu.vue"
import { ref, watch, computed, onMounted } from "vue"
import { useStore } from "vuex"
const store = useStore()
function switchLanguage() {
	store.dispatch("switchLanguage")
}

const isMenuVisible = ref(false)
const menuIcon = ref("menu")

const text = computed(() => {
	return store.getters.getTexts
})
watch(isMenuVisible, value => {
	if (value) {
		menuIcon.value = "close"
	} else {
		menuIcon.value = "menu"
	}
})
function showMenu() {
	isMenuVisible.value = !isMenuVisible.value
}
</script>

<style scoped>
a.router-link-exact-active.navtext {
	color: var(--color-accent-2);
	/* underline */
	border-bottom: 1px solid var(--color-accent-2);
	transition: all 0.3s ease-in-out;
}
.navtext {
	font-size: var(--size-font-medium);
}
.navbar-container {
	max-height: var(--size-navbar-height);
	padding: 13px 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--color-accent-2);
}

.logo {
	font-size: 1.5rem;
	cursor: pointer;
}
.navigation {
	width: 50%;
	max-width: 550px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.language {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
}

.material-symbols-outlined,
.language {
	cursor: pointer;
}

@media (min-width: 768px) {
	.mobile-on {
		display: none;
	}
}

@media (max-width: 768px) {
	.mobile-off {
		display: none;
	}
	.navigation {
		justify-content: right;
	}
}

@media (max-width: 300px) {
	.logo {
		display: none;
	}
	.navbar-container {
		padding: 10px 20px;
	}
}
</style>
