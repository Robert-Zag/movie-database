import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <div className="animate-all flex gap-1 items-center text-xl font-bold">
                <div>
                    Movie
                </div>
                <div className="animate-all bg-logo p-2 rounded-lg text-white dark:text-gray-900">
                    Database
                </div>
            </div>
        </Link>
    );
}
