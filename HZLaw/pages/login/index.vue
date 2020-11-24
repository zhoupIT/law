<template>
	<view class="container">
		<nav-bar bgColor="#FFFFFF" backState="2000"></nav-bar>
		<view class="login">
			<view class="logo">
				<image src="../../static/login/logo_login@3x.png" mode=""></image>
			</view>
			<view class="phone btn">
				<image src="../../static/login/icon_number@3x.png" mode=""></image>
				<input type="number" v-model="phone" placeholder="请输入手机号码"  />
			</view>
			<view class="vercode btn">
				<image src="../../static/login/icon_verification_code@3x.png" mode=""></image>
				<input type="number" v-model="code" placeholder="请输入验证码" />
				<view class="" @click="getCode()">
					<text v-if="showGetCode">获取验证码</text>
					<text v-else>{{codeTime}}</text>
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
	import {
		getSmsCode,
		login,
		getUserInfo
	} from '../../api/IndexApi.js'
	import {
		loginCheck,
		getCodeCheck
	} from '../../service/loginService.js'
	export default {
		data() {
			return {
				// 是否勾选协议
				isSelected: false,
				showGetCode: true,
				// 验证码60s
				codeTime: 60,
				phone: '',
				code: ''
			}
		},
		methods: {
			phoneInputSearch:function(newVal) {
				if(newVal == this.phone){
				    return;
				}
				this.phone = newVal;
			},
			selectDidClicked: function() {
				this.isSelected = !this.isSelected;
			},
			onLoginDidClicked: function() {
				if (loginCheck(this.phone, this.code, this.isSelected)) {
					let param = {'mobile':this.phone,'password':this.code};
					login(param).then(res => {
						if (res.code == 0) {
							uni.setStorage({
							    key: 'token',
							    data: res.data.token,
							    success: function () {
									// 获取个人信息
									getUserInfo().then(res=>{
										if (res.code == 0) {
											uni.setStorage({
											    key: 'userInfo',
											    data: JSON.stringify(res.data),
											    success: function () {
													uni.switchTab({
														url:'/pages/tabBar/index/index'
													})
												}
											});
										}
									})
							    }
							});
						}
					}).catch(err => {

					});
				}

			},
			getCode: function() {
				if (this.showGetCode == false) {
					return;
				}
				if (getCodeCheck(this.phone)) {
					// 获取验证码
					var that = this;
					getSmsCode(this.phone).then(res => {
						if (res.code == 0) {
							that.showGetCode = false;
							var timer = setInterval(() => {
								that.codeTime --;
								if (that.codeTime == 0) {
									that.showGetCode = true;
									that.codeTime = 60;
									clearInterval(timer);
								}
							}, 1000)
						}
					}).then(res => {
						console.log('then.....')
					}).catch(error => {
						console.log('error.....')
					});
				}
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
		-webkit-user-select:text !important;
	}

	.phone {
		margin-top: 50px;
	}

	.vercode {
		margin-top: 30px;
	}

	.vercode input {
		right: 96px;
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
		box-shadow: 0 2px 6px 0 rgba(47, 105, 248, 0.32);
	}
</style>
