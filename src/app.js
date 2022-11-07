const Movie = require('./utils/index');

function myApp(argVec) {
  if (argVec[2] === 'add') {
    const newMovie = new Movie(argVec[3], argVec[4])
    newMovie.add();
  } else if (argVec[2] === 'addMulti') {
    const newMovie1 = new Movie(argVec[3], argVec[4])
    newMovie1.add();
    const newMovie2 = new Movie(argVec[5], argVec[6])
    newMovie2.add();
    const newMovie3 = new Movie(argVec[7], argVec[8])
    newMovie3.add();
  } else {
    console.log('Command not recognised')
  }
}

myApp(process.argv)
// function myApp(args) {
//   switch (args[2]) {
//     case "Harry":
//       console.log("Hello Mr Potter");
//       break;
//     case "Ron":
//       console.log("Hello Mr Weasley");
//       break;
//     case "Hermione":
//       console.log("Hello ms. Granger");
//       break;
//     default:
//       console.log("Hello Whoever you are!");
//       break;
//   }
// }
// myApp(process.argv)