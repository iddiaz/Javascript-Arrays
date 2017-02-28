//Array.prototype.push()

// const pets = ['cat', 'dog'];
// const whishlist = ['hamster', 'horse', 'snake'];
// pets.push(whishlist) // [ 'cat', 'dog', [ 'hamster', 'horse', 'snake' ] ]
// pets.push('hamster', 'horse', 'snake'); // [ 'cat', 'dog', 'hamster', 'horse', 'snake' ]
//pets.push.apply(pets, whishlist); // [ 'cat', 'dog', 'hamster', 'horse', 'snake' ]
// pets.push('hamster')
// pets.push('Horse')
// console.log(pets);//

const input  = document.querySelector('#input');
const button = document.querySelector('#button');
const list   = document.querySelector('#list');

const pets   = [];

button.addEventListener('click', function(evt){
  if(input.value.length > 0 ){
    pets.push(input.value);
    input.value = '';
    render()
  }

})

function render() {
  list.innerHTML = pets.map(pet => `<li>${pet}</li>`).join('');
}