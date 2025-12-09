"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavSection {
  id: string
  title: string
  children?: NavSection[]
}

const navigation: NavSection[] = [
  {
    id: "part-a",
    title: "Part A: The Power of Diffusion Models!",
    children: [
      {
        id: "part-0",
        title: "Part 0: Setup",
        // children: [], 
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
    ],
  },
  {
    id: "part-b",
    title: "Part B: Flow Matching from Scratch!",
    children: [
      {
        id: "part-b-1",
        title: "Part 1: Training a Single-Step Denoising UNet",
        children: [
          { id: "implementing-unet", title: "1.1 Implementing the UNet" },
          {
            id: "training-denoiser",
            title: "1.2 Using the UNet to Train a Denoiser",
            children: [
              { id: "training-denoiser-1", title: "1.2.1 Training" },
              { id: "training-denoiser-2", title: "1.2.2 Out-of-Distribution Testing" },
              { id: "training-denoiser-3", title: "1.2.3 Denoising Pure Noise" },
            ],
          },
        ],
      },
    ],
  },
]

function NavItem({
  item,
  depth = 0,
}: {
  item: NavSection
  depth?: number
}) {
  const hasChildren = item.children && item.children.length > 0
  const isExpanded = true

  return (
    <div>
      <a
        href={`#${item.id}`}
        className={cn(
          "flex items-center gap-1 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors",
          depth > 0 && "pl-4",
          // Add extra padding/style for what effectively become Section Headers (Part 0, Part 1)
          depth === 0 && "font-medium text-foreground mt-2 mb-1"
        )}
      >
        <span className={cn("pl-4")}>{item.title}</span>
      </a>
      {hasChildren && isExpanded && (
        <div className="ml-2">
          {item.children?.map((child) => (
            <NavItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "part-a": true,
    "part-0": true,
    "part-1": true,
    "part-b": true,
    "part-b-1": true,
    "training-denoiser": true,
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
