type Qnode<T> = {
    value: T;
    next?: Qnode<T>;
}
export default class Queue<T> {
    public length: number;
    private head: Qnode<T> | undefined;
    private tail: Qnode<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Qnode<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;

    }
    deque(): T | undefined {
        if (!this.head) return undefined;
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;
        return head.value;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}