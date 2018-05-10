import Vue from 'Vue'
import { prefixCls } from '@/utils/config'
const merge =
  (...sources) => Object.assign({}, ...sources)

const transitions = {
  'transition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'MozTransition': 'transitionend',
  'WebkitTransition': 'webkitTransitionEnd'
}
class Message {
  // constructor () {}
  show (opts) {
    const self = this
    const msg = this.render(opts)
    const msgElement = msg.$mount().$el
    let timer = null

    document.body.appendChild(msgElement)

    if (opts.duration) {
      timer = setTimeout(() => {
        self.close(msgElement, opts.callback)
        clearTimeout(timer)
      }, opts.duration + opts.animationDuration)
    }
  }
  close (element, callback) {
    let flag = true
    element.classList.add('fade-leave-active')
    const transitionEvent = (() => {
      for (let t in transitions) {
        return (element.style[t] !== undefined) && transitions[t]
      }
    })()
    element.addEventListener(transitionEvent, (event) => {
      if (callback) {
        flag && document.body.removeChild(element) && callback()
      } else {
        flag && document.body.removeChild(element)
      }
      flag = false
    }, false)
  }
  render (opts) {
    return new Vue({
      render (h) {
        return h('div', {
          class: [`${prefixCls}-messageLayout`],
          style: {
            animation: `${opts.animationName} ${opts.animationDuration / 1000}s`
          }
        }, [
          h('div', {
            class: [`${prefixCls}-message`, `message-${opts.icon}`],
            style: {
              top: `${opts.top}px`
            }
          }, [
            h('i', {
              class: [`${prefixCls}-icon`, `icon-${opts.icon}`]
            }),
            opts.content
          ])
        ])
      }
    })
  }
}
class MessageTip extends Message {
  constructor (...arg) {
    super(...arg)
    this.defaults = {
      name: 'message-tip',
      duration: 1500,
      animationName: 'message',
      animationDuration: 500,
      callback: () => {}
    }
  }
  $info (opts) {
    const defaults = {
      icon: 'info',
      content: '消息提示信息'
    }
    this.show(merge(this.defaults, defaults, opts))
  }
  $success (opts) {
    const defaults = {
      icon: 'success',
      content: '成功提示信息'
    }
    this.show(merge(this.defaults, defaults, opts))
  }
  $error (opts) {
    const defaults = {
      icon: 'error',
      content: '错误提示信息'
    }
    this.show(merge(this.defaults, defaults, opts))
  }
}
const message = new MessageTip()

export { message }