
import {get, post, put} from './commmon.service';
import {constant} from '../constant/common.constant';

function getUserData(aadhar) {
    /* 1. aadhar */
    return get(constant.URL.BASE_URL+constant.URL.GET_USER_DETAILS+`/?${aadhar}`);
}

function setUserData(userData) {
   /*  
   1. data ={ 
        aadhar,
        firstName, lastName, fatherName, motherName, 
        dob, currentQualification, higherQualification, currentCourseName, mobileNumber,
        homeAddress;
    } */
    return post(constant.URL.BASE_URL+constant.URL.SAVE_USER_DETAILS, userData);
}


function updateUserData(aadhar, userData) {
    /*
    1. aadhar number
    2. data ={ 
        aadhar,
        firstName, lastName, fatherName, motherName, 
        dob, currentQualification, higherQualification, currentCourseName, mobileNumber,
        homeAddress;
    } */
    return put(`${constant.URL.BASE_URL} ${constant.URL.UPDATE_USER_DETAILS.replace('{aadhar}', aadhar)}`, userData);
}

