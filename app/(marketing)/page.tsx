import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next FE Boilerplate",
};

export default function MarketingPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Next.js FE Boilerplate</h1>
      <Button className="mt-4">Get Started</Button>
    </main>
  );
}
