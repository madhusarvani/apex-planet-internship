let tasks = [];

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    if (task.time && !task.completed) scheduleReminder(task.name, task.time);
  });
  renderTasks();
}

function scheduleReminder(name, time) {
  const delay = new Date(time).getTime() - Date.now();
  if (delay > 0) {
    setTimeout(() => alert("⏰ Reminder: " + name), delay);
  }
}

function addTask() {
  const name = document.getElementById('taskInput').value.trim();
  const time = document.getElementById('reminderTime').value;
  const priority = document.getElementById('priorityInput').value;
  if (name) {
    const task = { name, time, priority, completed: false };
    tasks.push(task);
    saveTasks();
    renderTasks();
    if (time) scheduleReminder(name, time);
    document.getElementById('taskInput').value = "";
    document.getElementById('reminderTime').value = "";
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const sort = document.getElementById('sortOption').value;
  const ul = document.getElementById('taskList');
  ul.innerHTML = "";

  const sortedTasks = [...tasks];
  if (sort === "time") {
    sortedTasks.sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
  } else {
    const order = { High: 1, Medium: 2, Low: 3 };
    sortedTasks.sort((a, b) => order[a.priority] - order[b.priority]);
  }

  sortedTasks.forEach((task) => {
    const index = tasks.indexOf(task);
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      <span>${task.name}</span>
      <div class="task-meta">
        ${task.time ? `<small>⏰ ${new Date(task.time).toLocaleString()}</small>` : ""}
        <span class="priority-badge priority-${task.priority}">${task.priority}</span>
      </div>
      <div class="task-buttons">
        <button class="complete-btn" onclick="toggleComplete(${index})">✔</button>
        <button class="delete-btn" onclick="deleteTask(${index})">🗑</button>
      </div>
    `;
    ul.appendChild(li);
  });
}

loadTasks();
