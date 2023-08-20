import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Movie = {
    imdbID: string,
    Title: string,
    Year: string,
    Type: string,
    Poster: string,
}

type SearchState = {
    searchQuery: string,
    searchResults: Movie[],
    page: number,
}

const initialState: SearchState = {
    searchQuery: "",
    searchResults: [],
    page: 1,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        setSearchResults: (state, action: PayloadAction<Movie[]>) => {
            state.searchResults = action.payload
        },
        incrementPage: (state) => {
            console.log("incrementing")
            state.page += 1
        },
        decrementPage: (state) => {
            if (state.page > 1) {
                state.page -= 1
            }
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    }
})

export const { setSearchQuery, setSearchResults, incrementPage, decrementPage, setPage } = searchSlice.actions
export default searchSlice.reducer;