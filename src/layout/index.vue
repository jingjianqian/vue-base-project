<template>
	<div class="loyaut-container">
		<div>
			<navbar />
      <sidebar />
		</div>
	</div>
</template>
<script>

import { Navbar,Sidebar } from './components'

console.log(Navbar);
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    //AppMain
  }
}
</script>