import React from 'react'

function Friend(props) {
    return (
        <div className="info-card">
            <h3>{props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )
}

export {
    Friend
}