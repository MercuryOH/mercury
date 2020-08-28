import * as signalR from '@aspnet/signalr'

let connection = null

export async function init(token) {
  connection = new signalR.HubConnectionBuilder()
    .withUrl('/queueHub', { accessTokenFactory: () => token })
    .configureLogging(signalR.LogLevel.Information)
    .build()

  try {
    await connection.start()

    console.log('Connected')
  } catch (e) {
    console.error(e)
  }
}

export function getConnection() {
  return connection
}

export function joinQueue(classId) {
  connection.invoke('Join', classId).catch(console.error)
}
