import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteImage, getImageDetail } from "../Data/action";
import { Card, Avatar, Row, Col } from "antd";
import { EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
const { Meta } = Card;

export default function({ match }) {
  const detailData = useSelector(state => state.image.detailImage);
  const loadingDetail = useSelector(state => state.input.loadingDescirption);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageDetail(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);
  // console.log(detailData);

  return (
    <div data-testid={"detail-" + match.params.id}>
      {detailData === null ? (
        <Loading />
      ) : loadingDetail ? (
        <Loading />
      ) : (
        <Row justify="space-around" align="middle">
          <Col>
            <Card
              style={{ width: 800, marginTop: "5vh" }}
              cover={<img alt="example" src={detailData.largeImageURL} />}
              actions={[
                <div
                  data-testid="add-to-favorite"
                  onClick={() => {
                    dispatch(setFavoriteImage(detailData));
                  }}
                >
                  <SettingOutlined key="setting" />
                </div>,
                <a download href={detailData.largeImageURL} title="ImageName">
                  <EditOutlined key="edit" />
                </a>,
                <Link to={"/"}>Back To Home</Link>
              ]}
            >
              <Meta
                avatar={
                  <a
                    target="blank"
                    href={
                      "https://pixabay.com/users/" +
                      detailData.user +
                      "-" +
                      detailData.user_id
                    }
                  >
                    <Avatar src={detailData.userImageURL} />{" "}
                  </a>
                }
                title={detailData.user}
                description={detailData.tags}
              />
              <Meta
                style={{
                  marginLeft: "5%"
                }}
                description={detailData.downloads + " kali di download"}
              />
              <Meta
                style={{
                  marginLeft: "5%"
                }}
                description={detailData.favorites + " user yang mem-favoritkan"}
              />
              <Meta
                style={{
                  marginLeft: "5%"
                }}
                description={detailData.likes + " likes"}
              />
              <Meta
                style={{
                  marginLeft: "5%"
                }}
                description={detailData.comments + " comments"}
              />
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}
