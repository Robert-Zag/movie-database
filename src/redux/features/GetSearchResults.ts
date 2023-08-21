"use server"
export default async function getSearchResults(query: string, page: number) {
    const url = 'http://omdbapi.com/?' + new URLSearchParams({
        apikey: process.env.OMDB_API_KEY as string,
        s: query,
        page: page.toString(),
    })
    const response = await fetch(url);
    const data = await response.json();
    return data.Search || []
}