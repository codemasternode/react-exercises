import { login as loginService } from '../services'

export function login(user) {

    function success(user) {
        
    }

    function failed(result) {

    }

    loginService(user).then((result) => {

    }, (reason) => {

    })
}