import Link from "next/link"
import { ArrowRight, Flame, ShieldCheck, Sparkles } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const floorMoves = [
  {
    id: "roll-depan",
    href: "/menu/roll-depan",
    title: "Roll Depan",
    level: "Pemula",
    benefit: "Melatih keberanian, koordinasi, dan kontrol tubuh saat berguling ke depan.",
  },
  {
    id: "roll-belakang",
    href: "/menu/roll-belakang",
    title: "Roll Belakang",
    level: "Pemula - Menengah",
    benefit:
      "Menguatkan otot inti dan meningkatkan orientasi tubuh saat bergerak mundur.",
  },
  {
    id: "meroda",
    href: "/menu/meroda",
    title: "Meroda",
    level: "Menengah",
    benefit: "Membangun kelincahan, keseimbangan sisi kanan-kiri, dan ritme gerak.",
  },
  {
    id: "tiger-jump",
    href: "/menu/tiger-jump",
    title: "Tiger Jump",
    level: "Menengah - Lanjut",
    benefit:
      "Mengasah power lompatan, koordinasi tangan-kaki, dan pendaratan yang aman.",
  },
  {
    id: "handstand",
    href: "/menu/handstand",
    title: "Handstand",
    level: "Lanjut",
    benefit: "Meningkatkan kekuatan bahu, core stability, dan kontrol keseimbangan statis.",
  },
]

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(circle_at_top,oklch(0.74_0.15_255/.35),transparent_60%)]" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-14 pt-12 lg:px-6 lg:pt-16">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Sparkles className="size-4" />
          Program Dasar Senam Lantai
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <h1 className="max-w-2xl font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Bangun dasar tubuh atletis lewat 5 gerakan senam lantai.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              Mulai dari roll depan hingga handstand dengan progres yang aman,
              terstruktur, dan mudah dipahami untuk pemula sampai menengah.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#program"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Lihat Program
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/menu/handstand"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 font-medium transition hover:bg-muted"
              >
                Target Akhir: Handstand
              </Link>
            </div>
          </div>

          <Card className="border-primary/15 bg-linear-to-br from-primary/15 via-card to-card">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Fokus Latihan</CardTitle>
              <CardDescription>
                Program ini menekankan teknik bersih sebelum menambah kecepatan.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 p-3">
                <ShieldCheck className="mt-0.5 size-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Pemanasan dan progres aman untuk mencegah cedera dasar.
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 p-3">
                <Flame className="mt-0.5 size-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Kombinasi mobilitas, kekuatan inti, dan kontrol gerak.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="program" className="mx-auto w-full max-w-6xl px-4 pb-20 lg:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl">Menu Senam Lantai</h2>
          <p className="text-sm text-muted-foreground">5 Gerakan Utama</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {floorMoves.map((move) => (
            <Link key={move.id} href={move.href} className="block">
              <Card className="border-border/80 bg-card/95 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-display text-2xl text-primary">
                    {move.title}
                  </CardTitle>
                  <CardDescription>{move.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {move.benefit}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
