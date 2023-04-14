import React from "react";
import { Form, Button } from "react-bootstrap";
import "./FormContainer.css";

const FormContainer = ({
  name,
  data,
  onInputChange,
  onSubmit,
  label,
  placeholder,
  btnName,
}) => {
  return (
    <div className="mb-5 FormContainer">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            name={name}
            value={data}
            onChange={onInputChange}
            type="text"
            placeholder={placeholder}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {btnName}
        </Button>
      </Form>
    </div>
  );
};

export default FormContainer;
