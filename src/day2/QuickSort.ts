function qs(arr: number[], li: number, hi: number): void {
    if (li >= hi) {
        return;
    }

    const pivotIdx = partition(arr, li, hi);
    qs(arr, li, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], li: number, hi: number): number {
    const pivot = arr[hi];

    let idx = li - 1;

    for (let i = li; i < hi; i++) {
        if (arr[i] < pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}



