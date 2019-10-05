class ArrayOfAnything<T> {
    constructor(public collection: T[]){}

    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);
const arr1 = new ArrayOfAnything([1, 2, 3]);

// Example of generic with functions

function printStrings(arr:string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3]);