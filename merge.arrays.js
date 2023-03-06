function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}
const array1 = [1,2,3,4,5,6,8];
const array2 = [5,6,7,8,9,10];

getUniqueAfterMerge(array1, array2);