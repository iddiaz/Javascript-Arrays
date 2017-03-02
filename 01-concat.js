//Array.prototype.concat();

var items = [1, 2];

var newItems = items.concat(3, 4, 5, 'strings', undefined);
var newItems = items.concat([2, 4, 5]);
var newItems = items.concat([2, 4, 5], [8, 8, 8]);
var newItems = items.concat([2, 4, 5], [8, 8, 8, [9, 10]]);
console.log(newItems);



var people = [{
      name: 'Shane',
   },
   {
      name: 'Shally'
   }
];
var people2 = [{
      name: 'Simon',
   },
   {
      name: 'Ben'
   }
];

people
   .concat(people2)
   .forEach(function (person) {
      console.log(person.name);
   })