import axiosWithAuth from '../utility/axiosWithAuth'
export const ADD_FRIENDS = "ADD_FRIENDS"

const addFriends = (friends) => {
    return ({type: ADD_FRIENDS, payload: friends});
}

const getFriends = () => {
    axiosWithAuth()
        .get("/api/friends")
        .then((resp) => {
            console.log(resp.data)
        }).catch((err) => alert(err));

}

export {
    addFriends,
    getFriends
}