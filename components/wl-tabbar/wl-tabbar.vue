<template name="wl-tabbar">
	<view class="tabbar_content">
		<wl-tabbar-item :itemlist='list' @sendindex="getindex"></wl-tabbar-item>
	</view>
</template>

<script>
	export default {
		name:'wl-tabbar',
		props:{
			list:{type:Array,default:()=>{}}
		},
		data() {
			return {
				
			}
		},
		methods:{
			getindex(v){
				this.$emit('sendcurrent',v)
			}
		}
	}
</script>

<style lang="scss">
.tabbar_content{
	position: fixed;
	bottom: 0upx;
	width: 100%;
	height: 120upx;
	background-color: #fff;
}
</style>
