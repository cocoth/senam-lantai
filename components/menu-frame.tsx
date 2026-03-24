"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FloorMove } from "@/lib/floor-moves"
import { Card } from "./ui/card"
import Image from "next/image"

type MenuFrameProps = {
    moveSlug: string
    moveTitle: string
    moveDescription: string
    totalSteps?: number
    stepDurationMs?: number
    datas?: FloorMove
}

const SWIPE_THRESHOLD = 40

const MenuFrame = ({
    moveSlug,
    moveTitle,
    moveDescription,
    stepDurationMs = 1800,
    datas
}: MenuFrameProps) => {
    const [virtualStep, setVirtualStep] = useState(1)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState(0)
    const [isTrackTransitionEnabled, setIsTrackTransitionEnabled] = useState(true)

    const dragStartXRef = useRef<number | null>(null)
    const dragStartYRef = useRef<number | null>(null)

    const totalSteps = datas ? Object.keys(datas.step).length : 0
    console.log("totalSteps", totalSteps)

    const frames = useMemo(
        () =>
            Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1
                return {
                    id: step,
                    assetName: `${moveSlug}-${step}.png`,
                    stepTitle: `Langkah ${step}`,
                    stepDescription: `Placeholder asset vector 2D untuk ${moveTitle}, langkah ${step}.`,
                }
            }),
        [moveSlug, moveTitle, totalSteps]
    )

    const extendedFrames = useMemo(() => {
        if (frames.length === 0) {
            return []
        }

        const first = frames[0]
        const last = frames[frames.length - 1]

        return [last, ...frames, first]
    }, [frames])

    const currentStep = useMemo(() => {
        if (frames.length === 0) {
            return 0
        }

        return ((virtualStep - 1 + frames.length) % frames.length)
    }, [frames.length, virtualStep])

    const goToStep = (index: number) => {
        const safeIndex = (index + frames.length) % frames.length
        setIsTrackTransitionEnabled(true)
        setVirtualStep(safeIndex + 1)
    }

    const nextStep = () => {
        setIsTrackTransitionEnabled(true)
        setVirtualStep((prev) => prev + 1)
    }

    const prevStep = () => {
        setIsTrackTransitionEnabled(true)
        setVirtualStep((prev) => prev - 1)
    }

    useEffect(() => {
        setVirtualStep(1)
    }, [frames.length])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space") {
                event.preventDefault()
                setIsPlaying((prev) => !prev)
                return
            }

            if (event.code === "ArrowRight") {
                event.preventDefault()
                nextStep()
                setIsPlaying(false)
                return
            }

            if (event.code === "ArrowLeft") {
                event.preventDefault()
                prevStep()
                setIsPlaying(false)
                return
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [nextStep, prevStep])

    useEffect(() => {
        if (!isPlaying || isDragging) {
            return
        }

        const timer = window.setTimeout(() => {
            nextStep()
        }, stepDurationMs)

        return () => window.clearTimeout(timer)
    }, [currentStep, frames.length, isDragging, isPlaying, stepDurationMs, nextStep])

    const startDrag = (x: number, y: number) => {
        dragStartXRef.current = x
        dragStartYRef.current = y
        setIsDragging(true)
        setDragOffset(0)
    }

    const moveDrag = (x: number, y: number) => {
        if (dragStartXRef.current === null || dragStartYRef.current === null) {
            return false
        }

        const deltaX = x - dragStartXRef.current
        const deltaY = y - dragStartYRef.current

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            return false
        }

        setDragOffset(deltaX)
        return true
    }

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        startDrag(event.clientX, event.clientY)
    }

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        moveDrag(event.clientX, event.clientY)
    }

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0]
        if (!touch) {
            return
        }

        startDrag(touch.clientX, touch.clientY)
    }

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0]
        if (!touch) {
            return
        }

        const isHorizontal = moveDrag(touch.clientX, touch.clientY)
        if (isHorizontal) {
            event.preventDefault()
        }
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
        dragStartYRef.current = null
        setDragOffset(0)
        setIsDragging(false)
    }

    const activeFrame = frames[currentStep]

    const handleTrackTransitionEnd = () => {
        if (frames.length === 0) {
            return
        }

        if (virtualStep === 0) {
            setIsTrackTransitionEnabled(false)
            setVirtualStep(frames.length)
            return
        }

        if (virtualStep === frames.length + 1) {
            setIsTrackTransitionEnabled(false)
            setVirtualStep(1)
        }
    }

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
                    onPointerDown={(event) => event.stopPropagation()}
                    onTouchStart={(event) => event.stopPropagation()}
                    className="gap-2 min-w-24"
                >
                    {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                    {isPlaying ? "Pause" : "Play"}
                </Button>
            </div>

            <Card
                className="relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-primary/10 via-background to-background touch-pan-y select-none"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={finishDrag}
                onPointerCancel={finishDrag}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={finishDrag}
            >
                <div
                    className={cn(
                        "flex touch-pan-y ease-out",
                        isTrackTransitionEnabled && !isDragging
                            ? "transition-transform duration-300"
                            : "duration-0",
                        isDragging && "duration-0"
                    )}
                    style={{
                        width: `${extendedFrames.length * 100}%`,
                        transform: `translateX(calc(-${virtualStep * (100 / extendedFrames.length)}% + ${dragOffset}px))`,
                    }}
                    onTransitionEnd={handleTrackTransitionEnd}
                >
                    {extendedFrames.map((frame, index) => (
                        <div
                            key={`${frame.id}-${index}`}
                            className="grid min-h-80 place-items-center px-4"
                            style={{ width: `${100 / extendedFrames.length}%` }}
                        >
                            <div className="w-full max-w-md rounded-xl border border-dashed border-primary/45 bg-card/80 p-4 text-center shadow-sm">
                                <Image
                                    src={`/assets/${moveSlug}/${frame.assetName}`}
                                    alt={frame.assetName}
                                    width={500}
                                    height={500}
                                    className="object-cover md:size-1/2 md:mx-auto"
                                />
                                <h3 className="mt-1 font-display text-3xl text-primary">
                                    {frame.stepTitle}
                                </h3>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    {datas?.step[frame.id]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

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
                            />
                        )}
                        <span className="relative z-10">{frame.id}</span>
                    </button>
                ))}
            </div>

            {/* <div className="mt-4 rounded-lg border border-border bg-background p-4">
                <p className="mb-1 text-sm font-semibold text-foreground">{activeFrame.stepTitle}</p>
                <p className="text-sm text-muted-foreground">{activeFrame.stepDescription}</p>
                <p className="mt-3 text-sm text-muted-foreground">{moveDescription}</p>
            </div> */}
        </section>
    )
}

export default MenuFrame