/**
 * 首页相关api
 */
import {http,baseUrl} from '@/service/service.js'


/**
 * 查询banner列表
 * @param {Object} params - 查询参数  
 */
export const getAdList = (params) => {
	return http.post('/app/market/advert/list', 
		params
	)
}

/**
 * 查询文书合同列表
 * {"limit":"10","contractType":"1","name":"合同","industry":"1","page":"1"}
 * @param {Object} params - 查询参数  
 */
export const getContractList = (params) => {
	return http.post('/app/contract/list', 
		params
	)
}

/**
 * 查询法律热文列表
 * “title”：“”，
    “type”：“”，
    “limit”： ，
    “page”：,
 * @param {Object} params - 查询参数  
 */
export const getOrgNewsList = (params) => {
	return http.post('/app/org/news', 
		params
	)
}

/**
 * 查询律所信息列表
 * 传输 orgId 获取该律所下所有律师    ，传输 topStatus（0-不是王牌律所 1- 是王牌律所） 获取王牌律所信息
 * @param {Object} params - 查询参数  
 */
export const getOrgInfo = (params) => {
	return http.post('/app/org/info', 
		params
	)
}

/// 验证码
export const getSmsCode = (phone) => {
	return http.get('/app/smsCode/'+phone)
}

/// 登录
export const login = (params) => {
	return http.post('/app/codeLogin', 
		params
	)
}

/// 获取个人信息
export const getUserInfo = () => {
	return http.get('/app/user/info')
}

/**
 * 查询VIP套餐
 * @param {Object} params - 查询参数  
 */
export const getTariff = (params) => {
	return http.post('/app/tariff/get',params)
}