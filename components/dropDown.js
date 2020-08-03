import React, { Component, useEffect, useState } from 'react'
import { Accordion, List, Button } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { AuthRequired } from '../components/authProvider'
import * as api from '../util/mercuryService'
import Link from 'next/Link'

function DropDown() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    api
      .getClasses()
      .then((classes) => setClasses(classes))
      .catch(console.error)
  }, [])

  const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'gray',
    'black',
  ]

  function zip() {
    var args = [].slice.call(arguments)
    var shortest =
      args.length == 0
        ? []
        : args.reduce(function (a, b) {
            return a.length < b.length ? a : b
          })

    return shortest.map(function (_, i) {
      return args.map(function (array) {
        return array[i]
      })
    })
  }

  return (
    <div>
      <Accordion
        fluid
        exclusive={false}
        defaultActiveIndex={[0, 1]}
        style = {{fontSize: '1vw'}}
        panels={[
          {
            key: 'student',
            title: 'Student',
            content: {
              content: (
                <div>
                  <List relaxed>
                    <>
                    {zip(colors,classes).filter((zipped) => zipped[1].role === 'Student').map((zipped) => (
                      <List.Item key={`class_${zipped[1].id}`}>
                        <List.Content>
                          <Link href={`/classes/${zipped[1].id}`}>
                            <Button
                              style={{
                                fontSize: '1vw',
                                width: '100%',
                                minWidth: '41px',
                              }}
                              color={zipped[0]}
                              content={zipped[1].name}
                            />
                          </Link>
                        </List.Content>
                      </List.Item>
                    ))}
                    </>
                  </List>
                </div>
              ),
            },
          },
          {
            key: 'ta',
            title: 'TA',
            content: {
              content: (
                <div>
                  <List relaxed>
                  {zip(colors,classes).filter((zipped) => zipped[1].role === 'Professor').map((zipped) => (
                    <List.Item key={`class_${zipped[1].id}`}>
                      <List.Content>
                        <Link href={`/classes/${zipped[1].id}`}>
                          <Button
                            style={{
                              fontSize: '1vw',
                              width: '100%',
                              minWidth: '41px',
                            }}
                            color={zipped[0]}
                            content={zipped[1].name}
                          />
                        </Link>
                      </List.Content>
                    </List.Item>
                  ))}
                  </List>
                </div>
              ),
            },
          },
        ]}
      />
    </div>
  )
}

export default DropDown
