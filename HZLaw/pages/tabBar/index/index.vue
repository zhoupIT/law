<template>
	<view class="container">
		<nav-bar bgColor="#2F69F8" title="衡卓法律咨询" fontColor="#FFF" backState="2000">
			<view slot="left" class="location">
				<text>经开区</text>
				<image src="../../../static/home/banner/icon_arrow_down@3x.png" mode=""></image>
			</view>
		</nav-bar>
		<!-- 头部和banner -->
		<view class="top-bg">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#b3c6fb" indicator-active-color="#2F69F8">
				<swiper-item>
					<image src="../../../static/home/banner/banner1@3x.png" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../static/home/banner/banner2@3x.png" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../static/home/banner/banner3@3x.png" mode=""></image>
				</swiper-item>
			</swiper>
		</view>		
		<!-- 功能 -->
		<view class="shortcut">
			<view class="fun" @click="goShortcutDetail('../../index/contract/index')">
				<image src="../../../static/home/shortcut/icon_shortcut_1@3x.png" mode=""></image>
				<text>文书合同</text>
			</view>
			<view class="fun" @click="goShortcutDetail('../../index/lawConsult/index')">
				<image src="../../../static/home/shortcut/icon_shortcut_2@3x.png" mode=""></image>
				<text class="">法律咨询</text>
			</view>
			<view class="fun" @click="goShortcutDetail(url)">
				<image src="../../../static/home/shortcut/icon_shortcut_3@3x.png" mode=""></image>
				<text class="">费用计算</text>
			</view>
			<view class="fun" @click="goShortcutDetail('../../index/vipService/index')">
				<image src="../../../static/home/shortcut/icon_shortcut_4@3x.png" mode=""></image>
				<text class="">VIP通道</text>
			</view>
		</view>
	
		<!-- 王牌律所	 -->
		<view class="module-head">
			<text>王牌律所</text>
			<view class="more">查看更多</view>
		</view>
		<scroll-view scroll-x="true"  scroll-y="false" class="lawFirm" show-scrollbar="false">
				<block v-for="(value, index) in lawFirmListData" :key="index">
					<view class="lawFirm-card" @click="goLawFirmDetail(value)">
						<image :src="value.icon" mode="" class="lawFirm-img"></image>
						<view class="lawFirm-detail">
							<text class="lawFirm-name">{{value.name}}</text>
							<view class="lawFirm-loc">
								<image src="../../../static/home/newslist/icon_address@3x.png" mode=""></image>
								<text>{{value.loc}}</text>
							</view>
							<text class="lawFirm-desc">{{value.desc}}</text>
							<!-- <view class="lawFirm-desc">{{value.desc}}</view> -->
						</view>
					</view>
				</block>
			</scroll-view>

		<!-- 法律资讯 -->
		<view class="module-head">
		    <text>法律资讯</text>
		    <view class="more">查看更多</view>
		</view>
		<view class="card">
			<block v-for="(value, index) in newslistData" :key="index">
				<view class="newslist-cell" @click="goDetail(value)">
					<view class="cell-type">
						<image src="../../../static/home/newslist/icon_article_hot@3x.png" mode="" v-if="value.type == '法律热文'"></image>
						<image src="../../../static/home/newslist/icon_article_classic@3x.png" mode="" v-else></image>
						<text>{{value.type}}</text>
					</view>
					<view class="cell-body">
						<image :src="value.icon" mode="" class="article-img"></image>
						<view class="article">
							<text class="article-desc">{{value.title}}</text>
							<view class="article-bottom">
								<text class="time">{{value.time}}</text>
								<view class="like">
									<image src="../../../static/home/newslist/icon_pageview_small_gray@3x.png" mode=""></image>
									<text>{{value.view}}</text>
									<image src="../../../static/home/newslist/icon_like_small_gray@3x.png" mode=""></image>
									<text>{{value.like}}</text>
								</view>
							</view>
						</view>
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
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				newslistData:[
					{
						type:'法律热文',
					    icon:'../../../static/home/newslist/article-icon.png',
					    title:'股权转让怎么办理？股权转让又如何缴税？',
						time:'2020-10-19',
						view:2130,
						like:95
					},
					{
						type:'经典案例',
					    icon:'../../../static/home/newslist/article-icon2.png',
					    title:'成功代理房产合同违约案获得索赔',
						time:'2020-10-19',
						view:2130,
						like:95
					},
					{
						type:'法律热文',
					    icon:'../../../static/home/newslist/article-icon.png',
					    title:'2020套路贷知识大全',
						time:'2020-10-11',
						view:9080,
						like:10324
					}
				],
				lawFirmListData:[
					{
						name:'江苏开炫律师事务所',
					    icon:'../../../static/home/newslist/article-icon.png',
					    desc:'无锡地区最大的律师事务所之一，业务领域涵盖诉讼仲裁、外商投资、劳动.还有干活什么的',
						loc:'江苏无锡'
					},
					{
						name:'盐城小周律师事务所',
					    icon:'../../../static/home/newslist/article-icon.png',
					    desc:'盐城地区普通的律师事务所之一，业务领域涵盖诉讼仲裁、外商投资、劳动',
						loc:'江苏盐城'
					},
				]
			}
		},
		methods: {
			goLawFirmDetail:function(val) {
				uni.navigateTo({
					url: '../../index/lawfirm/index'
				});
			},
			goShortcutDetail:function(url) {
				uni.navigateTo({
					url: url
				});
			},
			goContractDetail:function() {
				uni.navigateTo({
					url: ''
				});
			},
			
		}
	}
