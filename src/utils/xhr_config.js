import xhr from 'axhr';
import router from '@/routers/';
import {Message} from 'iview';
import auth from './auth';
import {apiBaseUrl} from './config';

let apiUrl = '';

xhr.getUrl = option => {
  if(option.baseUrl) {
    apiUrl = option.baseUrl + option.url;
    return {
      baseUrl: option.baseUrl,
      url: option.url
    };
  }
  apiUrl = apiBaseUrl + option.url;
  return {
    baseUrl: apiBaseUrl,
    url: option.url
  };
};

xhr.baseData = {
  t: Date.now()
};

// 全局 配置
xhr.defaultConfig = {
  timeout: 20000
};

xhr.success = (response) => {
  const res = response;
  let isSuccess = true;
  
  if (typeof res !== 'object') {
    Message.error( apiUrl + ': response data should be JSON');
    isSuccess = false;
  }
  switch (res.code) {
    case 200:
      isSuccess = true;
      break;
    case 401:
      auth.destroy();
      router.push('/login');
      isSuccess = false;
      break;
    default:
    Message.error(res.msg || 'unknown error');
    isSuccess = false;
  }

  return isSuccess;
};

xhr.error = (err) => {
  console.log(err);
  Message.error('服务器开小差了！');
  return err;
};
