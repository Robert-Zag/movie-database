'use client'
import MovieCard from '@/components/MovieCard'
import Pagination from '@/components/Pagination'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

export default function Home() {
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery)
  const searchResults = useSelector((state: RootState) => state.search.searchResults)

  return (
    <>
      {
        searchQuery !== "" &&
        <h1 className='my-8 text-center'>
          Search results: <span className='text-muted-foreground'>{searchQuery}</span>
        </h1>
      }
      {
        searchResults.length > 0 &&
        <>
          <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {searchResults.map((movie) => { return <MovieCard key={movie.imdbID} movie={movie} /> })}
          </div>
          <Pagination />
        </>
      }
    </>
  )
}
