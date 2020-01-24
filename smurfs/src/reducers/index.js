const initialState = { 
    isLoading: false,
    smurfs: [],
    error: ""
};

export const reducer = (state= initialState, action) => {
    switch(action.type){
        case "FETCHING_SMURFS_START":
        return {
            ...state,
            isLoading: true
        }
        case "FETCHING_SMURFS_SUCCESS":
        return {
            ...state,
            isLoading: false,
            smurfs: action.payload
        }
        case "ADD_SMURF_START":
            return {
                ...state, 
                    isLoading: true,
                    error: ""
            }
        case "ADD_SMURF_SUCCESS":
                console.log("this is the reducer smurf success", state )
                return {
                    ...state, 
                        isLoading: false,
                        smurfs: action.payload,
                        error:""
                }
        case "ADD_SMURF_FAILURE":
            return {
                ...state, 
                isLoading: false,
                error: action.payload
                    
            }
        
        default:
            return state
    }
}