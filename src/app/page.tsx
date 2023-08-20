'use client'
import MovieCard from '@/components/MovieCard'
import Pagination from '@/components/Pagination'
import { setSearchResults } from '@/redux/features/search-slice'
import { AppDispatch, RootState } from '@/redux/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery)
  const currentPage = useSelector((state: RootState) => state.search.page)
  const searchResults = useSelector((state: RootState) => state.search.searchResults)
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://omdbapi.com/?' + new URLSearchParams({
        apikey: "19478d6e",
        s: searchQuery,
        page: currentPage.toString(),
      })
      const response = await fetch(url);
      const data = await response.json()
      if (data.Search) {
        dispatch(setSearchResults(data.Search))
      } else {
        dispatch(setSearchResults([]))
      }
    }
    fetchData();

  }, [currentPage, searchQuery]);

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
