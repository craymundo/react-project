import { operationsReport } from "../constants/api.routes";
import Api from "./api";

export default class OperationsApi {
    static report() {
        return Api.get(operationsReport, {params: {}});
    }
}
