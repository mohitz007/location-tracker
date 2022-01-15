import React, { useContext, useState } from 'react';
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {

    const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);

    // console.log(locations.length);
    // console.log(recording);
    const [NameErr, setNameErr] = useState('');

    const [saveTrack] = useSaveTrack();
    return (
        <>
            <Input value={name} onChangeText={changeName} placeholder="enter name of track" />
            {
                recording ? (<Button title="Stop Record" onPress={stopRecording} />)
                    : (<Button title="Record" onPress={startRecording} />)
            }
            <Spacer />
            {
                !recording && locations.length > 0 ? (<Button title="save Recording" onPress={() => {
                    if (name) {
                        saveTrack();
                        setNameErr("");
                    }
                    else {
                        // return <Text></Text>
                        // console.log('name');
                        setNameErr("Please enter name of recording");
                    }
                }
                } />) : null
            }
            <Text>{NameErr}</Text>

        </>
    )

}

export default TrackForm;