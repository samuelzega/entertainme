import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { Row, List } from "antd";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { searchNewValue } from "../Data/action";

export default function() {
  const dispatch = useDispatch();
  const allImage = useSelector(state => state.image.allImage);
  const isLoading = useSelector(state => state.input.loadingHome);
  const searchValue = useSelector(state => state.input.searchInput);
  useEffect(() => {
    dispatch(searchNewValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div>
      {allImage === null ? (
        <Loading />
      ) : isLoading ? (
        <Loading />
      ) : (
        <Row
          style={{ textAlign: "-webkit-center" }}
          data-testid="item-collection"
        >
          <List
            grid={{ gutter: 1, column: 4 }}
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 8
            }}
            dataSource={allImage.hits}
            footer={
              <div>
                <b>Created by</b> Samuel Zega
              </div>
            }
            renderItem={item => <CardItem key={item.id} data={item} />}
          />
        </Row>
      )}
    </div>
  );
}