</script>

<style>
	.container {
		font-size: 12px;
	}
	.top-bg {
		position: relative;
		/* background-image: linear-gradient(180deg, #2F69F8 0%, #2FA2F8 99%); */
		background-color: #2F69F8;
		height: 125px;
		width: 100%;
		border-radius: 0 0 100% 100%;
	}

	.location {
		margin-left: 15px;
	}
	.location text {
		color: #FFFFFF;
		font-size: 14px;
	}
	.location image {
		width: 12px;
		height: 12px;
		margin-left: 4px;
	}
	.top-bg swiper {
		position: absolute;
		height: 160px;
		top: 20px;
		left: 15px;
		right: 15px;
		border-radius: 6px;
	}
	.top-bg swiper image {
		width: 100%;
		height: 100%;
	}
	.shortcut {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-top: 40px;
		height: 119px;
	}
	.shortcut .fun {
		flex: 1;
		text-align: center;
	}
	.shortcut .fun image {
		width: 36px;
		height: 36px;
	}
	.shortcut .fun text {
		display: block;
		color: #333333;
		margin-top: 6px;
	}
	.module-head {
		display: flex;
		padding: 0 15px;
		justify-content: space-between;
	}
	
	.module-head text {
		color: #333333;
		font-size: 16px;
	}
	
	.module-head .more {
		color: #666666;
		font-size: 10px;
		width: 56px;
		height: 18px;
		line-height: 18px;
		text-align: center;
		border:.5px #CCCCCC solid;
		border-radius: 9px;
	}
     
	.card {
		margin: 10px 15px;
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
		border-radius: 6px;
		background-color: #FFFFFF;
	} 
	
	.newslist-cell {
		display: flex;
		padding: 15px 10px;
		height: 117px;
		border-bottom: .5px solid #f3f3f3;
		flex-direction: column;
		box-shadow: inset 0 0 0 0 #ECECEC;
		box-sizing: border-box;
	}
	
	.cell-type {
		margin: 0px 0px 10px 0px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.cell-type image {
		width: 16px;
		height: 16px;
		margin-left: 0px;
	}
	.cell-type text {
		height: 17px;
		line-height: 17px;
		color: #666666;
		font-size: 12px;
		margin-left: 5px;
	}
	.cell-body {
		display: flex;
		flex-direction: row;
	}
	
	.cell-body .article-img {
		width: 60px;
		height: 60px;
		background-color: #FFFFFF;
		border-radius: 6px;
		flex-shrink: 0;
	}
	
	.cell-body .article {
		display: flex;
		height: auto;
		margin: 0px 10px 0px 16px;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}
	
	.article .article-desc {
		color: #333333;
		font-size: 14px;
		height: 40px;
		overflow: hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	
	.article .article-bottom {
		margin-top: 3px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.time {
		color: #999999;
		font-size: 12px;
	}
	
	.like {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.like image {
		width: 16px;
		height: 16px;
	    margin-left: 16px;
	}
	
	.like text {
		margin-left: 6px;
		font-size: 12px;
		color: #999999;
	}
	
	.lawFirm {
		height: 120px;
		width: 100%;
		margin:10px 0px 30px 0px;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
	}
	
	.lawFirm .lawFirm-card {
		display: inline-block;
		width: 280px;
		height: 119px;
		background-color: #FFFFFF;
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
		border-radius: 6px;
		padding: 15px 10px;
		margin-left: 15px;
		position: relative;
		box-sizing: border-box;
	
	}
	
	.lawFirm-card .lawFirm-img {
		position: absolute;
		top: 15px;
		left: 10px;
		width: 40px;
		height: 40px;
		border-radius: 6px;
/* 		flex-shrink: 0; */
	}
	
	.lawFirm-card .lawFirm-detail {
		position: absolute;
		top: 15px;
		left: 60px;
		right: 10px;
		bottom: 15px;
		display: flex;
		flex-direction: column;
	}
	
	.lawFirm-detail .lawFirm-name {
		color: #333333;
		font-size: 14px;
	}
	
	.lawFirm-detail .lawFirm-loc {
		margin-top: 5px;
		height: 14px;
		display: flex;
		align-items: center;
	}
	.lawFirm-detail .lawFirm-loc image {
		width: 14px;
		height: 14px;
	}
	.lawFirm-detail .lawFirm-loc text {
		color: #999999;
		font-size: 10px;
		margin-left: 4px;
	}
	
	.lawFirm-detail .lawFirm-desc {
		margin-top: 9px;
		color: #999999;
		font-size: 12px;
		overflow: hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
		white-space: break-spaces;
	}
</style>
