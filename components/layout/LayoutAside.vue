<template>
  <div class="aside-container" :class="{ 'is-collapse': collapse }">
    <div class="logo-container">
      <span class="logo">
        <span class="logo-full">Art Design Pro</span>
        <span class="logo-short">A</span>
      </span>
    </div>
    <div class="menu-container">
      <el-menu :default-active="active" :collapse="collapse" background-color="#fff" text-color="#333"
        active-text-color="#409EFF" @select="handleSelect" :unique-opened="true" :collapse-transition="false">
        <template v-for="item in menuItems" :key="item.id">
          <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
            <template #title>
              <i class="iconfont" :class="item.icon"></i>
              <span class="menu-title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="child in item.children" :key="child.id" :index="child.path" :disabled="child.disabled">
              <i class="iconfont" :class="child.icon"></i>
              <span class="menu-title">{{ child.title }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="item.path" :disabled="item.disabled">
            <i class="iconfont" :class="item.icon"></i>
            <span class="menu-title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from '~/stores/menu'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  collapse: Boolean
})

const route = useRoute()
const menuStore = useMenuStore()
const menuItems = computed(() => menuStore.menuTree)
console.log(menuItems.value, 6666)

const active = ref(route.path)
const handleSelect = (key) => {
  navigateTo({ path: key })
}

// 监听路由变化更新激活菜单
watch(
  () => route.path,
  (newPath) => {
    active.value = newPath
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.aside-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
  transition: width 0.3s ease-in-out;
  width: 200px;
  box-sizing: border-box;

  &.is-collapse {
    width: 64px;

    .logo-full {
      display: none !important;
    }

    .logo-short {
      display: inline-block !important;
    }

    .menu-title {
      display: none;
    }
  }

  .logo-container {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;

    .logo {
      font-weight: bold;
      font-size: 18px;
      color: #409EFF;

      .logo-full {
        display: inline-block;
      }

      .logo-short {
        display: none;
      }
    }
  }

  .menu-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background: #f5f5f5;
    }

    :deep(.el-menu) {
      border-right: none;

      .el-menu-item, .el-sub-menu__title {
        i {
          margin-right: 8px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>