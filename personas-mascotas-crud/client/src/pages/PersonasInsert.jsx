import React, { Component } from "react";
import axios from "axios";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

// API URL
const urlPersonas = "https://randomuser.me/api/?inc=picture";
const urlMascotas = "https://dog.ceo/api/breeds/image/random/1";

class PersonasInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      last: "",
      image_api: null,
      image: "",
      pet_name: "",
      pet_image_api: null,
      pet_image: "",
    };
  }

  handleChangeName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeLast = async (event) => {
    const last = event.target.validity.valid
      ? event.target.value
      : this.state.last;

    this.setState({ last });
  };

  handleChangeImage = async (event) => {
    const image = event.target.value;
    this.setState({ image });
  };

  handleChangePetName = async (event) => {
    const pet_name = event.target.value;
    this.setState({ pet_name });
  };

  handleChangePetImage = async (event) => {
    const pet_image = event.target.value;
    this.setState({ pet_image});
  };

  handleIncludePersona = async () => {
    const { name, last, image, pet_name, pet_image } = this.state;
    const payload = { name, last, image, pet_name, pet_image };

    await api.insertPersona(payload).then((res) => {
      window.alert(`Persona inserted successfully`);
      this.setState({
        name: "",
        last: "",
        image: "",
        pet_name: "",
        pet_image: "",
      });
    });
  };

  peticionGet = async () => {
    const [firstResponse, secondResponse] = await Promise.all([
      axios.get(urlPersonas),
      axios.get(urlMascotas),
    ]);

    this.setState({
      image_api: firstResponse.data.results,
      pet_image_api: secondResponse.data.message,
    });
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const { name, last, image, pet_name, pet_image } = this.state;
    return (
      <Wrapper>
        <Title>Insertar Persona</Title>

        <Label>Nombre: </Label>
        <InputText type="text" value={name} onChange={this.handleChangeName} />

        <Label>Apellido: </Label>
        <InputText type="text" value={last} onChange={this.handleChangeLast} />

        <Label>Imagen API: </Label>
        {this.state.image_api?.map((picture) => {
          return <InputText type="text" value={picture.picture.large} />;
        })}

        <Label>Imagen: </Label>
        <InputText
          type="text"
          value={image}
          onChange={this.handleChangeImage}
        />

        <Label>Nombre Mascota: </Label>
        <InputText
          type="text"
          value={pet_name}
          onChange={this.handleChangePetName}
        />

        <Label>Imagen Mascota API: </Label>
        {this.state.pet_image_api?.map((pet) => {
          return (
            <InputText
              type="text"
              value={pet}
            />
          );
        })}

        <Label>Mascota Foto: </Label>
        <InputText
          type="text"
          value={pet_image}
          onChange={this.handleChangePetImage}
        />

        <Button onClick={this.handleIncludePersona}>Agregar Persona</Button>
        <CancelButton href={"/Personas/list"}>Cancelar</CancelButton>
      </Wrapper>
    );
  }
}

export default PersonasInsert;
