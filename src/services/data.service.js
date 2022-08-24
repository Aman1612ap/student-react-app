
import {get, post, put} from './commmon.service';
import {constant} from '../constant/common.constant';

function getUserData(aadhar) {
    /* 1. aadhar */
    return get(constant.BASE_URL+constant.GET_USER_DETAILS+`/?${aadhar}`);
}

function setUserData(userData) {
   /*  
   1. data ={ 
        aadhar,
        firstName, lastName, fatherName, motherName, 
        dob, currentQualification, higherQualification, currentCourseName, mobileNumber,
        homeAddress;
    } */
    return post(constant.BASE_URL+constant.SAVE_USER_DETAILS, userData);
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
    return put(`${constant.BASE_URL} ${constant.UPDATE_USER_DETAILS.replace('{aadhar}', aadhar)}`, userData);
}

