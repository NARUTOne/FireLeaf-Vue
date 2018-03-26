/**
 * NARUTOne create on 2018-03-26
 * @public
 * @name xhr
 * @param  {object} options 当前请求配置
 * @return {promise}
 * @description xhr base on axios
 *
 */

 import axios from 'axios';

const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
const isArray = arr => Array.isArray(arr);

 function setData(params) {
  let sendData = params;
  if (isObject(sendData)) {
    sendData = Object.assign({}, sendData);
    sendData = Object.keys(sendData).map(key => {
      let value = sendData[key];
      if (isArray(value) || isObject(value)) {
        value = JSON.stringify(value);
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join('&');
  }else {
    return new Error ('options.data is object type');
  }

  return sendData;
}


const server = axios.create({
  timeout: 3000
});

// request interceptors
server.interceptors.request.use(function(config){
  // Do something before request is sent
  return config;
}, function(error){
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

// respone interceptors

server.interceptors.response.use(function(response){
  // 对响应数据做些事
  /**
   * @public
   * @name xhr.success
   * @param {object} response 当前response
   * @description 实现动态 拦截配置
   * ```js
   * xhr.success = res => boolean
   * ```
   * @return {boolean}
   */
  const isSuccess = xhr.success ? xhr.success(response) : true;
  
  if(isSuccess) {
    return response;
  }
  else {
    return Promise.reject(response.msg || 'unknown error');
  }
  
}, function(error){
  // 请求错误时做些事
  console.log('err: ' + error);
  return Promise.reject(error);
});


 /**
 * Requests a URL, returning a promise.
 * @public
 * @name xhr
 * @param  {object} [options] The options we want to pass to "fetch"
 * ```js
 *  options = {
 *    url: 'api',  //{string} url , The URL we want to request
 *    type: 'GET,
 *    baseUrl: 'http://', xhr实例的baseUrl
 *    data: {}
 * }
 * ```
 * @return {object}  return an object containing either "data" or "err"
 */

export default function xhr(options) {
  if(!options) return new Error ('The options field is required, and the type is object, for XHR !');

  const config = {
    method: (options.type || "GET").toUpperCase(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  };

  // data
  if(config.method === 'POST' || config.method === 'PUT') {
    config.data = setData(options.data) || {};
  }

  /**
   * @public
   * @name xhr.getUrl
   * @param {object} options 当前请求配置
   * @description 实现动态 url
   * ```js
   * xhr.getUrl = option => [apiBaseUrl] + option.url
   * ```
   * @return {object} 返回实际请求 {baseUrl, url}
   */
  if (xhr.getUrl) { 
    const {baseUrl, url} = xhr.getUrl(options);

    config.baseURL = baseUrl;
    config.url = url;
  } else {
    /**
     * @public
     * @name xhr.baseUrl
     * @type {string}
     * @description 全局基础 URL，常用的场景是接口是另外的服务，方便统一设置路径, 默认使用脚手架中 src/utils/config 中的apiBaseUrl, 
     * 配置 xhr_config.js
     */
    
     config.baseURL = xhr.baseUrl;
     config.url = options.url;
  }

  return server(config);
}