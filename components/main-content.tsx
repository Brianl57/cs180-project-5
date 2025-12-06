import { ImagePlaceholder } from "@/components/image-placeholder"
import { TextPlaceholder } from "@/components/text-placeholder"

export function MainContent() {
  return (
    <main className="flex-1 py-12 px-8 lg:px-16 max-w-4xl">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Fun With Diffusion Models!</h1>
        <div className="text-sm text-muted-foreground mb-6">
          <p>
            <span className="font-medium text-foreground">Author:</span> Brian Le
          </p>
          <p>
            <span className="font-medium text-foreground">Published:</span> December 5, 2025
          </p>
        </div>
        <TextPlaceholder lines={3} />
      </header>

      {/* Part 0: Setup */}
      <section id="part-0" className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Part 0: Setup</h2>

        <div id="gaining-access" className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Gaining Access to DeepFloyd</h3>
          <TextPlaceholder lines={2} />
        </div>

        <div id="play-with-model" className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Play with the Model</h3>
          <TextPlaceholder lines={2} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ImagePlaceholder label="Sample Output 1" />
            <ImagePlaceholder label="Sample Output 2" />
          </div>
        </div>

        <div id="deliverables-0" className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Deliverables</h3>
          <TextPlaceholder lines={2} />
        </div>
      </section>

      {/* Part 1: Sampling Loops */}
      <section id="part-1" className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Part 1: Sampling Loops</h2>

        <div id="forward-process" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.1 Forward Process</h3>
          <TextPlaceholder lines={3} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <ImagePlaceholder label="t = 250" />
            <ImagePlaceholder label="t = 500" />
            <ImagePlaceholder label="t = 750" />
          </div>
        </div>

        <div id="classical-denoising" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.2 Classical Denoising</h3>
          <TextPlaceholder lines={2} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ImagePlaceholder label="Noisy Image" />
            <ImagePlaceholder label="Gaussian Blur Result" />
          </div>
        </div>

        <div id="one-step-denoising" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.3 One-Step Denoising</h3>
          <TextPlaceholder lines={2} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <ImagePlaceholder label="t = 250" />
            <ImagePlaceholder label="t = 500" />
            <ImagePlaceholder label="t = 750" />
          </div>
        </div>

        <div id="iterative-denoising" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.4 Iterative Denoising</h3>
          <TextPlaceholder lines={3} />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            <ImagePlaceholder label="Step 1" />
            <ImagePlaceholder label="Step 2" />
            <ImagePlaceholder label="Step 3" />
            <ImagePlaceholder label="Step 4" />
            <ImagePlaceholder label="Final" />
          </div>
        </div>

        <div id="diffusion-model-sampling" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.5 Diffusion Model Sampling</h3>
          <TextPlaceholder lines={2} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <ImagePlaceholder label="Sample 1" />
            <ImagePlaceholder label="Sample 2" />
            <ImagePlaceholder label="Sample 3" />
          </div>
        </div>

        <div id="cfg" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.6 Classifier-Free Guidance (CFG)</h3>
          <TextPlaceholder lines={3} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <ImagePlaceholder label="CFG Scale = 1" />
            <ImagePlaceholder label="CFG Scale = 5" />
            <ImagePlaceholder label="CFG Scale = 10" />
          </div>
        </div>

        <div id="image-to-image" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.7 Image-to-Image Translation</h3>
          <TextPlaceholder lines={2} />

          <div id="sdedit" className="mt-6 mb-6">
            <h4 className="text-base font-medium mb-2">SDEdit Results</h4>
            <TextPlaceholder lines={2} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <ImagePlaceholder label="Original" />
              <ImagePlaceholder label="i_start = 1" />
              <ImagePlaceholder label="i_start = 3" />
              <ImagePlaceholder label="i_start = 5" />
            </div>
          </div>

          <div id="editing-web" className="mb-6">
            <h4 className="text-base font-medium mb-2">Editing Web Images</h4>
            <TextPlaceholder lines={2} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ImagePlaceholder label="Original Web Image" />
              <ImagePlaceholder label="Edited Result" />
            </div>
          </div>

          <div id="editing-hand-drawn" className="mb-6">
            <h4 className="text-base font-medium mb-2">Editing Hand-Drawn Images</h4>
            <TextPlaceholder lines={2} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <ImagePlaceholder label="Hand-Drawn Input" />
              <ImagePlaceholder label="Generated Output" />
            </div>
          </div>

          <div id="inpainting" className="mb-6">
            <h4 className="text-base font-medium mb-2">Inpainting</h4>
            <TextPlaceholder lines={2} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <ImagePlaceholder label="Original" />
              <ImagePlaceholder label="Mask" />
              <ImagePlaceholder label="Inpainted Result" />
            </div>
          </div>
        </div>

        <div id="text-conditional" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.7.3 Text-Conditional Image-to-Image Translation</h3>
          <TextPlaceholder lines={2} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ImagePlaceholder label="Input Image" />
            <ImagePlaceholder label="Text-Conditioned Output" />
          </div>
        </div>

        <div id="visual-anagrams" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.8 Visual Anagrams</h3>
          <TextPlaceholder lines={3} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ImagePlaceholder label="View 1" />
            <ImagePlaceholder label="View 2 (Flipped)" />
          </div>
        </div>

        <div id="hybrid-images" className="mb-10">
          <h3 className="text-lg font-semibold mb-3">1.9 Hybrid Images</h3>
          <TextPlaceholder lines={3} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <ImagePlaceholder label="Low Frequency" />
            <ImagePlaceholder label="High Frequency" />
            <ImagePlaceholder label="Hybrid Result" />
          </div>
        </div>
      </section>
    </main>
  )
}
