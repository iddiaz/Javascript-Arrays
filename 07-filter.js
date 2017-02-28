var lessons = [
  {
    title: 'Javascript Arrays in Depth - join',
    views: 960,
    tags: ['array', 'join']
  },
  {
    title: 'Javascript Arrays in Depth - concat',
    views: 1050,
    tags: ['array', 'concat']
  },
  {
    title: 'Javascript Arrays in Depth - slice',
    views: 2503,
    tags: ['array', 'slice']
  },
  {
    title: 'Javascript Functions in Depth - bind',
    views: 2500,
    tags: ['functions', 'bind']
  },

]

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
  .filter( lessons => lessons.tags.indexOf(searchTerm) > -1)
  .filter( lessons => lessons.views > minViews )
  .sort((a,b) => b.views - a.views )
  .map( lessons => `  <li>${lessons.title}</li>`)
  .join('\n');

console.log(`<ul>
${filtered}
</ul>`);

// <ul>
//   <li>Javascript Arrays in Depth - slice</li>
//   <li>Javascript Arrays in Depth - concat</li>
// </ul>