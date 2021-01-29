<template>
    <dir class="container">
        <h1>{{ msg }}</h1>
        <add-task/>
        <show-task v-for="task in tasks" :name="task.name" :id="task.id" :key="task.id"/>
    </dir>
</template>

<script>
import AddTask from './taskComponents/addTask.vue'
import ShowTask from './taskComponents/showTask.vue'
import { mapState } from 'vuex'

export default {
  name: 'CardComponent',
  data () {
    return {
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
    ...mapState(['tasks'])
  }
}
</script>
