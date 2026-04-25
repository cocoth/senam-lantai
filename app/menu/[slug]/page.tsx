import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { floorMoveMap, floorMoves, type FloorMove } from "@/lib/floor-moves"
import MenuFrame from "@/components/menu-frame"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return floorMoves.map((move) => ({ slug: move.slug }))
}

const getMove = (slug: string): FloorMove | null => {
  if (!(slug in floorMoveMap)) {
    return null
  }

  return floorMoveMap[slug as FloorMove["slug"]]
}

export default async function FloorMovePage({ params }: PageProps) {
  const { slug } = await params
  const move = getMove(slug)

  if (!move) {
    notFound()
  }

  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-120 bg-[radial-gradient(circle_at_top,oklch(0.73_0.14_255/.25),transparent_60%)]" />

      <section className="mx-auto w-full max-w-6xl px-4 py-4 lg:px-6">
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Kembali ke Beranda
        </Link>

        <MenuFrame
          moveSlug={move.slug}
          moveTitle={move.title}
          moveDescription={move.description}
          stepDurationMs={5 * 1000} // 40 detik per langkah
          datas={move}
        />
      </section>
    </main>
  )
}
