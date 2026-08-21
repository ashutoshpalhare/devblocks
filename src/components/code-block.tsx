import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  language = "html",
  className,
}: {
  code: string;
  language?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-code", className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wide text-code-foreground/60">
          {language}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1 text-xs font-medium text-code-foreground transition-colors hover:bg-white/10"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 text-xs leading-relaxed">
        <code className="font-mono text-code-foreground">{code}</code>
      </pre>
    </div>
  );
}
