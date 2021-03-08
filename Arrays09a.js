// ARRAYS


const emptyArray = [];
console.log("length of array: ",emptyArray.length)

const multiArray = [["X", "O", "X"], ["O", "O", "X"], ["O", "X", "X"]]
const countries = ["UK", "France", "Spain"]

console.log("multiArray",multiArray)


// concat

const array1 = [1,2,3]
const array2 = ["a", "b", "c"]

const mergedArray1 = array1.concat(array2)
console.log("mergedArray1", mergedArray1)

const mergedArray2 = array2.concat(array1)
console.log("mergedArray2", mergedArray2)

console.log("array1",array1)
console.log("array2",array2)

console.log("includes 1?", array1.includes(1))
console.log("includes 4?", array1.includes(4))

const indexOf2 = array1.indexOf(2)
console.log("indexOf2",indexOf2)

const indexOf4 = array1.indexOf(4)
console.log("indexOf4",indexOf4)

console.log("join array2", array2.join(""))

console.log(array1.concat(array2).join("hello").split("").slice(10).map(v => v.toUpperCase()))
///Push - add to the end of the array
//Pop - remove from the end of the array
////Unshift - add to the start of the array
//Shift - remove from the start of the array
//