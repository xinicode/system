import axios from '.'

const API = {
  getLogin(data) {
    return axios({
      method: 'post',
      url: `/user/login`,
      data
    })
  },
  getLogin2(data) {
    return axios({
      method: 'get',
      url: `gateway/cmp-report-aggregator/resoureVmMessage/getVmmessageTopUsed?dateType=1&page=1&rows=7`,
      data
    })
  }
}

export default API
