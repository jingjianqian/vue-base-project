<template>
	<div class="layout-container">
	 	<div>
			<Navbar />
      <Sidebar />
		</div>
	</div> 
</template>
<script>

 import { Navbar,Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    //AppMain
  }
}
</script>
<style lang="scss" scoped>

</style>