import OperationsApi from "../../api/operations.api";

import {ofType} from "redux-observable";
import {empty, merge, of} from "rxjs";
import {catchError, map, switchMap} from "rxjs/operators";
import {
    getReportActionDone,
} from "./actions";
import {
    GET_REPORT_ACTION,
    GET_REPORT_ACTION_DONE,
} from "./constants";


export const getReportEpic = (action$: any) =>
    action$.pipe(
        ofType(GET_REPORT_ACTION),
        switchMap(({payload}) =>
        OperationsApi.report().pipe(
                map(result => (result.response)),
                map(getReportActionDone),
                catchError(error => {
                    return merge(
                       of(getReportActionDone(error))
                    );
                })
            )
        )
    );

export const getReportDone = (action$: any) =>
    action$.pipe(
        ofType(GET_REPORT_ACTION_DONE),
        switchMap(({error, payload}: {error: any; payload: any}) => {
            return empty();
        })
    );

export default function ReportEpics(action$: any) {
    return merge(
        getReportEpic(action$),
        getReportDone(action$)
    );
}
