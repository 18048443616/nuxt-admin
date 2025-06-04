import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    permissions: [] as string[],
    loading: false
  }),

  actions: {
    async fetchPermissions() {
      this.loading = true
      try {
        const { data } = await useFetch('/api/menu')
        if (data.value?.code === 200) {
          // 直接存储路径作为权限列表
          this.permissions = data.value.data.map(item => item.path)
        }
      } catch (error) {
        console.error('获取权限列表失败:', error)
      } finally {
        this.loading = false
      }
    }
  }
}) 