function reverseArrayInPlace(arr){
    for (let index = 0; index < arr.length/2; index++) {
        var tempVar = arr[index];
        arr[index] = arr[arr.length - 1 - index];
        arr[arr.length - 1 -index] = tempVar;
        }
    return arr;
}

reverseArrayInPlace([1,2,3,4,5,6,7])