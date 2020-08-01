<<<<<<< HEAD
import React, { Component, useEffect, useState } from 'react'
import { Accordion, List, Button } from 'semantic-ui-react'
import { useRouter } from 'next/router'
import { AuthRequired } from '../components/authProvider'
import * as api from '../util/mercuryService'
import Link from 'next/Link'
=======
import React, { Component } from 'react'
import { Accordion, List, Button } from 'semantic-ui-react'
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9

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

  const sClasses = classes

<<<<<<< HEAD
  /*const sClasses = [
      'CS 2110',
      'CS 2800',
      'MATH 2940',
    ]*/

  const taClasses = ['CS 1110']

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
=======
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

    const sClasses = ['CS 2110', 'CS 2800', 'MATH 2940']

    const taClasses = ['CS 1110']

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
        {/* <Accordion>
          <Accordion.Title
            active={activeIndexs.includes(0)}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" style = {{fontSize: '1vw', width: '20%', float: 'left'}}/>
            <p style = {{fontSize: '1vw', width: '75%', float: 'left', marginBottom: '4%'}}>Student</p>
          </Accordion.Title>
          <Accordion.Content active={activeIndexs.includes(0)}>
            <div className="ui selection list" style = {{fontSize: '1vw', width: '100%'}}>
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui blue horizontal label">CS 2110</div>
              </a>
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui green horizontal label">CS 2800</div>
              </a>
              <a className="item">
                <div style = {{fontSize: '1vw', width: '100%', marginBottom: '4%'}} className="ui purple horizontal label">Math 2940</div>
              </a>
            </div>
          </Accordion.Content>
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9

  return (
    <div>
      <Accordion
        fluid
        exclusive={false}
        defaultActiveIndex={[0, 1]}
        panels={[
          {
            key: 'student',
            title: 'Student',
            content: {
              content: (
                <div>
                  <List relaxed>
                    <>
                      {classes.map((classs) => (
                        <List.Item key={`class_${classs.id}`}>
                          <List.Content>
<<<<<<< HEAD
                            <Link href={`/classes/${classs.id}`}>
                              <Button
                                style={{
                                  fontSize: '1vw',
                                  width: '100%',
                                  minWidth: '41px',
                                }}
                              >
                                {classs.name}
                              </Button>
                            </Link>
=======
                            <Button
                              color={zipped[0]}
                              content={zipped[1]}
                              style={{
                                fontSize: '1vw',
                                width: '100%',
                                minWidth: '41px',
                              }}
                            ></Button>
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9
                          </List.Content>
                        </List.Item>
                      ))}
                    </>
                  </List>
                </div>
              ),
            },
<<<<<<< HEAD
          },
          {
            key: 'ta',
            title: 'TA',
            content: {
              content: (
                <div>
                  <List relaxed>
                    {zip(colors, taClasses).map((zipped) => (
                      <List.Item>
                        <List.Content>
                          <Button
                            color={zipped[0]}
                            content={zipped[1]}
                            style={{
                              fontSize: '1vw',
                              width: '100%',
                              minWidth: '41px',
                            }}
                          ></Button>
                        </List.Content>
                      </List.Item>
                    ))}
                  </List>
                </div>
              ),
=======
            {
              key: 'ta',
              title: 'TA',
              content: {
                content: (
                  <div>
                    <List relaxed>
                      {zip(colors, taClasses).map((zipped) => (
                        <List.Item>
                          <List.Content>
                            <Button
                              color={zipped[0]}
                              content={zipped[1]}
                              style={{
                                fontSize: '1vw',
                                width: '100%',
                                minWidth: '41px',
                              }}
                            ></Button>
                          </List.Content>
                        </List.Item>
                      ))}
                    </List>
                  </div>
                ),
              },
>>>>>>> 9b7f7cf96dc317ee3f6af52c6ee70f7d0eb749c9
            },
          },
        ]}
      />
    </div>
  )
}

export default DropDown
