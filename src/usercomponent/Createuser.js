import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';

export default function Createuser() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const postData = () => {
        console.log(name);
        console.log(surname);
        console.log(email);
        console.log(age);
        axios.post('http://localhost:4000/users/user',{
            name,
            surname,
            email,
            age
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
                    <label>email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value) }/>
                </Form.Field>
                <Form.Field>
                    <label>age</label>
                    <input placeholder='Age' onChange={(e) => setAge(e.target.value) } />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )

}