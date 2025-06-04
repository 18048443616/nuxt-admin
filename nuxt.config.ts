// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // 私有键只在服务端可用
    serverOnly: 'server-value',
    // 公共键在服务端和客户端都可用
    public: {
      clientAvailable: 'client-value'
    }
  },
  css: ['~/assets/scss/common.scss'],
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt'
  ],
  elementPlus: { /** Options */ },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/variables.scss" as *;
          `
        }
      }
    }
  }
})
