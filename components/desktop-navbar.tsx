"use client"
import Link from "next/link"
import { ChevronDown, Dumbbell, Home } from "lucide-react"

import MobileTopbar from "@/components/mobile-topbar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const floorMoves = [
    { title: "Roll Depan", href: "/menu/roll-depan" },
    { title: "Roll Belakang", href: "/menu/roll-belakang" },
    { title: "Meroda", href: "/menu/meroda" },
    { title: "Tiger Jump", href: "/menu/tiger-jump" },
    { title: "Handstand", href: "/menu/handstand" },
]

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-50 hidden h-16 w-full border-b border-border/70 bg-background/60 backdrop-blur md:block">
                <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 lg:px-6">
                    <Link href="/" className="inline-flex items-center gap-2 font-display text-xl text-primary">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/12">
                            <Dumbbell className="size-5" />
                        </div>
                        Senam Lantai
                    </Link>

                    <div className="flex items-center gap-2">
                        <Button asChild variant="ghost" className="font-medium">
                            <Link href="/">
                                <Home className="size-4" />
                                Beranda
                            </Link>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="font-medium">
                                    Menu Senam
                                    <ChevronDown className="size-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-52">
                                <DropdownMenuLabel>5 Gerakan Dasar</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                {floorMoves.map((move) => (
                                    <DropdownMenuItem key={move.href} asChild>
                                        <Link href={move.href}>{move.title}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>

            <MobileTopbar floorMoves={floorMoves} />
        </>
    )
}

export default Navbar