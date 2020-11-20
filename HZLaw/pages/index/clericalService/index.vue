<template>
	<view class="container">
		<nav-bar title=""></nav-bar>
		<view class="clerical-preview">
			<image src="" mode=""></image>
		</view>
		<view class="list">
			<view class="cell-header">
				<text>北京房屋租赁合同</text>
				<text>销量 265</text>
			</view>
			<view class="cell">
				<text>合同类别</text>
				<text>房屋租赁</text>
			</view>
			<view class="cell">
				<text>涉及行业</text>
				<text>租赁合同</text>
			</view>
			<view class="cell">
				<text>合同关键字</text>
				<text>北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同</text>
			</view>
			<view class="cell">
				<text>合同关键字</text>
				<text>北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同</text>
			</view>
			<view class="cell">
				<text>合同关键字</text>
				<text>北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同</text>
			</view>
			<view class="cell">
				<text>合同关键字</text>
				<text>北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同北京房屋租赁合同</text>
			</view>
			<view class="cell">
				<text>上传时间</text>
				<text>2019-10-19</text>
			</view>
			<view class="cell">
				<text>更新时间</text>
				<text>2020-10-20</text>
			</view>
			<view class="cell">
				<text>合同作者</text>
				<text>衡卓法律咨询</text>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-price">
				<view class="price-tip"><text>咨询价格</text><text>￥</text><text>100</text></view>
				<view class="price-vip">VIP会员免费咨询</view>
			</view>
			<view class="bottom-buy">
				<view class="vip button">
					开通会员
				</view>
				<view class="buy button">
					立即购买
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		padding-bottom: 54px;
	}
	
	
	.clerical-preview {
		height: 200px;
		width: 100%;
		background-color: #007AFF;
	}
	.clerical-preview image {
		width: 100%;
		height: 100%;
	}
	.list {
		padding: 0 15px;
		margin-top: 25px;
		display: flex;
		flex-direction: column;
	}
	
	.cell-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 18px;
	}
	.cell-header text:first-child {
		color: #333333;
		font-size: 16px;
	}
	.cell-header text:last-child {
		color: #999999;
		font-size: 12px;
	}
	
	.cell {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin-bottom: 16px;
	}
	
	.cell text:first-child {
		width: 70px;
		color: #333333;
		font-size: 14px;
		
	}
	
	.cell text:last-child {
		flex: 1;
		color: #999999;
		font-size: 14px;
		margin-left: 30px;
	}
	
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 54px;
		padding: 0 10px 0 15px;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.bottom .bottom-price {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	 .price-tip text:nth-child(1) {
		color: #999999;
		font-size: 12px;
	}
	.price-tip text:nth-child(2) {
		color: #333333;
		font-size: 12px;
	}
	.price-tip text:nth-child(3) {
		color: #333333;
		font-size: 18px;
	}
	.price-vip {
		color: #2F69F8;
		font-size: 12px;
	}
	
	
	.bottom .bottom-buy {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 193px;
	}
	
	.button {
		width: 90px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 20px;
		color: #FFFFFF;
		font-size: 14px;
	}
	
	.bottom-buy .vip {
		margin-right: 13px;
		background-image: linear-gradient(-88deg, #2FA2F8 0%, #2F69F8 93%);
	}
	
	.bottom-buy .buy {
		background-image: linear-gradient(90deg, #FFB701 7%, #F8E71C 100%, #F8E71C 100%);
	}
</style>
