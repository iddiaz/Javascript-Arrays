//Array.prototype.reduce()

const items = [1,2,3,4,5];
const sum = items.reduce(function(prev,next){
  console.log('prev', prev, 'next', next);
  return prev + next
},500)

// fn(1,2) -> 3
// fn(3,3) -> 6
// fn(6,4) -> 10
// fn(10,5) -> 15 
console.log(sum);
console.log('-----------------');
const albums = [
  {
    title: 'Holiday in Spain',
    images: ['01.jpg', '02.jpg']
  },
  {
    title: 'House renovation',
    images: ['03.jpg', '04.jpg', '05.jpg']
  },
]

const numImages = albums.reduce((prev,album) => {
  return prev + album.images.length;
}, 0 )

console.log(numImages);


const images = albums.reduce((prev,album) => {
  return prev.concat(album.images);
}, [] )

console.log(images);

console.log('---------------');

const users = [
  {
    id: '01',
    name: 'Shane'
  },
  {
    id: '02',
    name: 'Shally'
  },
]

const newUsers = users.reduce((obj, user) => {
  obj[user.id] = user;
  return obj;
}, {})

console.log(newUsers);
console.log(newUsers['02'].name);