import {
  SETDETAILIMAGE,
  SETALLIMAGE,
  SETFAVORITE,
  SETSEARCHINPUT,
  SETLOADINGDESCRIPTION,
  SETLOADINGHOME
} from "./actionTypes";

import axios from "axios";

// const finalInput = useSelector(state => state.input.searchInput);
// const dispatch = useDispatch();

export const setAllImage = allImage => ({
  type: SETALLIMAGE,
  payload: allImage
});

export const setDetailImage = detailImage => ({
  type: SETDETAILIMAGE,
  payload: detailImage
});

export const setFavoriteImage = image => ({
  type: SETFAVORITE,
  payload: image
});

export const setSearchInput = searchInput => ({
  type: SETSEARCHINPUT,
  payload: searchInput
});

export const setLoadingHome = loadingHome => ({
  type: SETLOADINGHOME,
  payload: loadingHome
});

export const setLoadingDescription = loadingDescription => ({
  type: SETLOADINGDESCRIPTION,
  payload: loadingDescription
});

export const searchNewValue = () => {
  return (dispatch, getState) => {
    dispatch(setLoadingHome(true));
    axios
      .get(
        `https://pixabay.com/api/?key=15451182-e31fbd29931324f52979fab5c&q=${
          getState().input.searchInput
        }&image_type=all&per_page=200`
      )
      .then(({ data }) => {
        dispatch(setLoadingHome(false));
        dispatch(setAllImage(data));
        // setTimeout(() => {
        // }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getImageDetail = imageId => {
  return dispatch => {
    dispatch(setLoadingDescription(true));
    axios
      .get(
        `https://pixabay.com/api/?key=15451182-e31fbd29931324f52979fab5c&id=${imageId}`
      )
      .then(({ data }) => {
        dispatch(setLoadingDescription(false));
        let newDetailImage = data.hits[0];
        dispatch(setDetailImage(newDetailImage));
      })
      .catch(err => {
        console.log(err, "error");
      });
  };
};
