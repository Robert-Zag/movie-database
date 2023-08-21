import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex gap-1 items-center text-xl font-bold">
                <div>
                    Movie
                </div>
                <div className="bg-logo p-2 rounded-lg text-background">
                    Database
                </div>
            </div>
        </Link>
    );
}
