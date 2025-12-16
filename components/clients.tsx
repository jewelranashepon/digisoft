"use client";

export default function Clients() {
  const clients = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    },
    {
      name: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-500 mb-12">
          Trusted by leading companies worldwide
        </p>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
            {clients.concat(clients).map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-14 w-auto opacity-70 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
