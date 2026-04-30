export default function AboutPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            About <span className="text-yellow-400">Art-topia</span>
          </h1>
          <p className="mt-4 text-gray-400">
            A space where creativity meets innovation.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Art-topia is a digital sanctuary for artists and art lovers. 
              We bring together creators from around the world to showcase 
              their work, inspire others, and redefine the boundaries of art.
            </p>
          </div>

          <div className="h-[300px] w-full rounded-xl bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          
          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
              Our Mission
            </h3>
            <p className="text-gray-400">
              To empower artists by providing a platform where their work 
              can be seen, appreciated, and celebrated globally.
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
              Our Vision
            </h3>
            <p className="text-gray-400">
              To become the leading digital hub for artistic expression 
              and creativity across all forms.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">10K+</h4>
            <p className="text-gray-400">Artworks</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">2K+</h4>
            <p className="text-gray-400">Artists</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">50+</h4>
            <p className="text-gray-400">Categories</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-yellow-400">100K+</h4>
            <p className="text-gray-400">Users</p>
          </div>
        </div>

        {/* Closing */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold">
            Join the Creative Revolution
          </h2>
          <p className="mt-4 text-gray-400">
            Whether you're an artist or an admirer, Art-topia is your home.
          </p>
        </div>

      </div>
    </section>
  );
}