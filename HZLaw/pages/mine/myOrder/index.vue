<template>
	<view class="container">
		<nav-bar title="我的订单"></nav-bar>
		<view class="list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="cell">
					<view class="head">
						<text>订单编号：{{value.no}}</text>
						<text>{{value.status}}</text>
					</view>
					<view class="content">
						<view class="name">
							<view>{{value.name}}</view>
							<view>
								<text>￥</text>
								<text>{{value.price}}</text>
							</view>
						</view>
						<view class="expireTime">{{value.detail}}</view>
						<view class="time">{{value.time}}</view>
						
					</view>
					
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData:[
					{
						no:'7795 1960 6371 0530 3',
						status:'已完成',
						name:'VIP购买',
						detail:'套餐一：一日会员 [有效期：24小时]',
						time:'2020-10-01 13:31:32',
						price:'98'
					},
					{
						no:'7795 1960 6371 0530 3',
						status:'已评价',
						name:'法律咨询',
						detail:' [有效期：永久]',
						time:'2020-10-11 11:11:12',
						price:'100',
						
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		font-size: 14px;
	}
	
	.list {
		padding: 10px 15px;
	}
	
	.cell {
		width: 100%;
		height: 138px;
		border-radius: 6px;
		background-color: #FFFFFF;
		margin-bottom: 10px;
		padding: 0px 15px;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
	
	.cell .head {
		height: 44px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: .5px #ECECEC solid;
	}
	
	.head text:nth-child(1) {
		color: #333333;
		font-size: 14px;
	}
	
	.head text:nth-child(2) {
		color: #666666;
		font-size: 12px;
	}
	
	.content {
		display: flex;
		flex-direction:  column;
		flex: 1;
	}
	
	.name {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 15px;
		align-items: center;
	}
	
	.name view:nth-child(1) {
		color: #333333;
		font-size: 14px;
	}
	
	.name view:nth-child(2) text:nth-child(1) {
		color: #151515;
		font-size: 12px;
	}
	
	.name view:nth-child(2) text:nth-child(2) {
		color: #151515;
		font-size: 16px;
	}
	
	.expireTime {
		margin-top: 5px;
		font-size: 12px;
		color: #999999;
	}
	
	.time {
		margin-top: 5px;
		font-size: 12px;
		color: #999999;
	}
</style>
