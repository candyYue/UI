<template>
  <div>
    <Button type="primary" >默认按钮</Button>
    <Message type="success"/>
  </div>
</template>

<script>
import { Message, Button } from '@/components'
export default {
  name: 'page-message',
  components: {
    Message,
    Button
  }
}
</script>