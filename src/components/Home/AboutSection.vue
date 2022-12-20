<script setup>
import about2 from "../../assets/photo.jpg";
import about3 from "../../assets/about2.png";
import { mapActions, mapGetters } from "vuex";
</script>

<template>
  <div class="about-container" ref="position">
    <h1>{{ text.aboutSection.title }}</h1>
    <div class="text-and-photo">
      <div class="description">
        <div class="text">
          {{ text.aboutSection.text1 }}
        </div>
      </div>
      <div class="photo">
        <img :src="about2" alt="about" />
      </div>
    </div>
    <div class="text-and-photo reverse">
      <div class="description">
        <div class="text">
          {{ text.aboutSection.text2 }}
        </div>
      </div>
      <div class="photo">
        <img :src="about3" alt="about" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ...mapGetters({
      text: "getTexts",
    }),
  },
  methods: {
    ...mapActions(["setAboutPosition"]),
    setPosition() {
      this.setAboutPosition(this.$refs.position.offsetTop || 0);
    },
  },
  mounted() {
    this.setAboutPosition(this.$refs.position.offsetTop || 0);
    window.addEventListener("resize", this.setPosition);
  },
  unmounted() {
    window.removeEventListener("resize", this.setPosition);
  },
};
</script>

<style scoped>
img {
  height: var(--size-quadrant);
  max-width: var(--size-quadrant);
  display: block;
  object-fit: cover;
}
h1 {
  padding: 20px 0;
  text-align: left;
  font-weight: var(--weight-normal);
  font-size: var(--size-h1);
  overflow: hidden;
}
.about-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
}
.text-and-photo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  backdrop-filter: brightness(0.8);
}
.text {
  padding: 50px;
}
.reverse {
  flex-direction: row-reverse;
}
.description {
  height: var(--size-quadrant);

  max-width: 500px;
  line-height: 2rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: var(--size-font-medium);
  font-weight: var(--weight-normal);

  backdrop-filter: brightness(0.8);
}
.text-and-photo:hover {
  transform: rotate(0.4deg);
  transition: 0.5s;
}
@media (max-width: 1100px) {
  .text-and-photo {
    flex-direction: column;
  }
  .description {
    height: calc(var(--size-quadrant) / 1.5);
  }
  .text {
    padding: 20px;
  }
}
</style>
