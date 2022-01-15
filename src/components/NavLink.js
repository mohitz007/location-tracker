import React from "react";
import {View,StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native';
import { withNavigation } from "react-navigation";

const NavLink = ({navigation,text,routeName}) => {

    return (
        <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate(routeName)}>
                    <Text style={styles.signin} >{text}</Text>
            </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    signin: {

        marginTop: 20,
        color: "blue",
        // alignItems : "center",
    }

})

export default withNavigation(NavLink);