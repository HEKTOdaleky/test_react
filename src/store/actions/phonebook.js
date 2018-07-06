import axios from '../../axios-api';
import {NotificationManager} from "react-notifications";
import {GET_PHONE_BOOK_FAILURE, GET_PHONE_BOOK_SUCCESS} from "./actionTypes";

const getPhoneBookSuccess = (phone) => {
    let sortedArray = phone.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;

    });
    return {type: GET_PHONE_BOOK_SUCCESS, phone: sortedArray};
};
const getPhoneBookFailure = (err) => {
    return {type: GET_PHONE_BOOK_FAILURE, err};
};
export const postBooksData = () => {
    return dispatch => {
        axios.get('/users').then(response => {
            console.log(response.data);
            dispatch(getPhoneBookSuccess(response.data));
            NotificationManager.success("Данные загружены");
        }, error => {
            dispatch(getPhoneBookFailure(error.response.data));
            NotificationManager.error("Ошибка при получении данных");

        })
    }
};