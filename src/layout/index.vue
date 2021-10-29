<template>
  <div>
    <el-container>
      <NavMenu />
      <el-container>
        <el-header>
          <Top />
        </el-header>
        <el-main>
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {NavMenu,Top,Main} from './components'

export default {
  components: {
    Main,
    Top,
    NavMenu,
  },
  methods: {
   
  },
};
</script>

