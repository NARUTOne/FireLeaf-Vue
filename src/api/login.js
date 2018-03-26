/**
 * xhr for login
 */

import xhr from 'utils/xhr';

export function toLogin (data) {
  return xhr({
    url: 'login/login',
    type: 'POST',
    data
  });
}

export function toLogout () {
  return xhr({
    url: 'login/logout',
    type: 'GET'
  });
}

