import Task, { addToLocalStorage } from './local_storage.js';

import showActivity from './show_activity.js';

const taskLists = (localStorage.length === 0) ? [] : JSON.parse(localStorage.getItem('data'));

const addTask = () => {
  const activity = document.querySelector('#add_task').value;
  if (activity !== null) {
    const tasks = new Task(activity, false, ((taskLists.length) + 1));
    taskLists.push(tasks);
    showActivity([tasks]);
    addToLocalStorage(taskLists);
  }
};

export default addTask;
