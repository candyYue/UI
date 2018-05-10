<template>
  <transition name="fade">
    <div :class="messgeClasses" v-show="visible">
      <Icon type="success"/>
      {{messgecontent}}
    </div>
  </transition>
</template>

<script>
import { prefixCls } from '@/utils/config'
import Icon from '../icon/Icon.vue'

export default {
  name: `${prefixCls}-messge`,
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    value: {
      type: Boolean,
      default: true
    },
    messgecontent: {
      type: String,
      default: 'message'
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  computed: {
    messgeClasses () {
      return [[`${prefixCls}-message`, `message-${this.type}`]]
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>