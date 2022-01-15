import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import { navigate } from "../navigationRef";
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {

    switch (action.type) {
        case "add_error" : 
            return {...state, errorMessage : action.payload}
        case "signup":
            return {...state,errorMessage : "" ,token : action.payload};
        case "clear_error_message" :
            return {...state, errorMessage :""};
        case "signin" :
            return {...state, token : action.payload};
        case "signout" : 
            return {...state,token : null};
        default: return state;
    }
}

const onLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if(token) {
        dispatch({type: "signin", payload: token});
        navigate("TrackList");
    }
    else {
        navigate("Signin");
    }

}

const clearErrorMessage = (dispatch) =>()=> {
    dispatch({type: "clear_error_message"});
}

const signup = (dispatch) => {

    return async ({email,password}) => {
        try {
            console.log(email,password);
            const response = await trackerApi.post("/signup",{email,password});
            await AsyncStorage.setItem("token",response.data.token);
            dispatch({type: "signup", payload: response.data.token});
            console.log(response.data);
            navigate("TrackList");
        }
        catch (err) {
            // console.log(err.response.data);
            dispatch({type: "add_error",payload : "something went wrong"})
        }
    };
}

const signin = (dispatch) => {
    return async ({email,password}) => {
        try {
            const response = await trackerApi.post("/signin",{email,password});
            console.log(response.data);
            await AsyncStorage.setItem("token",response.data.token);
            dispatch({type: "signup", payload: response.data.token});
            navigate("TrackList");
        }
        catch (err) {
            dispatch({type: "add_error",payload : "something went wrong with sign in"})
        }
    };
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem("token");
        dispatch({type: "signout"})
        navigate("Signin");
    }
}

export const {Context,Provider} = createDataContext(authReducer,{signin,signout,signup,onLocalSignin,clearErrorMessage},{isSigned:false,errorMessage:""})