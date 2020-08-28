import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Label, Accordion, List, Button } from 'semantic-ui-react'
import * as api from '../services/api'
import Layout from '../components/layout'
import GoogleCalendar from '../components/googleCalendar'

function CalendarContainer() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    api
      .getClasses()
      .then((classes) => setClasses(classes))
      .catch(console.error)
  }, [])

  return (
    <Layout
      left={
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Label
            size="massive"
            style={{
              fontSize: '2vw',
              textAlign: 'center',
              width: '100%',
              marginBottom: '4$',
            }}
          >
            Classes
          </Label>
          <Accordion
            exclusive={false}
            defaultActiveIndex={[0, 1]}
            style={{ fontSize: '1vw' }}
            panels={[
              {
                key: 'student',
                title: 'Student',
                content: (
                  <List relaxed>
                    {classes
                      .filter((x) => x.role === 'Student')
                      .map((x) => (
                        <List.Item key={`class_${x.id}`}>
                          <List.Content>
                            <Link to={`/classes/${x.id}`}>
                              <Button
                                content={x.name}
                                style={{
                                  backgroundColor: x.color,
                                  fontSize: '1vw',
                                  width: '100%',
                                  minWidth: '41px',
                                }}
                              />
                            </Link>
                          </List.Content>
                        </List.Item>
                      ))}
                  </List>
                ),
              },
              {
                key: 'ta',
                title: 'TA',
                content: (
                  <List relaxed>
                    {classes
                      .filter((x) => x.role === 'TA')
                      .map((x) => (
                        <List.Item key={`class_${x.id}`}>
                          <List.Content>
                            <Link to={`/classes/${x.id}`}>
                              <Button
                                content={x.name}
                                style={{
                                  backgroundColor: x.color,
                                  fontSize: '1vw',
                                  width: '100%',
                                  minWidth: '41px',
                                }}
                              />
                            </Link>
                          </List.Content>
                        </List.Item>
                      ))}
                  </List>
                ),
              },
            ]}
          />
        </div>
      }
    >
      <GoogleCalendar classes={classes} />
    </Layout>
  )
}

export default CalendarContainer
