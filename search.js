// Linear Search 

let numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]

let targit = 3

function liniarSearch(arr, pointer) {

    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        if (arr[i] === pointer) {
            return `Foune on Indes ${i}`
        }
    }
    return false
}
console.log(liniarSearch(numbers, targit))

function binarySearch(arr, pointer) {
    let start = arr[0]
    let end = arr.length - 1
    let mid

    while (start <= end) {
        mid = Math.floor((start + end) / 2)

        if (arr[mid] === targit) {
            return `Foune on Index ${mid}`
        } else if (arr[mid] < targit) {
            start = mid + 1
        } else {
            end = mid - 1
        }
        // console.log(mid)

    }
    return false
}


console.log(binarySearch(numbers, targit))