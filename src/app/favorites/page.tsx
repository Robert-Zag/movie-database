'use client'
import MovieCard from '@/components/MovieCard'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

export default function Home() {
    const favoriteMovies = useSelector((state: RootState) => state.favorites.favorites)
    return (
        <>
            <h1 className='my-8 text-center'>
                Favorite Movies:
            </h1>
            {
                favoriteMovies.length > 0 &&
                <>
                    <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {favoriteMovies.map((movie) => { return <MovieCard key={movie.imdbID} movie={movie} /> })}
                    </div>
                </>
            }
        </>
    )
}
