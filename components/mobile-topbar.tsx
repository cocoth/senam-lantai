"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Dumbbell, Home, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

type FloorMove = {
    title: string
    href: string
}

interface MobileTopbarProps {
    floorMoves: FloorMove[]
}

const MobileTopbar = ({ floorMoves }: MobileTopbarProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const closeMenu = () => setIsOpen(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div ref={menuRef} className="fixed w-full top-0 z-50 border-b border-border/70 bg-background/20 backdrop-blur md:hidden">
            <div className="mx-auto flex h-14 w-full items-center justify-between px-4">
                <Link
                    href="/"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-2 font-display text-lg text-primary"
                >
                    <Dumbbell className="size-5" />
                    Senam Lantai
                </Link>

                <Button
                    size="icon"
                    variant="outline"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                </Button>
            </div>

            {isOpen && (
                <div className="space-y-3 border-t border-border/70 px-4 py-4 bg-background/30 backdrop-blur-md">
                    <Button asChild variant="secondary" className="w-full justify-start">
                        <Link href="/" onClick={closeMenu}>
                            <Home className="size-4" />
                            Beranda
                        </Link>
                    </Button>

                    <div className="rounded-lg border border-border bg-transparent p-2">
                        <p className="px-2 pb-2 pt-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                            Menu Senam Lantai
                        </p>
                        <ul className="space-y-1">
                            {floorMoves.map((move) => (
                                <li key={move.href}>
                                    <Button
                                        asChild
                                        variant="ghost"
                                        className="w-full justify-start hover:bg-primary/20"
                                    >
                                        <Link href={move.href} onClick={closeMenu}>
                                            {move.title}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MobileTopbar