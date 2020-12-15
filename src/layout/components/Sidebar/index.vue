<template>
	
	<div :class="{'has-logo':'true'}">
		<logo v-if="showLogo" :collapse="isCollapse" />
		<div>
	</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'

export default {
	components:{ Logo },
	computed:{
		showLogo() {
			return true
			// TODO jingjianqina return this.$store.state.settings.sidebarLogo
		},
	}
}
</script>