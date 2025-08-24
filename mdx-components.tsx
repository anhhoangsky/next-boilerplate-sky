import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (
      <h1 className={cn("mt-2 text-3xl font-bold", className)} {...props} />
    ),
    Button,
    ...components,
  };
}
