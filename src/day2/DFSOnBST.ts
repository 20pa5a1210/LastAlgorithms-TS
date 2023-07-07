
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return Search(head, needle)

}

function Search(curr: BinaryNode<number> | null, needle: number): boolean {
    
    if (!curr) {
        return false
    }
    if (curr.value === needle) {
        return true
    }
    if (curr.value < needle) {
        return Search(curr.right, needle)
    }
    return Search(curr.left, needle)
}