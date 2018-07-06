import {GET_PHONE_BOOK_FAILURE, GET_PHONE_BOOK_SUCCESS} from "../actions/actionTypes";

const initialState = {
    phoneBook: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHONE_BOOK_SUCCESS:
            return {...state, phoneBook: action.phone, error: null};
        case GET_PHONE_BOOK_FAILURE:
            return {...state,  error: action.err};
        default:
            return state;
    }
};

export default reducer;