import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTrack } = useContext(TrackContext);

    // console.log(state);

    return (
        <>
            <NavigationEvents onWillFocus={fetchTrack} />
            {/* <Text>TrackListScreen</Text> */}
            <FlatList data={state} keyExtractor={(item) => item._id} renderItem={
                ({ item }) => {
                    // console.log(item.name);
                    return <TouchableOpacity onPress={
                        () => { navigation.navigate("TrackDetails", { _id:item._id }) }
                    }>
                        <ListItem style={{ width: "100%" }}>
                            <ListItem.Title>
                                {item.name}
                            </ListItem.Title>
                            <ListItem.Chevron style={{ alignItems: "flex-end" }} />
                        </ListItem>
                    </TouchableOpacity>
                }
            } />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: "Track List",
}

const styles = StyleSheet.create({

})

export default TrackListScreen;