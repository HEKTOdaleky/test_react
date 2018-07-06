import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col} from "reactstrap";

class Contact extends Component {
    render() {

        return (

            <Col sm="3" style={{ margin: "20px 0" }}>

            <Card >
                <CardImg style={{borderRadius:"50%"}} top width="20%" src={this.props.avatar} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>{this.props.user}</CardSubtitle>
                    <CardText>{this.props.phone}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
        )
    }
};

export default Contact;