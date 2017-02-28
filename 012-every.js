//Array.prototype.every()

const items = [1,2,3,4,5];
// const result = items.every( item => item < 5 ); //false
// const result = items.every( item => item < 10 ); //true
const result = items.every( item => {
  //  console.log('Called with' , item);
   return item < 5;
  });

// console.log(result);

const items2 = ['1','2',3,'4','5'];
const res2 = items2.every( x => typeof x === 'string')

console.log(res2);