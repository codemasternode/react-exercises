import { login as loginService } from '../services'
import { loginConsts } from '../consts'

export function login(user) {

    function success(user) {
        return {
            type: loginConsts.LOGIN_SUCCESS,
            user
        }
    }

    function failed(reason) {
        return {
            type: loginConsts.LOGIN_FAILED,
            reason
        }
    }

    loginService(user).then((result) => {
        success(user)
    }, (reason) => {
        failed(reason)
    })
}