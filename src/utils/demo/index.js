
import constants from "../constants";
import { loginResponse, signUpResponse } from "./userDemo";

async function fetchDummyData(type){
    await sleep(5000)
    switch(type){
        case constants.LOGIN_RESPONSE:
            return loginResponse
        case constants.SIGNUP_RESPONSE:
            return signUpResponse
    }
}

const sleep = (milliseconds) =>{
    return new Promise(resolve => setTimeout(resolve,milliseconds))
}

export default fetchDummyData;