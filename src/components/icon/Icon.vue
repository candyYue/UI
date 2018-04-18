<template>
  <i :class="iconClasses" @click="handleClick"></i>
</template>

<script>
import { prefixCls } from '@/utils/config'

export default {
  name: `${prefixCls}-icon`,
  props: {
    type: String
  },
  computed: {
    iconClasses () {
      return [[`${prefixCls}-icon`, `icon-${this.type}`]]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>