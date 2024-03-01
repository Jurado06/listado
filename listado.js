// Referencias
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Función para agregar tareas
const addTask = (task) => {
  const newTask = document.createElement('li');
  newTask.textContent = task;
  newTask.id = `task-${list.children.length + 1}`;
  newTask.appendChild(createDeleteButton());
  list.appendChild(newTask);
  input.value = '';
};

// Función para crear botones de eliminar
const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.style.marginLeft = '5px';
  deleteButton.addEventListener('click', deleteTask);
  return deleteButton;
};

// Función para eliminar tareas
const deleteTask = (e) => {
  const taskToDelete = e.target.parentElement;
  taskToDelete.remove();
};

// Event listener para el formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    addTask(input.value);
  }
});