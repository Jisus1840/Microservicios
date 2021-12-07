import React, { Component } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdatePersona extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/personas/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeletePersona extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Quieres eliminar el registo de la persona ${this.props.id} permanentemente?`,
            )
        ) {
            api.deletePersonaById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class PersonasList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personas: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPersonas().then(personas => {
            this.setState({
                personas: personas.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { personas, isLoading } = this.state
        console.log('TCL: personasList -> render -> personas', personas)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
            },
            {
                Header: 'Nombre',
                accessor: 'name',
            },
            {
                Header: 'Apellido',
                accessor: 'last',
            },
            {
                Header: 'Imagen',
                accessor: 'image',
            },
            {
                Header: 'Mascota',
                accessor: 'pet_name',
            },
            {
                Header: 'Mascota Foto',
                accessor: 'pet_image',
            },
            {
                Header: 'Acciones',
                accessor: 'acciones',
                Cell: function(props) {
                    return (
                        <span>
                            <DeletePersona id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdatePersona id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!personas.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={personas}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default PersonasList