<template>
  <div id="navbar">
      <div class="right-menu">
        <template>
          <h1>我是navbar</h1>
        </template>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components:{

  },
  computed:{
    ...mapGetters([
      
    ])
  }
}
</script>