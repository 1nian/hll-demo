import axios from './request'

export const getList = (params) => axios('/list',params)
export const getCatList = (params) => axios('/catList',params)
export const getVisitorList = (params) => axios('/visitorList',params)

// 首页，平台运维情况分析，数据生成
export const getChartList = (params) => axios('/chartList',params)

// 首页，服务器运行情况，数据生成
export const getServerData = (params) => axios('/serverData',params)

// 首页，应用服务运行情况，数据生成
export const getAppServiceData = (params) => axios('/appServiceData',params)

// 首页，数据厂商对接情况，数据生成
export const getDataDocking = (params) => axios('/dataDocking',params)