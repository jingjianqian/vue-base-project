<template>
	<div class="Sidebar-logo-contaier" >
		<transition mame="SidebarLogoFade">
			<router-link   class="sidebar-logo-link" to="/">
				<img v-if="logo" :src="logo" class="sidebar-logo">
				<h1 v-else class="sidebar-title">{{ title }}</h1>
			</router-link>
		</transition>
	</div>
</template>
<script type="text/javascript">
	
export default {
	name:'SidebarLogo',
	pros:{
		collapse:{
			type:Boolean,
			required:true
		}
	},
	data() {
		return {
			title:'Jokers Admin',
			logo:'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
		}
	},
	method() {
		
	}
}
</script>
<style>

</style>