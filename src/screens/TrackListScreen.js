import React from "react";
import {Text,View,StyleSheet,Button} from 'react-native';

const TrackListScreen = ({navigation}) => {

    return (
        <>
            <Text>TrackListScreen</Text>
            <Button title="go to track detail" onPress={()=>{navigation.navigate("TrackDetails")}} />
        </>
    )
}

const styles = StyleSheet.create({

})

export default TrackListScreen;