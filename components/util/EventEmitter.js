export const EventEmitter = {
  events: {},
  dispatch: function (event, data) {
    if (!this.events[event]) return
    this.events[event].forEach((callback) => callback(data))
  },
  subscribe: function (event, callnacl) {
    if (!this.event[event]) this.events[event] = []
    this.event[event].push(callback)
  },
}
