<template>

    <dir class="container">
        <h1>{{ msg }}</h1>
        <add-task @Task="add"></add-task>
        <show-task v-for="list in lists" :name="list.name" :id="list.id" :key="list.id"/>
    </dir>

</template>

<script>
import AddTask from './taskComponents/addTask.vue'
import ShowTask from './taskComponents/showTask.vue'
// import { mapState } from 'vuex'

export default {
  name: 'CardComponent',
  data () {
    return {
      lists: [
        { id: 1, name: 'nada que hacer' },
        { id: 2, name: 'hacer tarea para hoy' },
        { id: 3, name: 'Sin  tareas' }
      ]
    }
  },
  components: {
    AddTask,
    ShowTask
  },
  props: {
    msg: {
      type: String,
      default: 'Task Manager'
    }
  },
  computed: {
    // ...mapState(['lists'])
  },
  methods: {
    add (e) {
      var id = this.lists[this.lists.length - 1].id
      var name = e
      this.lists.push({ id: ++id, name: name })
    }
  }
}
</script>
