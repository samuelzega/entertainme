import React from "react";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import CardItem from "./Components/CardItem";
import store from "./Data/store";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import App from "./App";
import "./windowMatchMedia.mock";
import {
  getImageDetail,
  searchNewValue,
  setFavoriteImage
} from "./Data/action";

jest.mock("./Data/action");
const response = {
  data: {
    hits: [
      {
        id: 4897656,
        pageURL:
          "https://pixabay.com/photos/flaming-pink-pen-neck-exotic-4897656/",
        type: "photo",
        tags: "flaming, pink, pen",
        previewURL:
          "https://cdn.pixabay.com/photo/2020/03/03/06/40/flaming-4897656_150.jpg",
        previewWidth: 150,
        previewHeight: 112,
        webformatURL:
          "https://pixabay.com/get/52e8dc444c57aa14f6da8c7dda79367b113adfe154566c48702778d09748c35dbb_640.jpg",
        webformatWidth: 640,
        webformatHeight: 480,
        largeImageURL:
          "https://pixabay.com/get/,52e8dc444c57aa14f6da8c7dda79367b113adfe154566c48702778d09748c35dbb_1280.jpg",
        imageWidth: 5334,
        imageHeight: 3999,
        imageSize: 2370322,
        views: 694,
        downloads: 519,
        favorites: 11,
        likes: 28,
        comments: 30,
        user_id: 6355831,
        user: "pasja1000",
        userImageURL:
          "https://cdn.pixabay.com/user/2020/01/29/17-57-01-931_250x250.png"
      },
      {
        id: 4897657,
        pageURL:
          "https://pixabay.com/photos/flaming-pink-pen-neck-exotic-4897656/",
        type: "photo",
        tags: "flaming, pink, pen",
        previewURL:
          "https://cdn.pixabay.com/photo/2020/03/03/06/40/flaming-4897656_150.jpg",
        previewWidth: 150,
        previewHeight: 112,
        webformatURL:
          "https://pixabay.com/get/52e8dc444c57aa14f6da8c7dda79367b113adfe154566c48702778d09748c35dbb_640.jpg",
        webformatWidth: 640,
        webformatHeight: 480,
        largeImageURL:
          "https://pixabay.com/get/,52e8dc444c57aa14f6da8c7dda79367b113adfe154566c48702778d09748c35dbb_1280.jpg",
        imageWidth: 5334,
        imageHeight: 3999,
        imageSize: 2370322,
        views: 694,
        downloads: 519,
        favorites: 11,
        likes: 28,
        comments: 30,
        user_id: 6355831,
        user: "pasja1000",
        userImageURL:
          "https://cdn.pixabay.com/user/2020/01/29/17-57-01-931_250x250.png"
      },
      {
        id: 4897658,
        pageURL:
          "https://pixabay.com/photos/flaming-pink-pen-neck-exotic-4897656/",
        type: "photo",
        tags: "flaming, pink, pen",
        previewURL:
          "https://cdn.pixabay.com/photo/2020/03/03/06/40/flaming-4897656_150.jpg",
        previewWidth: 150,
        previewHeight: 112,
        webformatURL:
          "https://pixabay.com/get/52e8dc444c57aa14f6da8c7dda79367b113adfe154566c48702778d09748c35dbb_640.jpg",
        webformatWidth: 640,
        webformatHeight: 480,
        largeImageURL:
          "https://pixabay.com/get/,52e8dc444c57aa14f6da8c7dda79367b113adfe154566c48702778d09748c35dbb_1280.jpg",
        imageWidth: 5334,
        imageHeight: 3999,
        imageSize: 2370322,
        views: 694,
        downloads: 519,
        favorites: 11,
        likes: 28,
        comments: 30,
        user_id: 6355831,
        user: "pasja1000",
        userImageURL:
          "https://cdn.pixabay.com/user/2020/01/29/17-57-01-931_250x250.png"
      }
    ]
  }
};

searchNewValue.mockImplementation(() => {
  return {
    type: "SETALLIMAGE",
    payload: response.data.hits
  };
});

getImageDetail.mockImplementation(() => {
  return {
    type: "SETDETAILIMAGE",
    payload: response.data.hits[1]
  };
});

setFavoriteImage.mockImplementation(() => {
  return {
    type: "SETFAVORITE",
    payload: response.data.hits[1]
  };
});

describe("home page", () => {
  test("should render app successfully", () => {
    const { getByTestId } = render(<App />);
    const headerTitle = getByTestId("item-collection");
    expect(headerTitle.textContent).toBe("No DataCreated by Samuel Zega0");
    expect(headerTitle).toBeInTheDocument();
  });

  test("should render home successfully", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home></Home>
        </BrowserRouter>
      </Provider>
    );
    const headerTitle = getByTestId("item-collection");
    expect(headerTitle.textContent).toBe("No DataCreated by Samuel Zega0");
    expect(headerTitle).toBeInTheDocument();
  });
});

describe("itemcard", () => {
  test("should render card item successfully", () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <CardItem data={response.data.hits[1]}></CardItem>
        </Router>
      </Provider>
    );

    const itemToClick = getByTestId("item-4897657");
    expect(itemToClick).toBeInTheDocument();
    fireEvent.click(itemToClick);
    expect(history.location.pathname).toBe("/about/4897657");
  });
});

describe("detail page", () => {
  const match = {
    params: {
      id: "4897657"
    }
  };

  test("should render detail page successfully", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Detail match={match}></Detail>
        </BrowserRouter>
      </Provider>
    );
    const detailDOM = getByTestId("detail-4897657");
    expect(detailDOM).toBeInTheDocument();
    expect(store.getState().image.detailImage).toBe(response.data.hits[1]);
  });

  test("should add a favorite image to store successfully", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Detail match={match}></Detail>
        </BrowserRouter>
      </Provider>
    );
    const detailDOM = getByTestId("detail-4897657");
    expect(detailDOM).toBeInTheDocument();
    expect(store.getState().image.detailImage).toBe(response.data.hits[1]);

    const addFavoriteBtn = getByTestId("add-to-favorite");
    expect(addFavoriteBtn).toBeInTheDocument();
    fireEvent.click(addFavoriteBtn);
    expect(store.getState().favorite.favoriteImage[0]).toBe(
      response.data.hits[1]
    );
  });
});
