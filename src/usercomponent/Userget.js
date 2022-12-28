
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
export default function Userget() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/users/`, {
        })
            .then((response) => {
                setAPIData(response.APIdata);
            })
    }, [])

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.surname}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.age}</Table.Cell>

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