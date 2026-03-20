"use client"

import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

type TutorialLoopSkeletonProps = {
  moveSlug: string
  moveTitle: string
  totalSteps?: number
  intervalMs?: number
}

const padStep = (step: number) => String(step).padStart(2, "0")

const TutorialLoopSkeleton = ({
  moveSlug,
  moveTitle,
  totalSteps = 8,
  intervalMs = 900,
}: TutorialLoopSkeletonProps) => {
  const [activeStep, setActiveStep] = useState(1)

  const frames = useMemo(
    () =>
      Array.from({ length: totalSteps }, (_, index) => {
        const step = index + 1
        return {
          step,
          assetName: `${moveSlug}-${step}`,
        }
      }),
    [moveSlug, totalSteps]
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev >= totalSteps ? 1 : prev + 1))
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [intervalMs, totalSteps])

  return (
    <section className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl text-primary">Animasi Tutorial (Skeleton)</h3>
          <p className="text-sm text-muted-foreground">
            Placeholder untuk asset vector 2D, loop dari langkah 1 sampai 8.
          </p>
        </div>
        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Step {padStep(activeStep)} / {padStep(totalSteps)}
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-primary/10 via-background to-background p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.74_0.15_255/.18),transparent_55%)]" />
          <div className="relative grid min-h-72 place-items-center rounded-lg border border-dashed border-primary/40 bg-background/75">
            <div className="text-center">
              <p className="mb-1 font-display text-2xl text-primary">{moveTitle}</p>
              <p className="mb-4 text-sm text-muted-foreground">Frame aktif</p>
              <div className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium">
                {moveSlug}-{activeStep}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Nanti ganti dengan vector: <code>{moveSlug}-1</code> sampai <code>{moveSlug}-8</code>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-background p-3">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Urutan Frame</p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            {frames.map((frame) => (
              <li
                key={frame.step}
                className={cn(
                  "rounded-md border px-2 py-2 text-center text-xs transition",
                  frame.step === activeStep
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border bg-card text-muted-foreground"
                )}
              >
                {frame.assetName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TutorialLoopSkeleton
