import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';

export default function Create() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const postData = () => {
        console.log(name);
        console.log(surname);
        console.log(username);
        console.log(email);
        console.log(password);
        axios.post('http://localhost:4000/student/register',{
            name,
            surname,
            username,
            email,
            password
        })
        
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>surname</label>
                    <input placeholder='Surname' onChange={(e) => setSurname(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>username</label>
                    <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value) }/>
                </Form.Field>
                <Form.Field>
                    <label>password</label>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value) } />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )

}