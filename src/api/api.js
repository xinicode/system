import axios from '.';




let API = {
  getLogin(data) {
    return axios({
      method:'post',
      url:`/user/login`,
      data
  })
  }
}


export default API;