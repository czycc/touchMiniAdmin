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
  },
  created: function() {
    axios.get("/category/videos").then(function(res) {});
  }
};
</script>

<style>
</style>
