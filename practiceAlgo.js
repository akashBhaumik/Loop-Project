function merge(arr1, arr2) {
    const finalArray = [];
    let k = 0;
    let l = 0;
    while (k < arr1.length) {
        if (arr1[k] > arr2[l]) {
            finalArray.push(arr2[l])
            l++;
        } else {
            finalArray.push(arr1[k])
            k++;
        }
    }
    while (l < arr2.length) {
        finalArray.push(arr2[l])
        l++;
    }
    return finalArray;
}
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.ceil(arr.length / 2)
    let firstPart = arr.slice(0, middle)
    let secondPart = arr.slice(middle);
    return merge(mergeSort(firstPart), mergeSort(secondPart))
}
console.log(mergeSort([9, 2, 7, 6, 4]))