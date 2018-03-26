import Mock from 'mockjs';
import loginAPI from './login';


// login
Mock.mock(/\/login\/login/, 'post', loginAPI.toLogin);
Mock.mock(/\/login\/logout/, 'GET', loginAPI.toLogout);


export default Mock;