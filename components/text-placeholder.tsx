interface TextPlaceholderProps {
  lines?: number
}

export function TextPlaceholder({ lines = 3 }: TextPlaceholderProps) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-muted rounded" style={{ width: i === lines - 1 ? "75%" : "100%" }} />
      ))}
    </div>
  )
}
