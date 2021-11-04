<template>
  <div>
    <el-aside width="200px">
      <el-menu
        router
        default-active="/console"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/console">
          <i class="el-icon-setting" />
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="/loan-input">
          <i class="el-icon-setting" />
          <span slot="title">贷款申请</span>
        </el-menu-item>

        <el-menu-item index="/input-manager">
          <i class="el-icon-setting" />
          <span slot="title">贷款申请 </span>
        </el-menu-item>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location" />
            <span>贷款审批</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/loan-approve/first">
              初审
            </el-menu-item>
            <el-menu-item index="/loan-approve/end">
              终审
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    handleOpen() {
      console.log('1')
    },
    handleClose() {
      console.log('2')
    }
  }
}
</script>
