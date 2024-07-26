"use strict";
const binerySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        if (guess === item) {
            return mid;
        }
        else if (guess > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return null;
};
const myList = [1, 3, 5, 7];
console.log(binerySearch(myList, 5));
console.log(binerySearch(myList, 6));
