<template>
	<view class="container">
		<nav-bar title="文书合同"></nav-bar>
		<!-- 搜索栏 -->
		<!-- <uni-search-bar class="search" @confirm="" @input="" placeholder="请输入合同关键字" radius="16" bgColor="#F6F7F8" /> -->
		<!-- 下拉栏 -->
		<!-- <HMfilterDropdown class="dropdown" :filterData="filterData" @confirm="confirm"></HMfilterDropdown> -->
		<!-- 文书合同 -->
		<view class="law-list">
			<block v-for="(value, index) in contractlist" :key="index">
				<view class="list-cell" @click="goLawDetail()">
					<image class="vip" src="../../../static/home/contract/icon_contract_free@3x.png" mode="" v-if="value.isVip"></image>
					<image class="contract-preview" src="" mode=""></image>
					<view class="contract">
						<text class="contract-name sigle-row">{{value.name}}</text>
						<view class="contract-price">
							<view class="price-tool">
								<text>￥</text>
								<text class="price">{{value.price}}</text>
							</view>
							<text class="sales">销量 {{value.sales}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		
		
	</view>
</template>

<script>
	import HMfilterDropdown from '@/components/HM-filterDropdown/HM-filterDropdown.vue';
	export default {
		components: {
		   'HMfilterDropdown':HMfilterDropdown 
		},
		data() {
			return {
				filterData:[
	{
		name:'合同类型',
		"type": 'hierarchy',
		"submenu": [{
				"name": '附近',
				"value": "附近",
				"submenu": [

				]
			},
			{
				"name": '热门商圈',
				"value": "热门商圈",
				"submenu": [{
						"name": "全部商圈",
						"value": "全部商圈"
					},
					{
						"name": "燕岭/五山",
						"value": "燕岭/五山"
					},
					{
						"name": "天河城/体育中心",
						"value": "天河城/体育中心"
					},
					{
						"name": "石牌/龙口",
						"value": "石牌/龙口"
					},
					{
						"name": "天河北",
						"value": "天河北"
					},
					{
						"name": "珠江新城",
						"value": "珠江新城"
					},
					{
						"name": "时尚天河",
						"value": "时尚天河"
					},
					{
						"name": "高德置地",
						"value": "高德置地"
					},
					{
						"name": "跑马场",
						"value": "跑马场"
					},
					{
						"name": "天河公园",
						"value": "天河公园"
					},
					{
						"name": "嘉裕太阳城",
						"value": "嘉裕太阳城"
					},
					{
						"name": "五羊新城",
						"value": "五羊新城"
					},
					{
						"name": "北京路",
						"value": "北京路"
					},
					{
						"name": "上下九",
						"value": "上下九"
					},
					{
						"name": "万达广场",
						"value": "万达广场"
					}
				]
			},
			{
				"name": '天河区',
				"value": "天河区",
				"submenu": [{
						"name": "全部",
						"value": "全部"
					},
					{
						"name": "燕岭/五山",
						"value": "燕岭/五山"
					},
					{
						"name": "天河城/体育中心",
						"value": "天河城/体育中心"
					},
					{
						"name": "石牌/龙口",
						"value": "石牌/龙口"
					},
					{
						"name": "天河北",
						"value": "天河北"
					},
					{
						"name": "珠江新城",
						"value": "珠江新城"
					},
					{
						"name": "时尚天河",
						"value": "时尚天河"
					},
					{
						"name": "高德置地",
						"value": "高德置地"
					},
					{
						"name": "跑马场",
						"value": "跑马场"
					},
					{
						"name": "天河公园",
						"value": "天河公园"
					},
					{
						"name": "东圃",
						"value": "东圃"
					},
					{
						"name": "林和村",
						"value": "林和村"
					},
					{
						"name": "车陂",
						"value": "车陂"
					},
					{
						"name": "猎德社区",
						"value": "猎德社区"
					},
					{
						"name": "前进",
						"value": "前进"
					}
				]
			},
			{
				"name": '荔湾区',
				"value": "荔湾区",
				"submenu": [{
						"name": "全部",
						"value": "全部"
					},
					{
						"name": "西城都荟",
						"value": "西城都荟"
					},
					{
						"name": "多宝",
						"value": "多宝"
					},
					{
						"name": "陈家祠",
						"value": "陈家祠"
					},
					{
						"name": "华林",
						"value": "华林"
					},
					{
						"name": "西关",
						"value": "西关"
					},
					{
						"name": "花地湾",
						"value": "花地湾"
					},
					{
						"name": "金花",
						"value": "金花"
					},
					{
						"name": "康王路",
						"value": "康王路"
					},
					{
						"name": "上下九",
						"value": "上下九"
					}
				]
			},
			{
				"name": '越秀区',
				"value": "越秀区",
				"submenu": [{
						"name": "全部",
						"value": "全部"
					},
					{
						"name": "五羊新城",
						"value": "五羊新城"
					},
					{
						"name": "北京路",
						"value": "北京路"
					},
					{
						"name": "华乐",
						"value": "华乐"
					},
					{
						"name": "西门口",
						"value": "西门口"
					},
					{
						"name": "建设",
						"value": "建设"
					},
					{
						"name": "海珠广场",
						"value": "海珠广场"
					},
					{
						"name": "东山口",
						"value": "东山口"
					},
					{
						"name": "越秀公园",
						"value": "越秀公园"
					},
					{
						"name": "淘金",
						"value": "淘金"
					},
					{
						"name": "环市中",
						"value": "环市中"
					},
					{
						"name": "东风东",
						"value": "东风东"
					},
					{
						"name": "解放北",
						"value": "解放北"
					},
					{
						"name": "东湖",
						"value": "东湖"
					}
				]
			}

		]
	},
	{
		"name":'相关行业',
		"type": 'hierarchy',
		"submenu": [
			{
				"name": "1~3年",
				"value": "1~3年"
			},
			{
				"name": "4~7年",
				"value": "4~7年"
			},
			{
				"name": "8~10年",
				"value": "8~10年"
			},
			{
				"name": "10年以上",
				"value": "10年以上"
			}
		]
	}
],
				contractlist:[
					{
						icon:'',
						isVip:true,
						name:'房屋租赁合同房屋租赁合同房屋租赁合同',
						price:'10931',
						sales:'5312321'
					},
					{
						icon:'',
						isVip:false,
						name:'房屋租赁合同1',
						price:'546',
						sales:'34'
					},
					{
						icon:'',
						isVip:false,
						name:'房屋租赁合同2',
						price:'1324',
						sales:'64'
					},
					{
						icon:'',
						isVip:false,
						name:'房屋租赁合同3',
						price:'989',
						sales:'38'
					}
				]
			}
		},
		methods: {
			goBack:function() {
				uni.navigateBack();
			},
			goLawDetail:function() {
				uni.navigateTo({
					url:'../clericalService/index'
				});
			}
	
		}
	}
</script>

<style>
	.container {
		font-size: 12px;
		position: relative;
	}
	
	.search {
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
		height: 52px;
		/* 下拉选择框的z-index是997 */
		z-index: 996;
		background-color: #FFFFFF;
	}
	
	.dropdown {
		top: calc(52px + var(--window-top));
	}
	
	.law-list {
		margin-top: calc(52px + var(--window-top));
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 0 15px;
		justify-content: space-between;
	}

	.list-cell {
		margin-top: 15px;
		display: flex;
		position:relative;
		flex-direction: column;
		width: calc((100vw - 45px)/2);
		height: 210px;
		background-color: #FFFFFF;
		border-radius: 6px;
		overflow: hidden;
	}
	
	.vip {
		position: absolute;
		top: 0;
		right: 0;
		width: 50px;
		height: 50px;
		z-index: 990;
	}
	
	.contract-preview {
		height: 140px;
		width: 100%;
		background-color: #13BF6C;
	}
	
	.contract {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	
	.contract-name {
		color: #333333;
		font-size: 14px;
	}
	
	.contract-price {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
		margin-top: 7px;
	}
	
	.price-tool text:nth-child(1) {
		color: #999999;
		font-size: 12px;
	}
	
	.price-tool .price {
		color: #2F69F8;
		font-size: 18px;
	}
	
	.contract-price .sales {
		color: #999999;
		font-size: 12px;
	}
	
	
	
</style>
