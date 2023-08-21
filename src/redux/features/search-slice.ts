import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import getSearchResults from "./GetSearchResults";

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
    subsequentPageSearchResults: Movie[],
    page: number,
}

const initialState: SearchState = {
    searchQuery: "",
    searchResults: [],
    subsequentPageSearchResults: [],
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
        setSubsequentPageSearchResults: (state, action: PayloadAction<Movie[]>) => {
            state.subsequentPageSearchResults = action.payload
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page += action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
})

export const { setSearchQuery, setSearchResults, setSubsequentPageSearchResults, changePage, setPage } = searchSlice.actions

export const searchWithPageChange = (pageChange: number) => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState()
        if (pageChange === 1) {
            // when incrementing, set the subsequent results as current and fetch the subsequent
            const subsequentSearchResults = await getSearchResults(state.search.searchQuery, state.search.page + 2)
            dispatch(setSearchResults(state.search.subsequentPageSearchResults))
            dispatch(setSubsequentPageSearchResults(subsequentSearchResults))
            dispatch(changePage(pageChange))
        } else if (pageChange === -1) {
            // when decrementing, subsequent page can be set to the current page
            const searchResults = await getSearchResults(state.search.searchQuery, state.search.page - 1)
            dispatch(setSubsequentPageSearchResults(state.search.searchResults))
            dispatch(setSearchResults(searchResults))
            dispatch(changePage(pageChange))
        } else {
            // for initial search, we fetch the first page and the second page aswell
            const searchPromise = getSearchResults(state.search.searchQuery, state.search.page)
            const subsequentPagePromise = getSearchResults(state.search.searchQuery, state.search.page + 1)
            const [searchResults, subsequentSearchResults]: [Movie[], Movie[]] = await Promise.all([searchPromise, subsequentPagePromise])
            dispatch(setSearchResults(searchResults))
            dispatch(setSubsequentPageSearchResults(subsequentSearchResults))
        }
    }
}

export default searchSlice.reducer;