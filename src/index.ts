class ArrayOfAnything<T> {
    constructor(public collection: T[]){}

    get(index: number): T {
        return this.collection[index];
    }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);
const arr1 = new ArrayOfAnything([1, 2, 3]);