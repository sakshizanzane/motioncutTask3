document.addEventListener('DOMContentLoaded', function () {
       loadTasks();
   });
   
   function loadTasks() {
       const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
       const taskContainer = document.getElementById('task-container');
   
       taskContainer.innerHTML = '';
   
       tasks.forEach(function (task, index) {
           addTaskToDOM(task, index);
       });
   }
   
   function addTask() {
       const taskInput = document.getElementById('task-input');
       const taskText = taskInput.value.trim();
   
       if (taskText !== '') {
           const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
           tasks.push({ text: taskText, completed: false });
   
           localStorage.setItem('tasks', JSON.stringify(tasks));
           loadTasks();
   
           taskInput.value = '';
       }
   }
   
   function editTask(index) {
       const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
       const newText = prompt('Edit task:', tasks[index].text);
   
       if (newText !== null) {
           tasks[index].text = newText;
           localStorage.setItem('tasks', JSON.stringify(tasks));
           loadTasks();
       }
   }
   
   function deleteTask(index) {
       const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
       tasks.splice(index, 1);
   
       localStorage.setItem('tasks', JSON.stringify(tasks));
       loadTasks();
   }
   
   function toggleTask(index) {
       const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
       tasks[index].completed = !tasks[index].completed;
   
       localStorage.setItem('tasks', JSON.stringify(tasks));
       loadTasks();
   }
   
   function addTaskToDOM(task, index) {
       const taskContainer = document.getElementById('task-container');
   
       const taskElement = document.createElement('div');
       taskElement.className = 'task';
       taskElement.innerHTML = `
           <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
           <div>
               <button onclick="editTask(${index})">Edit</button>
               <button onclick="deleteTask(${index})">Delete</button>
               <button onclick="toggleTask(${index})">Toggle</button>
           </div>
       `;
   
       taskContainer.appendChild(taskElement);
   }
   