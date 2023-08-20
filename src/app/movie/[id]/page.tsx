import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { Movie } from "@/redux/features/search-slice";

type Rating = {
    Source: string;
    Value: string;
};

export type MovieDetail = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    Error?: string;
};


export default async function page({ params }: { params: { id: string } }) {
    const url = 'http://omdbapi.com/?' + new URLSearchParams({
        apikey: process.env.OMDB_API_KEY as string,
        i: params.id,
    })
    const response = await fetch(url);
    const movie: MovieDetail = await response.json()
    // basic movie object with less detail, used for the favorites state array
    const basicMovie: Movie = {
        imdbID: movie.imdbID,
        Title: movie.Title,
        Year: movie.Year,
        Type: movie.Type,
        Poster: movie.Poster,
    }
    if (movie.Response === "True") {
        return (
            <div className="flex flex-col md:flex-row gap-4 my-4">
                <div className="min-w-[300px]">
                    <Image src={movie.Poster !== "N/A" ? movie.Poster : ""} alt={movie.Title} width={300} height={450} className="rounded-lg border border-primary" />
                </div>
                <div className="max-w-2xl">
                    <div className="flex gap-4">
                        <h1 className="text-3xl font-semibold mb-4">{movie.Title}</h1>
                        <FavoriteButton movie={basicMovie} />
                    </div>
                    <p className="font-bold">Year: <span className="font-normal">{movie.Year}</span></p>
                    <p className="font-bold">Rated: <span className="font-normal">{movie.Rated}</span></p>
                    <p className="font-bold">Released: <span className="font-normal">{movie.Released}</span></p>
                    <p className="font-bold">Runtime: <span className="font-normal">{movie.Runtime}</span></p>
                    <p className="font-bold">Genre: <span className="font-normal">{movie.Genre}</span></p>
                    <p className="font-bold">Director: <span className="font-normal">{movie.Director}</span></p>
                    <p className="font-bold">Actors: <span className="font-normal">{movie.Actors}</span></p>
                    <p className="italic my-2">&quot;{movie.Plot}&quot;</p>
                    <p className="font-bold">Language: <span className="font-normal">{movie.Language}</span></p>
                    <p className="font-bold">Country: <span className="font-normal">{movie.Country}</span></p>
                    <p className="font-bold">Awards: <span className="font-normal">{movie.Awards}</span></p>
                    <div className="space-y-2 my-4">
                        {movie.Ratings && movie.Ratings.map((rating: Rating) => (
                            <div key={rating.Source} className="flex justify-between items-center border p-2 rounded">
                                <span className="font-bold">{rating.Source}</span>
                                <span className="font-normal">{rating.Value}</span>
                            </div>
                        ))}
                    </div>
                    {/* <p className="font-bold">IMDb Rating: <span className="font-normal">{movie.imdbRating}</span></p> */}
                    {/* <p className="font-bold">Metascore: <span className="font-normal">{movie.Metascore}</span></p> */}
                    <p className="font-bold">IMDb Votes: <span className="font-normal">{movie.imdbVotes}</span></p>
                    <p className="font-bold">Type: <span className="font-normal">{movie.Type}</span></p>

                    <p className="font-bold">DVD Release: <span className="font-normal">{movie.DVD}</span></p>
                    <p className="font-bold">Box Office: <span className="font-normal">{movie.BoxOffice}</span></p>
                    <p className="font-bold">Production: <span className="font-normal">{movie.Production}</span></p>
                    {(movie.Website && movie.Website !== "N/A") && <p className="font-bold">Website: <a href={movie.Website} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">{movie.Website}</a></p>}
                </div>
            </div>
        );
    }
    return <h1 className="text-2xl text-center my-4 bg-destructive text-destructive-foreground">{movie.Error}</h1>
}
