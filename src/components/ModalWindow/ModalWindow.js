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
                <p>{props.phone}</p>
                <p>{props.address.country+" "+props.address.city}</p></Modal.Body>

            <Modal.Footer>
                <Button onClick={props.close}>Close</Button>
                <Button onClick={props.action} bsStyle="primary">Edit</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForm;
