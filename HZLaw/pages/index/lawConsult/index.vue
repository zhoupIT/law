<template>
	<view class="container">
		<view class="consult-content">
			<text>*</text>
			<text>咨询内容</text>
			<textarea value="" placeholder="请详细描述您的咨询内容" />
		</view>
		<view class="upload-image">
			<text>相关照片</text>
			<text>(0/3)</text>
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
	page {
		background-color: #FFFFFF;
	}
	.container {
		font-size: 14px;
	}
	
	.consult-content {
		margin:15px 15px 17px 15px;
		border-bottom: .5px #ECECEC solid;
	}
	
	.consult-content text:nth-child(1) {
		color: #FF5A5A;
		font-size: 14px;
	}
	
	.consult-content text:nth-child(2) {
		color: #151515;
		font-size: 14px;
	}
	.consult-content textarea {
		margin-top: 10px;
		font-size: 14px;
	}
	
	
	.upload-image {
	    margin:15px 15px 17px 15px;
		height: 20px;
		line-height: 20px;
	} 
	
	.upload-image text:nth-child(1) {
		color: #333333;
		font-size: 14px;
	}
	
	.upload-image text:nth-child(2) {
		color: #999999;
		font-size: 12px;
	}
	
	
	
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 54px;
		padding: 0 10px 0 15px;
		background-color: rgba(255,255,255,0.75);
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
