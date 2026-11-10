import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
          Under Development
        </div>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Aktuain Media
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
          We are building something new.
          <br />
          Aktuain Media is currently under development.
        </p>

        <div className="mt-10">
          <div className="mx-auto h-px w-24 bg-white/20" />
          <p className="mt-6 text-sm text-zinc-600">
            © 2026 Aktuain Media
          </p>
        </div>
      </div>
    </main>
  );
}