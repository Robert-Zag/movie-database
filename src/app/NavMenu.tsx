import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";
import { Star } from "lucide-react";
import Link from "next/link";

export default function NavMenu() {
    return (
        <header className="border-b border-muted-foreground">
            <nav className="gap-1 w-full max-w-content-width mx-auto px-2 sm:px-4 h-16 flex justify-between items-center">
                <Logo />
                <div className="flex gap-1 items-center">
                    <SearchBar />
                    <span className="sm:hidden">|</span>
                    <Button variant="ghost" asChild>
                        <Link href="/favorites">
                            <Star className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
                            <span className="ml-2 transition-all hidden sm:inline">Favorites</span>
                        </Link>
                    </Button>
                </div>
                <ModeToggle />
            </nav>
        </header>
    );
}
