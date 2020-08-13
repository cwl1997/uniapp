<template>
	<view class="content">
		<selectdown @refresh="getdata">
			<pullup @closepull="getpulldata"> 
				<!-- <button type="primary" @click="test">测试</button> -->
				<view>{{res}}</view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
				<view class="box"></view>
			</pullup>			 
		</selectdown>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			res:''
			}
		},
		onLoad() {

		},
		methods: {
			test(){
				let date = new Date 
				let obj = {name:'1'}
				obj.time = date.toLocaleTimeString()
				uni.request({
				    url: 'http://172.18.1.122:3000/person', //仅为示例，并非真实接口地址。
				    data: {obj},
					method:"GET",
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
				    success: (res) => {
						this.res = res.data
				        console.log(res.data);
				        // this.text = 'request success';
				    },
					fail:(res)=>{
						this.res = res
					}
				});
			},
			getdata(close){
				// close()
			},
			getpulldata(test){
				// test()
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height:100%;
		.box{
			width: 750upx;
			height: 300upx;
			background-color: #dfd;
			border-bottom: 2upx solid #000;
		}
	}


</style>
