"use client"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react"
import { AppDispatch, RootState } from "@/redux/store";
import { searchWithPageChange } from "@/redux/features/search-slice";


export default function Pagination() {
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector((state: RootState) => state.search.page)
    const subsequentPageResults = useSelector((state: RootState) => state.search.subsequentPageSearchResults)
    return (
        <div className="mb-4 flex items-center justify-center gap-2">
            {currentPage > 1 &&
                <Button variant="outline" size="icon" onClick={() => dispatch(searchWithPageChange(-1))}>
                    <ArrowLeft className="h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">Previous page</span>
                </Button>
            }
            Page {currentPage}
            {subsequentPageResults.length > 0 &&
                <Button variant="outline" size="icon" onClick={() => dispatch(searchWithPageChange(1))}>
                    <ArrowRight className="h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">Next page</span>
                </Button>
            }
        </div>
    );
}
