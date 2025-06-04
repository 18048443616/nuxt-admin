<template>
  <div class="error-page">
    <h1>403</h1>
    <p>抱歉，您没有权限访问此页面</p>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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