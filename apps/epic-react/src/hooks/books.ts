import useSWR from 'swr'
const API_KEY = 'a5549d08'

export type Book = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export type Response = {
  Search: Book[],
  Response: string,
  totalResults: string,
}

export const useBooks = (search: string) => {
  const fetcher = (url: string) => fetch(url).then(response => response.json())
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(search)}`
  const { data, error, isLoading } = useSWR<Response>(search ? url : null, fetcher)

  return { data, error, isLoading }
}