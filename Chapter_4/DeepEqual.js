console.log(deepEqual(1, 2));
console.log(deepEqual(2, 2));
console.log(deepEqual(2, "2"));

const obj1 = {
    name: "Dvir",
    age: 23,
    address: {
        country: "Israel",
        city: "Jerusalem",
        arr: [1, 2, 3, 5],
        street: "Blafour",
        building: {
            number: 1,
            appartment: 3
        }
    }
}

const obj2 = {
    name: "Dvir",
    age: 23,
    address: {
        country: "Israel",
        city: "Jerusalem",
        street: "Blafour",
        arr: [1, 2, 3, 5],
        building: {
            number: 1,
            appartment: 3
        }
    }
}

console.log(deepEqual(obj1, obj2));

function deepEqual(value1, value2) {

    // If both values are objects
    if(typeof value1 === 'object' &&
    typeof value2 === 'object') {
        /* If there the key length is not the same, 
        the objects are not equal */
        if(Object.keys(value1).length !== 
            Object.keys(value2).length) {
            return false
        }

        /* We iterate the object keys, and 
        call deepEqual each time. if one of the values is false, 
        we return false.
        if we finished the loop, we can return true */
        for(let key in value1) {
            console.log(`compare ${value1[key]} with ${value2[key]}`);
            const isEqual = deepEqual(value1[key], value2[key])
            if(!isEqual) {
                return false
            }
        }

        return true
    }

    return value1 === value2
}