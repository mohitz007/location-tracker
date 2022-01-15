import * as Location from "expo-location";

const tenMetresWithDegrees = 0.0001

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords : {
            speed : 0,
            heading : 0,
            accuracy : 5,
            altitude : 5,
            altitudeAccuracy : 5,
            longitude : 88.3636 + increment * tenMetresWithDegrees,
            latitude : 22.5726 + increment * tenMetresWithDegrees
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged",{
        watchId : Location._getCurrentWatchId(),
        location : getLocation(counter)
    })
    counter++;

},1000);