/**
 * xhr for login
 */

import xhr from 'utils/xhr';

export function toLogin (data) {
  // console.log(data);
  return xhr({
    url: 'api/login',
    type: 'POST',
    data
  });
}

export function toLogout () {
  return xhr({
    url: 'api/logout',
    type: 'GET'
  });
}

