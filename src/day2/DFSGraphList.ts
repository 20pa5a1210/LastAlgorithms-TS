export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {



}

function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[]): boolean {
    // code here 


    if (curr === needle) {
        return true
    }
    if (seen[curr]) {
        return false
    }














    return false
}