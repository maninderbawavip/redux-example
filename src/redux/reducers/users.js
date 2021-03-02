const initial_state = { user: 'Maninder' };

const UserReducer = (state=initial_state, action) => {
        if(action.type === "update_user") {
            let newState = {...state};
            newState.user = action.data;
            // will send a new state object ratehr than modifing the existing object
            return newState;
        }
        return state;
}

export default UserReducer;