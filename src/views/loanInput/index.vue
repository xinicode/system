<template>
  <div>
    <div>aa111aaa</div>

    <el-button @click="aa">
      aa
    </el-button>
  </div>
</template>

<script>
import API from "@/api/api";
export default {
  components: {},
  methods: {
    aa() {
      API.getLogin2({}).then((rs) => {
        console.log(rs);
      });
    },
  },
};
</script>

