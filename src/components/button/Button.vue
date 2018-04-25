<template>
   <button :class="buttonClasses" :disabled="buttonDisabled" @click="handleClick">
       <i class="icon-loading" v-if="loading"></i>
       <i :class="icon" v-if="icon && !loading"></i>
       <slot></slot>
   </button>
</template>

<script>
import { prefixCls } from '@/utils/config'

export default {
  name: `${prefixCls}-button`,
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium'
    },
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    buttonDisabled: Boolean
  },
  computed: {
    buttonClasses () {
      return [
        [`${prefixCls}-button`, `button-${this.type}`, `button-${this.size}`]
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>