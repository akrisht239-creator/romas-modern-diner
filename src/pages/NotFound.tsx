import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Monogram } from "@/components/Header";
import { usePageMeta } from "@/components/shared";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  usePageMeta(
    "Page Not Found — Roma's Café Diner",
    "The page you're looking for doesn't exist. Head back to Roma's Café Diner.",
  );

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-ink px-5 text-center">
      <Monogram />
      <p className="eyebrow mt-8 text-brass">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ivory md:text-5xl">
        This table isn&rsquo;t set.
      </h1>
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/60">
        The page you&rsquo;re looking for doesn&rsquo;t exist — but the menu
        does.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button
          asChild
          className="h-12 rounded-full bg-brass px-7 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:bg-ivory hover:text-ink"
        >
          <Link to="/menu">
            <ArrowLeft className="mr-2 size-4" aria-hidden="true" />
            View Menu
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-12 rounded-full border border-ivory/30 bg-transparent px-7 font-sans text-sm font-semibold tracking-wide text-ivory shadow-none transition-colors hover:border-ivory hover:bg-ivory/10"
        >
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </main>
  );
}
