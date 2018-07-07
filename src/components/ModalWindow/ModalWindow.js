import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import EditModal from "./Modals/EditModal";
import InfoModal from "./Modals/InfoModal";

class ModalWindow extends Component {
    constructor(props) {
        super(props);
        Object.keys(props).map(item => {
            return this.state[item] = props[item];

        });


    }

    state = {
        edit: false
    };
    editContact = () => {
        this.setState({
            edit: true
        })
    };
    cancelEdit = () => {
        this.setState({
            edit: false
        })
    };
    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    onChangeCountry = event => {
        let address = this.state.address;
        address[event.target.name] = event.target.value;
        this.setState({
            address
        });
    };
    saveHandler = () => {

        this.props.changeContact(this.props.name, this.state);
        this.cancelEdit();
        this.props.close();
    };

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                {this.state.edit ? <EditModal save={this.saveHandler}
                                              changeCountry={this.onChangeCountry}
                                              change={this.onChangeHandler}
                                              action={this.cancelEdit}{...this.state}/> :
                    <InfoModal action={this.editContact}{...this.props}/>}
            </Modal>
        );
    }
};

export default ModalWindow;
