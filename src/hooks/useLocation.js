import { useState,useEffect } from "react";
import { requestForegroundPermissionsAsync,Accuracy,watchPositionAsync } from "expo-location";

export default (shouldTrack,callback) => {
    const [Err, setErr] = useState(null);
    // const [Subscriber, setSubscriber] = useState(null);

    // console.log("g");

    

    useEffect(()=>{

        let subscriber=null;
        const startWatchinng = async () => {
            try {
                const {granted} = await requestForegroundPermissionsAsync()
                if(!granted) {
                    throw new Error("permission not granted")
                }
                subscriber = await watchPositionAsync({
                    accuracy : Accuracy.BestForNavigation,
                    timeInterval : 1000,
                    distanceInterval : 10,
                },(location) =>{
                    // console.log(location);
                    callback(location);
                })
                // console.log(subscriber);
                // setSubscriber(subscriber);
    
            }catch(e)
            {
                // console.log(e);
                setErr(e.message);
            }
    
        }

        if(shouldTrack)
            startWatchinng();
        else {
            if(subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        return () => {
            if(subscriber) {
                subscriber.remove();
            }
        }
    },[shouldTrack,callback]);
    return [Err];
}