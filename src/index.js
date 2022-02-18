import './styles.css';
import showActivity from './modules/show_activity.js';
import addTask from './modules/add_task.js';
import { addToLocalStorage } from './modules/local_storage.js';

// Populating the html element

let taskLists = [];

// Add task

const activity = document.querySelector('#add_task');

activity.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value === '') return;
    addTask();
    window.location.reload();
    e.target.value = '';
  }
});

window.onload = () => {
  if (localStorage.getItem('data') === null) {
    showActivity(taskLists);
    addToLocalStorage(taskLists);
  } else {
    const localActivities = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < localActivities.length; i += 1) {
      localActivities[i].index = i + 1;
    }
    showActivity(localActivities);
    taskLists = localActivities;
    for (let i = 0; i < taskLists.length; i += 1) {
      taskLists[i].index = i + 1;
    }
    addToLocalStorage(taskLists);
  }
};
