<template>
	<view class="container">
		<nav-bar title="我的文件"></nav-bar>
		<view class="list">
			<block v-for="(value, index) in listData" :key="index">
				<view class="cell">
					<image class="ava" src="" mode=""></image>
					<view class="desc">
						<view>
							<view class="head">
								<text class="name">{{value.name}}</text>
								<text class="type">{{value.type}}</text>
							</view>
							<text class="time" :class="{isExpire:formatExpireTime(value.expireTime)}">[有效期：{{value.expireTime}}]</text>
						</view>
						<view class="check" :class="{isExpireBtn:formatExpireTime(value.expireTime)}">{{formatExpireTime(value.expireTime)?'已过期':'免费查看'}}</view>
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
				listData:[
					{
						name:'房屋租赁合同',
						expireTime:'2020-08-12 23:31:34',
						type:'租赁合同',
						icon:''
					},
					{
						name:'小屋租合同',
						expireTime:'2020-12-12 12:09:12',
						type:'合同',
						icon:''
					},
					{
						name:'拆迁',
						expireTime:'永久',
						type:'说明书',
						icon:''
					}
				]
			}
		},
		methods: {
			formatExpireTime:function (expireTime) {
				if ((new Date(expireTime).getTime() > new Date().getTime())|| expireTime =='永久') {
					return false;
				} 
				return true;
			}
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
		height: 130px;
		border-radius: 6px;
		background-color: #FFFFFF;
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.cell .ava {
		width: 80px;
		height: 100px;
		margin-left: 15px;
		background-color: #13BF6C;
		border-radius: 6px;
	}
	
	.cell .desc {
		margin: 15px;
		flex: 1;
		height: 100px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.desc .head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}
	.head text:nth-child(1) {
		color: #333333;
		font-size: 14px;
	}
	.head text:nth-child(2) {
		color: #999999;
		font-size: 12px;
	}
	
	 .time {
		margin-top: 10px;
		color: #999999;
		font-size: 12px;
	}
	
	 .check {
		width: 72px;
		height: 24px;
		line-height: 24px;
		background-image: linear-gradient(-88deg, #2FA2F8 0%, #2F69F8 93%);
		border-radius: 12px;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		align-self:flex-end;
	}
	.isExpire {
		color: #FF5A5A;
	}
	.isExpireBtn {
		background: #CCCCCC;
	}
</style>
