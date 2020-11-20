/**
 * 首页相关api
 */
import {http} from '@/service/service.js'

/**
 * 查询banner列表
 * @param {Object} params - 查询参数  
 */
export const getAdList = (params) => {
	return http.post('/app/market/advert/list', 
		params
	)
}

export const login = (params) => {
	return http.get('/app/market/advert/list', 
		params
	)
}
