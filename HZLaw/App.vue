<script>
	import {
		getUserInfo
	} from 'api/IndexApi.js'
	
	export default {
		onLaunch: function() {
			console.log('App Launch');
			const token = uni.getStorage({
				key: 'token',
				success: function(res) {
					console.log(res.data);
					if (res.data && res.data.length) {
						// 获取个人信息
						getUserInfo().then(res=>{
							if (res.code == 0) {
								uni.setStorage({
								    key: 'userInfo',
								    data: JSON.stringify(res.data),
								    success: function () {
										uni.reLaunch({
											url:'/pages/tabBar/index/index'
										})
									}
								});
							}
						})
						
					} else {
						uni.reLaunch({
							url:'pages/login/index'
						})
					}
				}
			});
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	.sigle-row {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.back-arrow {
		width: 9px !important;
		height: 16px !important;
	}

	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
	/* #ifndef APP-PLUS-NVUE */
	page {
		background-color: #f7f7f7;
	}

	/* #endif */
</style>
