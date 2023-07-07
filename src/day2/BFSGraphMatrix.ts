export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number): number[] | null {

    // code here 

    const seen = new Array(graph.length).fill(false)
    const prev = new Array(graph.length).fill(-1)

    seen[source] = true
    const queue: number[] = [source]

    do {
        const current = queue.shift() as number

        if (current === needle) {
            break
        }
        const edges = graph[current]
        for (let i = 0; i < edges.length; ++i) {
            if (edges[i] === 0) { continue }
            if (seen[i]) { continue }

            seen[i] = true
            prev[i] = current
            queue.push(i)
        }
        seen[current] = true

    } while (queue.length)

    let curr = needle
    const path: number[] = []

    while (prev[curr] !== -1) {
        path.push(curr)
        curr = prev[curr]
    }

    if (path.length) {
        return [source, ...path.reverse()]
    }

    return null

}


function bfdwalk(V: number, adj: number[][]) {

    const seen = new Array(V).fill(0)
    seen[0] = 1;
    const ans = []
    const queue = []
    queue.push(0)

    while (ans.length) {
        let node = queue.shift() as number
        ans.push(node)

        for (let i = 0; i < adj[node].length; ++i) {
            let tempNode = adj[node][i];
            if (!seen[tempNode]) {
                seen[tempNode] = 1
                queue.push(tempNode)
            }

        }
    }

}


function dfsOnGraph(V: number, adj: [][]) {
    const visted = new Array(V).fill(0)
    let start = 0;
    let path: number[] = []
    dfs(start, adj, visted, path)

}

function dfs(node: number, adj: number[][], visted: number[], path: number[]) {

    visted[node] = 1
    path.push(node)

    for (let i = 0; i < adj[node].length; ++i) {
        let tempNode = adj[node][i]
        if (!visted[tempNode]) {
            dfs(tempNode, adj, visted, path)
        }
    }

}