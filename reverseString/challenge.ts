function reverseString(value: string): string {
    return value.split('').reverse().join('');
}

console.log(reverseString("My String"))