<template>
	<view class="content">
		<!-- <selectdown @refresh="getdata">
			<pullup @closepull="getpulldata" :list="list"> 
				<view v-for="(item,index) in list" :key="index">
					<view class="box"></view>
				</view>				
			</pullup>			 
		</selectdown>	 -->	
		<wl-tabbar :list="list" @sendcurrent="getindex"></wl-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			res:'',
			list:[
				{name:'首页1',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				{name:'页面2',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				{name:'页面3',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				{name:'用户',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				]
			}
		},
		onLoad() {

		},
		onShow() {
		},
		methods: {
			getindex(v){
				console.log('选择了',this.list[v].name)
			},
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
			getdata(toclose){
				this.list.push({})
				toclose()
			},
			getpulldata(test){
				this.list.push({})
				test()
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
