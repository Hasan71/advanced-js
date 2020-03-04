const nums = [1,2,3,4,5,6,7,8,9];

const part = nums.slice(2,6);

console.log(part);

console.log(nums);


const part2 = nums.splice(2, 6, 100, 200, 300);

console.log(part2);

console.log(nums);

const joinNums = nums.join(" Hasan ");

console.log(joinNums);




