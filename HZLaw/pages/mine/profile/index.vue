<template>
	<view class="container">
		<!-- 列表 -->
		<view class="list">
			<view class="cell cell-type-ava">
			    <text class="cell-title">头像</text>
				<view class="cell-right">
					<image class="cell-ava" src="../../../static/home/newslist/article-icon2.png"></image>
					<image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
				</view>
			</view>
			<view class="cell cell-type-common">
			    <text class="cell-title">昵称</text>
				<view class="cell-right">
					<text class="cell-val">请输入</text>
				    <image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
				</view>
			</view>
			<view class="cell cell-type-common">
			    <text class="cell-title">身份</text>
				<view class="cell-right">
					<text class="cell-val-common">普通用户</text>
				</view>
			</view>
			<view class="cell cell-type-common">
			    <text class="cell-title">性别</text>
				<view class="cell-right">
					<picker mode="selector" :range="sexDatas" @change="bindSexPickerChange">
						<text class="cell-val">{{sexIndex==-1?'请选择':sexDatas[sexIndex]}}</text>
					</picker>
				   <image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
				</view>
			</view>
			<view class="cell cell-type-common">
			    <text class="cell-title">生日</text>
				<view class="cell-right">
					<picker mode="date" :start="startDate" :end="endDate" @change="bindDateChange">
					    <text class="cell-val">{{date==null?'请选择':date}}</text>
					</picker>
				   <image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
				</view>
			</view>
			<view class="cell cell-type-common">
			    <text class="cell-title">所在地区</text>
				<view class="cell-right">
					<text class="cell-val">请选择</text>
				   <image class="arrow" src="../../../static/mine/icon_arrow_right@3x.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
			      format: true
			 })
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				sexDatas: ['男', '女'],
				sexIndex:-1,
				date:null,
			}
		},
		 computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		methods: {
			 bindSexPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.target.value)
			     this.sexIndex = e.target.value
			 },
			 bindDateChange: function(e) {
				 this.date = e.target.value;
			 },
			 getDate(type) {
			        const date = new Date();
			        let year = date.getFullYear();
			        let month = date.getMonth();
			        let day = date.getDate();
			        if (type === 'start') {
			            year = 2000;
						month = 1;
						day = 1;
			        } 
			        return `${year}-${month}-${day}`;
			 }

		}
	}
</script>

<style>
	.container {
		font-size: 14px;
		padding-top: 10px;
	}
	
	.list {
		padding-left: 15px;
		background-color: #FFFFFF;
	}
	
	.cell {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		border-bottom: .5px #ECECEC solid;
		background-color: #FFFFFF;
	}
	
	.cell-type-ava {
		height: 86px;
	}
	
	.cell-type-common {
		height: 52px;
	}
	
	.cell .cell-title {
		color: #333333;
		font-size: 16px;
		margin-left: 10px;
	}
	
	.cell .cell-right {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-right: 15px;
	}
	
	.cell-right .cell-ava {
		width: 56px;
		height: 56px;
		border-radius: 28px;
	}
	.cell-right .cell-val-common {
		color: #CCCCCC;
		font-size: 14px;
	}
	.cell-right .cell-val {
		color: #999999;
		font-size: 14px;
	}
	.cell-right .arrow {
		width: 16px;
		height: 16px;
		margin-left: 10px;
	}
</style>
