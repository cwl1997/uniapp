<template name="wl-tabbar-item">
	<view class="tabbar_item_content">
		<view v-for="(item,index) in itemlist" :key="index">
			<view class="tabbar_item" :style="style" @click="change(index)">
				<image :src="item.imgUrl" v-show="active !== index " class="tabbar_item_img" ></image>
				<image :src="item.imgActiveUrl" v-show="active === index " class="tabbar_item_img" ></image>
				<span class="tabbar_item_text">{{item.name}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'wl-tabbar-item',
		props:{
			itemlist:{type:Array,default:()=>{}}
		},
		computed:{
			style(){
				return {
					// 宽度自适应
					width:`${this.num}%`
				}
			}
		},
		mounted() {
			this.num = 100/this.itemlist.length
		},
		data(){
			return {
				num:0,
				active:2
			}
		},
		methods:{
			change(v){
				this.active = v
				this.$emit('sendindex',this.active)
			}
		}		
	}
</script>

<style lang="scss">
	.tabbar_item_content{
		width: 100%;
		height: 120upx;
		overflow: hidden;
		.tabbar_item{
			height: 120upx;
			float: left;
			position: relative;
			.tabbar_item_img{
				width: 50upx;
				height: 50upx;
				position: absolute;
				top: 20%;
				left: 50%;
				transform: translate(-50%,-20%);
			}
			.tabbar_item_text{
				position: absolute;
				bottom: 5%;
				left: 50%;
				transform: translate(-50%,-5%);
				font-size: 30upx;
				color: #646566;
			}
		}
	}
</style>
