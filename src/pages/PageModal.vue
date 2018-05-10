<template>
  <div>
    <Button type="primary" @click="open">默认按钮</Button>
    <Modal
    v-model="tempmodal"
    @oncancel="cancel"
    @onok="cancel">
      <div slot="body">这是body内容</div>
    </Modal>
  </div>
</template>

<script>
import { Modal, Button } from '@/components'
export default {
  name: 'page-modal',
  components: {
    Modal,
    Button
  },
  data () {
    return {
      tempmodal: false
    }
  },
  methods: {
    cancel () {
      console.log('cancel')
      this.tempmodal = false
    },
    open () {
      this.tempmodal = true
    }
  }
}
</script>