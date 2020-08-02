import axios from 'axios'

var token = ''

export function setToken(t) {
  token = t
}

export async function postLogin(email, password) {
  try {
    const { data } = await axios.post('/api/users/login', { email, password })

    return data
  } catch (e) {
    return null
  }
}

export async function postGroup(classId, name, type) {
  try {
    const { data } = await axios.post(
      `/api/classes/${classId}/groups`,
      { name, type },
      {
        headers: {
          authorization: token,
        },
      }
    )

    return data
  } catch (e) {
    return null
  }
}

export async function getMe() {
  try {
    const { data } = await axios.get('/api/users/me', {
      headers: {
        authorization: token,
      },
    })

    return data
  } catch (e) {
    return null
  }
}

export async function getClassNG(classId) {
  try {
    const { data } = await axios.get(`/api/classes/${classId}`, {
      headers: {
        authorization: token,
      },
    })

    return data
  } catch (e) {
    return null
  }
}

export async function getGroups(classId) {
  try {
    const { data } = await axios.get(`/api/classes/${classId}/groups`, {
      headers: {
        authorization: token,
      },
    })

    return data
  } catch (e) {
    return []
  }
}
export async function getClasses() {
  try {
    const { data } = await axios.get(`/api/classes/`, {
      headers: {
        authorization: token,
      },
    })

    return data
  } catch (e) {
    return []
  }
}

export async function postGroupToken(classId, groupId) {
  try {
    const { data } = await axios.post(
      `/api/classes/${classId}/groups/${groupId}/token`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    )

    return data
  } catch (e) {
    return null
  }
}
