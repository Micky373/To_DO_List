import { addToLocalStorage } from './local_storage.js';

let taskLists = JSON.parse(localStorage.getItem('data'));

const removeTask = (ref) => {
  const result = taskLists.filter((value) => value.index !== Number(ref));
  taskLists = result;
  for (let i = 0; i < taskLists.length; i += 1) {
    taskLists[i].index = i + 1;
  }
  addToLocalStorage(taskLists);
};

export default removeTask;