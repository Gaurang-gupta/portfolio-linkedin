import { ReactNode } from "react";

import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  children: ReactNode;
}

export function CodeBlock({
  code,
  language,
  filename,
  children,
}: CodeBlockProps) {
  return (
    <figure className="bg-card my-8 overflow-hidden rounded-xl border">
      <div className="bg-muted/50 flex items-center justify-between border-b px-4 py-2">
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          {filename && <span className="font-medium">{filename}</span>}

          {language && (
            <span className="bg-background rounded px-2 py-0.5 text-xs">
              {language}
            </span>
          )}
        </div>

        <CopyButton value={code} />
      </div>

      <div className="overflow-x-auto p-4">{children}</div>
    </figure>
  );
}
