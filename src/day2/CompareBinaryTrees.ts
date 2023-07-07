export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) {
        return true
    }
    if (a === null || b === null) {
        return false
    }

    if (a.value !== b.value) {
        return false
    }
    return compare(a.left, b.left) && compare(a.right, b.right)
}
 function compare1(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return JSON.stringify(walk(a, [])) === JSON.stringify(walk(b, []))
}



function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }


    walk(curr.left, path)

    path.push(curr.value);
    walk(curr.right, path)
    return path;

}