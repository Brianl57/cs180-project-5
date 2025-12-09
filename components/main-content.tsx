import { ImagePlaceholder } from "@/components/image-placeholder"
import { TextPlaceholder } from "@/components/text-placeholder"

export function MainContent() {
  return (
    <main className="flex-1 py-12 px-8 lg:px-16 max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Fun With Diffusion Models!</h1>
        <div className="text-sm text-muted-foreground mb-6">
          <p>
            <span className="font-medium text-foreground">Author:</span> Brian Le
          </p>
          <p>
            <span className="font-medium text-foreground">Published:</span> December 5, 2025
          </p>
        </div>
      </header>

      {/* Part A Container */}
      <section id="part-a" className="mb-20 border-b pb-12">
        <h1 className="text-3xl font-extrabold mb-10 text-primary">A.) Part A: The Power of Diffusion Models!</h1>

        {/* Part 0: Setup */}
        <section id="part-0" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Part 0: Setup</h2>
          <p className="mb-8 text-muted-foreground">
            This project explores diffusion models end-to-end: generating prompt embeddings, implementing the forward
            noising process, classical and learned denoising, iterative sampling, classifier-free guidance, image-to-image
            translation, inpainting, visual anagrams, and hybrid images. Each component was implemented and tested in
            Colab using the DeepFloyd IF model. All experiments and results were produced using a fixed random seed (seed
            = 100) for consistent reproducibility.
          </p>

          <p className="mb-8 text-muted-foreground">
            I created a diverse set of text prompts spanning photos, paintings, lithographs, and simple objects,
            then generated their corresponding prompt embeddings using the provided Hugging Face service. From this list,
            I selected three prompts—“an oil painting of a snowy mountain village,” “a photo of a dog,” and “a lithograph
            of waterfalls”—to explore how the diffusion model responds to different artistic styles and content types.
          </p>

          <p className="mb-8 text-muted-foreground">
            The output quality strongly depended on the number of inference steps. At 5 steps, the model produced very coarse,
            grainy images with weak structure; in several cases—especially for the dog and waterfall prompts—the results were
            barely recognizable and did not clearly communicate the intended subject. Increasing to 20 steps significantly
            improved realism and prompt alignment, producing images with coherent shapes, textures, and lighting. At 50 steps,
            the model generated the most refined outputs, with sharper edges, more natural color transitions, and details that
            better matched each prompt. Both 20- and 50-step settings produced images that were clearly faithful to their
            corresponding prompts, though 50 steps consistently yielded more polished, high-quality results.
          </p>

          <div id="results" className="mb-8">


            {/* Prompt 1 */}
            <div className="mb-8">
              <h4 className="text-base font-medium mb-3">Prompt 1: an oil painting of a snowy mountain village</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/snowy-mountain-5.png"
                    alt="Snowy Mountain Step 5"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 5</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/snowy-mountain-20.png"
                    alt="Snowy Mountain Step 20"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 20</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/snowy-mountain-50.png"
                    alt="Snowy Mountain Step 50"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 50</p>
                </div>
              </div>
            </div>

            {/* Prompt 2 */}
            <div className="mb-8">
              <h4 className="text-base font-medium mb-3">Prompt 2: a photo of a dog</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/dog-5.png"
                    alt="Dog Step 5"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 5</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/dog-20.png"
                    alt="Dog Step 20"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 20</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/dog-50.png"
                    alt="Dog Step 50"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 50</p>
                </div>
              </div>
            </div>

            {/* Prompt 3 */}
            <div className="mb-8">
              <h4 className="text-base font-medium mb-3">Prompt 3: a lithograph of waterfalls</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/waterfall-5.png"
                    alt="Waterfall Step 5"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 5</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/waterfall-20.png"
                    alt="Waterfall Step 20"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 20</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_0/waterfall-50.png"
                    alt="Waterfall Step 50"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Inference Step: 50</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 1: Sampling Loops */}
        <section id="part-1" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Part 1: Sampling Loops</h2>

          <div id="forward-process" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.1 Forward Process</h3>
            <p className="mb-4 text-muted-foreground">
              I implemented the forward process function to add Gaussian noise to an image at a specific timestep t.
            </p>
            <div className="bg-muted p-4 rounded-md overflow-x-auto mb-4">
              <pre className="text-sm font-mono">
                {`def forward(im, t):
  with torch.no_grad():
    alpha_bar = alphas_cumprod[t].to(device=im.device, dtype=im.dtype)

    sqrt_alpha_bar = torch.sqrt(alpha_bar).reshape(1, 1, 1, 1)
    sqrt_one_minus_alpha_bar = torch.sqrt(1 - alpha_bar).reshape(1, 1, 1, 1)

    eps = torch.randn_like(im)
    im_noisy = sqrt_alpha_bar * im + sqrt_one_minus_alpha_bar * eps

  return im_noisy`}
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/campanile-original.png"
                  alt="Berkeley Campanile"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Berkeley Campanile</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_1/campanile_noisy_250.png"
                  alt="t=250"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">t=250</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_1/campanile_noisy_500.png"
                  alt="t=500"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">t=500</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_1/campanile_noisy_750.png"
                  alt="t=750"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">t=750</p>
              </div>
            </div>
          </div>

          <div id="classical-denoising" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.2 Classical Denoising</h3>
            <p className="mb-4 text-muted-foreground">
              I attempted to remove the noise from the noisy images generated in the previous step using classical Gaussian
              blurring with a kernel size of 5 and sigma of 1.0.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {/* Row 1: Noisy Images */}
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_1/campanile_noisy_250.png"
                  alt="Noisy t=250"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Noisy t=250</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_1/campanile_noisy_500.png"
                  alt="Noisy t=500"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Noisy t=500</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_1/campanile_noisy_750.png"
                  alt="Noisy t=750"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Noisy t=750</p>
              </div>

              {/* Row 2: Gaussian Denoised Images */}
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_2/campanile-gbur-250.png"
                  alt="Gaussian Denoised t=250"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Gaussian Denoised t=250</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_2/campanile-gbur-500.png"
                  alt="Gaussian Denoised t=500"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Gaussian Denoised t=500</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_2/campanile-gbur-750.png"
                  alt="Gaussian Denoised t=750"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Gaussian Denoised t=750</p>
              </div>
            </div>
          </div>

          <div id="one-step-denoising" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.3 One-Step Denoising</h3>
            <p className="mb-4 text-muted-foreground">
              Using the pre-trained diffusion model (UNet), I estimated the noise added to the image and then subtracted it
              to recover the original image estimate (x0) from the noisy image (xt).
            </p>

            {/* t = 250 */}
            <div className="mb-6">
              <h4 className="text-base font-medium mb-3">t = 250</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/campanile-original.png"
                    alt="Original"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Original</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_1/campanile_noisy_250.png"
                    alt="Noisy t=250"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy t=250</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_3/campanile-denoised-250.png"
                    alt="One-step Denoised t=250"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">One-step Denoised t=250</p>
                </div>
              </div>
            </div>

            {/* t = 500 */}
            <div className="mb-6">
              <h4 className="text-base font-medium mb-3">t = 500</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/campanile-original.png"
                    alt="Original"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Original</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_1/campanile_noisy_500.png"
                    alt="Noisy t=500"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy t=500</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_3/campanile-denoised-500.png"
                    alt="One-step Denoised t=500"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">One-step Denoised t=500</p>
                </div>
              </div>
            </div>

            {/* t = 750 */}
            <div className="mb-6">
              <h4 className="text-base font-medium mb-3">t = 750</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/campanile-original.png"
                    alt="Original"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Original</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_1/campanile_noisy_750.png"
                    alt="Noisy t=750"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy t=750</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_3/campanile-denoised-750.png"
                    alt="One-step Denoised t=750"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">One-step Denoised t=750</p>
                </div>
              </div>
            </div>
          </div>

          <div id="iterative-denoising" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.4 Iterative Denoising</h3>
            <p className="mb-4 text-muted-foreground">
              I implemented iterative denoising by starting with a noisy image and progressively removing noise over a
              series of timesteps, using the diffusion model to estimate the noise at each step.
            </p>

            {/* Row 1 */}
            <div className="mb-6">
              <h4 className="text-base font-medium mb-3">Every 5th iteration of the denoising loop</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_60.png"
                    alt="Noisy at t=90"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy at t=90</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_210.png"
                    alt="Noisy at t=240"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy at t=240</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_360.png"
                    alt="Noisy a t=390"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy a t=390</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_510.png"
                    alt="Noisy a t=540"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy a t=540</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_660.png"
                    alt="Noisy a t=690"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy a t=690</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="mb-6">
              <h4 className="text-base font-medium mb-3">Final outputs for each denoise method</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/campanile-original.png"
                    alt="Original"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Original</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_660.png"
                    alt="Noisy a t=690"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Noisy a t=690</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_iterative_denoise.png"
                    alt="Iteratively Denoised"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Iteratively Denoised</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_one_step_denoised.png"
                    alt="One-step Denoised"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">One-step Denoised</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/part_1_4/campanile_blur_one_step.png"
                    alt="Gaussian Blur Denoised"
                    className="rounded-md w-full h-auto"
                  />
                  <p className="text-sm text-muted-foreground text-center">Gaussian Blur Denoised</p>
                </div>
              </div>
            </div>
          </div>

          <div id="diffusion-model-sampling" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.5 Diffusion Model Sampling</h3>
            <p className="mb-4 text-muted-foreground">
              I generated 5 samples of high-quality images from scratch by starting with pure Gaussian noise and iteratively
              denoising it using the diffusion model.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_5/sample_1.png"
                  alt="Sample 1"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 1</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_5/sample_2.png"
                  alt="Sample 2"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 2</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_5/sample_3.png"
                  alt="Sample 3"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 3</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_5/sample_4.png"
                  alt="Sample 4"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 4</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_5/sample_5.png"
                  alt="Sample 5"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 5</p>
              </div>
            </div>
          </div>

          <div id="cfg" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.6 Classifier-Free Guidance (CFG)</h3>
            <p className="mb-4 text-muted-foreground">
              I used Classifier-Free Guidance (CFG) with a guidance scale of γ = 7 for the prompt "a high quality photo".
              I observed that using CFG produced much higher quality images compared to unguided generation, with sharper
              details and better adherence to the prompt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_6/cfg_sample_0.png"
                  alt="Sample 1"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 1</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_6/cfg_sample_1.png"
                  alt="Sample 2"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 2</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_6/cfg_sample_2.png"
                  alt="Sample 3"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 3</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_6/cfg_sample_3.png"
                  alt="Sample 4"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 4</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_6/cfg_sample_4.png"
                  alt="Sample 5"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm text-muted-foreground text-center">Sample 5</p>
              </div>
            </div>
          </div>

          <div id="image-to-image" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.7 Image-to-Image Translation</h3>
            <p className="mb-4 text-muted-foreground">
              I implemented the SDEdit algorithm for image-to-image translation. This involves adding noise to an original
              image to a certain noise level (determined by i_start) and then denoising it to generate a new image that
              retains the structure of the original but has new details.
            </p>

            <div id="sdedit" className="mt-6 mb-6">
              <h4 className="text-base font-medium mb-2">SDEdit Results</h4>
              <div className="space-y-8">
                {/* Row 1: Campanile */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Campanile Img-to-img</h5>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/campanile-original.png"
                        alt="Campanile"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Campanile</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`campanile-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_0/img1_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Macbook */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Macbook Img-to-img</h5>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_0/macbook.jpg"
                        alt="Macbook"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Macbook</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`macbook-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_0/mb_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3: Keyboard */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Keyboard Img-to-img</h5>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_0/keyboard.jpg"
                        alt="Keyboard"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Keyboard</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`keyboard-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_0/kb_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="editing-hand-drawn-web" className="mb-6">
              <h4 className="text-base font-medium mb-3">1.7.1 Editing Hand-Drawn and Web Images</h4>
              <p className="mb-4 text-muted-foreground">
                I applied the same SDEdit procedure to non-natural images, including web images and hand-drawn sketches.
                The model was able to project these images onto the natural image manifold, adding realistic details while
                preserving the original structure.
              </p>

              <div className="space-y-8">
                {/* Row 1: Phoenix */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Pheonix</h5>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_1/pheonix.png"
                        alt="Pheonix"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Pheonix</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`pheonix-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_1/pheonix_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Among Us */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Among Us</h5>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_1/amongus.png"
                        alt="Among Us"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Among Us</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`amongus-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_1/amongus_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3: Yipee */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Yipee Character</h5>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_1/yipee.png"
                        alt="Yipee Character"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Yipee Character</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`yipee-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_1/yipee_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="inpainting" className="mb-10">
              <h3 className="text-lg font-semibold mb-3">1.7.2 Inpainting</h3>
              <p className="mb-4 text-muted-foreground">
                I implemented inpainting, which allows for modifying specific parts of an image while keeping the rest
                intact. This is done by using a binary mask to define the region to be edited. During the denoising process,
                the known parts of the image (outside the mask) are enforced at each step, while the masked area is generated
                by the diffusion model.
              </p>

              <div className="space-y-8">
                {/* Row 1: Campanile */}
                <div>
                  <h4 className="text-base font-medium mb-3">Campanile Inpainting Set</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/campanile-original.png"
                        alt="Campanile"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Campanile</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/mask1.png"
                        alt="Campanile Mask"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Campanile Mask</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/inpainted_campanile.png"
                        alt="Inpainted Campanile"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Inpainted Campanile</p>
                    </div>
                  </div>
                </div>

                {/* Row 2: Macbook */}
                <div>
                  <h4 className="text-base font-medium mb-3">Macbook Inpainting Set</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/macbook.png"
                        alt="Macbook"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Macbook</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/mask2.png"
                        alt="Macbook Mask"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Macbook Mask</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/inpainted_macbook.png"
                        alt="Inpainted Macbook"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Inpainted Macbook</p>
                    </div>
                  </div>
                </div>

                {/* Row 3: Keyboard */}
                <div>
                  <h4 className="text-base font-medium mb-3">Keyboard Inpainting Set</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/keyboard.png"
                        alt="Keyboard"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Keyboard</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/mask3.png"
                        alt="Keyboard Mask"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Keyboard Mask</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <img
                        src="outputs/part_1_7_2/inpainted_keyboard.png"
                        alt="Inpainted Keyboard"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-sm text-muted-foreground text-center">Inpainted Keyboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="text-conditional" className="mb-10">
              <h3 className="text-lg font-semibold mb-3">1.7.3 Text-Conditional Image-to-Image Translation</h3>
              <p className="mb-4 text-muted-foreground">
                I guided the image-to-image translation process using text prompts. By providing a text description, I could
                steer the projection of the original image onto the natural image manifold towards a specific target concept.
              </p>

              <div className="space-y-8">
                {/* Row 1: Campanile -> Rocketship */}
                <div>
                  <h4 className="text-base font-medium mb-1">Campanile to Rocketship</h4>
                  <p className="text-sm text-muted-foreground mb-3">Prompt: "a rocket ship"</p>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/campanile-original.png"
                        alt="Campanile"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Campanile</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`rocketship-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_3/rocketship_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Paris -> Amalfi */}
                <div>
                  <h4 className="text-base font-medium mb-1">Paris to Amalfi Coast</h4>
                  <p className="text-sm text-muted-foreground mb-3">Prompt: "a photo of the amalfi coast"</p>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_3/brian-paris.png"
                        alt="Paris"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Paris</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`amalfi-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_3/almalfi_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3: Waywest -> Snowy */}
                <div>
                  <h4 className="text-base font-medium mb-1">Waywest to Snowy Village</h4>
                  <p className="text-sm text-muted-foreground mb-3">Prompt: "an oil painting of a snowy mountain village"</p>
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                    <div className="flex flex-col gap-1">
                      <img
                        src="outputs/part_1_7_3/waywest.png"
                        alt="Waywest"
                        className="rounded-md w-full h-auto"
                      />
                      <p className="text-xs text-muted-foreground text-center">Waywest</p>
                    </div>
                    {[1, 3, 5, 7, 10, 20].map((i) => (
                      <div key={`snowy-${i}`} className="flex flex-col gap-1">
                        <img
                          src={`outputs/part_1_7_3/snowy_i_${i}.png`}
                          alt={`i_start=${i}`}
                          className="rounded-md w-full h-auto"
                        />
                        <p className="text-xs text-muted-foreground text-center">i_start={i}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="visual-anagrams" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.8 Visual Anagrams</h3>
            <p className="mb-4 text-muted-foreground">
              I implemented Visual Anagrams, which are images that change appearance when flipped. This is achieved by
              denoising the image with one prompt, and simultaneously denoising the flipped version with another prompt,
              averaging the noise estimates at each step.
            </p>

            <div className="space-y-8">
              {/* Row 1: Old Man-Campfire Anagram */}
              <div>
                <h4 className="text-base font-medium mb-3">Old Man-Campfire Anagram</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <img
                      src="outputs/part_1_8/old_man_flipped.png"
                      alt="An Oil Painting of an Old Man"
                      className="rounded-md w-full h-auto"
                    />
                    <p className="text-sm text-muted-foreground text-center">An Oil Painting of an Old Man</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <img
                      src="outputs/part_1_8/campfire_upright.png"
                      alt="An Oil Painting of People around a Campfire"
                      className="rounded-md w-full h-auto"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      An Oil Painting of People around a Campfire
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2: Dog-Skull Anagram */}
              <div>
                <h4 className="text-base font-medium mb-3">Dog-Skull Anagram</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <img
                      src="outputs/part_1_8/dog_upright.png"
                      alt="a photo of a dog"
                      className="rounded-md w-full h-auto"
                    />
                    <p className="text-sm text-muted-foreground text-center">a photo of a dog</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <img
                      src="outputs/part_1_8/skull_flipped.png"
                      alt="a lithograph of a skull"
                      className="rounded-md w-full h-auto"
                    />
                    <p className="text-sm text-muted-foreground text-center">a lithograph of a skull</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="hybrid-images" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.9 Hybrid Images</h3>
            <p className="mb-4 text-muted-foreground">
              I implemented Hybrid Images, which combine the low spatial frequencies of one image with the high spatial
              frequencies of another. This creates an image that changes interpretation depending on the viewing distance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Image 1: Skull-Waterfall */}
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_9/hybrid_1.png"
                  alt="Skull-Waterfall Hybrid Image"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm font-medium text-center">Skull-Waterfall Hybrid Image</p>
                <p className="text-xs text-muted-foreground text-center">
                  Low freq: "a lithograph of a skull"
                  <br />
                  High freq: "a lithograph of waterfalls"
                </p>
              </div>

              {/* Image 2: Rocketship-Barista */}
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/part_1_9/hybrid_2.png"
                  alt="Rocketship-Barista Hybrid Image"
                  className="rounded-md w-full h-auto"
                />
                <p className="text-sm font-medium text-center">Rocketship-Barista Hybrid Image</p>
                <p className="text-xs text-muted-foreground text-center">
                  Low freq: "a rocket ship"
                  <br />
                  High freq: "a photo of a hipster barista"
                </p>
              </div>
            </div>
          </div>
        </section>
      </section> {/* End of Part A Container */}

      {/* Part B Container */}
      <section id="part-b" className="mb-20">
        <h1 className="text-3xl font-extrabold mb-10 text-primary">B.) Flow Matching from Scratch!</h1>

        {/* Part 1: Training a Single-Step Denoising UNet */}
        <section id="part-b-1" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Part 1: Training a Single-Step Denoising UNet</h2>

          <div id="implementing-unet" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.1 Implementing the UNet</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 1.1, I implemented a UNet denoiser for MNIST that maps a noisy input image <span className="italic font-serif">z</span> to a clean digit <span className="italic font-serif">x</span> using an L2 reconstruction loss. I built the full encoder–decoder architecture depicted below.
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/figure_1.png"
                  alt="UNet Architecture Diagram 1"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">UNet Architecture Diagram</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/figure_2.png"
                  alt="UNet Architecture Diagram 2"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">UNet Architecture Detail</p>
              </div>
            </div>
          </div>

          <div id="training-denoiser" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.2 Using the UNet to Train a Denoiser</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 1.2, I visualized the Gaussian noising process used to create training pairs <span className="italic font-serif">z = x + σϵ</span> for MNIST digits. As <span className="italic font-serif">σ</span> increased from 0.0 to 1.0, the images became progressively more noisy and eventually unrecognizable. Below visualizes the effects of adding Guassian noise for <span className="italic font-serif">σ = [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]</span>.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <img
                src="outputs/Part_B/part_1_2.png"
                alt="Gaussian Noising Visualization"
                className="rounded-md w-full h-auto border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Effect of varying σ on MNIST digits</p>
            </div>
          </div>

          <div id="training-denoiser-1" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.2.1 Training</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 1.2.1, I trained the UNet denoiser on MNIST using Gaussian noise with <span className="italic font-serif">σ = 0.5</span>. The model was optimized with mean-squared error loss to reconstruct clean digits from noisy inputs. I used batch size 256, learning rate 1e-4, hidden dimension 128, and trained for 5 epochs, recording training loss each iteration to monitor convergence.
            </p>
            <p className="mb-4 text-muted-foreground">
              Below is the training loss curve over 5 epochs.
            </p>
            <div className="flex flex-col gap-2 mt-6 mb-8">
              <img
                src="outputs/Part_B/train_loss_plot_1_2_1.png"
                alt="Training Loss Curve"
                className="rounded-md w-full h-auto border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Training Loss Curve</p>
            </div>

            <p className="mb-4 text-muted-foreground">
              After five epochs, denoised outputs are noticeably cleaner and closer to the original digits compared with the noisier epoch-1 reconstructions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/epoch_1.png"
                  alt="Epoch 1 Results"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Epoch 1 Results</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/epoch_5.png"
                  alt="Epoch 5 Results"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Epoch 5 Results</p>
              </div>
            </div>
          </div>

          <div id="training-denoiser-2" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.2.2 Out-of-Distribution Testing</h3>
            <p className="mb-4 text-muted-foreground">
              For Part 1.2.2, I evaluated the UNet’s robustness to out-of-distribution noise levels. Although the model was trained only with <span className="italic font-serif">σ = 0.5</span>, I tested it on digits 1, 2, and 7 corrupted with <span className="italic font-serif">σ ∈ {"{0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0}"}</span>. The reconstructions show that the network denoises unseen noise levels surprisingly well, especially near the training <span className="italic font-serif">σ</span>, with quality gradually degrading only at the highest noise levels (<span className="italic font-serif">σ = 0.8, 1.0</span>).
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/ood_1.png"
                  alt="Out-of-Distribution Testing (Digit 1)"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">OOD Testing - Digit 1</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/ood_2.png"
                  alt="Out-of-Distribution Testing (Digit 2)"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">OOD Testing - Digit 2</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/ood_7.png"
                  alt="Out-of-Distribution Testing (Digit 7)"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">OOD Testing - Digit 7</p>
              </div>
            </div>
          </div>

          <div id="training-denoiser-3" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">1.2.3 Denoising Pure Noise</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 1.2.3, I probed how the trained UNet behaves on pure Gaussian noise inputs. I sampled random noise images (with <span className="italic font-serif">σ = 0.5</span>) that contained no underlying digit and passed them through the denoiser. The model still produced faint, digit-like strokes, showing that it has learned a strong prior over MNIST digits and tends to hallucinate plausible digit shapes even when no true signal is present.
            </p>
            <div className="flex flex-col gap-2 mt-6 mb-8">
              <img
                src="outputs/Part_B/pure_model_traini_loss_curve.png"
                alt="Pure Model Training Loss Curve"
                className="rounded-md w-full h-auto border border-border"
              />
              <p className="text-sm text-muted-foreground text-center">Pure Model Training Loss Curve</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/pure_model_samples_epoch1.png"
                  alt="Pure Model Samples Epoch 1"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Pure Model Samples Epoch 1</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/pure_model_samples_epoch5.png"
                  alt="Pure Model Samples Epoch 5"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Pure Model Samples Epoch 5</p>
              </div>
            </div>

            <div className="mt-6 mb-2">
              <h4 className="text-base font-semibold mb-2">Observed Patterns</h4>
              <p className="text-muted-foreground">
                When training on pure noise, the denoiser quickly stops relying on the input and instead learns to output almost the same blurry “average digit” for every sample. After the first epoch the shapes are already blob-like; by the fifth epoch they become a smoother, more consistent zero-ish template that looks similar across all noise seeds. With an MSE loss and inputs that contain no information about the true digit, the best strategy is to minimize the squared error to all training images at once, which pushes the network toward predicting the pixel-wise centroid (mean image) of the MNIST training set.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2: Training a Flow Matching Model */}
        <section id="part-b-2" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Part 2: Training a Flow Matching Model</h2>

          <div id="time-conditioning" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">2.1 Adding Time Conditioning to UNet</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 2.1, I extended the basic UNet into a time-conditioned UNet. I implemented an FCBlock (Linear → GELU → Linear) that embeds the scalar timestep <span className="italic font-serif">t</span> into a feature vector. This time embedding is injected into intermediate decoder features at multiple resolutions, as shown in the red region of the architecture diagram, so the network can modulate its denoising behavior based on the current diffusion step rather than using a fixed, time-agnostic UNet.
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/cond_unet.png"
                  alt="Time-Conditioned UNet Diagram"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Time-Conditioned UNet</p>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/FCBlock.png"
                  alt="FCBlock Architecture"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">FCBlock Architecture</p>
              </div>
            </div>
          </div>

          <div id="training-unet-flow" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">2.2 Training the UNet</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 2.2, I trained the time-conditioned UNet on MNIST using the flow-matching objective. At each iteration I sampled a timestep <span className="italic font-serif">t</span>, formed an interpolated image <span className="italic font-serif">x_t = (1 - t)x_0 + tx_1</span>, and supervised the network to predict the target flow vector so it learns how to denoise across all times.
            </p>
            <div className="mb-4">
              <p className="text-muted-foreground font-semibold mb-2">Hyperparameters:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Batch size: 64</li>
                <li>Hidden channels <span className="italic font-serif">D</span>: 64</li>
                <li>Optimizer: Adam with initial learning rate <span className="italic font-serif">1 × 10<sup>-2</sup></span> and ExponentialLR scheduler <span className="italic font-serif">γ = 0.1<sup>1/num_epochs</sup></span>, stepped each epoch</li>
                <li>Training length: 5 epochs</li>
              </ul>
            </div>
            <p className="mb-6 text-muted-foreground">
              I followed the “Training time-conditioned UNet” procedure described in Algorithm B.1, implementing each step of the loop in my training code.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 mx-auto max-w-lg">
                <img
                  src="outputs/Part_B/training_alg_2_2.png"
                  alt="Training Algorithm"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Training Algorithm</p>
              </div>
              <p className="text-muted-foreground mt-4 mb-2">
                The plot below shows the time-conditioned UNet training flow matching loss over the course of training.
              </p>
              <div className="flex flex-col gap-2">
                <img
                  src="outputs/Part_B/tc_unet_train_loss.png"
                  alt="Training Loss Curve"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Training Loss Curve</p>
              </div>
            </div>
          </div>

          <div id="sampling-unet-flow" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">2.3 Sampling from the UNet</h3>
            <p className="mb-4 text-muted-foreground">
              In Part 2.3, I implemented the sampling algorithm for the time-conditioned UNet (Algorithm B.2), starting from pure Gaussian noise and iteratively updating <span className="italic font-serif">x<sub>t</sub></span> using the predicted flow <span className="italic font-serif">u<sub>θ</sub>(x<sub>t</sub>, t)</span> over <span className="italic font-serif">T</span> timesteps. I then generated unconditional MNIST samples using models saved after epochs 1, 5, and 10. The samples evolve from noisy, blob-like shapes at epoch 1 to increasingly sharp and realistic digits by epochs 5 and 10, showing clear improvement as training progresses.
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex flex-col gap-2 mx-auto max-w-lg">
                <img
                  src="outputs/Part_B/part2_3_sampling_alg.png"
                  alt="Sampling Algorithm"
                  className="rounded-md w-full h-auto border border-border"
                />
                <p className="text-sm text-muted-foreground text-center">Sampling Algorithm</p>
              </div>

              <p className="text-muted-foreground mt-4 mb-2">
                Below are the unconditional samples generated at epochs 1, 5, and 10. As training progresses, the model transitions from generating noisy blobs to producing clear, recognizable MNIST digits, demonstrating the effectiveness of the flow matching objective.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/Part_B/samples_epoch1_2_3.png"
                    alt="Samples Epoch 1"
                    className="rounded-md w-full h-auto border border-border"
                  />
                  <p className="text-sm text-muted-foreground text-center">Epoch 1</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/Part_B/samples_epoch5_2_3.png"
                    alt="Samples Epoch 5"
                    className="rounded-md w-full h-auto border border-border"
                  />
                  <p className="text-sm text-muted-foreground text-center">Epoch 5</p>
                </div>
                <div className="flex flex-col gap-2">
                  <img
                    src="outputs/Part_B/samples_epoch10_2_3.png"
                    alt="Samples Epoch 10"
                    className="rounded-md w-full h-auto border border-border"
                  />
                  <p className="text-sm text-muted-foreground text-center">Epoch 10</p>
                </div>
              </div>
            </div>
          </div>

          <div id="class-conditioning" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">2.4 Adding Class-Conditioning to UNet</h3>
            <p className="text-muted-foreground">TODO: Add content for 2.4</p>
          </div>

          <div id="training-class-cond" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">2.5 Training the UNet</h3>
            <p className="text-muted-foreground">TODO: Add content for 2.5</p>
          </div>

          <div id="sampling-class-cond" className="mb-10">
            <h3 className="text-lg font-semibold mb-3">2.6 Sampling from the UNet</h3>
            <p className="text-muted-foreground">TODO: Add content for 2.6</p>
          </div>
        </section>
      </section>
    </main>
  )
}
