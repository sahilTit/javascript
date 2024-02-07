// const coding = ["js", "py", "c", "rb", "cpp"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });
// console.log(values)''

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums= myNums.filter((num) => num > 4);

// console.log(newNums)
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);
const books = [
  {
    title: "Book One",
    genere: "Fiction",
    publish: 1999,
    edition: 2003,
  },
  {
    title: "Book two",
    genere: "Fiction",
    publish: 1989,
    edition: 2013,
  },
  {
    title: "Book three",
    genere: "Fiction",
    publish: 1989,
    edition: 2023,
  },
  {
    title: "Book four",
    genere: "History",
    publish: 1997,
    edition: 2007,
  },
  {
    title: "Book five",
    genere: "Fiction",
    publish: 1991,
    edition: 2000,
  },
];

let userBooks = books.filter((bk) => bk.genere === "Fiction");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genere ==="History"
});

console.log(userBooks)
