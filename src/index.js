import './styles.css';
// Populating the html element

const taskContainer = document.querySelector('.task_container');
let template = '';
let tick = '';
let display = '';
const taskLists = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To do list project',
    completed: false,
    index: 1,
  },
];

for (let i = 0; i < taskLists.length; i += 1) {
  if (taskLists[i].completed === false) {
    tick = 'none';
    display = '';
  } else {
    tick = '';
    display = 'none';
  }
  template += `
    <div class="task" id="${taskLists[i].index}">
        <div class="check_box ${tick}"></div>
        <input type = "checkbox" class="checking ${display}">
        <div>${taskLists[i].description}</div>        
    </div > `;
}

taskContainer.innerHTML = template;
