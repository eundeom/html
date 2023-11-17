// * forEach *

const movies = [
  { title: "Alien", score: 90 },
  { title: "Parasite", score: 95 },
];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// });

// * map *
// 새로운 array를 만듦
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const double = numbers.map(function (num) {
//   return num * num;
// });

// console.log(double);

const mov = movies.map(function (movie) {
  return movie.title.toUpperCase();
});
console.log(mov);
