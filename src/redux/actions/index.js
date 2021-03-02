export const loadCelebsData = () => (dispatch) => {

    dispatch({ type: "loading_started" })

    //fetch this data from my server
    fetch('http://localhost:3100/users')
        .then(res => res.json())
        .then(data => {
            dispatch({ type: "data_received", data })
        })

}