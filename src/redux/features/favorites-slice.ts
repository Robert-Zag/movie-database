import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "./search-slice"

type FavoritesState = {
    favorites: Movie[],
}

const initialState: FavoritesState = {
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
}

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Movie>) => {
            state.favorites.push(action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer;