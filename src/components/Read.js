
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/student/get`, {
            headers: {
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzIxNDI0NDF9.C_XtSngDpn1mhaQQlqBC7vwxA-NGCUDLTn1TsMOuHvY'
            }
        })
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>surname</Table.HeaderCell>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.surname}</Table.Cell>
                                <Table.Cell>{data.username}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>sharma</Table.Cell>
                        <Table.Cell>John sharma</Table.Cell>
                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>

                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}