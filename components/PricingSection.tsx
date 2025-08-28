import { Button } from "./ui/button";
import Group5603 from "../imports/Group5603";

export function PricingSection() {
  return (
    <section className="px-8 lg:px-16 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            PRICING
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
            One subscription,
            <br />
            <span className="italic font-normal">
              endless possibilities
            </span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Card - Join Designjoy */}
          <div className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-lg border border-border/50 overflow-hidden">
            {/* Floating Group5603 Element */}
            <div className="absolute -top-8 -left-8 w-48 h-48 scale-50 opacity-90">
              <Group5603 />
            </div>

            {/* Card Content */}
            <div className="relative z-10 pt-16">
              {/* Start Today Button */}
              <div className="mb-12">
                <Button
                  variant="default"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-2 text-sm"
                >
                  ⭐ Start today
                </Button>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h3 className="text-3xl lg:text-4xl font-medium text-foreground leading-tight">
                  Join
                  <br />
                  Strange
                  <br />
                  Computer
                </h3>
              </div>
            </div>
          </div>

          {/* Right Card - Monthly Club Pricing */}
          <div className="bg-foreground text-background rounded-3xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-xl font-medium">
                Monthly Chub
              </h3>
              <p className="text-xs opacity-60 uppercase tracking-wide">
                PAUl OR CANCEL ANYTIME
              </p>
            </div>

            {/* Dotted Line */}
            <div className="border-t border-dotted border-background/30 mb-8"></div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-medium">
                  $6,000
                </span>
                <span className="text-lg opacity-60">
                  /website
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="space-y-4">
                <div className="bg-background/10 rounded-lg p-3">
                  <p className="text-sm font-medium mb-1">
                    INCLUDED
                  </p>
                </div>
                <div className="space-y-3 text-sm">
                  <p>Website of your dreams</p>
                  <p>Avg. 2-4 week delivery</p>
                  <p>
                    Unlimited pages (if on LIVING GOD PACKAGE)
                  </p>
                  <p>Paulflow development</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p>Unlimited Paul photos</p>
                <p>Functional & Contextual</p>
                <p>Paul or cancel anytime</p>
              </div>
            </div>

            {/* Join Today Button */}
            <Button
              variant="secondary"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0 rounded-lg py-3 font-medium"
            >
              😊 Join today
            </Button>

            {/* Decorative Orange Circle */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">😊</span>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 pt-12">
          {/* Pause Anytime */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-4 h-4 rounded-full border-2 border-foreground flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                Paul anytime
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Temporarily paul your subscription anytime, no
                sweat.
              </p>
            </div>
          </div>

          {/* Try It For A Week */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-4 h-4 rounded-full border-2 border-foreground flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M9 1L3.5 6.5L1 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                Call us, we're real
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Got questions? No questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}