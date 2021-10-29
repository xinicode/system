<template>
  <div>
    <el-row :gutter="40" class="panel-group">
      <el-col
        :xs="24"
        :sm="12"
        :lg="6"
        class="card-panel-col"
        v-for="(list, i) in lists"
        :key="i"
      >
        <div class="card-panel" :style="{ background: list.color }">
          <div class="card-panel-description">
            <div class="card-panel-text">
              {{ list.name }}
            </div>
            <count-to
              :start-val="0"
              :end-val="list.endVal"
              :duration="list.duration"
              class="card-panel-num"
            />
          </div>
        </div>

      </el-col>
          <el-button @click="btnHandel" >Btn</el-button>

    </el-row>
  </div>
</template>
<script>
import CountTo from "vue-count-to";

export default {
  components: {
    CountTo,
  },
  data() {
    return {
      lists: [
        {
          startVal: 0,
          endVal: 999999,
          duration: 3600,
          name: "最高贷款金额",
          color: "#67c23a",
        },
        {
          startVal: 0,
          endVal: 444,
          duration: 3600,
          name: "回报率",
          color: "#67c23a",
        },
        {
          startVal: 0,
          endVal: 1233,
          duration: 3600,
          name: "业绩领跑",
          color: "#67c23a",
        },
        {
          startVal: 0,
          endVal: 44421,
          duration: 3600,
          name: "安慰底薪",
          color: "#409eff",
        },
      ],
    };
  },
  methods: {
    btnHandel(){
      console.log("a")
      let urlObject = window.URL;
      console.log(urlObject);
      let t = new Blob([]);
      console.log(t);
      let saveLink = document.createElement("a");
      console.log(saveLink);
      saveLink.download = 'aaaaa'
      saveLink.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    .card-panel-description {
      font-weight: bold;
      text-align: center;
      margin-top: 20px;

      .card-panel-text {
        line-height: 18px;
        color: #fff;
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
