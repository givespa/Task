<template>
    <dir
    class="center"
    @mouseover="hoverOver"
    @mouseout="hoverOut"
    :style="{ backgroundColor: variant }">
        <label :class="{ incorrecto: this.$store.state.tasks[this.id - 1].statu }" @click="changeTask(id)">{{name}}</label>
        <button :class="{btn_correct: !this.$store.state.tasks[this.id - 1].statu, btn_ok: this.$store.state.tasks[this.id - 1].statu}" :disabled="!this.$store.state.tasks[this.id - 1].statu" @click="delTask(id)">✔</button>
    </dir>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      variant: 'white'
    }
  },
  computed: {
    ...mapState(['tasks'])
  },
  props: {
    name: {
      type: String,
      default: 'task'
    },
    id: {
      type: Number
    }
  },
  methods: {
    hoverOver () {
      this.variant = 'black'
    },
    hoverOut () {
      this.variant = 'white'
    },
    ...mapActions(['delTask', 'changeTask'])
  }
}
</script>
