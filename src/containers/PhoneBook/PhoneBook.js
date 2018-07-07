import React, {Component} from 'react';
import {connect} from "react-redux";
import {changePhoneBook, getPhoneBookData} from "../../store/actions/phonebook";
import Contact from "../../components/Contact/Contact";
import {CardColumns} from "reactstrap";

class PhoneBook extends Component {
    componentDidMount() {
        if (!this.props.phoneBook.length)
            this.props.postBooksData()
    };

    componentDidUpdate() {
        console.log("Update", this.props.phoneBook);
    }

    render() {
        return (
            <CardColumns>

                {
                    this.props.phoneBook.map((item, index) => {
                        return <Contact changeContact={this.props.changePhoneBook} key={index} {...item}/>
                    })
                }
            </CardColumns>
        )
    }
};
const mapStateToProps = state => ({
    phoneBook: state.phoneBook.phoneBook
});

const mapDispatchToProps = dispatch => ({
    postBooksData: () => dispatch(getPhoneBookData()),
    changePhoneBook: (oldName, newContact) => dispatch(changePhoneBook(oldName, newContact))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);