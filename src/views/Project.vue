<script setup>
import Button from "../UI/Button.vue";
import { mapGetters } from "vuex";
import { onMounted } from "vue";
</script>

<template>
  <div
    class="project-container"
    :style="{ backgroundImage: `url(${getCurrentProject.background})` }"
  >
    <div class="section">
      <div class="title">
        <h1>{{ getCurrentProject.title || "Failed" }}</h1>
      </div>
      <div class="description">
        {{ getCurrentProject.description || "Failed" }}
      </div>

      <div class="button-container">
        <Button @click="openSite">
          <template #icon>
            <span class="material-symbols-outlined"> link </span>
          </template>
          <template #text>Visit Site</template>
        </Button>
        <Button @click="openSource">
          <template #icon>
            <span class="material-symbols-outlined"> code </span>
          </template>
          <template #text>Source Code</template>
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
    };
  },
  methods: {
    openSite() {
      window.open(this.getCurrentProject.siteLink, "_blank");
    },
    openSource() {
      window.open(this.getCurrentProject.sourceLink, "_blank");
    },
  },
  beforeMount() {},
  onUpdated() {
    if (this.getCurrentProject.title) {
      console.log("Current Project");
      this.project = this.getCurrentProject();
    } else {
      console.log("Project by name");
      this.project = this.getProjectByName(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters(["getCurrentProject", "getProjectByName"]),
  },
};
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
  /* background-image: url("../../assets/background.png"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
