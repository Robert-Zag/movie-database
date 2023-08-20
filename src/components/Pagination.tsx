"use client"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react"
import { AppDispatch, RootState } from "@/redux/store";
import { decrementPage, incrementPage, setSearchQuery } from "@/redux/features/search-slice";


export default function Pagination() {
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector((state: RootState) => state.search.page)
    return (
        <div className="mb-4 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" onClick={() => dispatch(decrementPage())}>
                <ArrowLeft className="h-[1.2rem] w-[1.2rem] transition-all" />
                <span className="sr-only">Previous page</span>
            </Button>
            Page {currentPage}
            <Button variant="outline" size="icon" onClick={() => dispatch(incrementPage())}>
                <ArrowRight className="h-[1.2rem] w-[1.2rem] transition-all" />
                <span className="sr-only">Next page</span>
            </Button>
        </div>
    );
}
