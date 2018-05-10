<template>
   <label>
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                type="checkbox"
                :class="inputClasses"
                :disabled="disabled"
                :checked="innerBox"
                v-model="model"
                @change="onChange">
             <slot><span v-if="showSlot">{{ label }}</span></slot>
        </span>
    </label>
</template>

<script>
import { prefixCls } from '@/utils/config'

export default {
  name: `${prefixCls}-checkbox`,
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSlot: {
      type: Boolean,
      default: true
    },
    label: {
      type: [String, Number, Boolean]
    }
  },
  data () {
    return {
      model: [],
      innerBox: this.value
    }
  },
  computed: {
    checkboxClasses () {
      return [
        [`${prefixCls}-checkboxouter`]
      ]
    },
    inputClasses () {
      return [
        [`${prefixCls}-checkbox`, `checkbox-${this.type}`]
      ]
    },
    innerClasses () {
      return [
        [`${prefixCls}-checkboxinner`,
          {[`${prefixCls}-innerfocus`]: this.innerBox}
        ]
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    onChange (e) {
      this.innerBox ? this.innerBox = false : this.innerBox = true
      this.$emit('on-change', this.innerBox)
    }
  }
}
</script>