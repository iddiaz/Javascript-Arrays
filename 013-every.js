const fields = [
  {
    field: 'email',
    value: 'shane@example.com',
    errors: []
  },
  {
    field: 'name',
    value: '',
    errors: ['no name provided']
  },
];

const isValid = fields.every( field => field.errors.length === 0);

// console.log(isValid);

const videos = [
  {
    title: 'Array methods details: concat',
    length: 310,
    viewed: 310
  },
  {
    title: 'Array methods details: join',
    length: 420,
    viewed: 360   
  }
];

function complete(x){
  return x.viewed === x.length;
}

// const isCompleted = videos.every( video => video.viewed === video.length ); // false
const isCompleted = videos.every( complete );
const completed = videos.filter( complete );

console.log(isCompleted);
console.log(completed);