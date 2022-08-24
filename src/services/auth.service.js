
import {get, post, put} from './commmon.service';
import {constant} from '../constant/common.constant';



function signUp(data) {
    // data= {aadhar: null, email: null}
    const res = post(constant.BASE_URL+constant.SIGN_UP, data);
    const resData = await res.json()
    if(res.ok) {
    return {status: 'success', ...resData};
    } else {
        return {status: 'fail'}
    }
}

function login(data) {
    // data= {aadhar: null}
    return post(constant.BASE_URL+constant.login, data);
}

async function verifyUser(data) {
    // 1. data= {aadhar: null}
    const res = await post(constant.BASE_URL+constant.VERIFY_USER, data);
    const resData = await res.json()
    if(res.ok) {
    return {status: 'success', ...resData};
    } else {
        return {status: 'fail'}
    }
  
}

export {signUp,login, verifyUser};