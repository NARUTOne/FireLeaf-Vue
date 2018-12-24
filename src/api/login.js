/**
 * xhr for login
 */

import xhr from 'axhr';

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

