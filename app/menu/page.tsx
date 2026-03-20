import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { floorMoves } from "@/lib/floor-moves"

export default function MenuPage() {
    return (
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-5 lg:px-6">
            <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
            >
                <ArrowLeft className="size-4" />
                Kembali ke Beranda
            </Link>

            <header className="mb-6">
                <h1 className="font-display text-4xl text-foreground">Menu Senam Lantai</h1>
                <p className="mt-2 text-muted-foreground">
                    Pilih satu gerakan untuk melihat tutorial 8 langkah dan skeleton animasinya.
                </p>
            </header>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {floorMoves.map((move) => (
                    <Link key={move.slug} href={`/menu/${move.slug}`} className="block">
                        <Card className="h-full border-border/80 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-primary">{move.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-2 text-sm font-medium text-foreground">{move.level}</p>
                                <p className="text-sm text-muted-foreground">{move.shortBenefit}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </section>
        </main>
    )
}
