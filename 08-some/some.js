// Array.prototype.some()

var items = [1, 2, 3, 4, 5];
var hasThere = items.some(items => items === 3);
console.log(hasThere); // true

var task = [{
    title: 'Do laundry',
    completed: true
  },
  {
    title: 'Feed the cat',
    completed: true
  },
  {
    title: 'More array methods detais',
    completed: true
  },
]

// var list = document.querySelector('.task-list');
// list.classList.add(
//   task.some( task => task.completed === false) 
//     ?'task-list--uncompleted' : 'task-list--completed'
// )
// list.innerHTML = task
//   .map(task => task.completed ? `<s>${task.title}</s>` : task.title )
//   .map(task => `<li>${task}</li>`)
//   .join('');

function addTask(title) {
  if (task.some(task => task.title === title))
    return;

  task.push({
    title: title,
    completed: false
  })
}

addTask('Feed the cat')
console.log(task);
// [ { title: 'Do laundry', completed: true },
//   { title: 'Feed the cat', completed: true },
//   { title: 'More array methods detais', completed: true } ]