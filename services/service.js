const axios = require('axios')
const PrivateToken = require('./token')
const { users } = require('../dummy.json')

const instance = axios.create({
  baseURL: ''
})

instance.defaults.headers.common['Authorization'] = PrivateToken
instance.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'

const search = function () {
  const inst = axios.create({
    baseURL: '  https://api.github.com/search/users'
  })
  //queries: q=searchtext
}

export default function () {
  let promises = []
  return new Promise((resolve, reject) => {
    instance
      .get('https://api.github.com/users?per_page=60')
      .then(response => {
        response.data.forEach(user => {
          promises.push(instance.get(user.url))
        })

        response = Promise.all(promises)

        resolve(response.map(item => item.data))
      })
      .catch(err => {
        users.forEach(user => {
          promises.push(instance.get(user.url))
        })
        Promise.all(promises)
          .then(response => {
            resolve(response.map(item => item.data))
          })
          .catch(err => {
            reject()
            Alert('no Internet')
          })
      })
  })
}
