const items = [
  {
    active: true,
    firstname: 'Shane',
    lastname: 'Rodoce'
  },
  {
    active: true,
    firstname: 'Shally',
    lastname: 'Osborn'
  },
  {
    active: false,
    firstname: 'Marc',
    lastname: 'Gondol'
  },
]


const mapped = items
  .filter( x => x.active) //
  .map(x => x.firstname) // ['shane','shally']


function createHtmlList(items){
  const listElements = items.map( item => `   <li>${item}</li>`).join('\n');
  return `<ul>\n${listElements}\n</ul>`
}

console.log(createHtmlList(mapped));