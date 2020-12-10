<template>
	<div class="dashboard-container">
		{{index}}
	</div>
</template>
<script>
	export default{
		name:'dashboard'
		data(){
			return{
				currRole:'admin',
				index:'dashboard'
			}
		},
		computed:{

		},
		created(){

		}
	}
</script>