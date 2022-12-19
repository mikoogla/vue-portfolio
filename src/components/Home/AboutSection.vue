<script setup>
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
</script>

<template>
  <div class="about-container">
    <h1>About Me</h1>
    <div class="text-and-photo">
      <div class="description">
        I am a self-taught developer, I have been learning for 2 years, I am
        currently studying at the university, I am passionate about technology,
        I like to learn new things and I am always looking for new challenges.
        In my free time I like to play video games, watch movies and series, I
        also like to read books and learn new things.
      </div>
      <div class="photo">
        <img :src="about2" alt="about" />
      </div>
    </div>
    <div class="text-and-photo reverse">
      <div class="description">
        I am a self-taught developer, I have been learning for 2 years, I am
        currently studying at the university, I am passionate about technology,
        I like to learn new things and I am always looking for new challenges.
        In my free time I like to play video games, watch movies and series, I
        also like to read books and learn new things.
      </div>
      <div class="photo">
        <img :src="about3" alt="about" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
img {
  height: var(--size-quadrant);
  max-width: var(--size-quadrant);
  display: block;
  object-fit: cover;
}
h1 {
  text-align: left;
  font-weight: var(--weight-normal);
  font-size: var(--size-h1);
  overflow: hidden;
}
.about-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px 20px;
}
.text-and-photo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}
.reverse {
  flex-direction: row-reverse;
}
.description {
  height: var(--size-quadrant);
  max-width: calc(var(--size-quadrant) - 40px);
  padding: 0 20px;

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
}
</style>
