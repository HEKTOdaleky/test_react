import React from "react";
import {Button, Image, Modal} from "react-bootstrap";

const ModalForm = props => {
    return (
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
                <Image src={props.avatar}/>
            </Modal.Header>
            <Modal.Body><p>{props.email}</p>
                <p>{props.username}</p>
                <p>{props.email}</p>
                <p>{props.email}</p></Modal.Body>

            <Modal.Footer>
                <Button onClick={props.close}>Отмена</Button>
                <Button onClick={props.action} bsStyle="primary">{props.buttonText}</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForm;
