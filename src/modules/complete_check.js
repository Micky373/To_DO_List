import { addToLocalStorage } from './local_storage.js';

let taskLists = JSON.parse(localStorage.getItem('data'));

const finish = () => {
  const result = taskLists.filter((value) => value.completed !== true);
  taskLists = result;
  for (let i = 0; i < taskLists.length; i += 1) {
    taskLists[i].index = i + 1;
  }
  addToLocalStorage(taskLists);
  window.location.reload();
};

export default finish;