<template>
  <div id="app">
    <NuxtLayout></NuxtLayout>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

// 如果能访问到 serverOnly，说明在服务端
if (config.serverOnly) {
  console.log('在服务端运行')
} else {
  console.log('在客户端运行')
}

</script>

<style lang="scss">

</style>