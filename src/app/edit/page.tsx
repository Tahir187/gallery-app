"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();

  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <>
      <section>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Edit {publicId}</h1>
          </div>

          <div className="flex gap-4">
            <Button
              //   variant="ghost"
              style={{ backgroundColor: "rgb(3, 83, 82)" }}
              onClick={() => setTransformation(undefined)}
            >
              Clear All
            </Button>
            {/* generative fill button */}
            <div className="flex flex-col gap-4">
              <Button
                style={{ backgroundColor: "rgb(3, 83, 82)" }}
                onClick={() => {
                  setTransformation("generative-fill");
                  setPrompt(pendingPrompt)
                }}
              >
                Apply Generative Fill
              </Button>
              <Label>Prompt</Label>
              <Input
                value={pendingPrompt}
                onChange={(e) => setPendingPrompt(e.currentTarget.value)}
              />
            </div>
            {/* blur button */}
            <Button
              style={{ backgroundColor: "rgb(3, 83, 82)" }}
              onClick={() => setTransformation("blur")}
            >
              Apply Blur
            </Button>
            {/* gray scale button */}
            <Button
              style={{ backgroundColor: "rgb(3, 83, 82)" }}
              onClick={() => setTransformation("grayscale")}
            >
              Convert to Gray
            </Button>
            {/* pixelate button */}
            <Button
              style={{ backgroundColor: "rgb(3, 83, 82)" }}
              onClick={() => setTransformation("pixelate")}
            >
              Pixelate
            </Button>
            {/* bg remove button */}
            <Button
              style={{ backgroundColor: "rgb(3, 83, 82)" }}
              onClick={() => setTransformation("bg-remove")}
            >
              Background Remove
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <CldImage
              src={publicId}
              width="300"
              height="200"
              alt="Some image"
            />
            {/* generative fill image */}
            {transformation === "generative-fill" && (
              <CldImage
                src={publicId}
                width="300"
                height="200"
                alt="Some image"
                crop="pad"
                fillBackground={{ prompt }}
              />
            )}
            {/* blur image */}
            {transformation === "blur" && (
              <CldImage
                src={publicId}
                width="300"
                height="200"
                alt="Some image"
                blur="800"
              />
            )}
            {/* gray image */}
            {transformation === "grayscale" && (
              <CldImage
                src={publicId}
                width="300"
                height="200"
                alt="Some image"
                grayscale
              />
            )}
            {/* gray image */}
            {transformation === "pixelate" && (
              <CldImage
                src={publicId}
                width="300"
                height="200"
                alt="Some image"
                pixelate
              />
            )}
            {/* bg-remove image */}
            {transformation === "bg-remove" && (
              <CldImage
                src={publicId}
                width="300"
                height="200"
                alt="Some image"
                removeBackground
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
