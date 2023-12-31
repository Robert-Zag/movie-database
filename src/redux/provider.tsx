"use client"
import { useEffect } from "react"
import { store } from "./store"
import { Provider } from "react-redux"
import { setFavorites } from "./features/FavoritesSlice"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        store.dispatch(setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]")))
    }, [])
    return <Provider store={store}>{children}</Provider>
}