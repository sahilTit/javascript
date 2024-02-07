// const myObject = {
//   js: "javascript",
//   cpp: "c++",
//   py: "python",
//   swift: "swift by apple",
// };

// for (const key in myObject) {
//  console.log(`${key} is shortcut for ${myObject[key]}`);
// }

// const programming = ["js", "c++", "py", "java", "rb"];
// for (const key in programming) {
//     console.log(programming[key])
// }

// programming.forEach((value,item,arr) => {
//     console.log(value,item,arr)
// });
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

 myCoding.forEach((item)=>{
    console.log(item.languageName)
})
