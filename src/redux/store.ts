import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search-slice"
import favoritesReducer from "./features/favorites-slice"

export const store = configureStore({
    reducer: {
        search: searchReducer,
        favorites: favoritesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from 'redux-persist/lib/storage'
// import searchReducer from "./features/search-slice"
// import favoritesReducer from "./features/favorites-slice"
// import thunk from 'redux-thunk'

// const rootReducer = combineReducers({
//     search: searchReducer,
//     favorites: favoritesReducer
// });

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['favorites']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
//     devTools: true,
//     middleware: [thunk]
// })
// export const persistor = persistStore(store)

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch