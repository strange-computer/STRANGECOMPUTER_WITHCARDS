'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { ChevronDown, ChevronUp, Star, Crown } from 'lucide-react'

const serviceTiers = [
  {
    name: "Basic",
    price: "$110",
    description: "Perfect for small businesses getting started",
    gradient: "from-blue-50 via-indigo-50 to-cyan-50",
    borderColor: "border-blue-100/50 hover:border-blue-200/80",
    iconBg: "bg-blue-200/60 group-hover:bg-blue-200/80",
    iconColor: "text-blue-600",
    icon: "💎",
    features: [
      "Lower-traffic websites",
      "Backend Maintenance", 
      "Plugin Updates",
      "WordPress Core Updates",
      "Monthly Backups",
      "Detailed Monthly Report",
      "Google Analytics",
      "Uptime Monitoring"
    ],
    badge: null
  },
  {
    name: "Maintain",
    price: "$200",
    description: "Ongoing maintenance and optimization",
    gradient: "from-green-50 via-emerald-50 to-teal-50",
    borderColor: "border-green-100/50 hover:border-green-200/80",
    iconBg: "bg-green-200/60 group-hover:bg-green-200/80",
    iconColor: "text-green-600",
    icon: "🔧",
    features: [
      "Lower-traffic websites",
      "Backend Maintenance",
      "Plugin Upates",
      "WordPress Core Updates",
      "Daily Backups",
      "Detailed Monthly Report",
      "Google Analytics",
      "Google Search Console",
      "Security Scans",
      "Performance Optimization",
      "Uptime Monitoring",
      "30 Minutes Support Time (No rollover)"
    ],
    badge: null
  },
  {
    name: "Manage",
    price: "$330",
    description: "Full website management and growth",
    gradient: "from-orange-50 via-amber-50 to-yellow-50",
    borderColor: "border-orange-100/50 hover:border-orange-200/80",
    iconBg: "bg-orange-200/60 group-hover:bg-orange-200/80",
    iconColor: "text-orange-600",
    icon: "🚀",
    features: [
      "Active websites",
      "Backend Maintenance",
      "Plugin Updates",
      "WordPress Core Updates",
      "Daily Backups",
      "Detailed Monthly Report",
      "Google Analytics",
      "Google Search Console",
      "Google Maps Embeds",
      "Robots and Sitemaps Checks",
      "SMTP Sending Configuration",
      "WooCommerce Updates",
      "Security Scans",
      "Performance Optimization",
      "Uptime Monitoring",
      "Priority Support",
      "1 Hour Support Time (No rollover)"
    ],
    badge: { text: "MOST POPULAR", icon: Star, color: "bg-orange-500" }
  },
  {
    name: "Premium",
    price: "$600",
    description: "Enterprise-level digital transformation",
    gradient: "from-purple-50 via-violet-50 to-fuchsia-50",
    borderColor: "border-purple-100/50 hover:border-purple-200/80",
    iconBg: "bg-purple-200/60 group-hover:bg-purple-200/80",
    iconColor: "text-purple-600",
    icon: "👑",
    features: [
      "Update-heavy websites",
      "Backend Maintenance",
      "Plugin Updates",
      "WordPress Core Updates",
      "Daily Backups",
      "Detailed Monthly Report",
      "Google Analytics",
      "Google Search Console",
      "Google Maps Embeds",
      "Robots and Sitemaps Checks",
      "SMTP Sending Configuration",
      "WooCommerce Updates",
      "Security Scans",
      "Performance Optimiation",
      "Uptime Monitoring",
      "Widget Package",
      "Priority Support",
      "3 Hours Support Time (No rollover)"
    ],
    badge: { text: "MOST POWERFUL", icon: Crown, color: "bg-purple-500" }
  }
]

export function ServiceTiersSection() {
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleAllExpanded = () => {
    setAllExpanded(!allExpanded)
  }

  return (
    <section className="px-8 lg:px-16 py-16 lg:py-24 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            SERVICE TIERS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4">
            Choose your
            <br />
            <span className="italic font-normal">perfect plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple websites to complete digital transformation, we have a solution that fits your needs and budget.
          </p>
        </div>

        {/* Service Tier Cards - with top padding for badges */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceTiers.map((tier) => {
              const visibleFeatures = allExpanded ? tier.features : tier.features.slice(0, 4)
              
              return (
                <div key={tier.name} className="relative">
                  
                  {/* Floating Badge */}
                  {tier.badge && (
                    <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 ${tier.badge.color} text-white px-4 py-2 rounded-full flex items-center gap-1 text-xs font-medium shadow-xl drop-shadow-lg animate-float`}>
                      <tier.badge.icon className="w-3 h-3" />
                      {tier.badge.text}
                    </div>
                  )}
                  
                  {/* Card - All cards now have same top alignment */}
                  <div
                    className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${tier.gradient} p-6 lg:p-8 hover:shadow-xl transition-all duration-500 border ${tier.borderColor}`}
                  >
                    
                    {/* Card Content */}
                    <div className="flex flex-col h-full">
                      
                      {/* Header */}
                      <div className="text-center mb-6 pt-2">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${tier.iconBg} mb-4 transition-colors duration-300`}>
                          <span className="text-2xl">{tier.icon}</span>
                        </div>
                        <h3 className="text-xl font-medium text-foreground mb-2">{tier.name}</h3>
                        <div className="text-3xl font-medium text-foreground mb-1">
                          {tier.price}
                          <span className="text-base text-muted-foreground font-normal">/monthly</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                      </div>
                      
                      {/* Features */}
                      <div className="flex-1 mb-6">
                        <div className="space-y-3">
                          {visibleFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-lg font-medium transition-all duration-200"
                      >
                        Get Started
                      </Button>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${tier.iconColor.replace('text-', 'bg-').replace('600', '300/50')} group-hover:opacity-70 transition-opacity duration-300`}></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Global Expand/Collapse Control */}
        {serviceTiers.some(tier => tier.features.length > 4) && (
          <div className="text-center mt-8">
            <button
              onClick={toggleAllExpanded}
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors duration-200 mx-auto bg-card hover:bg-card/80 px-6 py-3 rounded-full border border-border/50 hover:border-border/80 shadow-sm hover:shadow-md"
            >
              {allExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show less details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show all features
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-foreground mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Schedule a free consultation and we'll help you choose the perfect service tier for your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="px-6 py-2 rounded-lg">
                Compare all plans
              </Button>
              <Button className="px-6 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90">
                Book free consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom floating animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(-50%, 0px); 
          }
          50% { 
            transform: translate(-50%, -8px); 
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}