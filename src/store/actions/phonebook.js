import axios from '../../axios-api';
import {NotificationManager} from "react-notifications";
import {CHANGE_PHONE_BOOK, GET_PHONE_BOOK_FAILURE, GET_PHONE_BOOK_SUCCESS} from "./actionTypes";

const getPhoneBookSuccess = (phone) => {
    // let sortedArray = phone.sort((a, b) => {
    //     if (a.name > b.name) {
    //         return 1;
    //     }
    //     if (a.name < b.name) {
    //         return -1;
    //     }
    //     return 0;
    //
    // });
    return {type: GET_PHONE_BOOK_SUCCESS, phone};
};
const getPhoneBookFailure = (err) => {
    return {type: GET_PHONE_BOOK_FAILURE, err};
};
export const getPhoneBookData = () => {
    return dispatch => {
        axios.get('/users').then(response => {
            dispatch(getPhoneBookSuccess(response.data));
            NotificationManager.success("Данные загружены");
        }, error => {
            dispatch(getPhoneBookFailure(error.response.data));
            NotificationManager.error("Ошибка при получении данных");

        })
    }
};

export const changePhoneBookData = newBook => {
    return {type: CHANGE_PHONE_BOOK, newBook}
};

export const changePhoneBook = (oldName, newContact) => {
    delete newContact.show;
    delete newContact.edit;
    return (dispatch, getState) => {
        let newArray = getState().phoneBook.phoneBook.map(contact => {
            if (contact.name === oldName)
                return newContact;
            return contact;

        });
        dispatch(changePhoneBookData(newArray));
    }
};