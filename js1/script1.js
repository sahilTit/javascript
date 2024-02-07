// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const map = new Map();
// map.set("IN", "India");
// map.set("SA", "South Africa");
// map.set("FR", "France");
// // console.log(map)

// for (const [key, value] of map) {
//   console.log(key,":-",value);
// }

const myObject = {
  game1: "NFS",
  game2: "GoW",
  game3: "SpiderMan",
};
for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
