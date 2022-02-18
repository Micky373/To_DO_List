export function addToLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

export default class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}