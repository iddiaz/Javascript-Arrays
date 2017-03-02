//Array.prototype.map()

const items = [1,2,3,4,5]
const itemsStr = ['1','2','3','4','5']
const mapped = itemsStr.map(function(item){
  // return item * 2
  return Number(item)
})
// console.log(items);
// console.log(itemsStr);
// console.log(mapped);

// const names = ['Shane', 'Sally'];
const names = ['Shane', 'Sally'];
// const mappNames = names.map(function(name){
//   return name.trim();
// })

const mappToObjects = names.map(function(name){
  return {
    firstname: name
  }
})
// console.log(names);
// console.log(mappNames);
// console.log(mappToObjects);

// mappToObjects.forEach(function(person){
//   console.log(person.firstname);
// });

const itemsObjs = [
  {
    firstname: 'Shane',
    lastname: 'Rodoce'
  },
  {
    firstname: 'Shally',
    lastname: 'Osborn'
  },
]

itemsObjs.forEach(function(person){
  console.log(person.firstname + ' ' + person.lastname);
})

const mapping = itemsObjs.map( person => {
  return {
    firstname: person.firstname,
    lastname: person.lastname,
    fullname: `${person.firstname} ${person.lastname}`
  }
})

mapping.forEach( person => console.log(person.fullname));

const mappedObjs = itemsObjs.map( x => x.firstname );
console.log(mappedObjs);
