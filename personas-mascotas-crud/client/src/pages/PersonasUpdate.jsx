import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PersonasUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            last: '',
            image: '',
            pet_name: '',
            pet_image: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputLast = async event => {
        const last = event.target.value;

        this.setState({ last })
    }

    handleChangeInputImage = async event => {
        const image = event.target.value;
        this.setState({ image });
    }

    handleChangePetName = async (event) => {
        const pet_name = event.target.value;
        this.setState({ pet_name });
      };
    
    handleChangePetImage = async (event) => {
    const pet_image = event.target.value;
    this.setState({ pet_image});
    };

    handleUpdatePersonas = async () => {
        const { id, name, last, image, pet_name, pet_image } = this.state
        const payload = { name, last, image, pet_name, pet_image }
        // pet_name: ''

        await api.updatePersonaById(id, payload).then(res => {
            window.alert(`Persona actualizada correctamente`)
            this.setState({
                name: "",
                last: "",
                image: "",
                pet_name: "",
                pet_image: "",
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const person = await api.getPersonaById(id)

        this.setState({
            name: person.data.data.name,
            last: person.data.data.last,
            image: person.data.data.image,
            pet_name: person.data.data.pet_name,
            pet_image: person.data.data.pet_image,
        })
    }

    render() {
        const { name, last, image, pet_name, pet_image } = this.state
        return (
            <Wrapper>
                <Title>Modificar Persona</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Apellido: </Label>
                <InputText type="text" value={last} onChange={this.handleChangeInputLast} />

                <Label>Imagen: </Label>
                <InputText
                type="text"
                value={image}
                onChange={this.handleChangeInputImage}
                />

                <Label>Nombre Mascota: </Label>
                <InputText
                type="text"
                value={pet_name}
                onChange={this.handleChangePetName}
                />

                <Label>Mascota Foto: </Label>
                <InputText
                type="text"
                value={pet_image}
                onChange={this.handleChangePetImage}
                />

                <Button onClick={this.handleUpdatePersonas}>Actualizar persona</Button>
                <CancelButton href={'/personas/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default PersonasUpdate
