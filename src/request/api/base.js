/**
 * 接口域名的管理
 */

// eslint-disable-next-line no-unused-vars
let baseUrl = "";   //这里是一个默认的url，可以没有
//window.location.href
console.log(process.env.NODE_ENV);

//主机地址 http://localhost:8080
let host = "http://localhost:8080";


if (process.env.NODE_ENV === 'production') {
    host = window.location.origin;
}


var pathName = window.location.pathname;
var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);

baseUrl = host + projectName;//航显url
//日后可能要拓展，所以返回一个对象
const base = {
    baseUrl
}

export default base;