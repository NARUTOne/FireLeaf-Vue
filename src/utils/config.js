/**
 * some config
 */
var apiBaseUrl = '/';
const PROJECT_NAME = 'app';

if(process.env.NODE_ENV == 'development') {
  apiBaseUrl = ' https://easy-mock.com/mock/5ab8d1653838ca14983dc0ee/FireLeaf/Vue/';
}

var NAV_LIST = [{
  name: 'todo',
  icon: 'form',
  key: 'todo',
  href: '/app/todo'
}];

module.exports = {
  apiBaseUrl,
  systemName: 'system name',
  PName: '/' + PROJECT_NAME,
  navList: NAV_LIST,
};