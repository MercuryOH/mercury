import React, { useEffect, useState } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Label, Accordion, List, Button } from 'semantic-ui-react'
import * as api from '../services/api'
import Layout from '../components/layout'
import { Link } from 'react-router-dom'

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
            fluid
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
                            <Link href={`/classes/${x.id}`}>
                              <Button
                                color={x.color}
                                content={x.name}
                                style={{
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
      Hello World
    </Layout>
  )
}

export default withAuthenticationRequired(CalendarContainer)
