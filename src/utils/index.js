// function movieApp(argsVec) {
//     switch (argsVec[2]) {
//         case 'add':
//             const movie = [argsVec[3], argsVec[4]. argsVec[5]]
//             console.table(movie)
//             break;
//         default:
//             console.log('Command not recognised')
//             break;
//     }
// }

// movieApp(process.argv)

const movieArray = [];

class Movie {
  constructor(title, actor = "not specified") {
    this.title = title;
    this.actor = actor;
  }
  add() {
    movieArray.push(this)
    console.log(this)
    console.table(movieArray)
  }
}

module.exports = Movie;

