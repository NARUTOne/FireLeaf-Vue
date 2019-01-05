import Mock from 'mockjs';
import paramToObj from 'flo-utils/lib/ajax/paramToObj';

const userMap = Mock.mock({
  admin: {
    id: '@id',
    username: 'admin',
    cname: '@cname',
    age: '@integer(10, 30)',
    address: '@county(true)'
  },
  NARUTOne: {
    id: '@id',
    username: 'NARUTOne',
    cname: '路鸣',
    age: '@integer(10, 20)',
    address: '东海红大陆木叶村'
  }
});

/**
 * config: {url, type, body}
 */

export default {
  toLogin: config => {
   
    const body = paramToObj(config.body);
    const {userName} = body;
    console.log(body);
    return {
      code: 200,
      data: userMap[userName],
      msg: 'success, welcome !'
    };
  },
  toLogout: () => {
    return {code: 200, data: {}, msg: 'success, thanks!'};
  }
};