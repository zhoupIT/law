    // 求助热线
	function hotLine() {
		uni.makePhoneCall({
			phoneNumber: '114'
		});
	}
	// 跳转页面
	function goPageWithUrl(url) {
		uni.navigateTo({
			url: url
		})
	}
	
	module.exports = {
		hotLine:hotLine,
		goPageWithUrl:goPageWithUrl
	}
