<template>
  <div :class="className+'-tab'">
      <div :class="className+'tab-bar'">
          <div v-for="(item,index) in navList" :key="index" :class="{ 'activebar': index==choose }" @click='activeAction(index)'>{{item.name}}</div>
      </div>
      <div :class="className+'tab-container'">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import { prefixCls } from '@/utils/config'

export default {
  name: `${prefixCls}-tabs`,
  props: {
    navList: {
      type: Array,
      default: function () {
        return [{name: 'name1'}, {name: 'name2'}, {name: 'name3'}]
      }
    },
    defaultIndex: {
      type: Number,
      default: null
    }
  },
  computed: {},
  data () {
    return {
      className: prefixCls,
      choose: 0
    }
  },
  watch: {
    defaultIndex (val) {
      this.choose = val
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    activeAction (index) {
    //   console.log(index)
      this.choose = index
      this.$emit('activeAction', index)
    }
  }
}
</script>