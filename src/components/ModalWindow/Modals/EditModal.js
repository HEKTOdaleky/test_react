import React, {Fragment} from 'react'
import {Button, Image, Modal} from "react-bootstrap";
import FormElement from "../../UI/Form/FormElement";

const EditModal = props => {
    return (
        <Fragment>
            <Modal.Header>
                <Modal.Title>{props.name}</Modal.Title>
                <Image src={props.avatar}/>
            </Modal.Header>
            <Modal.Body>
                <FormElement title="Name"
                             propertyName="name"
                             type="text"
                             value={props.name}
                             changeHandler={props.change}/>
                <FormElement title="Email"
                             propertyName="email"
                             type="text"
                             value={props.email}
                             changeHandler={props.change}/>
                <FormElement title="Username"
                             propertyName="username"
                             type="text"
                             value={props.username}
                             changeHandler={props.change}/>
                <FormElement title="Phone"
                             propertyName="phone"
                             type="text"
                             value={props.phone}
                             changeHandler={props.change}/>
                <FormElement title="Country"
                             propertyName="country"
                             type="text"
                             value={props.address.country}
                             changeHandler={props.changeCountry}/>
                <FormElement title="City"
                             propertyName="city"
                             type="text"
                             value={props.address.city}
                             changeHandler={props.changeCountry}/>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.save}>Save</Button>
                <Button onClick={props.action} bsStyle="primary">Cancel</Button>
            </Modal.Footer>
        </Fragment>
    )
};

export default EditModal