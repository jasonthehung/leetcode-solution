/* forEach solution */
// @ts-ignore
function removeElement(nums: number[], val: number): number {
    let k = 0

    nums.forEach((n) => {
        if (n !== val) {
            n = nums[k]
            k++
        }
    })

    return k
}

/* for loop solution */
// @ts-ignore
function removeElement(nums: number[], val: number): number {
    let k = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        } else {
            // do nothing
        }
    }

    return k
}
