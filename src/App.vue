<template>
  <div id="app">
    <router-view/>

    
    <div class="menuBarWrapper">
      <menuBar></menuBar> 
    </div>
  </div>
</template>

<script>
import menuBar from "@/components/menuBar"
export default {
  components:{menuBar},
}
</script>
<style lang="less">

</style>
