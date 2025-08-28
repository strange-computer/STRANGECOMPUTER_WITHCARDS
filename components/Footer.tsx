export function Footer() {
    return (
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-20">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-medium mb-6">Strange Computer</h3>
              <p className="text-background/70 leading-relaxed mb-6">
                We create strange designs for everyone. Modern tools, transparent pricing, and exceptional results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.275c-.875.807-2.026 1.297-3.323 1.297zm7.83-7.83h-.875v-.875h.875v.875zm-1.75 3.498c0 .962-.385 1.837-1.003 2.472-.628.635-1.503 1.02-2.465 1.02s-1.837-.385-2.472-1.02c-.635-.635-1.02-1.51-1.02-2.472s.385-1.837 1.02-2.465c.635-.628 1.51-1.003 2.472-1.003s1.837.375 2.465 1.003c.618.628 1.003 1.503 1.003 2.465z"/>
                  </svg>
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-medium mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Website Design</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Web Development</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Brand Identity</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Digital Strategy</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">SEO & Performance</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Maintenance</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-medium mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">About</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Portfolio</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Process</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="font-medium mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Design System</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQ</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Support</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="border-t border-background/20 pt-12 mb-12">
            <div className="max-w-md">
              <h4 className="font-medium mb-4">Stay updated</h4>
              <p className="text-background/70 mb-6">
                Get the latest design trends, tips, and agency news delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-background/30"
                />
                <button className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70 text-sm">
              © 2024 Strange Computer. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }