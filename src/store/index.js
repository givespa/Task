import { createStore } from 'vuex'

export default createStore({
  state: {
    task: [
      { id: 1, name: 'Nada que hacer' }
    ]
  },
  mutations: {
    addTaskToState: (state, payload) => {
      var id = state.task[state.task.length - 1].id
      var name = payload
      state.task.push({ id: ++id, name: name })
    },
    delTaskToState: (state, payload) => {
      // var id = state.lists[state.lists.length - 1].id
      // var name = payload
      // state.lists.push({ id: ++id, name: name })
    }
  },
  actions: {
    addTask: (state, payload) => {

    }
  },
  modules: {
  }
})
