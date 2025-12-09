"use client"

import { ArrowRight } from "lucide-react"

const serviceCards = [
  {
    title: "Website Development",
    description:
      "Designing and developing a website for online businesses that not only looks gorgeous. However, developing a website means building a strong network with the cyber world.",
    image: "/website-development-portfolio.jpg",
    icon: "→",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating innovative mobile applications that provide seamless user experiences across all platforms and devices.",
    image: "/mobile-app-development.png",
    icon: "→",
  },
  {
    title: "Web App Development",
    description: "Building powerful web applications with modern technologies and frameworks for enterprise solutions.",
    image: "/web-app-development.jpg",
    icon: "→",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition duration-300 animate-slideInUp hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

                {/* CTA Link */}
                <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Browse All */}
        <div className="flex justify-center mt-12">
          <button className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition transform hover:scale-110">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
