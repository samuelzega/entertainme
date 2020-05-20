import React, { Component } from 'react'
import { Row, Card } from 'antd'
export default class Loading extends Component {
  render() {
    return (
      <Row
        style={{
          placeContent: 'center',
          marginTop: '10%'
        }}
      >
        <Card
          hoverable
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://media.giphy.com/media/l0He4fJxPCbfqv7Xi/source.gif"
            />
          }
        ></Card>
      </Row>
    )
  }
}
