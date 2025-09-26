import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ListingsSection } from "./components/ListingsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

export default function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [isPausing, setIsPausing] = useState(false);
  const scrollIndicator = useAnimation();

  useEffect(() => {
    const initiateAutoScroll = async () => {
      // Add class to html for scroll control
      document.documentElement.classList.add('portfolio-scroll');
      
      // Wait for initial page load and settle (0.5 seconds)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setIsScrolling(true);
      
      // Animate scroll indicator
      scrollIndicator.start({
        opacity: [0, 1, 1, 0.5],
        scale: [0.8, 1.05, 1, 0.9],
        y: [0, -5, 0, 5],
        transition: { duration: 7.5, ease: "easeInOut" }
      });
      
      // Get the total scrollable height
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScroll = documentHeight - windowHeight;
      
      // Define section waypoints for showcase pauses
      const waypoints = [
        { progress: 0, pause: 400, name: 'Hero' },      // Hero section - pause for 0.4s
        { progress: 0.25, pause: 300, name: 'About' },   // About section - pause for 0.3s
        { progress: 0.5, pause: 400, name: 'Listings' }, // Listings section - pause for 0.4s
        { progress: 0.75, pause: 300, name: 'Contact' }, // Contact section - pause for 0.3s
        { progress: 1, pause: 0, name: 'Footer' }        // Footer - no pause at end
      ];
      
      // Enhanced showcase scroll with waypoint pauses
      const showcaseScroll = async () => {
        const baseScrollDuration = 5100; // 5.1 seconds of actual scrolling
        let currentWaypointIndex = 0;
        let startTime = Date.now();
        let pauseStartTime = 0;
        let isPausing = false;
        
        const animateScroll = () => {
          const now = Date.now();
          
          if (isPausing) {
            // Handle pause at waypoint
            const pauseElapsed = now - pauseStartTime;
            const currentWaypoint = waypoints[currentWaypointIndex];
            
            if (pauseElapsed >= currentWaypoint.pause) {
              // End pause, move to next waypoint
              isPausing = false;
              setIsPausing(false);
              currentWaypointIndex++;
              startTime = now; // Reset timer for next segment
            } else {
              // Continue pausing
              requestAnimationFrame(animateScroll);
              return;
            }
          }
          
          if (currentWaypointIndex >= waypoints.length) {
            // Finished all waypoints
            setIsScrolling(false);
            setTimeout(() => {
              document.documentElement.classList.remove('portfolio-scroll');
            }, 500);
            // Notify parent (carousel) to advance
            try {
              window.parent?.postMessage({ type: 'realtor:complete' }, '*');
            } catch {}
            return;
          }
          
          const currentWaypoint = waypoints[currentWaypointIndex];
          const nextWaypoint = waypoints[currentWaypointIndex + 1];
          
          if (!nextWaypoint) {
            setIsScrolling(false);
            setTimeout(() => {
              document.documentElement.classList.remove('portfolio-scroll');
            }, 500);
            // Notify parent (carousel) to advance
            try {
              window.parent?.postMessage({ type: 'realtor:complete' }, '*');
            } catch {}
            return;
          }
          
          // Calculate progress for current segment
          const segmentDuration = baseScrollDuration * (nextWaypoint.progress - currentWaypoint.progress);
          const elapsed = now - startTime;
          const segmentProgress = Math.min(elapsed / segmentDuration, 1);
          
          // Smooth easing for each segment
          const easeInOutQuart = (t: number) => {
            return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
          };
          
          const easedSegmentProgress = easeInOutQuart(segmentProgress);
          
          // Calculate overall progress
          const overallProgress = currentWaypoint.progress + 
            (nextWaypoint.progress - currentWaypoint.progress) * easedSegmentProgress;
          
          // Apply scroll
          window.scrollTo({
            top: maxScroll * overallProgress,
            behavior: 'auto'
          });
          
          // Check if we've reached the next waypoint
          if (segmentProgress >= 1) {
            setCurrentSection(nextWaypoint.name);
            if (nextWaypoint.pause > 0) {
              // Start pause at waypoint
              isPausing = true;
              setIsPausing(true);
              pauseStartTime = now;
            } else {
              // No pause, move to next waypoint immediately
              currentWaypointIndex++;
              startTime = now;
            }
          }
          
          requestAnimationFrame(animateScroll);
        };
        
        requestAnimationFrame(animateScroll);
      };
      
      showcaseScroll();
    };

    initiateAutoScroll();
    
    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove('portfolio-scroll');
    };
  }, [scrollIndicator]);

  return (
    <motion.div 
      className="min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Scroll Indicator */}
      <motion.div
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl border border-blue-500/20 pointer-events-none backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={scrollIndicator}
      >
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-2 h-2 bg-white rounded-full shadow-sm"
            animate={{
              y: isPausing ? [0, -2, 0] : [0, -4, 0],
              scale: isPausing ? [1, 1.5, 1] : [1, 1.2, 1],
            }}
            transition={{
              duration: isPausing ? 0.6 : 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="flex flex-col">
            <span className="font-medium text-xs">
              {isPausing && currentSection ? `Showcasing ${currentSection}` : 'Showcasing Portfolio'}
            </span>
            {isPausing && (
              <motion.div 
                className="flex space-x-1 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-white/70 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Subtle scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: isScrolling ? 1 : 0,
          background: isPausing 
            ? 'linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)' 
            : 'linear-gradient(90deg, #3b82f6, #2563eb)',
          transition: { duration: isScrolling ? 7 : 0.3 }
        }}
      />
      
      {/* Section showcase indicator */}
      {isPausing && currentSection && (
        <motion.div
          className="fixed top-16 left-4 z-50 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg text-sm font-medium shadow-lg border pointer-events-none"
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span>Highlighting {currentSection} Section</span>
          </div>
        </motion.div>
      )}

      <Header />
      <motion.main
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection />
        <AboutSection />
        <ListingsSection />
        <ContactSection />
      </motion.main>
      <Footer />
      
      {/* Floating scroll animation elements */}
      {isScrolling && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Animated dots flowing down */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${15 + i * 10}%`,
                top: '5%',
                width: `${4 + (i % 3)}px`,
                height: `${4 + (i % 3)}px`,
                background: `linear-gradient(45deg, rgba(37, 99, 235, ${0.3 + (i % 3) * 0.2}), rgba(59, 130, 246, ${0.4 + (i % 3) * 0.1}))`
              }}
              animate={{
                y: ['0vh', '95vh'],
                opacity: [0, 0.8, 0.6, 0],
                scale: [0.3, 1.2, 1, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 7.2,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Side gradient streams */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w-0.5 rounded-full"
              style={{
                left: i === 0 ? '5%' : '95%',
                top: '0%',
                height: '100vh',
                background: 'linear-gradient(to bottom, transparent, rgba(37, 99, 235, 0.3), transparent)'
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{
                duration: 7.5,
                delay: 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
