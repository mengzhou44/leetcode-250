function validTree(n, edges) {
    if (edges.length === 0)  {
         return n===1 
    }
    let map = new Map()
    for(let [n1, n2] of edges) {
        if (!map.has(n1)) {
            map.set(n1, new Set())
        }
        if (!map.has(n2)) {
            map.set(n2, new Set())
        }
        map.get(n1).add(n2)
        map.get(n2).add(n1)
    }
    let visited = new Set()
    let queue = [edges[0][0]]
    while(queue.length>0) {
         let node = queue.shift()
         visited.add(node)
         
          for(let nei of map.get(node)) {
              if (queue.includes(nei)) return false 
              if (!visited.has(nei)) {
                  queue.push(nei)
                  visited.add(nei)
              }
          }
         
    }

    return  visited.size === n
}

console.log(validTree(5,[[0, 1], [0, 2], [0, 3], [1, 4]]))
