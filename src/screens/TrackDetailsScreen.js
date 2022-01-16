import React,{useContext} from "react";
import {Text,View,StyleSheet} from 'react-native';
// import { withNavigation } from "react-navigation";
import MapView,{Polyline} from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";
import Spacer from "../components/Spacer"

const TrackDetailsScreen = ({navigation}) => {

    const _id = navigation.getParam("_id");
    // console.log(_id);
    const {state} = useContext(TrackContext);
    const track = state.find((item) => item._id === _id);
    // console.log(track.name);
    // console.log(track);

    return (
        <>
            <Text style={{fontSize: 20}}>TrackDetails of {track.name}</Text>
            <Spacer />
            <MapView style={styles.map} initialRegion={{longitudeDelta: 0.01, latitudeDelta: 0.01,...track.locations[0].coords}}>
                <Polyline coordinates={track.locations.map((t)=>t.coords)} strokeColor="black" />
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        height : 300,
        width : "100%",
    }
})

export default TrackDetailsScreen;