interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: "square" | "video" | "wide"
}

export function ImagePlaceholder({ label, aspectRatio = "square" }: ImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[2/1]",
  }

  return (
    <div className="flex flex-col">
      <div
        className={`${aspectClasses[aspectRatio]} bg-muted border border-border rounded-md flex items-center justify-center`}
      >
        <div className="text-muted-foreground text-sm">Image Placeholder</div>
      </div>
      {label && <p className="text-xs text-muted-foreground text-center mt-2 uppercase tracking-wide">{label}</p>}
    </div>
  )
}
