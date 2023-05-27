// Select DOM

const todoInput = document.querySelector('todo-input')
const todoButton = document.querySelector('todo-button')
const todoList = document.querySelector('todo-list')
const filterOption = document.querySelector('filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteTodo)
filterOption.addEventListener('click', filterTodo)

// Functions

function addTodo(e) {
      // Prevent natural behavior
      e.preventDefault()

      // Create todo div
      const todoDiv = document.createElement('<div>')
      todoDiv.classList.add('todo')

      // Create list
      const newTodo = document.createElement('li')
      newTodo.innerText = todoInput.value
      
      // Save to local
      saveLocalTodos(todoInput.value)

      // Add todo-item
      newTodo.classList.add('todo-item')
      todoDiv.appendChild(newTodo)
      todoInput.value=''

      // Create Completed Button
      const completedButton = document.createElement('button')
      completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`
      completedButton.classList.add('completedButton')
      todoDiv.appendChild(completedButton)

      // Create Trash Button
      const trashButton = document.createElement('button')
      trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
      trashButton.classList.add('trashButton')
      todoDiv.appendChild.add(trashButton)

      // Attach final Todo
      todoList.appendChild(todoDiv)
}

function deleteTodo(e) {
      const item = e.target

      if (item.classList[0] === 'trashButton') {
            const todo = item.parentElement
            todo.classList.add('fall')

            removeLocalTodos(todo)
            todo.addEventListener('transitionend', e => todo.remove())
      }

      if (item.classList[0] === 'completedButton') {
            const todo = item.parentElement
            todo.classList.toggle('completed')
            console.log(todo)
      }
}

function filterTodo(e, todo) {
      const todos = todoList.childNodes;
      todos.forEach(function(todo) {
            switch (e.target.value) {
                  case 'all': 
                        todo.style.display = 'flex'
                        break

                  case 'completed':
                        if (todo.classList.contains('completed')) todo.style.display = 'flex'
                        else todo.style.display = 'none'

                  case 'uncompleted':
                        if (!todo.classList.contains('completed')) todo.style.display = 'flex'
                        else todo.style.display = 'none'
                        
            }
      })
}

function saveLocalTodos(todo) {
      let todos

      if (localStorage.getItem('todos') === null) todos = []
      else todos = JSON.parse(localStorage.getItem('todos'))

      todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(todos))
}

function removeLocalTodos(todo) {
      let todos
      
      if (localStorage.getItem('todos') === null) todos = []
      else todos = JSON.parse(localStorage.getItem('todos'))

      const todoIndex = todo.children[0].innerText
      todos.splice(todos.indexOf(todoIndex), 1)
      localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
      let todos

      if (localStorage.getItem('todos') === null) todos = []
      else todos = JSON.parse(localStorage.getItem('todos'))

      todos.forEach(function(todo) {
            
            // Create todo div
            const todoDiv = document.createElement('div')
            todoDiv.classList.add('todo')

            // Create List
            const newTodo = document.createElement('li')
            
      })
}