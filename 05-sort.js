// Array.prototype.sort() => Ordena elementos de array,pero segun su posición de caracter unicode.
var items = ['shane', 'sally', 'isaac']
items.sort() //[ 'isaac', 'sally', 'shane' ] ok!
console.log(items);
var itemsNum = [10, 30, 2, 20];
// itemsNum.sort(); //[10,2,20,30] 
itemsNum.sort((a, b) => a - b) //[ 2, 10, 20, 30 ]
itemsNum.sort((a, b) => {
  if (a - b === 0) {
    return 0;
  }
  if (a - b < 0) {
    return -1
  }
  if (a - b < 0) {
    return 1
  }
}) //[ 2, 10, 20, 30 ]
console.log(itemsNum);

var lessons = [
  {
    title: 'Javascript Array Methods - concat',
    views: 1000
  },
  {
    title: 'Javascript Array Methods - slice',
    views: 1050
  },
  {
    title: 'Javascript Array Methods - join',
    views: 1025
  }
]

var list = lessons
  .sort((a,b) => b.views - a.views )
  .map( x => `  <li>${x.title} (${x.views})</li>`)
  .join('\n');

var output = `<ul>\n${list}\n</ul>`
console.log(output);
// <ul>
//   <li>Javascript Array Methods - slice (1050)</li>
//   <li>Javascript Array Methods - join (1025)</li>
//   <li>Javascript Array Methods - concat (1000)</li>
// </ul>
  