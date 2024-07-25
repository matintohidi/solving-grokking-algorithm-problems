const binerySearch = (list : Array<number> , item : number) => {
    let low : number = 0;
    let high : number = list.length - 1
        
    while (low <= high) {
        const mid : number = Math.floor((low + high) / 2);
        const guess = list[mid];
        
        if(guess === item) {
            return mid;
        } else if(guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null;
}

const myList = [1,3,5,7];

console.log(binerySearch(myList , 5));
console.log(binerySearch(myList , 6));