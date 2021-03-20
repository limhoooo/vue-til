<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title : </label>
          <input id="title" v-model="title" type="text" />
        </div>
        <div>
          <label for="contents">Contents : </label>
          <textarea id="contents" v-model="contents" type="text" rows="5" />
          <p class="validation-text warning" v-if="isContentsValid">
            Contents length must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost } from "../../api/posts";

export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length >= 200;
    },
  },
  methods: {
    submitForm() {},
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>