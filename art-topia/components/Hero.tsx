// src/components/Hero.tsx

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/public/images/hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        
        {/* Badge */}
        <span className="mb-4 rounded-full border border-yellow-400 px-4 py-1 text-sm tracking-widest text-yellow-400">
          ✨ Welcome to Art-topia
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Discover Art Beyond <span className="text-yellow-400">Imagination</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
          Explore breathtaking masterpieces from visionary artists around the
          world. A universe where creativity has no limits.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/gallery"
            className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            Explore Gallery
          </Link>

          <Link
            href="/artists"
            className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white hover:text-black"
          >
            Meet Artists
          </Link>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 animate-bounce text-sm text-gray-300">
          ↓ Scroll Down
        </div>
      </div>
    </section>
  );
}