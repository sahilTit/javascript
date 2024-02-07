// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 11).filter((num)=> 50<num);
// console.log(newNums);
const myNums=[1,2,3,4];

// const myTotal = myNums.reduce(function(acc,currval){
//     return acc+currval
// },0)

const myTotal = myNums.reduce((acc,curr)=> acc+curr,5)

console.log(myTotal)