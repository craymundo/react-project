import { login } from "../constants/api.routes";
import { ILoginRequest } from "../models";
import Api from "./api";
import { Crypto } from "../libs/crypto";

export default class AuthApi {
    static login(payload: ILoginRequest) {
        const user = {
            user: payload.user,
            password: Crypto.encryptSHA1(payload.password),
        }
        return Api.post(login, { data: user });
    }
}