"use client"

import { useMemo, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type MenuFrameProps = {
    moveSlug: string
    moveTitle: string
    moveDescription: string
    totalSteps?: number
    stepDurationMs?: number
}

const SWIPE_THRESHOLD = 40

const MenuFrame = ({
    moveSlug,
    moveTitle,
    moveDescription,
    totalSteps = 8,
    stepDurationMs = 1800,
}: MenuFrameProps) => {
    const [currentStep, setCurrentStep] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)

    const dragStartXRef = useRef<number | null>(null)

    const frames = useMemo(
        () =>
            Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1
                return {
                    id: step,
                    assetName: `${moveSlug}-${step}`,
                    stepTitle: `Langkah ${step}`,
                    stepDescription: `Placeholder asset vector 2D untuk ${moveTitle}, langkah ${step}.`,
                }
            }),
        [moveSlug, moveTitle, totalSteps]
    )

    const goToStep = (index: number) => {
        const safeIndex = (index + frames.length) % frames.length
        setCurrentStep(safeIndex)
    }

    const nextStep = () => goToStep(currentStep + 1)
    const prevStep = () => goToStep(currentStep - 1)

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        dragStartXRef.current = event.clientX
        setIsDragging(true)
        setDragOffset(0)
    }

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (dragStartXRef.current === null) {
            return
        }

        setDragOffset(event.clientX - dragStartXRef.current)
    }

    const finishDrag = () => {
        if (dragStartXRef.current === null) {
            return
        }

        if (dragOffset > SWIPE_THRESHOLD) {
            prevStep()
        } else if (dragOffset < -SWIPE_THRESHOLD) {
            nextStep()
        }

        dragStartXRef.current = null
        setDragOffset(0)
        setIsDragging(false)
    }

    const activeFrame = frames[currentStep]

    return (
        <section className="rounded-2xl border border-border/80 bg-card p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-sm text-muted-foreground">Tutorial Visual</p>
                    <h2 className="font-display text-3xl text-primary">{moveTitle}</h2>
                </div>

                <Button
                    type="button"
                    variant={isPlaying ? "outline" : "default"}
                    onClick={() => setIsPlaying((prev) => !prev)}
                    className="gap-2"
                >
                    {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                    {isPlaying ? "Pause" : "Play"}
                </Button>
            </div>

            <div
                className="relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-primary/10 via-background to-background"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={finishDrag}
                onPointerCancel={finishDrag}
            >
                <div
                    className={cn(
                        "flex touch-pan-y transition-transform duration-300 ease-out",
                        isDragging && "duration-0"
                    )}
                    style={{
                        width: `${frames.length * 100}%`,
                        transform: `translateX(calc(-${currentStep * (100 / frames.length)}% + ${dragOffset}px))`,
                    }}
                >
                    {frames.map((frame) => (
                        <article
                            key={frame.id}
                            className="grid min-h-80 place-items-center p-6"
                            style={{ width: `${100 / frames.length}%` }}
                        >
                            <div className="w-full max-w-md rounded-xl border border-dashed border-primary/45 bg-card/80 p-8 text-center shadow-sm">
                                <p className="text-sm font-medium text-muted-foreground">Placeholder Frame</p>
                                <h3 className="mt-1 font-display text-3xl text-primary">{frame.assetName}</h3>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Nanti ganti dengan file vector final untuk langkah ini.
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {frames.map((frame, index) => (
                    <button
                        key={frame.id}
                        type="button"
                        onClick={() => goToStep(index)}
                        className={cn(
                            "group relative flex  items-center justify-center h-3 min-w-10 overflow-hidden rounded-full border px-3 text-xs font-medium transition",
                            currentStep === index
                                ? "border-primary text-primary"
                                : "border-border text-muted-foreground hover:border-primary/50"
                        )}
                        aria-label={`Pilih langkah ${frame.id}`}
                    >
                        {currentStep === index && isPlaying && (
                            <span
                                className="absolute inset-0 bg-primary/15"
                                style={{
                                    animationName: "pillProgress",
                                    animationDuration: `${stepDurationMs}ms`,
                                    animationTimingFunction: "linear",
                                    animationIterationCount: 1,
                                }}
                                onAnimationEnd={nextStep}
                            />
                        )}
                        <span className="relative z-10">{frame.id}</span>
                    </button>
                ))}
            </div>

            <div className="mt-4 rounded-lg border border-border bg-background p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">{activeFrame.stepTitle}</p>
                <p className="text-sm text-muted-foreground">{activeFrame.stepDescription}</p>
                <p className="mt-3 text-sm text-muted-foreground">{moveDescription}</p>
            </div>
        </section>
    )
}

export default MenuFrame