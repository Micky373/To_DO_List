import './styles.css';
// Populating the html element

const taskContainer = document.querySelector('.task_container');
let template = '';
let tick = '';
let display = '';
let taskLists = [];

function addToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const showActivity = (taskLists) => {
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
          <div class="the_task">
            <div class="check_box ${tick}"></div>
            <input type = "checkbox" class="checking ${display}">
            <input type="text" readonly value="${taskLists[i].description}">
          </div>
          <div class="delete_task none"><i class="fa fa-trash" aria-hidden="true"></i></div>      
      </div > `;
  }

  taskContainer.innerHTML = template;
}


// Add and Remove

const form = document.querySelector('form')

const addTask = () => {
  const activity = document.querySelector('#add_task').value;
  if (activity !== null) {
    const tasks = new Task(activity, false, ((taskLists.length) + 1));
    taskLists.push(tasks);
    showActivity([tasks]);
    addToLocalStorage(taskLists);
    // form.reset();
  }
};

form.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    addTask()
  }
});

window.onload = () => {
  if (localStorage.getItem('data') === null) {
    showActivity(taskLists);
  } else {
    const localActivities = JSON.parse(localStorage.getItem('data'));
    showActivity(localActivities);
    taskLists = localActivities;
  }
};