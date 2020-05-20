import React, { useState } from "react";
import { Row, Col, Input, Card, Button } from "antd";
import ItemCollection from "../Components/ItemCollection";
import Detail from "./Detail";
import FavoriteCollection from "../Components/FavoriteCollection";
import { setSearchInput } from "../Data/action";
import { Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function(props) {
  const [searchValue, setSearchValue] = useState("general");
  const dispatch = useDispatch();

  const inputDone = () => {
    dispatch(setSearchInput(searchValue));
  };

  return (
    <>
      <Row justify="center">
        <Col span={8}>
          <Card
            style={{
              marginBottom: "3vw",
              marginTop: "3vw"
            }}
          >
            <Input
              style={{
                marginBottom: "3vw",
                marginTop: "3vw"
              }}
              name="searchValue"
              placeholder="Search Image By Category"
              onChange={e => setSearchValue(e.target.value)}
            />
            <Row justify="center">
              <Button onClick={() => inputDone()} type="primary">
                <Link to={"/"}>Search</Link>
              </Button>
              <Link to={"/favorite"}>Show Favorites</Link>
            </Row>
          </Card>
        </Col>
      </Row>

      <Route exact path="/">
        <ItemCollection
        // setDetailData={props.setDetailData}
        />
      </Route>
      <Route path="/about/:id" component={Detail}></Route>
      <Route path="/favorite">
        <FavoriteCollection
        // setDetailData={props.setDetailData}
        />
      </Route>
    </>
  );
}
