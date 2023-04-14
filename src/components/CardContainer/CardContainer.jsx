import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import { defaultParametersContries } from "../../constants/defaultCardParameters";

const CardContainer = ({ contry }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={contry?.image || defaultParametersContries.IMAGE} />
            <Card.Body>
                <Card.Title>{contry?.name || defaultParametersContries.NAME}</Card.Title>
                <Card.Text>
                    {contry?.region || defaultParametersContries.REGION}
                </Card.Text>
                {contry?.borders?.map((border, index) => (
                    <Badge key={index} bg="primary">
                        {border}
                    </Badge>
                ))}
            </Card.Body>
        </Card>
    )
}

export default CardContainer