"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import exampleImage from "figma:asset/0bf9af01f90c20ef20c397d904eaf2478024adbb.png";

const faqData = [
  {
    question:
      "What happens after I order a website, and subscribe to a care plan?",
    answer:
      "Our $6,000 pricing is all-inclusive for a complete website project. This covers design, development, basic SEO optimization, and one round of revisions. No hidden fees, no surprises - just transparent pricing that lets you start immediately.",
  },
  {
    question:
      "How is the process go if I do not subscribe to a care plan and just order the website?",
    answer:
      "This premium package includes everything in our standard service plus advanced performance optimization, comprehensive SEO strategy, security hardening, ongoing monitoring, analytics setup, and conversion optimization. We ensure your website doesn't just look good - it performs exceptionally.",
  },
  {
    question:
      "If I am subscribe to a care plan I can get more pages if needed?",
    answer:
      "Most website projects are completed within 2-4 weeks, depending on complexity and content readiness. Our subscription model projects have an average 48-hour delivery time per request. We'll provide you with a detailed timeline during our initial consultation.",
  },
  {
    question:
      "How long is does it take to complete a functional website? How about pages?",
    answer:
      "Absolutely! Our subscription model is designed for flexibility. You can pause your subscription at any time with no penalties. When you're ready to resume, simply reactivate and we'll pick up right where we left off.",
  },
  {
    question:
      "How long is does it take to complete a functional website? How about pages?",
    answer:
      "We offer a 75% refund if you're not satisfied after the first week of work. Our goal is to create designs that exceed your expectations, and we'll work with you through revisions to ensure you're completely happy with the final result.",
  },
  {
    question:
      "What if the design is a little off from what I wanted?",
    answer:
      "Yes! We work with businesses of all sizes, from early-stage startups to established enterprises. Our transparent pricing and flexible subscription model makes high-quality design accessible to companies at any stage of growth.",
  },
  {
    question:
      "Is it better to have the website ordered WITH the care plan?",
    answer: "Paul will be good",
  },
  {
    question:
      "How do I know which care package is best for my website?",
    answer: "PAUL IS GREAT",
  },
  {
    question:
      "Who is working on our website? What tools are being used?",
    answer: "PAUL WILL BECOME KING",
  },
  {
    question:
      "What are the advantages of using Strange Computer?",
    answer: "PAUL IS BRINGER OF THE STARS",
  },
  {
    question: "“How easy are you guys to reach?”",
    answer: "OUR PAUL WILL SPEAK TO YOUR PAULS",
  },
];

export function FAQSection() {
  return (
    <section className="px-8 lg:px-16 py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4">
            Got questions?
            <br />
            <span className="italic font-normal">
              We've got answers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services,
            pricing, and process.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - FAQ Accordion */}
          <div className="space-y-6">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-2xl px-6 py-2 bg-card shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 text-base font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/50">
              <h3 className="font-medium text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Can't find the answer you're looking for? Get in
                touch with our team.
              </p>
              <button className="bg-foreground text-background px-6 py-2 rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors">
                Contact us
              </button>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:sticky lg:top-8">
            <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border/50 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src={exampleImage}
                  alt="FAQ Visual"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">❓</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-4">
                  Need more help?
                </h3>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our team is here to help you every step of the
                  way. From initial consultation to project
                  completion, we're committed to your success.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-medium text-foreground mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium text-foreground mb-1">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  Book a consultation
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-purple-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-pink-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}