<template>
    <dir
    class="center"
    @mouseover="hoverOver"
    @mouseout="hoverOut"
    :style="{ backgroundColor: variant }">
        <label :class="{ incorrecto: actived }" @click="click">{{name + ' id: ' + id}}</label>
        <button :class="{btn_correct: !actived, btn_ok: actived}" :disabled="!actived" >✔</button>
    </dir>
</template>

<script>

export default {
  data () {
    return {
      variant: 'white',
      actived: false
    }
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
    click () {
      this.actived = !this.actived
    }
  }
}
</script>
