//join()
var names =[ 'Shane','Alan', 'Osbourne']
console.log(names[0] + ' ' + names[1] + ' '+ names[2]); //bad

console.log(names.join(' '));

var help = [
  'usage',
  '     foo-app <input>'
];

console.log(help);

if(process.argv[2] === 'help'){ //run in node.
  console.log(help.join('\n'));
}

var names2 = 'shane osbourne';

var upper = names2.split(' ') // return [shane, osbourne ]
              .map( (x) => x.charAt(0).toUpperCase() + x.slice(1) ) // return [Shane, Osbourne]
              .join(' ') // return Shane Osbourne

console.log(upper);
                  
