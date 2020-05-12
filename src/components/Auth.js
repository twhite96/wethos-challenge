import React, { useState, useEffect } from 'react';
import { getToken } from '../utils/http-common'
import axios from 'axios';

function Auth (props) {
  const [user, setUser] = useState(undefined);
  function getUser() {
    const token = getToken();
    if(!token ) {
      props.history.push('/login');
    }
    axios.get('/api/v1/user', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        "grant_type": "password",
        "scope": "*",
        "client_id": 2,
        "client_secret": "GjUJ5tqVliDdTadQDn4eQYQPUtLKjRLICu0qmrTR"
      },
      Accept: "application/json",
      "Content-Type": "application/json"
      // scope issue here; setUser and user aren't being initialized
    }).then(res => res.setUser({user: res.data
    })).catch(err => {
      props.history.push('/login');
    })
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <div>{this.props.children}</div>
  )
}

export default Auth;
