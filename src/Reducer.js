import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './Action.js';

const initialState = {
  favoriteCount: 0,
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const existingMovie = state.favorites.find(movie => movie.id === action.payload.id);
      if (existingMovie) {
        return state; 
      }
      return {
        ...state,
        favoriteCount: state.favoriteCount + 1, 
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      const updatedFavorites = state.favorites.filter(item => item.id !== action.payload);
      return {
        ...state,
        favoriteCount: state.favoriteCount - 1, 
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

export default reducer;
