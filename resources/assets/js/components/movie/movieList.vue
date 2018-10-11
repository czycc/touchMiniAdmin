<template>
    <el-table :data="tableData"></el-table>
</template>

<script>
export default {
  name: "movieList",
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style>
</style>
