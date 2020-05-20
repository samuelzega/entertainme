import {
  SETSEARCHINPUT,
  SETLOADINGHOME,
  SETLOADINGDESCRIPTION
} from "../actionTypes";

const intialState = {
  searchInput: "general",
  loadingHome: false,
  loadingDescription: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case SETSEARCHINPUT:
      let newSearchInput = action.payload;
      return {
        ...state,
        searchInput: newSearchInput
      };
    case SETLOADINGHOME:
      let newHomeLoading = action.payload;
      return {
        ...state,
        loadingHome: newHomeLoading
      };
    case SETLOADINGDESCRIPTION:
      let newDescriptionLoading = action.payload;
      return {
        ...state,
        loadingDescription: newDescriptionLoading
      };
    default:
      return state;
  }
}
