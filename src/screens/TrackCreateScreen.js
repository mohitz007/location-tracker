import React, {useContext,useCallback } from "react";
import {StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView,withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
// import "../_mockLocation";

const TrackCreateScreen = ({isFocused}) => {

    const {state,addLocation} = useContext(LocationContext);
    const Callback = useCallback(
        (location) => {addLocation(location, state.recording)},
        [state.recording],
    )
    const [Err] = useLocation(isFocused || state.recording,Callback);
    
    // console.log(Err);
    

    return (
        <SafeAreaView  forceInset={{top: 25}}>
            <Text h1>TrackCreateScreen</Text>
            <Map />
            {Err?<Text>{Err}</Text>:null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen);