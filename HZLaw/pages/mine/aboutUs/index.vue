<template>
	<view class="container">
		<nav-bar title="关于"></nav-bar>
		<view class="icon">
			<image src="../../../static/home/newslist/article-icon.png" mode=""></image>
		</view>
		<view class="name">
			<text>法 +</text>
		</view>
		<view class="ver">
			<text>V 1.0.0</text>
			<text>©无锡衡卓有限公司</text>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 14px;
		position: relative;
	}
	
	.icon {
		margin-top: 20px;
	}
	
	.icon image {
		width: 100px;
		height: 100px;
	}
	
	.name {
		color: #2C405A;
		font-size: 18px;
		margin-top: 10px;
	}
	
	.ver {
	    position: fixed;
		bottom: 20px;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	

</style>
