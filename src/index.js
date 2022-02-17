import './styles.css';

// Populating the html element

const taskContainer = document.querySelector('.task_container');

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

let taskLists = [];

const showActivity = (taskLists) => {
  for (let i = 0; i < taskLists.length; i += 1) {
    const div = document.createElement('div')
    div.classList.add('task')
    div.setAttribute('id', `${taskLists[i].index}`)
    const theTask = document.createElement('div')
    theTask.classList.add('the_task')
    const checkBox = document.createElement('input')
    checkBox.classList.add('checking')
    checkBox.type = "checkbox"
    theTask.appendChild(checkBox)
    const taskElement = document.createElement('input')
    taskElement.type = "text"
    taskElement.classList.add('to_do')
    taskElement.value = `${taskLists[i].description}`
    theTask.appendChild(taskElement)
    div.appendChild(theTask)
    const deleteIcon = document.createElement('div')
    deleteIcon.classList.add('delete_task')
    deleteIcon.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'
    deleteIcon.id = taskLists[i].index
    deleteIcon.addEventListener('click', (e) => {
      const ref = e.target.parentElement.id;
      removeTask(ref)
      e.target.parentElement.parentElement.remove();
    });
    div.appendChild(deleteIcon)
    taskContainer.appendChild(div)
  }
}

// Add task

const activity = document.querySelector('#add_task')

const addTask = () => {
  const activity = document.querySelector('#add_task').value;
  if (activity !== null) {
    const tasks = new Task(activity, false, ((taskLists.length) + 1));
    taskLists.push(tasks);
    showActivity([tasks]);
    addToLocalStorage(taskLists);
  }
};

activity.addEventListener('keypress', (e) => {
  if (e.code === "Enter") {
    if (e.target.value === '') return
    addTask()
    e.target.value = ''
  }
});

window.onload = () => {
  if (localStorage.getItem('data') === null) {
    showActivity(taskLists);
  } else {
    const localActivities = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < localActivities.length; i++) {
      localActivities[i].index = i + 1
    }
    showActivity(localActivities);
    taskLists = localActivities;
    addToLocalStorage(taskLists)
  }
};

const removeTask = (ref) => {
  const result = taskLists.filter((value) => value.index !== Number(ref));
  taskLists = result;
  // for (let i = 0; i < taskLists.length - 1; i++) {
  //   taskLists[i].index = (i + 1)
  // }
  addToLocalStorage(taskLists);
};
