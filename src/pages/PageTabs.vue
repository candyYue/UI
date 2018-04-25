<template>
  <div>
    <Tabs @activeAction="activeAction">
       <Pane v-show="showIndex==0">11111</Pane>
       <Pane v-show="showIndex==1">22222</Pane>
       <Pane v-show="showIndex==2">33333</Pane>
    </Tabs>
  </div>
</template>

<script>
import { Tabs, Pane } from '@/components/tabs'

export default {
  name: 'page-tabs',
  components: {
    Tabs,
    Pane
  },
  data () {
    return {
      showIndex: 0
    }
  },
  methods: {
    activeAction (index) {
      console.log(index)
      this.showIndex = index
    }
  }
}
</script>
