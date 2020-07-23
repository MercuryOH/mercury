import React from 'react'
import Layout from '../components/layout'
import { Button, Accordion, List } from 'semantic-ui-react'
import { AuthRequired } from '../components/authProvider'
import Queue from '../components/queue'
import Zoom from '../components/zoom'

function ClassPage() {
  return (
    <Layout
      left={
        <div style={{ height: '100%' }}>
          <Button.Group size="huge" style={{ marginBottom: 20 }} fluid>
            <Button icon="angle left" content="CS-101" />
            <Button icon="setting" />
          </Button.Group>
          <Accordion
            fluid
            exclusive={false}
            defaultActiveIndex={[0, 1]}
            panels={[
              {
                key: 'discussions',
                title: 'Discussions',
                content: {
                  content: (
                    <div style={{ paddingLeft: 20 }}>
                      <List relaxed>
                        <List.Item>
                          <List.Icon name="sound" />
                          <List.Content>
                            <List.Header as="a">Question 1</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="sound" />
                          <List.Content>
                            <List.Header as="a">Question 2</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="sound" />
                          <List.Content>
                            <List.Header as="a">Question 3</List.Header>
                          </List.Content>
                        </List.Item>
                      </List>
                    </div>
                  ),
                },
              },
              {
                key: 'private-groups',
                title: 'Private Groups',
                content: {
                  content: (
                    <div style={{ paddingLeft: 20 }}>
                      <List relaxed>
                        <List.Item>
                          <List.Icon name="lock" />
                          <List.Content>
                            <List.Header as="a">Group 1</List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name="lock" />
                          <List.Content>
                            <List.Header as="a">Group 2</List.Header>
                          </List.Content>
                        </List.Item>
                      </List>
                    </div>
                  ),
                },
              },
            ]}
          />
          <div
            style={{
              position: 'absolute',
              width: 'calc(100% - 38px)',
              bottom: 14,
            }}
          >
            <Button icon="add" content="Create Meeting" fluid positive />
          </div>
        </div>
      }
      right={<Queue />}
    >
      <Zoom />
    </Layout>
  )
}

export default AuthRequired(ClassPage)
