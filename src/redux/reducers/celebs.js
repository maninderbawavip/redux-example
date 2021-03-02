const initial_state = {
    error: false,
    loading: null,
    celebs: []
}

const CelebsReducer = (state=initial_state, action) => {

    switch(action.type) {
        case "loading_started":
            return {...state, loading: true, error: false};
        
        case "data_received":
            return {...state, loading: false, celebs: action.data, error: false}
        
        case "error_occured": 
            return {...state, loading: false, error: true}

        default:
           return state;
    }

}

export default CelebsReducer;