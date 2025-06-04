<template>
  <div class="error-page">
    <h1>404</h1>
    <p>抱歉，没有该页面文件</p>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blank'
})
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  
  h1 {
    font-size: 72px;
    margin-bottom: 20px;
    color: #f56c6c;
  }
  
  p {
    font-size: 20px;
    margin-bottom: 30px;
    color: #666;
  }
  
  a {
    color: #409eff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style> 