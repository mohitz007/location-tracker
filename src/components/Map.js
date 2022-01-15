import React,{useContext} from "react";
import {View,StyleSheet,ActivityIndicator} from 'react-native';
import { Text, Button } from 'react-native-elements';
import MapView,{Polyline,Circle} from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {

    const {state : {currentLocation,locations}} = useContext(LocationContext);

    if(!currentLocation) {
        return <ActivityIndicator size={"small"} animating color={"blue"} />
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{...currentLocation.coords ,latitudeDelta : 0.01, longitudeDelta : 0.01}}
         >
            <Polyline coordinates={locations.map(loc => loc.coords)} />
            <Circle center={currentLocation.coords} radius={30} strokeColor="black" strokeWidth={2} fillColor="grey" />
         </MapView>
    )
}

const styles = StyleSheet.create({
    map : {
        height : 300,
    }
})

export default Map;