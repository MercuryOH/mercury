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

export async function submitFeedback(ClassId, stars, comments) {
  try {
    const { data } = await axios.post(
      `/api/feedback/`,
      { ClassId, stars, comments },
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

export async function postGroup(classId, name, type, userId) {
  try {
    const { data } = await axios.post(
      `/api/classes/${classId}/groups`,
      { name, type, userId },
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

export async function getClass(classId) {
  const { data } = await axios.get(`/api/classes/class/${classId}`, {
    headers: {
      authorization: token,
    },
  })

  return data
}

export async function getClassUsers(classId) {
  try {
    const { data } = await axios.get(`/api/users/${classId}`, {
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
/** get the classes the user is enrolled in */
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

/** get all classes available */
export async function getAllClasses() {
  try {
    const { data } = await axios.get(`/api/classes/allClasses`, {
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

export async function deleteGroup(classId, groupId) {
  try {
    await axios.delete(`/api/classes/${classId}/groups/${groupId}`, {
      headers: {
        authorization: token,
      },
    })
    return null
  } catch (e) {
    return null
  }
}

export async function getGroupByID(classId, groupId) {
  try {
    const { data } = await axios.get(
      `/api/classes/${classId}/groups/${groupId}`,
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

export async function postJoinGroup(classId, groupId, email) {
  try {
    const { data } = await axios.post(
      `/api/classes/${classId}/groups/${groupId}/join`,
      { email },
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

export async function getAllGroups(classId) {
  try {
    const { data } = await axios.get(`/api/classes/${classId}/groups`, {
      headers: {
        authorization: token,
      },
    })
    return data
  } catch (e) {
    return null
  }
}

export async function deleteGroupUser(classId, groupId, userId) {
  try {
    await axios.delete(
      `/api/classes/${classId}/groups/${groupId}/leave/${userId}`,
      {
        headers: {
          authorization: token,
        },
      }
    )
    return null
  } catch (e) {
    return null
  }
}

export async function postAddClass(classId, userId, role) {
  try {
    const { data } = await axios.post(
      `/api/classes/addClass`,
      { classId, userId, role },
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

export async function deleteClassUser(classId, userId) {
  try {
    await axios.delete(
      `/api/classes/deleteClass/${classId}/${userId}`,
      {
        headers: {
          authorization: token,
        },
      }
    )
    return null
  } catch (e) {
    return null
  }
}
