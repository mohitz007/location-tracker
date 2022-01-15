import React,{useContext} from "react";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";


const SigninScreen = ({navigation}) => {

    const {state,signin,clearErrorMessage} = useContext(AuthContext);
    
    

    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="signin"
                errorMessage={state.errorMessage}
                onSubmit={signin}
            />
            <NavLink 
                text="if not signed up , try signup instead"
                routeName="Signup"
            />
        </>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };



export default SigninScreen;