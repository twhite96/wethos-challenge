import React, {useState, useEffect } from "react";
import '../react-bulma-components.min.css';
import { Field, Control, Label, Input, Button } from 'react-bulma-components';
// import Button from 'react-bulma-components/lib/components/button';
// import Container from 'react-bulma-components/lib/components/container';
// import Content from 'react-bulma-components/lib/components/content';
import axios from "axios";

// import { render } from "node-sass";
  const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const update = (({ target }) => setForm({ ...form, [target.username]: target.value }));

    const handleSubmit = (event) => {
      event.preventDefault();
       axios
       .post('/oauth/token', {
       })
       .then(res => localStorage.setItem('stuff', res.data))
       .catch((error) => {
         return error.message;
       });
    }
    return (
      <>
        <Field>
          <Control>
            <Label>Name</Label>
            <Input name="name" value={form.name} onChange={update} />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label>Password</Label>
            <Input name="password" type="password" value={form.password} onChange={update} />
          </Control>
        </Field>
        <Button.Group>
          <Button fullwidth rounded color="primary" onClick={handleSubmit}>Login</Button>
        </Button.Group>
      </>
    )
  }


export default Login;
