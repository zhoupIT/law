<template>
	<view class="container">
		<nav-bar title="VIP通道">
			
		</nav-bar>
		
		<view class="head">
			<view v-for="(item,index) in vipList" :key="index" v-bind:class="{checked:index==selIndex}" @click="onVipDidSelected(index,$event)">
				套餐{{item.level}}
			</view>
		</view>
		<image :src="getPicUrl(vipSeled.pic)" mode=""></image>
		<view class="content">
			<text class="title">套餐内容</text>
			<text class="value">{{vipSeled.discription}}</text>
			<text class="title">有效期限</text>
			<text class="value">{{vipSeled.expires}}</text>
			<text class="title">套餐价格</text>
			<view class="price">
				<text>￥</text>
				<text>{{vipSeled.price}}</text>
			</view>
			<view class="activate">立即开通</view>
		</view>
	</view>
</template>

<script>
	import { getTariff,getPicUrl } from '../../../api/IndexApi.js'
	import { baseUrl } from '@/service/service.js'
	export default {
		onLoad() {
			getTariff({}).then(res => {
				this.vipList = res.data;
				this.vipSeled = this.vipList[0];
			});
		},
		data() {
			return {
				vipList: [],
				vipSeled:{},
				selIndex:0
			}
		},
		methods: {
			getPicUrl:function(picUrl) {
				console.log(baseUrl+'/app/common/download/'+picUrl)
				return baseUrl+'/app/common/download/'+picUrl;
			},
			onBackDidClicked:function() {
				uni.navigateBack({
					
				});
			},
			onVipDidSelected:function(no,event) {
				// 获取点击对象      
				var el = event.currentTarget;
				this.selIndex = no;
				this.vipSeled = this.vipList[no];
			}

		}
	}
</script>

<style>	
	image {
		width: 100%;
		height: 180px;
	}
	page {
		background-color: #FFFFFF;
	}
	.head {
		/* #ifndef APP-PLUS-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex: 1;
		height: 44px;
		flex-wrap: nowrap;
		line-height: 44px;
		justify-content: space-between;
		
	}
	
	.head::before {
		content: '';
		display: block;
	}
	
	.head::after {
		content: '';
		display: block;
	}
	
	.head view {
		color: #999999;
		font-size: 14px;
		position: relative;
	}
	
	.head .checked {
		/* border-bottom: 1px #13BF6C solid; */
		color: #333333;
		font-size: 16px;
	}
	.head .checked::after {
		content: '';
		width: 10px;
		height: 2px;
		background-color: #2F69F8;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
	} 
	
	.container {
		font-size: 14px;
	}
	.content {
		margin: 10px 30px 10px 30px;
		display: flex;
		flex-direction: column;
	}
	.title {
		color: #333333;
		font-size: 16px;
		margin-bottom: 10px;
	}
	.value {
		color: #666666;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.price text:nth-child(1) {
		color: #FF5A5A;
		font-size: 8px;
	}
	
	.price text:nth-child(2) {
		color: #FF5A5A;
		font-size: 18px;
	}
	
	.activate {
		position: fixed;
		height: 46px;
		line-height: 46px;
		text-align: center;
		bottom: calc(var(--window-bottom) + 25px);
        left: 30px;
		right: 30px;
		background-image: linear-gradient(-88deg, #2FA2F8 0%, #2F69F8 93%);
		box-shadow: 0 2px 6px 0 rgba(47,105,248,0.32);
		border-radius: 23px;
		color: #FFFFFF;
		font-size: 16px;
		
	}
</style>
