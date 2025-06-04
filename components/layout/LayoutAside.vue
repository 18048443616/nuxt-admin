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
        active-text-color="#409EFF" @select="handleSelect">
        <el-menu-item v-for="item in menuItems" :key="item.id" :index="item.path">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span class="menu-title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import {
  HomeFilled,
  Operation,
  Setting,
  Document,
  User,
  DataLine,
  Goods,
  ChatDotRound
} from '@element-plus/icons-vue'
import { useMenuStore } from '~/stores/menu'
import { computed } from 'vue'

defineProps({
  collapse: Boolean
})

const menuStore = useMenuStore()
const menuItems = computed(() => menuStore.menus.filter(item => item.isShow))

const active = ref()
const handleSelect = (key) => {
  navigateTo({path: key})
}
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
  }

  .el-menu {
    border-right: none;

    :deep(.el-menu-item) {
      display: flex;
      align-items: center;

      .el-icon {
        margin-right: 8px;
        font-size: 18px;
      }
    }
  }
}
</style>