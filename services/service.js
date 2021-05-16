export default async function () {
  const axios = require('axios')
  const response = await axios.get('https://api.github.com/users')
  let promises = []
  response.forEach(user => {
    promises.push(axios.get('https://api.github.com/users/url'))
  })
  let users = await Promise.all(promises)
  return users
}
