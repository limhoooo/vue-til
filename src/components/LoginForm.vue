<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">id : </label>
        <input type="text" id="username" v-model="username" />
      </div>

      <div>
        <label for="password">pw : </label>
        <input type="text" id="password" v-model="password" />
      </div>
      <button type="submit">로그인</button>
      <p>{{ LogMessage }}</p>
    </form>
  </div>
</template>

<script>
import { LoginUser } from "../api/index.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      LogMessage: "",
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await LoginUser(userData);
      this.LogMessage = `${data.user.username} 님 환영합니다.`;
      console.log(data);
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style>
</style>