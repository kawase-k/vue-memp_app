new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodo: null,
    editNumber: 'editNumber'
  },

  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'))
      } catch(e) {
        localStorage.removeItem('todos')
      }
    }
  },

  methods: {
    addTodo() {
      if (!this.newTodo) {
        return
      }

      if (!isNaN(this.editNumber)) {
        this.todos[this.editNumber] = this.newTodo
        this.editNumber = 'editNumber'
      }
      else {
        this.todos.push(this.newTodo)
      }
      this.newTodo = ''
      this.saveTodo()
    },

    removeTodo(i) {
      this.todos.splice(i, 1)
      this.saveTodo()
    },

    editTodo(i) {
      this.editNumber = i
      document.getElementById('target').value = this.todos[i]
    },

    saveTodo() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})
