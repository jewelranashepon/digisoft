"use client"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's get started on something great</h2>
        <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto">
          Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your
          business.
        </p>
        <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition transform hover:scale-105">
          Let's discuss about your project!
        </button>
      </div>
    </section>
  )
}
