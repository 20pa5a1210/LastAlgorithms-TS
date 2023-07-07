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