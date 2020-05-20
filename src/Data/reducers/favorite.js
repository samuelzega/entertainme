import { SETFAVORITE } from '../actionTypes'

const initialState = {
  favoriteImage: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SETFAVORITE:
      let newFavorite = action.payload
      return {
        ...state,
        favoriteImage: [...state.favoriteImage, newFavorite]
      }
    default:
      return state
  }
}
