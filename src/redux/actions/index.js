export const loadCelebsData = (value) => (dispatch) => {

    dispatch({ type: "loading_started" })

    let url = 'http://localhost:3100/users';

    if(value){
        url += `/?q=${value}`
    }
    
    //fetch this data from my server //asynchronous action
    fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "data_received", data })
        })

}