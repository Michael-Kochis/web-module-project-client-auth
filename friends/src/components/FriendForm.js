import React, { useState } from 'react';
import axiosWithAuth from '../utility/axiosWithAuth'

function FriendForm(props) {
  const initialState = {
    name: "",
    email: "",
    age: 0
  };

  const [state, setState ] = useState(initialState);

  const handleChange = e => {
    e.preventDefault();
    setState({
      ...state,
        [e.target.name]: e.target.value
    });
  };

  const submit = e => {
    e.preventDefault();

    console.log(state);
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', state)
      .then(res => {
        console.log(res.data);
        props.history.push('/friendlist');
      })
      .catch(err => {
        console.log(err);
      })

  };

  return (
      <div>
        <form onSubmit={submit}>
            <label >
                Name  
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age
                <input
                    type="text"
                    name="age"
                    value={state.age}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </label>
          <button>Add Friend</button>
        </form>
      </div>
    );
}

export {
    FriendForm
}