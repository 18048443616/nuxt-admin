export default defineNuxtRouteMiddleware(async (to) => {
  console.log('路由中间件执行，目标路径:', to.path)
  const menuStore = useMenuStore()
  
  // 白名单路由，不需要权限验证
  const whiteList = ['/login', '/403', '/404']
  if (whiteList.includes(to.path)) {
    console.log('白名单路由，直接放行:', to.path)
    return
  }

  // 如果权限列表为空，获取权限数据
  if (menuStore.permissions.length === 0) {
    await menuStore.fetchPermissions()
    console.log('获取到的权限列表:', menuStore.permissions)
  }

  // 检查路由文件
  const router = useRouter()
  const routes = router.getRoutes()
  const hasComponent = routes.find(item => item.path === to.path)
  console.log('文件检查结果:', { path: to.path, hasComponent })
  if (!hasComponent) {
    console.log('未找到路由文件，准备跳转到 404:', to.path)
    return navigateTo('/404', { replace: true })
  }
  
  // 检查路由权限
  const hasPermission = menuStore.permissions.includes(to.path)
  console.log('权限检查结果:', { path: to.path, hasPermission })
  if (!hasPermission) {
    console.log('无权限访问，准备跳转到 403:', to.path)
    return navigateTo('/403', { replace: true })
  }
}) 