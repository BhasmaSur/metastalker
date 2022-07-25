import { createContext,useEffect,useState } from "react";
import constants from "../utils/constants";
import fetchDummyData from "../utils/demo";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    const register = (username, password) =>{
        // dummy signup code here
        const signupResponseDummy = fetchDummyData(constants.SIGNUP_RESPONSE);
        console.log("signup response : ", signupResponseDummy)
        if(signupResponseDummy.data.status == 200){
            AsyncStorage.setItem(constants.USER_DETAILS,JSON.stringify(signupResponseDummy.data.result));
            //storage.set(constants.USER_DETAILS,JSON.stringify(signupResponseDummy.data.result));
            setIsLoading(false);
        }else{
            console.log("Failed to register")
        }

    };
    
    const login = ()=>{
        setIsLoading(true);
        fetchDummyData(constants.LOGIN_RESPONSE).then((res)=>{
            if(res){
                console.log("login response : ", res);
                if(res.data.status == 200){
                    AsyncStorage.setItem(constants.USER_DETAILS,JSON.stringify(res.data.result));
                    //storage.set(constants.USER_DETAILS,JSON.stringify(res.data.result));
                    setIsLoading(false);
                    setUserInfo(res.data.result);
                }
            }
    })
    }

    const logout = () =>{
        setIsLoading(true)
        AsyncStorage.removeItem(constants.USER_DETAILS);
        //storage.delete(constants.USER_DETAILS)
        setUserInfo({})
        setIsLoading(false)
    }

    const isLoggedIn = () =>{
        try{
            let userInfo = AsyncStorage.getItem(constants.USER_DETAILS); //storage.getString(constants.USER_DETAILS);
            userInfo = JSON.parse(userInfo);

            if(userInfo){
                setUserInfo(userInfo);
            }
            setSplashLoading(false);
        }catch(e){
            setSplashLoading(false);
            console.log(`is logged in error ${e}`);
        }
    }

    useEffect(()=>{
        isLoggedIn();
    },[]);
    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                register,
                login,
                logout
                }
            }
            >{children}
        </AuthContext.Provider>
    )
}

