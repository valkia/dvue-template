/**
 * 模版模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const templateApi = {
    // 例子：post提交    参数 qs.stringify(params) 是form格式，
    template1(params) {
        return axios.post(`${base.baseUrl}/xxx`, qs.stringify(params));
    },
    template2(params) { 参数params 是json格式
        return axios.post(`${base.baseUrl}/xxx`, params);
    }
}

export default templateApi;