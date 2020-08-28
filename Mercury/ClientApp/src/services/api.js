import axios from 'axios'

let token = ''

export function setToken(t) {
  token = t
}

export async function getClasses() {
  const { data } = await axios.get('/api/classes', {
    headers: { Authorization: token },
  })

  return data
}

export async function getClass(classId) {
  const { data } = await axios.get(`/api/classes/${classId}`, {
    headers: { Authorization: token },
  })

  return data
}

export async function postGroup(classId, group) {
  const { data } = await axios.post(`/api/classes/${classId}/groups`, group, {
    headers: { Authorization: token },
  })

  return data
}

export async function getQueue(classId) {
  const { data } = await axios.get(`/api/classes/${classId}/queue`, {
    headers: { Authorization: token },
  })

  return data
}
