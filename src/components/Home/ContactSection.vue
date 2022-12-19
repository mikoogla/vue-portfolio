<script setup>
import Card from "../../UI/Card.vue";
import axios from "axios";
import Button from "../../UI/Button.vue";
</script>

<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    <Card class="card">
      <form class="form" @submit.prevent="onSubmit">
        <div class="email">
          <label for="email">Your Email</label>
          <input type="email" v-model="email" placeholder="email" />
        </div>
        <div class="message">
          <label for="message">Message</label>
          <textarea
            required
            type="text"
            v-model="message"
            placeholder="message"
          />
        </div>
        <div class="name">
          <label for="name">Your Name</label>
          <input required type="text" v-model="name" placeholder="name" />
        </div>

        <div class="button-container">
          <Button class="button">
            <template #icon>
              <span class="material-symbols-outlined"> email </span>
            </template>
            <template #text>Submit</template>
          </Button>
        </div>
      </form>
    </Card>
    <div class="success">
      <p>Thank you for your message!</p>
      <p>I will reply ASAP</p>
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
    };
  },
  methods: {
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
    },
  },

  components: { Button },
};
</script>

<style scoped>
input,
textarea {
  width: 100%;
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
.button-container {
  width: 100%;
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
.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
}
.form {
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
    width: 80%;
  }
}
</style>
