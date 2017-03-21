import router from '../router/index'

const API_URL = 'http://localhost:3030/'
const LOGIN_URL = API_URL + 'login'
// const SIGNUP_URL = API_URL + 'users/'

export default {
  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    console.log(context)
    context.$http.post(LOGIN_URL, creds).then(
      (data) => {
        localStorage.setItem('id_token', data.id_token)
        this.user.authenticated = true
        if (redirect) {
          router.push(redirect)
        }
      },
      (err) => {
        context.error = err
      }
    )
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  }
}
