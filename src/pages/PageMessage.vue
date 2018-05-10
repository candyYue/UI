<template>
  <div>
    <Button type="primary" @click="click">默认按钮</Button>
  </div>
</template>

<script>
import { Button } from '@/components'
import { message } from '@/components/message/message.js'
export default {
  name: 'page-message',
  components: {
    Button
  },
  data () {
    return {
      tempmessage: true
    }
  },
  methods: {
    click () {
      message.$error({
        content: 'error message'
      })
    }
  }
}
</script>