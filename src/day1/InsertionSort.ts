export default function insertion_sort(nums: number[]): void {


    for (let i = 1; i < nums.length; i++) {
        let numberToInsert = nums[i];
        for (let j = i - 1; j >= 0 && numberToInsert < nums[j]; j--) {
            nums[j + 1] = nums[j];
            nums[j] = numberToInsert;
        }
    }
}