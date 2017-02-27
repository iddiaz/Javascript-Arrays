//Array.prototype.indexOf()

var family = ['Shane', 'Perry', 'Isaac', 'Kittie'];
console.log(family.indexOf('Kittie'));

var KittieExists = family.indexOf('Kittie') > -1 
console.log(KittieExists);

(!KittieExists) ? family.push('Kittie') : true

console.log(family);


var whiteList = ['.css', '.js'];

var events =  [
  {
    file: 'css/core.css'
  },
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];

var filtered = events.filter( event => {
  var ext = require('path').extname(event.file);
  return whiteList.indexOf(ext) > -1;
});

console.log(filtered); // [ { file: 'css/core.css' }, { file: 'js/app.js' } ]
