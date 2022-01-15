import React,{useContext} from "react";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";


const SignupScreen = ({navigation}) => {

    const {state,signup,clearErrorMessage} = useContext(AuthContext);

    return (
        <>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="signup"
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />
            <NavLink 
                text="if already signed up , try signin instead"
                routeName="Signin"
            />
        </>
    )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };



export default SignupScreen;