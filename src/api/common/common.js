import Api from '../axios'

const apiURL = {
  logIn: '/login'
}

export default {
  logIn (obj) {
    return Api.get(apiURL.logIn, obj)
  }

}
