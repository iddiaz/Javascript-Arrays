// Array.prototype.slice()
// var person = { name: 'Shane'}
// var items = [1, person];
// var copy = items.slice(1,-1)
// copy.push(6,7)
// copy[0]= 100;
// var copy = items.slice()
// copy[1].name = 'shally'

// console.log(items);
// console.log(copy);

var person = {
  name: 'jhon-doe'
};
var filters = {
  'deslugify': x => x.replace('-', ' '),
  'uppercase': x => x.toUpperCase()
}

var input = 'name | deslugify | uppercase ' //JON DOE => in angular
var sections = input.split('|').map( x => x.trim()) // [name, deslugify, uppercase]

var ref = person[sections[0]] //jhon-doe
var output = sections
  .slice(1)
  .reduce((prev,next) => {
    if (filters[next]){
      return filters[next].call(null, prev);
    }
    return prev;
  }, ref)

  console.log(output); //JHON DOE
