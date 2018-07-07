import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col} from "reactstrap";
import ModalWindow from "../ModalWindow/ModalWindow";

class Contact extends Component {
    state = {
        show: false
    };

    handleClose = () => {
        this.setState({show: false});
    };

    handleShow = () => {
        this.setState({show: true});
    };

    render() {

        return (

            <Col sm="3" style={{margin: "20px 0"}}>
                <ModalWindow show={this.state.show}
                             close={this.handleClose}
                             {...this.props}/>


                <Card>
                    <CardImg style={{borderRadius: "50%"}} top width="20%" src={this.props.avatar}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardSubtitle>{this.props.user}</CardSubtitle>
                        <CardText>{this.props.phone}</CardText>
                        <Button onClick={this.handleShow}>View Info</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }
};

export default Contact;