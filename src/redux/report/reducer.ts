import {handleActions} from "redux-actions";
import {
    GET_REPORT_ACTION,
    GET_REPORT_ACTION_DONE,
} from "./constants";
import initialState from "./state";

const ReportReducer = handleActions<any>(
    {
        [GET_REPORT_ACTION]: (state, action) => ({...state, loading: true}),
        [GET_REPORT_ACTION_DONE]: {
            next: (state, action) => ({
                ...state,
                loading: false,
                response: action.payload,
            }),
            throw: (state, {payload}) => ({
                ...state,
                loading: false,
                response: [],
            }),
        },
    },
    initialState
);

export default ReportReducer;
