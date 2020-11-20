<template>
	<view class="container">
		<nav-bar title="律师" backState="2000"></nav-bar>
		<!-- 下拉栏 -->
		<!-- <HMfilterDropdown :filterData="filterData" @confirm="confirm"></HMfilterDropdown> -->
		<!-- 律所律师 -->
		<view class="law-list">
			<block v-for="(value, index) in lawlist" :key="index">
				<view class="list-cell" @click="goLawDetail(value)">
					<view class="cell-header">
						<text class="law-no">执照编号：{{value.no}}</text>
						<view class="online-status">
							<text class="law-statusBg"></text>
							<text class="law-status">{{value.isOnline}}</text>
						</view>
					</view>
					<view class="cell-body">
						<view class="lawInfo">
							<image class="law-ava" src="../../../static/home/newslist/article-icon2.png" mode=""></image>
							<text class="law-name">{{value.name}}</text>
							<text class="law-time">执业{{value.time}}</text>
						</view>
						<view class="lawAble">
							<view class="tag-view">
								<block v-for="(tag, tagID) in value.tag" :key="tagID">
									<text class="tag">{{tag}}</text>
								</block>
							</view>
							<view class="rate">
								<view class="score"></view>
								<!-- <uni-rate class="score" :touchable="false" :size="16" :value="value.score" @change="onChange" /> -->
								<view class="contact">
									<image class="contact-icon" src="../../../static/lawFirm/icon_consult@3x.png" mode=""></image>
								    <text class="contact-text">立即咨询</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
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
		name:'所在区域',
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
		"name":'执业年限',
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
				lawlist:[
					{
						no:'136716387168868319',
						isOnline:'在线',
						name:'周鹏',
						ava:'',
						time:'13',
						tag:['借款借贷','交通事故','家庭婚姻'],
						score:'1'
					},{
						no:'136716387168868319',
						isOnline:'离线',
						name:'小猪',
						ava:'',
						time:'5',
						tag:['合同纠纷','交通','借款借贷'],
						score:'3'
					},{
						no:'136716387168868319',
						isOnline:'在线',
						name:'小狗',
						ava:'',
						time:'9',
						tag:['合同纠纷','交通','借款借贷','交通事故','家庭婚姻','合同纠纷'],
						score:'4'
					},
					{
						no:'136716387168868319',
						isOnline:'在线',
						name:'小猫',
						ava:'',
						time:'6',
						tag:['合同纠纷','交通','借款借贷','交通事故','家庭婚姻','合同纠纷'],
						score:'5'
					},
					{
						no:'136716387168868319',
						isOnline:'在线',
						name:'周鹏',
						ava:'',
						time:'13',
						tag:['借贷','交通事故'],
						score:'5'
					},
					{
						no:'136716387168868319',
						isOnline:'在线',
						name:'周鹏',
						ava:'',
						time:'13',
						tag:['借贷','交通事故'],
						score:'5'
					}
				],
				tagList:[
					'交通','借款借贷','交通事故','家庭婚姻','合同纠纷','交通','借款借贷','交通事故','家庭婚姻','合同纠纷'
				],
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			goBack:function() {
				uni.navigateBack();
			}
	
		}
	}
</script>

<style>
	.container {
		font-size: 12px;
		position: relative;
	}

	.list-cell {
		height: 163px;
		padding: 0px 15px;
		background-color: #FFFFFF;
	}
	
	.list-cell:nth-child(1) {
		margin-top: var(--window-top);
	}
	
	.cell-header {
		height: 42px;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
	.line {
		height: .5px;
		background-color: #ECECEC;
		margin-left: 15px;
	}
	.law-no {
		color: #666666;
		font-size: 12px;
	}
	.online-status {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.law-statusBg {
		width: 5px;
		height: 5px;
		border-radius: 2.5px;
		background-color: #13BF6C;
	}
	.law-status {
		margin-left: 5px;
		color: #13BF6C;
		font-size: 12px;
	}
	.cell-body {
		display: flex;
		flex-direction: row;
		height: 106px;
	}
	.lawInfo {
		width: 64px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.law-ava {
		width: 64px;
		height: 64px;
	}
	.law-name {
		height: 20px;
		color: #333333;
		font-size: 14px;
		margin-top: 5px;
		text-align: center;
	}
	.law-time {
		margin-top: 0px;
		color: #999999;
		font-size: 12px;
		text-align: center;
	}
	.lawAble {
		display: flex;
		flex: 1;
		margin-left: 15px;
		flex-direction: column;
		justify-content: space-between;
	}
	.tag-view {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		text-align: center;
		height: 60px;
		overflow: hidden;
	}
	
	.tag {
		width: 64px;
		height: 25px;
		line-height: 25px;
		border-color:  #ECECEC;
		border-width: .5px;
		border-style: solid;
		margin-right: 2px;
		margin-bottom: 10px;
		border-radius: 12.5px;
		font-size: 12px;
		text-align: center;
	}
	
	.rate {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	
	
	.contact {
		display: flex;
		height: 20px;
		flex-direction: row;
		align-items: center;
	}
	
	.contact-icon {
		width: 16px;
		height: 16px;
	}
	.contact-text {
		width: 56px;
		margin-left: 8px;
		color: #666666;
		font-size: 14px;
	}	
</style>
