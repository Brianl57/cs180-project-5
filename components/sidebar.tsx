"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavSection {
  id: string
  title: string
  children?: { id: string; title: string; children?: { id: string; title: string }[] }[]
}

const navigation: NavSection[] = [
  {
    id: "part-0",
    title: "Part 0: Setup",
    // children: [], // Removed as per request
  },
  {
    id: "part-1",
    title: "Part 1: Sampling Loops",
    children: [
      { id: "forward-process", title: "1.1 Forward Process" },
      { id: "classical-denoising", title: "1.2 Classical Denoising" },
      { id: "one-step-denoising", title: "1.3 One-Step Denoising" },
      { id: "iterative-denoising", title: "1.4 Iterative Denoising" },
      { id: "diffusion-model-sampling", title: "1.5 Diffusion Model Sampling" },
      { id: "cfg", title: "1.6 Classifier-Free Guidance (CFG)" },
      {
        id: "image-to-image",
        title: "1.7 Image-to-Image Translation",
        children: [
          { id: "editing-hand-drawn-web", title: "1.7.1 Editing Hand-Drawn and Web Images" },
          { id: "inpainting", title: "1.7.2 Inpainting" },
          { id: "text-conditional", title: "1.7.3 Text-Conditional Image-to-Image" },
        ],
      },
      { id: "visual-anagrams", title: "1.8 Visual Anagrams" },
      { id: "hybrid-images", title: "1.9 Hybrid Images" },
    ],
  },
]

type NavChild = NonNullable<NavSection["children"]>[number]

function NavItem({
  item,
  depth = 0,
}: {
  item: NavChild
  depth?: number
}) {
  const hasChildren = item.children && item.children.length > 0
  // For 1.7, we want to show children but not have toggle functionality
  // The user requested: "Remove the drop down arrow functionaility... and just have it be linked"
  // This implies we should always show children if they exist, and the parent should be a link.
  const isExpanded = true

  return (
    <div>
      <a
        href={`#${item.id}`}
        className={cn(
          "flex items-center gap-1 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors",
          depth > 0 && "pl-4",
        )}
      >
        {/* Removed arrow rendering logic as requested for 1.7 */}
        <span className={cn("pl-4")}>{item.title}</span>
      </a>
      {hasChildren && isExpanded && (
        <div className="ml-2">
          {item.children?.map((child: { id: string; title: string }) => (
            <a
              key={child.id}
              href={`#${child.id}`}
              className="block py-1 pl-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {child.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "part-0": true,
    "part-1": true,
  })

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <aside className="w-64 shrink-0 border-r border-border bg-background sticky top-0 h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Table of Contents</h2>
        <nav className="space-y-2">
          {navigation.map((section) => (
            <div key={section.id}>
              {section.children ? (
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center gap-1 w-full text-left py-1 font-medium text-sm hover:text-foreground transition-colors"
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    {openSections[section.id] ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                  </span>
                  {section.title}
                </button>
              ) : (
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-1 w-full text-left py-1 font-medium text-sm hover:text-foreground transition-colors pl-5"
                >
                  {section.title}
                </a>
              )}

              {openSections[section.id] && section.children && (
                <div className="ml-2 mt-1 space-y-0.5">
                  {section.children.map((child) => (
                    <NavItem key={child.id} item={child} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
