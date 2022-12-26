import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react'



export default function Update() {
    // const [id, setID] = useState(null)
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState(false);

    const [id, setID] = useState(null)

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setName(localStorage.getItem('Name'));
        setSurname(localStorage.getItem('Surname'));
        setUsername(localStorage.getItem('Username'))

    }, [])

    const updateAPIData = () => {
        axios.patch('http://localhost:4000/student/update/${id}', {
            name,
            surname,
            username
    })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>name</label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>surname</label>
                    <input placeholder='Surname' onChange={(e) => setSurname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
               
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}