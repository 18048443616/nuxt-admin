export default defineEventHandler(async (event) => {
  // 模拟从数据库获取菜单数据（扁平结构）
  const menus = [
    {
      id: 0,
      path: '/',
      title: '首页',
      type: 2,
      isShow: false
    },
    {
      id: 1,
      path: '/dashboard',
      title: '仪表盘',
      type: 1,
      icon: 'icon-yuanbao',
      isShow: true,
      pid:  1
    },
    {
      id: 2,
      path: '/dashboard/console',
      title: '控制台',
      type: 2,
      isShow: true,
      pid:  1
    },
    {
      id: 3,
      path: '/dashboard/analysis',
      title: '分析页',
      type: 2,
      isShow: true,
      pid:  1
    },
  ]

  // 模拟接口延迟
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    code: 200,
    data: menus,
    message: '获取菜单成功'
  }
}) 