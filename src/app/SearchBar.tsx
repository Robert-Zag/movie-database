"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FormEvent, ChangeEvent, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { searchWithPageChange, setPage, setSearchQuery, setSearchResults } from "@/redux/features/search-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const dispatch = useDispatch<AppDispatch>();
    const [searchInput, setSearchInput] = useState<string>("");
    const router = useRouter()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        dispatch(setSearchQuery(searchInput))
        dispatch(setPage(1))
        dispatch(searchWithPageChange(0))
        // const fetchData = async () => {
        //     const url = 'http://omdbapi.com/?' + new URLSearchParams({
        //         apikey: "19478d6e",
        //         s: searchInput,
        //         page: '1',
        //     })
        //     const response = await fetch(url);
        //     const data = await response.json()
        //     if (data.Search) {
        //         dispatch(setSearchResults(data.Search))
        //     } else {
        //         dispatch(setSearchResults([]))
        //     }
        // }
        // fetchData();
        router.push("/")
    }
    return (
        <Dialog>
            <Button variant="ghost" asChild>
                <DialogTrigger>
                    <Search className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
                    <span className="ml-2 transition-all hidden sm:inline">Search</span>
                </DialogTrigger>
            </Button>
            <DialogContent className="top-[17%]">
                <form onSubmit={(e) => handleSubmit(e)} className="flex items-center gap-4 mr-8">
                    <Input
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                    />
                    <DialogPrimitive.Close asChild>
                        <Button type="submit" variant="secondary">
                            <Search className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100" />
                        </Button>
                    </DialogPrimitive.Close>
                </form>
            </DialogContent>
        </Dialog>
    );
}
