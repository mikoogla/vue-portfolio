<script setup>
import axiosImage from "../../../assets/technologies/axios.png";
import firebaseImage from "../../../assets/technologies/firebase.png";
import reactImage from "../../../assets/technologies/react.png";
import reduxImage from "../../../assets/technologies/redux.png";
import vueImage from "../../../assets/technologies/vue.png";
</script>

<template>
  <div class="tile">
    <div class="image">
      <img :src="image" :alt="technology" />
    </div>
    <div class="description">
      {{ technology }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },
  props: {
    technology: {
      type: String,
      default: "default",
    },
  },
  methods: {
    setImage() {
      if (this.technology === "Axios") this.image = axiosImage;
      if (this.technology === "Firebase") this.image = firebaseImage;
      if (this.technology === "React") this.image = reactImage;
      if (this.technology === "React Router") this.image = reactImage;
      if (this.technology === "Redux") this.image = reduxImage;
      if (this.technology === "Vue") this.image = vueImage;
      if (this.technology === "Vuex") this.image = vueImage;
      if (this.technology === "Vue Router") this.image = vueImage;
    },
  },
  mounted() {
    this.setImage();
  },
  components: {},
};
</script>

<style scoped>
img {
  height: 32px;
  display: block;
  object-fit: cover;
}
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.description {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: var(--size-font-small);
  line-height: 1.2;
}
</style>
