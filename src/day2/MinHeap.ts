export default class MinHeap {
    public length: number;

    private data: number[]


    constructor() {
        this.data = []
        this.length = 0
    }

    insert(value: number): void {


    }
    delete(): number {

    }
    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx)
        const rIdx = this.rightChild(idx)
        if (idx > this.length || lIdx >= this.length) {
            return
        }
        const lV = this.data[lIdx]
        const rV = this.data[rIdx]
        const v = this.data[idx]
        if (lV > rV) {
            this.data[idx] = rV
            this.data[rIdx] = v
            this.heapifyDown(rIdx)

        } else if (lV < rV) {
            this.data[idx] = lV
            this.data[lIdx] = v
            this.heapifyDown(lIdx)
        }

    }
    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return
        }
        const p = this.parent(idx)
        const parentValue = this.data[p]
        const v = this.data[idx]

        if (parentValue > v) {
            this.data[idx] = parentValue;
            this.data[p] = v
            this.heapifyUp(p)
        }
    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }
    private leftChild(idx: number): number {
        return idx * 2 + 1
    }
    private rightChild(idx: number): number {
        return idx * 2 - 1
    }
}