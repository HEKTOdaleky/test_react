import axios from '../../axios-api';
import {NotificationManager} from "react-notifications";
import {GET_PHONE_BOOK_FAILURE, GET_PHONE_BOOK_SUCCESS} from "./actionTypes";

const getPhoneBookSuccess = (phone) => {
    return {type: GET_PHONE_BOOK_SUCCESS, phone};
};
const getPhoneBookFailure = (err) => {
    return {type: GET_PHONE_BOOK_FAILURE, err};
};
export const postBooksData = (data) => {
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