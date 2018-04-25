<template>
  <div :class="className+'-box'">
    <transition name="fade">
      <div :class="className+'-mask'" v-show="visible"></div>
    </transition>
    <transition name="fade">
      <div :class="className+'-modal'"  v-show="visible" v-drag="draggable">
         <div class="modalheader">
           <slot name="header">{{tittle}} </slot>
           <Icon type="error" @click.native="oncancel" v-show="iconvisible"/>
         </div>
         <div class="modalbody">
           <slot name="body"></slot>
         </div>
         <div class="modalfooter">
           <slot name="footer">
             <Button type="primary" @click.native="onok">{{confirmtext}}</Button>
             <Button type="danger"  @click.native="oncancel">{{canceltext}}</Button>
           </slot>
         </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { prefixCls } from '@/utils/config'
import Button from '../button/Button.vue'
import Icon from '../icon/Icon.vue'

export default {
  name: `${prefixCls}-modal`,
  components: {
    Button,
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    tittle: {
      type: String,
      default: '标题名称'
    },
    confirmtext: {
      type: String,
      default: '确定'
    },
    canceltext: {
      type: String,
      default: '取消'
    },
    draggable: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    iconvisible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      className: prefixCls,
      visible: this.value
    }
  },
  directives: {
    drag: {
      bind (el, binding) {
        if (binding.value) {
          const $header = el.querySelector('.modalheader')
          $header.onmousedown = function (e) {
            const disX = e.clientX - el.offsetLeft
            const disY = e.clientY - el.offsetTop
            document.onmousemove = function (e) {
              const l = e.clientX - disX
              const t = e.clientY - disY
              el.style.left = l + 'px'
              el.style.top = t + 'px'
            }
            document.onmouseup = function (e) {
              document.onmousemove = null
              document.onmouseup = null
            }
          }
        }
      }
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  methods: {
    oncancel () {
      this.vasible = false
      this.$emit('oncancel')
    },
    onok () {
      this.$emit('onok')
    }
  }
}
</script>