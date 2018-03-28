import Mock from 'mockjs';
import loginAPI from './login';

/**
 * api拦截 Mock.mock( rurl?, rtype?, template|function( options ) )
 * https://github.com/nuysoft/Mock/wiki/Mock.mock()
 */

// login
Mock.mock(/\/api\/login/, 'post', loginAPI.toLogin);
Mock.mock(/\/api\/logout/, 'get', loginAPI.toLogout);


export default Mock;