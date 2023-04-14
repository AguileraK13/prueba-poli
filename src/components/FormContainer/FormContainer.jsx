import React from "react";
import {Form, Button} from 'react-bootstrap';
import "./FormContainer.css";

const FormContainer = ({name, data, onInputChange, onSubmit, label}) => {
    return (
        <div className="mb-5 contryForm">
            <Form onSubmit={onSubmit}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control name={name} value={data} onChange={onInputChange} type="text" placeholder="Ingresa el nombre del paises" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default FormContainer;