import React, {Fragment} from 'react'
import {Button, Image, Modal} from "react-bootstrap";

const InfoModal = props => {
    return (
        <Fragment>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
                <Image src={props.avatar}/>
            </Modal.Header>
            <Modal.Body>
                <p>{`email: ${props.email}`}</p>
                <p>{`Имя: ${props.username}`}</p>
                <p>{`Телефон: ${props.phone}`}</p>
                <p>{`Страна: ${props.address.country}`}</p>
                <p>{`Город: ${props.address.city}`}</p></Modal.Body>

            <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
                <Button onClick={props.action} bsStyle="primary">Edit</Button>
            </Modal.Footer>
        </Fragment>
    )
};

export default InfoModal