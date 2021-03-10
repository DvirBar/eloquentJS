arr = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10, 11, 12 ,13]

console.log(reverseArray(arr)); 

console.log(reverseArrayInPlace(arr));

console.log(arr);


function reverseArray(arr) {
    let newArr = []
    
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]) 
    }

    return newArr
}

function reverseArrayInPlace(arr) {
    let last = arr.length - 1
    let counter = 0
    for(let i = 0; i < arr.length/2; i++) {
        counter ++
        const firstValue = arr[i]
        arr[i] = arr[last]
        arr[last] = firstValue

        last -- 
    }
    return arr
}