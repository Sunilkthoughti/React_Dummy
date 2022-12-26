import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';

export default function Create() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const postData = () => {
        axios.post('http://localhost:4000/student/login',{
            email,
            password
        })
        
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value) } />
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