import { SETALLIMAGE, SETDETAILIMAGE } from "../actionTypes";

const initialState = {
  detailImage: null,
  allImage: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SETALLIMAGE:
      let newImage = action.payload;
      return {
        ...state,
        allImage: newImage
      };
    case SETDETAILIMAGE:
      let newDetail = action.payload;
      return {
        ...state,
        detailImage: newDetail
      };
    default:
      return state;
  }
}
