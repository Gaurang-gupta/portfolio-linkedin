"use client";

import { useEffect, useId, useRef } from "react";

import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  theme: "default",
});

interface MermaidProps {
  chart: string;
  caption?: string;
}

export function Mermaid({ chart, caption }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    let mounted = true;

    async function render() {
      if (!ref.current) return;

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);

        if (mounted && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (error) {
        console.error(error);

        if (ref.current) {
          ref.current.innerHTML = "<p>Failed to render diagram.</p>";
        }
      }
    }

    render();

    return () => {
      mounted = false;
    };
  }, [chart, id]);

  return (
    <figure className="my-10">
      <div className="bg-card overflow-x-auto rounded-xl border p-6">
        <div ref={ref} className="flex justify-center" />
      </div>

      {caption && (
        <figcaption className="text-muted-foreground mt-3 text-center text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
