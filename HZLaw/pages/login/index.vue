<template>
	<view class="container">
		<view class="login">
			<view class="logo">
				<image src="../../static/login/logo_login@3x.png" mode=""></image>
			</view>
			<view class="phone btn">
				<image src="../../static/login/icon_number@3x.png" mode=""></image>
				<input type="text" value="" placeholder="请输入手机号码" />
			</view>
			<view class="vercode btn">
				<image src="../../static/login/icon_verification_code@3x.png" mode=""></image>
				<input type="text" value="" placeholder="请输入手机号码" />
				<view class="">
					<text>获取验证码</text>
				</view>
			</view>
			<view class="protocol">
				<image src="../../static/login/icon_login_selected@3x.png" mode="" v-if="isSelected" @click="selectDidClicked()"></image>
				<image src="../../static/login/icon_checkbox_default@3x.png" mode="" v-else @click="selectDidClicked()"></image>
				<text class="agree">已阅读并同意</text>
				<text class="txt">衡卓法律咨询授权协议</text>
			</view>
			<view class="login-btn" @click="onLoginDidClicked()">登录</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSelected: false
			}
		},
		methods: {
			selectDidClicked:function() {
				this.isSelected = !this.isSelected;
			},
			onLoginDidClicked:function() {
				if (!this.isSelected) {
					uni.showToast({
						title:'请您先确认并勾选授权协议',
						position:'bottom',
						icon:'none'
					})
					return;
				}
				uni.switchTab({
					url:'/pages/tabBar/index/index'
				})
			}

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
	.login {
		padding: 14px 40px 0 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.logo {
		width: 91px;
		height: 96px;
	}
	
	.logo image {
		width: 100%;
		height: 100%;
	}
	
	.btn {
		position: relative;
		
		height: 46px;
		width: 100%;
		background-color: #F8F8F8;
		border-radius: 23px;
	}
	.btn image {
		position: absolute;
		width: 16px;
		height: 16px;
		left: 20px;
		top: 50%;
		transform: translateY(-50%);
	}
	.btn input {
		position: absolute;
		left: 56px;
		top: 0px;
		height: 46px;
		right: 20px;
	}
	.phone {
		margin-top: 50px;
	}
	
	.vercode {
		margin-top: 30px;
	}
	
	.vercode view {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 20px;
		width: 66px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		background-image: linear-gradient(-88deg, #2FA2F8 0%, #2F69F8 93%);
		border-radius: 12px;
		padding: 0 5px;
	}
	.vercode text {
		color: #FFFFFF;
		font-size: 10px;
	}
	
	.protocol {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-top: 20px;
	}
	
	.protocol image {
		width: 16px;
		height: 16px;
	}
	
	.protocol .agree {
		color: #999999;
		font-size: 12px;
		margin-left: 10px;
	}
	.protocol .txt {
		color: #5177f9;
		font-size: 12px;
		margin-left: 5px;
	}
	
	.login-btn {
		margin-top: 40px;
		width: 100%;
		height: 46px;
		line-height: 46px;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
		border-radius: 23px;
		background-image: linear-gradient(-88deg, #2FA2F8 0%, #2F69F8 93%);
		box-shadow: 0 2px 6px 0 rgba(47,105,248,0.32);
	}
</style>
