/**
 * 模版模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

/*用法：
*                   let params = {};
*                   this.$api.templateApi
                    .template2(params)
                    .then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    });
* */

const templateApi = {
    // 例子：post提交    参数 qs.stringify(params) 是form格式，
    template1(params) {
        return axios.post(`${base.baseUrl}/xxx`, qs.stringify(params));
    },
    template2(params) { //参数params 是json格式
        return axios.post(`${base.baseUrl}/xxx`, params);
    }
}

export default templateApi;