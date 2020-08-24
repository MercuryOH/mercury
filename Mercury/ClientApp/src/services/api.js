import axios from 'axios'

let token = ''

export function setToken(t) {
  console.log(t)
  token = t
}

export async function getClasses() {
  const { data } = await axios.get('/api/classes', {
    headers: { Authorization: token },
  })

  return data
}
