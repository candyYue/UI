<template>
  <div>
    <Button type="primary">默认按钮</Button>
    <Button type="info" loading>信息按钮</Button>
    <Button type="success" size="large" icon="icon-success">成功按钮</Button>
    <Button type="warning" size="small">警告按钮</Button>
    <Button type="danger" disabled>危险按钮</Button>
  </div>
</template>

<script>
import { Button ,Icon} from '@/components'
export default {
  name: 'page-button',
  components: {
    Button,
    Icon
  }
}
</script>