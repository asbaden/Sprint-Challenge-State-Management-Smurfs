import axios from "axios"

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: "FETCHING_SMURFS_START"});
        //make api call
        axios.get("http://localhost:3333/smurfs")
            .then(res => {
                //res.data ===> players
                console.log("this is res", res.data)
                dispatch({type: "FETCHING_SMURFS_SUCCESS", payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const addSmurfs = newSmurf => dispatch => {
    dispatch({type:"ADD_SMURF_START"});
    console.log("newSmurf on posts", newSmurf)
    axios.post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            dispatch({type: "ADD_SMURF_SUCCESS", payload: res.data })
        })
        .catch(err => console.log("this is post error", err.response.data));


}