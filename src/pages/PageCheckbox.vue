<template>
  <div>
    <Checkbox @on-change='clickALL'>全选</Checkbox>
    <br>
    <Checkbox label='多选框1'></Checkbox><br>
    <Checkbox label='多选框2'></Checkbox><br>
    <Checkbox label='多选框3'></Checkbox><br>
    <Checkbox label='多选框4'></Checkbox><br>
    <Checkbox label='多选框5'></Checkbox>
  </div>
</template>

<script>
import { Checkbox } from '@/components'
export default {
  name: 'page-checkbox',
  components: {
    Checkbox
  },
  methods: {
    clickALL (value) {
      // console.log(value)
    }
  }
}
</script>