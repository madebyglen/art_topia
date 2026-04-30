import Image from "next/image";

const artworks = [
  {
    id: 1,
    title: "Dreamscape",
    artist: "Ava Stone",
    image: "/images/art1.jpg",
  },
  {
    id: 2,
    title: "Silent Waves",
    artist: "Liam Grey",
    image: "/images/art2.jpg",
  },
  {
    id: 3,
    title: "Golden Horizon",
    artist: "Mia Cruz",
    image: "/images/art3.jpg",
  },
];

export default function FeaturedArt() {
  return (
    <section className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <h2 className="text-center text-4xl font-bold">
          Featured <span className="text-yellow-400">Artworks</span>
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Explore some of the most captivating creations from our artists.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                className="h-87.5 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 transition group-hover:opacity-100"></div>

              {/* Text */}
              <div className="absolute bottom-4 left-4 opacity-0 transition group-hover:opacity-100">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-sm text-gray-300">{art.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}