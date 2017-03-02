//Array.prototype.filter();

var items = [1,2,3,4,5];
var filtered = items.filter( items => items > 3) //[ 4, 5 ]
console.log(filtered);


var people = [
  {
    name: 'Shane',
    pets: ['cat','dog']
  },
  {
    name: 'Simon',
    pets: ['horse']
  },
  {
    name: 'Ben',
    // pets: []
  },
];

// var filterdPeople = people.filter(people => people.pets.length); // Devuelve las personas que tengan mascotas, pero si una no tiene esa propiedad producirá un error
var filterdPeople = people.filter(people => people.pets);
console.log(filterdPeople);