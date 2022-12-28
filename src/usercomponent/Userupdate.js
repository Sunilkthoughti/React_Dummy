import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react'



export default function Userupdate() {
    // const [id, setID] = useState(null)
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');


    const [id, setID] = useState(null)

    useEffect(() => {
        setID(localStorage.getItem('ID'));
        setName(localStorage.getItem('Name'));
        setSurname(localStorage.getItem('Surname'));
        setEmail(localStorage.getItem('Email'));
        setAge(localStorage.getItem('age'));

    }, [])

    const userupdateAPIData = () => {
        axios.patch(`http://localhost:4000/users/user/${id}`,{
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
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>surname</label>
                    <input placeholder='Surname' onChange={(e) => setSurname(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>age</label>
                    <input placeholder='Age' onChange={(e) => setAge(e.target.value)}/>
                </Form.Field>
               
                <Button type='submit' onClick={userupdateAPIData}>Update</Button>
            </Form>
        </div>
    )
}