<template>
	<view class="content">
		<!-- <selectdown @refresh="getdata">
			<pullup @closepull="getpulldata" :list="list"> 
				<view v-for="(item,index) in list" :key="index">
					<view class="box" @click="test"></view>
				</view>				
			</pullup>			 
		</selectdown>		 -->
		<button type="default" @click="carmersfz">身份证</button>
		<button type="default" @click="carmerjsz">驾驶证</button>
		<view v-for="(item,index) in imglist" :key="index">
			<image :src="item" mode=""></image>
		</view>
		<view>
			<view v-for="(item,index) in jszList" :key="index">
				<view>{{item.item}}:{{item.itemstring}}</view>
			</view>
		</view>
		<!-- <wl-tabbar :list="list" @sendcurrent="getindex"></wl-tabbar> -->
		<!-- <view >SGNB</view> -->
	</view>
</template>

<script>
	import {getkey }from '@/common/authorization.js'
	import {pathToBase64, base64ToPath} from '@/js_sdk/gsq-image-tools/image-tools/index.js'
	export default {
		data() {
			return {
			res:'',
			list:[
				{name:'首页1',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				{name:'页面2',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				{name:'页面3',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				{name:'用户',imgUrl:'/static/user.png',imgActiveUrl:'/static/useractive.png'},
				],
			text:'',
			result:'12321',
			imglist:[],
			jszList:[]
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
				// let date = new Date 
				let obj = {appkey:'ba3764357d6728cd',phone:'17771510991'}
				// obj.time = date.toLocaleTimeString()
				uni.request({
				    // url: `/api/shouji/query?appkey=${obj.appkey}&shouji=${obj.phone}`, 
					url: `/api/insuranceCompanies?securitySign=0ae550e14b702934fd03ca9d32274b08`, 
					method:"GET",
					header:{
						"x-appid":'cx4200731172f66cea',
						"content-type": "application/json",
						"X-requested-With": "XMLHttpRequest",
						'Authorization':'eyJVc2VySWQiOjI4MjgsIlBob25lIjoiMTc5NzAwMDAwMDEiLCJFeHBpcmVzSW4iOjQzMjAwLCJDcmVhdGVkVGltZSI6IjIwMjAtMDktMDJUMDk6MDg6MjAuMDc0NTQ0OSswODowMCJ9',
					},
				    success: (res) => {
						this.res = res.data
				        console.log(res.data);
						alert(JSON.stringify(res.data))
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
			},
			carmersfz(){
				let vm = this
				let key = getkey()
				// console.log(key)
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original '], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera'], //从相册选择
				    success: function (res) {
						let size = res.tempFiles[0].size
						console.log('res',res)
						const tempFilePaths = res.tempFilePaths;
						let obj = {}
						vm.imglist = tempFilePaths
						console.log(vm.imglist)
						obj.appid="1300568222"
						obj.url_list=res.tempFiles[0]
						uni.uploadFile({
							url:'http://49.234.56.112/blade-resource/oss/endpoint/put-file',
							header:{
								"Blade-Auth":'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX25hbWUiOiJhZG1pbiIsInJlYWxfbmFtZSI6IueuoeeQhuWRmCIsImF2YXRhciI6IiIsImF1dGhvcml0aWVzIjpbImFkbWluaXN0cmF0b3IiXSwiY2xpZW50X2lkIjoic2FiZXIiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwibGljZW5zZSI6InBvd2VyZWQgYnkgYmxhZGV4IiwidXNlcl9pZCI6IjExMjM1OTg4MjE3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInNjb3BlIjpbImFsbCJdLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJleHAiOjE2MDE0MjMzMDYsImRlcHRfaWQiOiIxMjE5NTU0NTc4NDEzNzYwNTE0LDEyMTk0NTU0NjM2NjMxODU5MjEsMTIxOTQ5OTg0MTAwNTkyNDM1MyIsImp0aSI6ImRjYzI0YjY0LTU3Y2EtNDViOS1hYTNlLTg4ODZhOTNiMTI5NyIsImFjY291bnQiOiJhZG1pbiJ9.-kIr8mBW-XoWkve2OGgFU3eThKrZL0gzydNpJ_pTyBo'
							},
							filePath:tempFilePaths[0],
							name:'file',
							fromData:{
								
							},
							
							success:(data)=>{
								console.log(data)
							}
						})
						console.log(obj)
						/* uni.request({
							url: `https://recognition.image.myqcloud.com/ocr/idcard`, 
							method:"POST",
							header:{
								"host":'https://ocr.tencentcloudapi.com/?Action=IDCardOCR',
								"content-length":size,
								"content-type":"application/json ",
								"authorization":key
							},
							data:{
								appid:"1300568222",
								// url_list:['http://utils.dcmsdev.info:2013/dcmssc/upload/20200902/19e8305a023b56b50a88f1ba3fc8db5a.jpg']
								url_list:tempFilePaths[0]
							},
							success: (res) => {
								console.log(res)
								vm.result = res 
								alert(res)
								// alert(res)
							}
						}) */
				    }
				});
			},
			carmerjsz(){
				let key = getkey()
				let vm = this
				// console.log(key)
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera','album'], //从相册选择
				    success: function (res) {
						let size = res.tempFiles[0].size
						// console.log('res',res)
						const tempFilePaths = res.tempFilePaths;
						let obj = {}
						obj.appid="1300568222"
						obj.url_list=res.tempFiles[0]						
						pathToBase64(res.tempFilePaths[0])
						.then(base64=>{
							// console.log(base64)
							uni.request({
								url: `https://recognition.image.myqcloud.com/ocr/drivinglicence`, 
								method:"POST",
								header:{
									"host":'https://ocr.tencentcloudapi.com/?Action=DriverLicenseOCR',
									"content-length":size,
									"content-type":"application/json ",
									"authorization":key
								},
								data:{
									appid:"1300568222",
									type:0,
									// url_list:['https://up.enterdesk.com/edpic_360_360/3a/d1/66/3ad1668da63c67a9dc421238938dfb8c.jpg']
									image:base64			
								},
								success: (res) => {
									console.log(res.data.data.items)
									vm.jszList = res.data.data.items
									vm.$forceUpdate()
									// res.data.data.ite
									// this.result = res 
									// alert(res)
								}
							})
						})
						// console.log(obj)
						
				    }
				});
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
