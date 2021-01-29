<template>
    <div class="center">
        <input v-model="text" type="text" name="add_task" placeholder="Your Task Title...">
        <button class="btn_add" @click="addTask(text)">Add</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    ...mapState(['textInput'])
  },
  methods: {
    ...mapActions(['addTask'])
  }
}
</script>
