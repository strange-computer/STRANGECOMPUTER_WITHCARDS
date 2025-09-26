import { VisualCarousel } from "./components/VisualCarousel";
import { BusinessServicesGrid } from "./components/BusinessServicesGrid";
import { PortfolioShowcase } from "./components/PortfolioShowcase";
import { PricingSection } from "./components/PricingSection";
import { ServiceTiersSection } from "./components/ServiceTiersSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

function Frame6() {
  return null;
}

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
            {/* Transparent Pricing Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-50/80 via-white/90 to-neutral-100/70 backdrop-blur-sm p-12 lg:p-14 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 hover:scale-[1.02] transform-gpu perspective-1000 hover:rotate-y-1 hover:rotate-x-1" style={{
              transform: 'perspective(1200px) rotateX(2deg) rotateY(-1deg)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06), 2px 12px 24px rgba(251,146,60,0.25), 4px 16px 32px rgba(251,146,60,0.15)'
            }}>
              {/* Subtle inner highlight for 3D effect */}
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 rounded-3xl shadow-inner opacity-20"></div>
              
              {/* Multi-layered animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/60 via-amber-400/70 via-yellow-400/50 via-orange-300/60 to-amber-300/50 p-[2px] group-hover:from-orange-500/80 group-hover:via-amber-500/90 group-hover:via-yellow-500/70 group-hover:via-orange-400/80 group-hover:to-amber-400/70 transition-all duration-700 animate-pulse-slow">
                <div className="h-full w-full rounded-3xl bg-gradient-to-br from-neutral-50/80 via-white/90 to-neutral-100/70 backdrop-blur-sm" style={{
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.05)'
                }}></div>
              </div>
              
              {/* Rotating secondary gradient layer */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-orange-300/20 via-transparent via-amber-400/25 to-transparent p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-spin" style={{animationDuration: '8s'}}>
                <div className="h-full w-full rounded-3xl bg-transparent"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1200 transform -skew-x-12 animate-bounce-gentle"></div>
              
              {/* Minimal structural depth only */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-3 transition-opacity duration-700 -z-10" style={{
                filter: 'drop-shadow(0 1px 2px rgba(251,146,60,0.005)) drop-shadow(0 0.5px 1px rgba(251,146,60,0.003))'
              }}></div>

              {/* Ultra-clean architectural elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0.2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-200/0.1 to-amber-300/0.15 opacity-30 group-hover:opacity-40 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Minimal corner details */}
              <div className="absolute top-12 left-12 w-0.5 h-3 bg-gradient-to-b from-orange-400/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
              <div className="absolute bottom-12 right-12 w-3 h-0.5 bg-gradient-to-r from-transparent to-amber-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10 flex flex-col h-full min-h-[420px] justify-end">
                {/* Future space for portfolio work/assets - top area remains open */}
                <div className="flex-1 mb-8">
                  {/* This space is reserved for future design elements, portfolio pieces, or assets */}
                </div>
                
                {/* Content positioned at bottom */}
                <div className="space-y-8">
                  {/* Elegant separator line */}
                  <div className="w-16 h-px bg-gradient-to-r from-orange-300/60 to-transparent group-hover:w-24 transition-all duration-500"></div>
                  
                  <h3 className="text-2xl lg:text-3xl font-medium text-foreground leading-tight tracking-tight">
                    No quoting necessary. Purchase a website
                    <br />
                    <span className="text-orange-600/80">with a care plan</span> and we begin.
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground/90 leading-relaxed">
                    Efficiency is so hot right now. No waiting
                    to find out the price. You want a new
                    website with some decent design? You can
                    actually start today.
                  </p>
                  
                  {/* Call to action hint */}
                  <div className="inline-flex items-center text-sm text-orange-600/70 group-hover:text-orange-600 transition-colors duration-300">
                    <span className="mr-2">Start building</span>
                    <div className="w-4 h-px bg-orange-400/50 group-hover:w-6 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-orange-400/60 group-hover:bg-orange-400 transition-colors duration-300">
                <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20"></div>
              </div>
            </div>

            {/* Premium Package Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-50/80 via-white/90 to-neutral-100/70 backdrop-blur-sm p-12 lg:p-14 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-700 hover:scale-[1.02] transform-gpu perspective-1000 hover:rotate-y-1 hover:rotate-x-1" style={{
              transform: 'perspective(1200px) rotateX(2deg) rotateY(1deg)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.06), -2px 12px 24px rgba(139,92,246,0.25), -4px 16px 32px rgba(139,92,246,0.15)'
            }}>
              {/* Subtle inner highlight for 3D effect */}
              <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 rounded-3xl shadow-inner opacity-20"></div>
              
              {/* Multi-layered animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/60 via-purple-500/70 via-fuchsia-500/50 via-violet-400/60 to-purple-400/50 p-[2px] group-hover:from-violet-600/80 group-hover:via-purple-600/90 group-hover:via-fuchsia-600/70 group-hover:via-violet-500/80 group-hover:to-purple-500/70 transition-all duration-700 animate-pulse-slow">
                <div className="h-full w-full rounded-3xl bg-gradient-to-br from-neutral-50/80 via-white/90 to-neutral-100/70 backdrop-blur-sm" style={{
                  boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.05)'
                }}></div>
              </div>
              
              {/* Rotating secondary gradient layer - counter-clockwise */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-transparent via-violet-400/20 via-transparent via-fuchsia-400/25 to-transparent p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-spin" style={{animationDuration: '10s', animationDirection: 'reverse'}}>
                <div className="h-full w-full rounded-3xl bg-transparent"></div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-transparent via-white/6 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1200 transform skew-x-12 animate-bounce-gentle"></div>
              
              {/* Minimal structural depth only */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-8 transition-opacity duration-700 -z-10" style={{
                filter: 'drop-shadow(0 2px 4px rgba(139,92,246,0.02)) drop-shadow(0 1px 2px rgba(139,92,246,0.01))'
              }}></div>

              {/* Ultra-clean architectural elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0.2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-300/0.1 to-purple-400/0.15 opacity-30 group-hover:opacity-40 transition-opacity duration-700 rounded-3xl"></div>
              
              {/* Minimal corner details */}
              <div className="absolute top-12 left-12 w-0.5 h-3 bg-gradient-to-b from-violet-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
              <div className="absolute bottom-12 right-12 w-3 h-0.5 bg-gradient-to-r from-transparent to-fuchsia-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="relative z-10 flex flex-col h-full min-h-[420px] justify-end">
                {/* Future space for other assets - top area remains open */}
                <div className="flex-1 mb-8">
                  {/* This space is reserved for future design elements, portfolio pieces, or assets */}
                </div>
                
                {/* Portfolio showcase - positioned behind title text */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-0">
                  <div className="relative group-hover:scale-105 transition-transform duration-700 ease-out scale-[0.16] origin-center">
                    <Frame6 />
                  </div>
                </div>
                
                {/* Content positioned at bottom */}
                <div className="space-y-8 relative z-10">
                  {/* Elegant separator line */}
                  <div className="w-16 h-px bg-gradient-to-r from-violet-300/60 to-transparent group-hover:w-24 transition-all duration-500"></div>
                  
                  <h3 className="text-2xl lg:text-3xl font-medium text-foreground leading-tight tracking-tight">
                    Make your website
                    <br />
                    <span className="text-violet-600/80">a living GOD.</span>
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground/90 leading-relaxed">
                    We are an agency. Design is not the only
                    thing. A GOOD website is fast, optimized,
                    ranks well, safe, secure, and grows on its
                    own. Subscribe to our Make my website a
                    living God Package.
                  </p>
                  
                  {/* Call to action hint */}
                  <div className="inline-flex items-center text-sm text-violet-600/70 group-hover:text-violet-600 transition-colors duration-300">
                    <span className="mr-2">Unleash power</span>
                    <div className="w-4 h-px bg-violet-400/50 group-hover:w-6 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-violet-400/60 group-hover:bg-violet-400 transition-colors duration-300">
                <div className="absolute inset-0 rounded-full bg-violet-400 animate-ping opacity-20"></div>
              </div>
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