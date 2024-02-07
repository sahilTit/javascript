function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 3, 4));
const user = {
  username:"sahil",
  price:200
}
function handleObject(anyObject){
  console.log(`my name is ${anyObject.username} the cost is ${anyObject.price}`)
}

handleObject(user)

const myNewArry=[2,3,4]

function returnSecondValue(getArry){
  return getArry[1]
}
console.log(returnSecondValue(myNewArry))