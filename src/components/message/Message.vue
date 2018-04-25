<template>
  <transition name="fade">
    <div :class="messgeClasses">
      messge
    </div>
  </transition>
</template>

<script>
import { prefixCls } from '@/utils/config'

export default {
  name: `${prefixCls}-messge`,
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    messgeClasses () {
      return [[`${prefixCls}-messge`, `messge-${this.type}`]]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>