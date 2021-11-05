<template>
  <div class="header">
    <el-breadcrumb
      separator="/"
      class="breadcrumb"
    >
      <el-breadcrumb-item
        v-for="v in list"
        :key="v.path"
      >
        <template>
          {{ v.meta.title }}
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="ad">
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { removeToken,getToken } from '@/utils/setToken'
export default {
  data() {
    return {
      list: []
    }
  },
  watch: {
    $route(to, from) {
      this.list = to.matched.filter((item) => item.meta && item.meta.title)
    }
  },
  mounted() {
    this.list = this.$route.matched.filter(
      (item) => item.meta && item.meta.title
    )
  },
  methods: {
    handleCommand(val) {
      this.$router.push('/login')
      removeToken();
      console.log(getToken())
    }
  }
}
</script>
<style lang="scss">
.header {
  line-height: 60px;
  .breadcrumb {
    display: inline-block;
  }
  .el-dropdown {
    float: right;
  }
}
</style>
