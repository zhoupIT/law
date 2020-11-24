/**
 * 登录相关
 */
export const loginCheck = (phone,code,isSelected) => {
	if (!phone.trim().length) {
		uni.showToast({
			title:'请您输入手机号码',
			position:'bottom',
			icon:'none'
		})
		return false;
	}
	if (phone.trim().length != 11) {
		uni.showToast({
			title:'请您输入正确的手机号码',
			position:'bottom',
			icon:'none'
		})
		return false;
	}
	if (!code.trim().length) {
		uni.showToast({
			title:'请您输入验证码',
			position:'bottom',
			icon:'none'
		})
		return false;
	}
	if (!isSelected) {
		uni.showToast({
			title:'请您先确认并勾选授权协议',
			position:'bottom',
			icon:'none'
		})
		return false;
	}
	return true;
}

export const getCodeCheck = (phone) => {
	if (!phone.trim().length) {
		uni.showToast({
			title:'请您输入手机号码',
			position:'bottom',
			icon:'none'
		})
		return false;
	}
	if (phone.trim().length != 11) {
		uni.showToast({
			title:'请您输入正确的手机号码',
			position:'bottom',
			icon:'none'
		})
		return false;
	}
	return true;
}