"use strict";
const findBiggest = (arr) => {
    let biggest_index = 0;
    let biggest = arr[biggest_index];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest_index = i;
            biggest = arr[i];
        }
    }
    return { biggest, index: biggest_index };
};
const selectionSort = (arr) => {
    let newArr = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let biggest = findBiggest(arr);
        newArr.push(biggest.biggest);
        arr.splice(biggest.index, 1);
    }
    return newArr;
};
const my_array = [-2, 1, -5, 10, 4];
console.log(selectionSort(my_array));
