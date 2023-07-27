const arr1 = [1, 2, 3, 4, 4, 5];
const arr2 = ['apple', 'banana', 'cherry', 'banana', 'durian'];

function removeDuplicates(arr: (string | number)[]) {
    return Array.from(new Set(arr))
}

const uniqueArr1 = removeDuplicates(arr1);
const uniqueArr2 = removeDuplicates(arr2);

console.log(uniqueArr1);
console.log(uniqueArr2);