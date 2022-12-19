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
          <input type="text" v-model="email" placeholder="email" />
        </div>
        <div class="message">
          <label for="message">Message</label>
          <textarea type="text" v-model="message" placeholder="message" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      email: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit");
      //send webhook
      axios.post(
        "https://discord.com/api/webhooks/1054438690547580968/s-96_bATNcPr71tFWhDhlqPHoV6JhD2yyp8Qf_PlVbYKbj4PscAYDtipaDTRi-O22B8Q",
        {
          content: `Email: ${this.email} \n Message: ${this.message}  `,
        }
      );
      this.message = "";
      this.email = "";
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
input:active {
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
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.email,
.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
</style>
