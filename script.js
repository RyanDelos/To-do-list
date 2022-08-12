'use strict';

// constants
const input = document.querySelector('.input-text');
const addButton = document.querySelector('.btn');
const taskContainer = document.querySelector('.task-values');

// add event listener for the button
addButton.addEventListener('click', function () {
  // create element for the values entered
  let list = document.createElement('li');

  // assign value to list element
  list.innerText = input.value;

  // checks for a valid input value
  if (!input.value) {
    alert('Enter a task');
  } else {
    taskContainer.appendChild(list);
  }

  // clears the input text after adding task
  input.value = '';

  // when task complete strike through task
  list.addEventListener('click', function () {
    if (list.style.textDecoration != 'line-through') {
      list.style.textDecoration = 'line-through';
      list.style.color = '#2f9e44';
    } else {
      list.style.textDecoration = 'none';
      list.style.color = 'inherit';
    }
  });

  // delete task by double clicking
  list.addEventListener('dblclick', function () {
    taskContainer.removeChild(list);
  });
});
