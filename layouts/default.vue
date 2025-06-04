<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'" class="aside-transition">
        <LayoutAside :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <LayoutHeader 
            :collapse="isCollapse" 
            @toggle-collapse="isCollapse = !isCollapse" 
          />
        </el-header>
        <el-main>
          <LayoutMain /> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100vh;
  
  .aside-transition {
    transition: width 0.3s ease-in-out;
    overflow: hidden;
  }
  
  :deep(.el-container) {
    height: 100%;
  }
  
  :deep(.el-header) {
    padding: 0;
    height: 56px;
  }
  
  :deep(.el-main) {
    padding: 24px;
    background-color: #f5f7f9;
  }
}
</style>