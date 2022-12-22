<script setup>
import Card from "../../UI/Card.vue";
import axios from "axios";
import Button from "../../UI/Button.vue";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import { mapActions, mapGetters } from "vuex";
</script>

<template>
  <div class="contact-container" ref="position">
    <h1>{{ text.contactSection.title }}</h1>
    <Card class="card">
      <form class="form" @submit.prevent="onSubmit">
        <div class="email">
          <label for="email">{{ text.contactSection.emailLabel }}</label>
          <input
            type="email"
            v-model="email"
            :placeholder="text.contactSection.emailHolder"
          />
        </div>
        <div class="message">
          <label for="message">{{ text.contactSection.messageLabel }}</label>
          <textarea
            required
            type="text"
            v-model="message"
            :placeholder="text.contactSection.messageHolder"
          />
        </div>
        <div class="name">
          <label for="name">{{ text.contactSection.nameLabel }}</label>
          <input
            required
            type="text"
            v-model="name"
            :placeholder="text.contactSection.nameHolder"
          />
        </div>

        <div class="button-container">
          <Button class="button">
            <template #icon>
              <span class="material-symbols-outlined"> email </span>
            </template>
            <template #text>{{ text.contactSection.submitButton }}</template>
          </Button>
        </div>

        <div class="direct">
          <div class="direct-item">
            <div>{{ text.contactSection.phone }}</div>
            <div class="phone">
              <div>+48</div>
              <div>536</div>
              <div>812</div>
              <div>086</div>
            </div>
          </div>
          <div class="direct-item">
            <div>Email:</div>
            <div>mikoogla.dev@gmail.com</div>
          </div>
        </div>
      </form>
    </Card>
    <div class="success" :class="{ visible: successMessage }">
      <p>{{ text.contactSection.sendPrompt }}</p>
      <p>{{ text.contactSection.sendPrompt2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      email: "",
      name: "",
      successMessage: false,
    };
  },
  methods: {
    ...mapActions(["setContactPosition"]),
    onSubmit() {
      console.log("submit");
      //send webhook
      axios.post(
        "https://discord.com/api/webhooks/1054438690547580968/s-96_bATNcPr71tFWhDhlqPHoV6JhD2yyp8Qf_PlVbYKbj4PscAYDtipaDTRi-O22B8Q",
        {
          content: `Name: ${this.name} \n Email: ${this.email} \n Message: ${this.message}  `,
        }
      );
      this.message = "";
      this.email = "";
      this.name = "";

      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
      }, 5000);
    },
    setPosition() {
      this.setContactPosition(this.$refs.position.offsetTop || 0);
    },
  },
  mounted() {
    this.setContactPosition(this.$refs.position.offsetTop || 0);
    window.addEventListener("resize", this.setPosition);
  },
  unmounted() {
    window.removeEventListener("resize", this.setPosition);
  },
  components: { Button },
  computed: {
    ...mapGetters({
      text: "getTexts",
    }),
  },
};
</script>

<style scoped>
input,
textarea {
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  border: 0.8px solid var(--color-accent-1);
  font-size: var(--size-font-medium);
  color: var(--color-text);
  background-color: var(--color-background);
}
textarea {
  height: 6rem;
}
input:focus,
input:active,
textarea:focus,
textarea:active {
  outline: 1px solid var(--color-accent-2);
}
h1 {
  padding: 20px 0;
  text-align: left;
  font-weight: var(--weight-normal);
  font-size: var(--size-h1);
  overflow: hidden;
}
.direct {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 20px;
}
.direct-item {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.button-container {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.email,
.message,
.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
}
.contact-container {
  font-size: var(--size-font-medium);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
}
.card {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}
.form {
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.success {
  position: fixed;
  bottom: 20px;
  background-color: rgba(6, 85, 6, 0.404);
  padding: 20px;
  width: 60%;
  text-align: center;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  display: none;
  transition: all 0.5s ease;
}
.phone {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.visible {
  display: block;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
  }
  .form {
    padding: 10px;
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .email,
  .message,
  .name {
    width: 80%;
  }
  .button-container {
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 560px) {
  .email,
  .message,
  .name,
  .direct {
    width: 100%;
  }
  .button-container,
  .button {
    width: 100%;
  }

  .direct-item {
    flex-direction: column;
    align-items: center;
  }
}
</style>
