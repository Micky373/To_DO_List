import { addToLocalStorage } from './local_storage.js';
import removeTask from './remove_task.js';

const taskContainer = document.querySelector('.task_container');

const showActivity = (taskLists) => {
  for (let i = 0; i < taskLists.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('task');
    div.setAttribute('id', `${taskLists[i].index}`);
    const theTask = document.createElement('div');
    theTask.classList.add('the_task');
    const checkBox = document.createElement('input');
    checkBox.classList.add('checking');
    checkBox.type = 'checkbox';
    theTask.appendChild(checkBox);
    const taskElement = document.createElement('input');
    taskElement.type = 'text';
    taskElement.classList.add('to_do');
    taskElement.id = taskLists[i].index;
    taskElement.setAttribute('data-id', `${taskLists[i].index}`);
    taskElement.value = `${taskLists[i].description}`;
    taskElement.addEventListener('click', (e) => {
      const editTask = e.target.parentNode.parentNode;
      const deleteIcon = editTask.querySelector('.delete_task');
      e.target.parentNode.style.backgroundColor = 'lightgoldenrodyellow';
      e.target.style.backgroundColor = 'lightgoldenrodyellow';
      e.target.parentNode.parentNode.style.backgroundColor = 'lightgoldenrodyellow';
      deleteIcon.classList.remove('none');
      const index = e.target.dataset.id;
      taskLists[index - 1].description = e.target.value;
      addToLocalStorage(taskLists);
    });
    taskElement.addEventListener('blur', (e) => {
      e.target.parentNode.style.backgroundColor = 'white';
      e.target.style.backgroundColor = 'white';
      e.target.parentNode.parentNode.style.backgroundColor = 'white';
      setTimeout(() => {
        window.location.reload();
      }, 200);
    });
    theTask.appendChild(taskElement);
    div.appendChild(theTask);
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete_task');
    deleteIcon.classList.add('none');
    deleteIcon.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteIcon.id = taskLists[i].index;
    deleteIcon.addEventListener('click', (e) => {
      const ref = e.target.parentElement.id;
      removeTask(ref);
      e.target.parentElement.parentElement.remove();
      window.location.reload();
    });
    div.appendChild(deleteIcon);
    taskContainer.appendChild(div);
  }
};

export default showActivity;