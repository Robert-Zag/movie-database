import FavoriteButton from "@/app/movie/[id]/FavoriteButton";
import { Movie } from "@/redux/features/SearchSlice";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <Link href={`/movie/${movie.imdbID}`}>
            <div className="h-[420px] flex flex-col items-center mb-4">
                <div className="relative">
                    <FavoriteButton movie={movie} className="absolute right-0.5 top-0.5" />
                    <Image
                        src={movie.Poster !== "N/A" ? movie.Poster : ""}
                        alt={`Poster for ${movie.Title}`}
                        width={200}
                        height={300}
                        className="rounded-lg border border-primary"
                    />
                </div>
                <h2 className="mt-2 text-center text-lg font-semibold">{movie.Title}</h2>
                <p className="text-sm text-muted-foreground">{movie.Year}</p>
                <span className="text-xs mt-1  px-2 py-1">{movie.Type}</span>
            </div>
        </Link>
    );
}
