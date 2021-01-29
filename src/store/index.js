import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      { id: 1, name: 'Nada que hacer', statu: true }
    ]
  },
  mutations: {
    changeTaskToState: (state, payload) => {
      state.tasks[payload - 1].statu = !state.tasks[payload - 1].statu
      console.log(state.tasks[payload - 1].statu)
    },
    addTaskToState: (state, payload) => {
      if (state.tasks.length) {
        var num = state.tasks[state.tasks.length - 1].id
        state.tasks.push({ id: ++num, name: payload, statu: false })
      } else {
        state.tasks.push({ id: 1, name: payload, statu: false })
      }
    },
    delTaskToState: (state, payload) => {
      state.tasks.splice(--payload, 1)
    }
  },
  actions: {
    addTask: (store, payload) => {
      store.commit('addTaskToState', payload)
    },
    delTask: (store, payload) => {
      store.commit('delTaskToState', payload)
    },
    changeTask: (store, payload) => {
      store.commit('changeTaskToState', payload)
    }
  },
  modules: {
  }
})
