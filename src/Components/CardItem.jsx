import React, { Component } from "react";
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default class CardItem extends Component {
  render() {
    return (
      <Col
        span={6}
        style={{
          marginBottom: "3vw",
          marginTop: "3vw"
        }}
      >
        <div>
          <Link
            to={"/about/" + this.props.data.id}
            data-testid={"item-" + this.props.data.id}
          >
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={this.props.data.largeImageURL} />}
            >
              <Meta
                title={this.props.data.tags}
                description={this.props.data.downloads + " kali di download"}
              />
            </Card>
          </Link>
        </div>
      </Col>
    );
  }
}
