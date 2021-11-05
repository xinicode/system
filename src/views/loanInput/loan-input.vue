<template>
  <div>
    <div>贷款申请页面</div>
    <el-button @click="aa"> 跳转到申请管理 </el-button>
    <el-button @click="goback"> goback </el-button>
  </div>
</template>
<script>
import API from "@/api/api";
import eventBus from "@/utils/goBackEntity";
export default {
  components: {},
  mounted() {
    // console.log(this.$route);
  },

  methods: {
    aa() {
      this.$tools.go("/input-manager", { a: 123 });
    },
    goback() {
      // let t = window.history;
      // console.log(t);
      eventBus.$emit("cuihao", "hospital");
      this.$router.go(-1);

      // t.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

