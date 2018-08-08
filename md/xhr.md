# xhr

```js
xhr({
  url: 'api',  //{string} url , The URL we want to request
  type: 'POST',
  data: {},
  baseUrl: '/',
  success: res => {},
  error: err => {}
})

// 如果需要返回promise

return new Promise((resolve, reject) => {
  xhr({
    url: 'api',  //{string} url , The URL we want to request
    type: 'POST',
    data: {},
    baseUrl: '/',
    success: res => {resolve(res)},
    error: err => {reject(err)}
  })
})

```

**全局配置**: 详细见 `xhr.js`

```js
import {Message} from 'iview';

const apiBaseUrl = '';
let apiUrl = '';

xhr.getUrl = option => {
  if (option.baseUrl) {
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

xhr.baseData = {};

// 全局配置
xhr.defaultConfig = {};

xhr.success = (response) => {
  const res = response;
  let isSuccess = true;

  if (typeof res !== 'object') {
    Message.error(apiUrl + ': response data should be JSON');
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

xhr.error = (error) => {
  Message.error(error || 'unknown error');
};

```