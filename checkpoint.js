/*Given two sets of elements, find the sum of all distinct elements from the set. 
In other words, find the sum of all elements which are present in either of the given set

Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements 4, 7, 2 )
*/

const set1 = [3, 1, 7, 9]
const set2 = [2, 4, 1, 9, 3]



function sumOfDistinct(arr1, arr2) {
    let distinct = []
    let sum = 0

    for (let num of arr1) {
        if (!arr2.includes(num) && !distinct.includes(num)) {
            distinct.push(num)
            sum += num
        }
    }

    for (let num2 of arr2) {
        if (!arr1.includes(num2) && !distinct.includes(num2)) {
            distinct.push(num2)
            sum += num2
        }

    }
    return `Output: ${sum} (distinct elements ${distinct})`
}
console.log(sumOfDistinct(set1, set2));