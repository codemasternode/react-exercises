export function login(user) {
    return new Promise((resolve, reject) => {
        if (user.username === 'Marcin') {
            resolve(user)
        } else {
            resolve('User does not exist')
        }
    })
}
