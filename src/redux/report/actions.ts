import {createActions} from "redux-actions";
import {
    GET_REPORT_ACTION,
    GET_REPORT_ACTION_DONE,
} from "./constants";

const actionsCreator = createActions(
    GET_REPORT_ACTION,
    GET_REPORT_ACTION_DONE
);

export const {
    getReportAction,
    getReportActionDone,
} = actionsCreator;
