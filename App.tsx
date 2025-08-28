import { VisualCarousel } from "./components/VisualCarousel";
import { BusinessServicesGrid } from "./components/BusinessServicesGrid";
import { PortfolioShowcase } from "./components/PortfolioShowcase";
import { PricingSection } from "./components/PricingSection";
import { ServiceTiersSection } from "./components/ServiceTiersSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-background">
      {/* Header with Company Name */}
      <header className="absolute top-6 right-6 z-10">
        <h1 className="text-xs tracking-[0.2em] font-medium text-foreground/60 uppercase">
          Strange Computer
        </h1>
      </header>

      {/* Main Content - Split Layout */}
      <div className="flex min-h-screen">
        {/* Left Panel - Hero Content */}
        <div className="flex-1 flex flex-col px-8 lg:px-16">
          {/* Navigation Buttons */}
          <div className="flex items-center justify-start gap-8 pt-8 mb-16">
            <button className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-200 relative group">
              Login
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-200 relative group">
              Book a call
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button className="text-sm tracking-wide px-4 py-2 border border-foreground/20 hover:border-foreground/40 text-foreground/80 hover:text-foreground transition-all duration-200 rounded-sm">
              See plans
            </button>
          </div>

          {/* Hero Content - Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-lg">
              {/* Main Hero Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-foreground">
                Strange Designs
                <br />
                <span className="text-foreground/60">
                  for Everyone
                </span>
              </h1>

              {/* Secondary Text */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Agency & Design using modern tools and tactics
              </p>

              {/* Accent Line */}
              <div className="w-16 h-0.5 bg-primary mt-8"></div>
            </div>
          </div>
        </div>

        {/* Right Panel - Visual Storytelling Carousel */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="h-full min-h-[600px]">
            <VisualCarousel />
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <section className="px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Pricing Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-10 lg:p-12 hover:shadow-xl transition-all duration-500 border border-orange-100/50 hover:border-orange-200/80">
              <div className="flex flex-col h-full min-h-[320px] justify-between">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-200/60 mb-6 group-hover:bg-orange-200/80 transition-colors duration-300">
                    <span className="text-orange-600 text-xl">
                      $
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-medium text-foreground leading-tight">
                    No quoting necessary. Purchase a website
                    with a care plan and we begin.
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    Efficiency is so hot right now. No waiting
                    to find out the price. You want a new
                    website with some decent design? You can
                    actually start today.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-orange-300/50 group-hover:bg-orange-300/70 transition-colors duration-300"></div>
            </div>

            {/* Premium Package Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-10 lg:p-12 hover:shadow-xl transition-all duration-500 border border-violet-100/50 hover:border-violet-200/80">
              <div className="flex flex-col h-full min-h-[320px] justify-between">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-200/60 mb-6 group-hover:bg-violet-200/80 transition-colors duration-300">
                    <span className="text-violet-600 text-xl">
                      ⚡
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-medium text-foreground leading-tight">
                    Make your website a living GOD.
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                    We are an agency. Design is not the only
                    thing. A GOOD website is fast, optimized,
                    ranks well, safe, secure, and grows on its
                    own. Subscribe to our Make my website a
                    living God Package.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-violet-300/50 group-hover:bg-violet-300/70 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Services Grid Section */}
      <BusinessServicesGrid />

      {/* Portfolio Showcase Section */}
      <PortfolioShowcase />

      {/* Pricing Section */}
      <PricingSection />

      {/* Service Tiers Section */}
      <ServiceTiersSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}