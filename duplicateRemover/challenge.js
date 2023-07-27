var arr1 = [1, 2, 3, 4, 4, 5];
var arr2 = ['apple', 'banana', 'cherry', 'banana', 'durian'];
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
var uniqueArr1 = removeDuplicates(arr1);
var uniqueArr2 = removeDuplicates(arr2);
console.log(uniqueArr1);
console.log(uniqueArr2);
