import React, {Component} from 'react';
import {connect} from "react-redux";
import {postBooksData} from "../../store/actions/phonebook";

class PhoneBook extends Component {
    componentDidMount() {
        this.props.postBooksData()
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
};
const mapStateToProps = state => ({
    phoneBook: state.phoneBook.phoneBook
});

const mapDispatchToProps = dispatch => ({
    postBooksData: () => dispatch(postBooksData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);