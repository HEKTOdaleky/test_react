import React from 'react';
import {Button} from "react-bootstrap";
import {Modal} from "reactstrap";


const ModalWindow = props => {
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>One fine body...</Modal.Body>

            <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
};
export default ModalWindow;