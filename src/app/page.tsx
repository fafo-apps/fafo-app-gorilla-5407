export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold">Welcome to your new blog</h1>
        <p className="text-black/80 dark:text-white/80">
          Discover the best of Colorado in winter. Start with our featured guide packed with festive fun,
          mountain adventures, and cozy spots to warm up.
        </p>
      </section>

      <section>
        <a
          href="/blog/colorado-winter-christmas"
          className="block rounded-lg border border-black/10 dark:border-white/15 p-6 hover:bg-black/[.03] dark:hover:bg-white/[.06] transition"
        >
          <p className="text-xs uppercase tracking-wider text-black/60 dark:text-white/60">Featured Article</p>
          <h2 className="mt-1 text-xl font-semibold">Fun Things to Do in Colorado During Winter & Christmas</h2>
          <p className="mt-2 text-black/80 dark:text-white/80">
            From ski days and snow tubing to hot springs, festive markets, and sparkling light displays—here’s how to make the most of Colorado’s winter wonderland.
          </p>
          <p className="mt-3 text-sm text-blue-600 dark:text-blue-400">Read the guide →</p>
        </a>
      </section>
    </div>
  );
}
