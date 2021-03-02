const initial_state = {
    error: false,
    loading: true,
    categories: []
}


const CategoriesReducer = (state=initial_state, action) => {
    switch(action.type){
        case "categories_loaded":
            return {...state, loading: false, error: false, categories: action.data}
        default:
            return state
    }
}

export default CategoriesReducer;