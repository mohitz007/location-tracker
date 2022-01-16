import React,{useContext} from "react";
import {View,StyleSheet} from 'react-native';
import {Text,Button} from 'react-native-elements';
import { SafeAreaView } from "react-navigation";
import {FontAwesome} from "@expo/vector-icons";

import {Context as AuthContext} from "../context/AuthContext";


const AccountScreen = () => {

    const {signout} = useContext(AuthContext);


    return (
        <SafeAreaView  forceInset={{top: 30}}>
            <Text style={styles.text}>AccountScreen</Text>
            <Button title="sign out" onPress={signout}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text : {
        color : "blue",
        fontSize : 30,
        textAlign : "center"
    }
})

AccountScreen.navigationOptions = {
    title : "Account",
    tabBarIcon : <FontAwesome name="gear" size={20} />
}

export default AccountScreen;