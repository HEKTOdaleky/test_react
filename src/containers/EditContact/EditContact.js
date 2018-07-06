import React, {Component} from 'react';
import {connect} from "react-redux";
import {postBooksData} from "../../store/actions/phonebook";
import Contact from "../../components/Contact/Contact";
import {CardColumns} from "reactstrap";

class EditContact extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>

            </div>
        )
    }
};
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);