import React, {Component} from 'react';
import {connect} from "react-redux";
import {postBooksData} from "../../store/actions/phonebook";
import Contact from "../../components/Contact/Contact";
import {CardColumns} from "reactstrap";

class PhoneBook extends Component {
    componentDidMount() {
        this.props.postBooksData()
    }

    render() {
        return (
            <CardColumns>
                {
                    this.props.phoneBook.map((item, index) => {
                        return <Contact key={index} {...item}/>
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
    postBooksData: () => dispatch(postBooksData())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);