export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Contact <span className="text-yellow-400">Us</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Have questions or want to collaborate? Reach out to us.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          
          {/* Form */}
          <form className="space-y-6 rounded-xl border border-gray-800 p-6">
            
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full rounded-lg bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400">
                Get in Touch
              </h3>
              <p className="mt-2 text-gray-400">
                We’d love to hear from you. Whether you're an artist, collector,
                or enthusiast, Art-topia is here for you.
              </p>
            </div>

            <div className="space-y-4 text-gray-400">
              <p>📧 Email: support@arttopia.com</p>
              <p>📍 Location: Global / Remote</p>
              <p>📞 Phone: +123 456 7890</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}