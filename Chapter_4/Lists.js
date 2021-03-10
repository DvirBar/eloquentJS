const arr = [1, 2, 3, 23, 82]

const list = arrayToList(arr)
console.log(list);

const nthValue = nth(list, 4)
console.log(nthValue);

const prepList = prepend(list, 0)
console.log(prepList);

const newArr = listToArray(list)
console.log(newArr);


function arrayToList(arr) {
    function buildList(arr, nextIndex) {
        if(!arr[nextIndex]) {
            return null
        }

        return {
            value: arr[nextIndex],
            rest: buildList(arr, nextIndex + 1)
        }
    }

    return buildList(arr, 0)
}

function listToArray(list) {
    if(!list.rest) {
        return [list.value]
    }
    
    return [list.value, ...listToArray(list.rest)]
}

function prepend(list, elem) {
    return {
        value: elem,
        rest: list
    }
}

function nth(list, index) {
    if(index === 0) {
        return list.value
    }

    if(list.rest === null) {
        return undefined
    }

    return nth(list.rest, index - 1)
}