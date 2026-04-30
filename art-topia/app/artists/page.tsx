import Image from "next/image";
import { artists } from "@/data/artists";

export default function ArtistsPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <h1 className="text-center text-5xl font-bold">
          Our <span className="text-yellow-400">Artists</span>
        </h1>

        <p className="mt-4 text-center text-gray-400">
          Meet the creative minds behind the masterpieces.
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 transition hover:shadow-lg hover:shadow-yellow-400/10"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={400}
                  height={400}
                  className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">
                  {artist.name}
                </h3>
                <p className="text-sm text-yellow-400">
                  {artist.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}