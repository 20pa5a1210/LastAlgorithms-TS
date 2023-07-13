type Node<T> = {
    value: T;
    next: Node<T> | null;
}
export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;




    constructor() {
        this.length = 0;
        this.head = null;
    }

    prepend(item: T): void {

    }
    insertAt(item: T, idx: number): void {

    }
    append(item: T): void {
        if (this.head === null) {
            this.head = {
                value: item,
                next: null
            }

        }
        else {
            let current: Node<T> = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = {
                value: item,
                next: null
            }
        }
    }
    remove(item: T): T | undefined {
        let current: Node<T> | null = this.head;
        while (current !== null) {
            if (current.next?.value === item) {
                // TODO: remove item

                current.next = null;

            }
            current = current.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}