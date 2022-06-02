import axios from './request'

export const getList = (params) => axios.post('/list',params)