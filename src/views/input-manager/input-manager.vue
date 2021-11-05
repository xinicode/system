<template>
  <div class="app-container">
    申请管理
    <router-link to="/login">跳转到login页面</router-link>

    <el-button @click="aaaa()"> 跳转到贷款申请页面 </el-button>
    <el-button @click="back()"> back </el-button>
    <el-button @click="close()"> close </el-button>
  </div>
</template>

<script>
import eventBus from "@/utils/goBackEntity";
export default {
  data() {
    return {
      aaa: "111",
    };
  },
  mounted() {
    let t = this.$tools.getData(this.$route);
    // console.log(t);
  },
  activated() {
    console.log("aaa")
    eventBus.$on("cuihao",function(data) {
        console.log(data, "data");
      }.bind(this));
  },
  methods: {
    aaaa() {
      this.$tools.go("loan-input").receive((rs)=>{
        console.log(rs)
      });
    },
    back(value) {
      eventBus.$emit("cuihao", value);
      this.$router.back();
    },
    close(value) {
      eventBus.$emit("cuihao", value);
      this.$router.go(-1);
    },
  },
};
</script>
