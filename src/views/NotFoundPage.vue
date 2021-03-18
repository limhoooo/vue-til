// html
<template>
  <div>
    <button @click="add">등록</button>
    <button>삭제</button>
    <button>데이터</button>

    <input type="text" />

    <table class="dasasd">
      <tr v-for="item in dataList" v-bind:key="item.index">
        <td>
          {{ item }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      count: 1,
    };
  },
  methods: {
    add() {
      this.dataList.push(this.count);
      this.count = ++this.count;
    },
  },
};
</script>

<style>
.dasasd th {
  border: 1px solid;
}
.dasasd td {
  border: 1px solid;
}
</style>