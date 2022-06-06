import axios from './request'

export const getList = (params) => axios('/list',params)
export const getCatList = (params) => axios('/catList',params)