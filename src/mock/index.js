import Mock from 'mockjs';
import loginAPI from './login';


// login
Mock.mock(/\/api\/login/, 'post', loginAPI.toLogin);
Mock.mock(/\/api\/logout/, 'GET', loginAPI.toLogout);


export default Mock;