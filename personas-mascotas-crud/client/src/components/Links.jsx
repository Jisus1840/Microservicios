import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    CRUD Personas/Mascotas
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/personas/list" className="nav-link">
                                Listar datos
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/personas/create" className="nav-link">
                                Crear datos
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links