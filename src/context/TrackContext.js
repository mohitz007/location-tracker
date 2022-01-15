import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (state, action) => {

    switch (action.type) {
        case "fetch_tracks" :
            return action.payload;
        default :
            return state;
    }

}

const fetchTrack = (dispatch) => async () => {
    response = await tracker.get("/tracks");
    dispatch({type : "fetch_tracks", payload : response.data });

};

const createTrack = (dispatch) => async (name,locations) => {
    console.log(name,locations.length);
    await tracker.post("/tracks",{name, locations});
};

export const {Context,Provider} = createDataContext(trackReducer,{fetchTrack,createTrack},{});