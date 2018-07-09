import { loginConsts } from '../consts'

const defaultState = {
    auth: true,
    user: 'Marcin'
}

export function loginStore(state = defaultState, action) {
    switch (action.type) {
        case loginConsts.LOGIN_SUCCESS:
            return { ...defaultState, user: action.user }
        case loginConsts.LOGIN_FAILED:
            return { authenticated: false }
        default:
            return state
    }
}