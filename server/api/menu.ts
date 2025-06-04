export default defineEventHandler(async (event) => {
  // 模拟从数据库获取菜单数据（扁平结构）
  const menus = [
    {
      path: '/dashboard',
      title: '仪表盘',
      type: 1,
      icon: 'HomeFilled'
    },
    {
      path: '/dashboard/console',
      title: '控制台',
      type: 2
    },
    {
      path: '/dashboard/analysis',
      title: '分析页',
      type: 2
    }
  ]

  // 模拟接口延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    code: 200,
    data: menus,
    message: '获取菜单成功'
  }
}) 