<template>
	<view class="container">
		<!-- 设置 -->
	<!-- 	<view class="nav">
			<image class="set" src="../../../static/mine/icon_set_blue@3x.png" mode=""></image>
		</view> -->
		<!-- 个人信息 -->
		<view class="top" @click="goProfile()">
			<image class="ava" src="../../../static/home/newslist/article-icon2.png" mode=""></image>
		    <view class="info">
				<view class="name">
					<text class="sigle-row">周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏周鹏</text>
					<image src="../../../static/mine/icon_id_vip_1@3x.png" mode=""></image>
				</view>
				<text class="vip-time sigle-row">VIP到期时间：2021-01-30</text>
			</view>
		</view>
		<!-- 开通VIP -->
		<view class="vip">
			<image src="../../../static/mine/icon_vip_crown@3x.png" mode=""></image>
			<text>开通VIP，即可享受会员权益！</text>
			<view class="activate">立即开通</view>
		</view>
		<!-- 列表 -->
		<view class="list">
			<view class="cell">
				<image src="../../../static/mine/icon_mine_wallet@3x.png" mode=""></image>
			    <text>我的钱包</text>
				<image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
			</view>
			<view class="cell">
				<image src="../../../static/mine/icon_mine_file@3x.png" mode=""></image>
			    <text>我的文件</text>
				<image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
			</view>
			<view class="cell">
				<image src="../../../static/mine/icon_mine_order@3x.png" mode=""></image>
			    <text>我的订单</text>
				<image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
			</view>
			<view class="cell">
				<image src="../../../static/mine/icon_mine_about@3x.png" mode=""></image>
			    <text>关于我们</text>
				<image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
			</view>
			<view class="cell">
				<image src="../../../static/mine/icon_mine_tel@3x.png" mode=""></image>
			    <text>求助热线</text>
				<image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
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
			goProfile:function() {
				uni.navigateTo({
					url:'../../mine/profile/index'
				})
			}

		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
	.sigle-row {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.container {
		font-size: 14px;
	}
	.nav {
		margin-top: 0px;
		height: 26px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.nav .set {
		margin-right: 15px;
		width: 24px;
		height: 26px;
	}
	.top {
		margin-top: 3px;
		display: flex;
		flex-direction: row;
		height: 60px;
		margin-left: 15px;
	}
	.top .ava {
		width: 60px;
		height: 60px;
	}
	.top .info {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin-left: 20px;
		overflow: hidden;
	}
	.info .name {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 25px;
	}
	
	.name text {
		flex: 1;
		color: #333333;
		font-size: 18px;
	}
	.name image {
		margin-left: 10px;
		width: 49px;
		height: 16px;
	}
	.info .vip-time {
		margin-top: 8px;
		height: 17px;
		color: #999999;
		font-size: 12px;
	}
	
	.vip {
		height: 52px;
		margin: 30px 15px 20px 15px;
		padding: 0 15px;
		background-color: #FFFFFF;
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
		border-radius: 6px;
	    display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	.vip image {
		width: 24px;
		height: 24px;
	}
	
	.vip text {
		flex: 1;
		color: #666666;
		font-size: 14px;
		margin-left: 10px;
	}
	
	.vip .activate {
		width: 72px;
		height: 24px;
		line-height: 24px;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		background-image: linear-gradient(-88deg, #2FA2F8 0%, #2F69F8 93%);
		border-radius: 20px;
	}
	
	
	.cell {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-left: 15px;
		height: 52px;
		border-bottom: .5px #ECECEC solid;
	}
	.cell image:nth-child(1) {
		width: 24px;
		height: 24px;
	}
	.cell text {
		flex: 1;
		color: #333333;
		font-size: 16px;
		margin-left: 10px;
	}
	.cell .arrow {
		width: 16px;
		height: 16px;
		margin-right: 15px;
	}
</style>
