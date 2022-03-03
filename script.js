function convertAndCheckNums(array) {
    let nums = [];
    for(let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if(Number.isNaN(num)) {
            return new Error(`${array[i]} is not a number.`);
        }
        nums.push(num)
    }
    return nums;
}
// console.log(stringsToNums(['hey', 2, '3', 4, '5', 2]))

function getMean(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]    
    }

    let result = sum / array.length
    return result
}
// console.log(getMean([1, 2, 3, 4, 5]))

function getMedian(array) {
    let nums = array.sort(function(a, b) {return a - b}) 
    let midId = Math.floor(nums.length / 2)

    if(array.length % 2 !== 0) {
        let result = nums[midId]
        return result
    } else if(array.length % 2 == 0) {
        let result = (nums[midId - 1] + nums[midId]) / 2
        return result
    }
}
// console.log(getMedian([5, 6, 50, 1, -5]))
// console.log(getMedian([1, 2, 3, 4]))

function getMode(array) {
    let modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < array.length; i += 1) {
        number = array[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    
    return modes;
}
// console.log(getMode([1, 2, 3, 4, 5, 2]))

module.exports = {
    convertAndCheckNums,
    getMean, 
    getMedian,
    getMode
}
