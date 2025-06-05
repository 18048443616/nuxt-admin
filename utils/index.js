//构建树结构(pid ：menu proute: route)
export function createTreeData(data, parentId = 'pid', children = 'children') {
  let result = []
  if (!Array.isArray(data)) {
      return result
  }
  let node = JSON.parse(JSON.stringify(data))
  node.forEach(item => delete item[children])//已经有的话就删掉
  let map = {}
  node.forEach(item => map[item.id] = item)
  let newNode = []
  node.forEach(dt => {
      let parents = map[dt[parentId]]
      if(dt[parentId] === dt.id){
          newNode.push(dt)
      }else{
          parents ? ((parents[children]) || (parents[children] = [])).push(dt) : newNode.push(dt)
      }
  })
  return newNode
}