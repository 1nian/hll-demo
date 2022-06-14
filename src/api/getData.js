import axios from './request'

export const getList = (params) => axios('/list',params)
export const getCatList = (params) => axios('/catList',params)
export const getVisitorList = (params) => axios('/visitorList',params)

// 首页，服务器运行情况，数据生成
export const getServerData = (params) => axios('/serverData',params)