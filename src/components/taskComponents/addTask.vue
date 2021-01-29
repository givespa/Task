<template>
    <div class="center">
        <input v-model="text" type="text" name="add_task" placeholder="Your Task Title...">
        <button class="btn_add" @click="addTask">Add</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    addTask () {
      this.$emit('Task', this.text)
      this.text = ''
    }
  }
}
</script>
