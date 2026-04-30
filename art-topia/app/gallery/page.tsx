import Image from "next/image";
import { artworks } from "@/data/artworks";

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <h1 className="text-center text-5xl font-bold">
          Art <span className="text-yellow-400">Gallery</span>
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Explore a world of creativity through stunning artworks.
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Image */}
              <Image
                src={art.image}
                alt={art.title}
                width={500}
                height={500}
                className="h-75 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition group-hover:opacity-100"></div>

              {/* Info */}
              <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{art.title}</h3>
                <p className="text-sm text-gray-300">{art.artist}</p>
                <span className="text-xs text-yellow-400">
                  {art.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}