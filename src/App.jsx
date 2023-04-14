import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import FormContainer from "./components/FormContainer/FormContainer";
import CardContainer from "./components/CardContainer/CardContainer";
import { getContriesByName } from "./requests/getContries";
import { postThingName } from "./requests/postThingName";
import { useForm } from "./hooks/useForm";
import logo from "./assets/Logo.png";
import "./App.css";

const formData = {
  contryName: "",
  thingName: "",
};

function App() {
  const { contryName, thingName, onInputChange } = useForm(formData);
  const [contry, setContry] = useState(null);

  const onSubmitContry = async (e) => {
    e.preventDefault();
    if (contryName.length !== 0) {
      const contryInfo = await getContriesByName(contryName);
      setContry(contryInfo);
    }
  };

  const onSubmitThing = async (e) => {
    e.preventDefault();
    if (thingName.length !== 0) {
      await postThingName(thingName);
    }
  };

  const form = [
    {
      name: "contryName",
      data: contryName,
      onInputChange: onInputChange,
      onSubmit: onSubmitContry,
      label: "Nombre del país",
      placeholder: "Ingresa el nombre de algún país",
      btnName: "Buscar país",
    },
    {
      name: "thingName",
      data: thingName,
      onInputChange: onInputChange,
      onSubmit: onSubmitThing,
      label: "thingName",
      placeholder: "Ingresa algún texto",
      btnName: "Agregar",
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <div>
            <Image
              src={logo}
              className="mx-auto d-block mb-5"
              style={{ width: "35%" }}
            />
            {form.map((input, index) => (
              <FormContainer
                key={index}
                name={input.name}
                data={input.data}
                onInputChange={input.onInputChange}
                onSubmit={input.onSubmit}
                label={input.label}
                placeholder={input.placeholder}
                btnName={input.btnName}
              />
            ))}
          </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          {contry && (
            <CardContainer className="mx-auto d-block" contry={contry} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
