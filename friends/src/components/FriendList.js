import React, { useEffect, useState } from 'react';

import axiosWithAuth from '../utility/axiosWithAuth'
import { Friend } from './Friend'

function FriendList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then((resp) => {
            setFriends(resp.data);
        }).catch((err) => alert(err));
    }, []);

    return (
        <div className="friend-list">
            {(friends !== []) && friends.map((item) => {
                return (<Friend key={item.id} friend={item} />)
            })}
        </div>
    )
}

export {
    FriendList
}