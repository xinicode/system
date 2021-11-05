
import VueRouter from '@/router'
const Tool = {
  go(url, data) {
    VueRouter.push({
      path: url,
      'query': data
    })
    const receive = function () {
      return "123";
    }
  },
  goReplace(url, data) {
    VueRouter.push({
      path: url,
      'query': data
    })
  },
  getData(router) {
    return router.query || {}
  },
  receive(callback) {
    // console.log(callback)
    return "123"
  }
}

export default Tool

