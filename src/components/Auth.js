import React, { useState, useEffect } from 'react';
import { getToken } from '../utils/http-common'
import axios from 'axios';

function Auth (props) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
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
    }).then(res => res.setUser({user: res.data
    })).catch(err => {
      props.history.push('/login');
    })
  })
  return (
    <div>{this.props.children}</div>
  )
}

export default Auth;
