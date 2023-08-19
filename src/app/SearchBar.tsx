"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FormEvent, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function SearchBar() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
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
                    <Input placeholder="Search" />
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
