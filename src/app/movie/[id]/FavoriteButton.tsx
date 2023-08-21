'use client'

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Movie } from "@/redux/features/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addFavorite, removeFavorite } from "@/redux/features/FavoritesSlice";


export default function FavoriteButton({ movie, className = "" }: { movie: Movie, className?: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const favorites: Movie[] = useSelector((state: RootState) => state.favorites.favorites)
    const isMovieInFavorites: boolean = favorites.some(favorite => favorite.imdbID === movie.imdbID)
    return (
        <>
            {
                isMovieInFavorites
                    ?
                    <Button
                        className={className}
                        variant="destructive"
                        size="icon"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            // instead of stoppropagation for next.js
                            e.preventDefault();
                            dispatch(removeFavorite(movie.imdbID))
                        }}
                    >
                        <Star className="h-[1.2rem] w-[1.2rem] transition-all" />
                        <span className="sr-only">Remove Movie from Favorites</span>
                    </Button>
                    :
                    <Button
                        className={className}
                        variant="default"
                        size="icon"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            dispatch(addFavorite(movie))
                        }}
                    >
                        <Star className="h-[1.2rem] w-[1.2rem] transition-all" />
                        <span className="sr-only">Add Movie to Favorites</span>
                    </Button>

            }
        </>
    );
}
