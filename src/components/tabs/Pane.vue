<template>
    <div v-show="show"><slot></slot></div>
</template>
<script>
export default {
  name: 'TabPane',
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      show: true,
      currentName: this.name
    }
  },
  methods: {},
  watch: {
    name (val) {
      this.currentName = val
    }
  }
}
</script>