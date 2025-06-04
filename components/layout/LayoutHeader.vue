<template>
  <header class="header">
    <div class="header-left">
      <el-button :icon="isCollapse ? Expand : Fold" @click="isCollapse = !isCollapse" circle size="small" />
    </div>
    <div class="header-right">
      <el-input placeholder="搜索" :prefix-icon="Search" size="small" class="search-input" />
      <el-button :icon="Bell" circle size="small" />
      <el-button :icon="Setting" circle size="small" />
      <el-avatar src="https://i.pravatar.cc/40" size="small" class="avatar" />
    </div>
  </header>
</template>

<script setup>
import { Search, Bell, Setting, Expand, Fold } from "@element-plus/icons-vue"

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false
  },
})
const emits = defineEmits(['toggle-collapse'])
const isCollapse = computed({
  get() {
    return props.collapse
  },
  set(val) {
    emits('toggle-collapse', val)
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;

  .header-left {
    display: flex;
    align-items: center;
  }

  .header-right {
    display: flex;
    align-items: center;

    .search-input {
      width: 180px;
      margin-right: 16px;
    }

    .avatar {
      margin-left: 16px;
    }
  }
}
</style>
