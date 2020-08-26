import React from 'react'

function GoogleCalendar({ classes }) {
  let src = 'https://calendar.google.com/calendar/embed?mode=WEEK&showTitle=0'

  for (var c of classes) {
    src += `&src=${c.calendarId}&color=${c.color.replace('#', '')}`
  }

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      frameBorder={0}
      scrolling="no"
      style={{ border: 0 }}
    />
  )
}

export default GoogleCalendar
