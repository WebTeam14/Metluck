import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  {
    image: hero1,
    title: "Engineering Excellence",
    subtitle: "Building Tomorrow's Infrastructure Today",
  },
  {
    image: hero2,
    title: "Industrial Solutions",
    subtitle: "Powering Industries Across the Middle East",
  },
  {
    image: hero3,
    title: "Construction Mastery",
    subtitle: "From Foundation to Completion",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="relative h-full section-container flex items-center">
        <div className="flex items-center justify-center w-full">
          {/* Center Content - Metluck Group Title + About */}
          <div className="flex items-center gap-8 md:gap-16">
            {/* Metluck Group Title */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  METLUCK
                  <span className="block text-primary">GROUP</span>
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-primary-foreground/80 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* Animated Divider */}
            <motion.div
              className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* About Us Section */}
            <motion.div
              className="hidden md:block text-left max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
                About Us
              </h2>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Delivering excellence in engineering, construction, and industrial 
                services since 2008 across Saudi Arabia, India, and the Middle East.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors group"
              >
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-secondary/90 backdrop-blur-sm"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-8 text-primary-foreground text-sm">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-heading font-bold text-primary">10+</span>
              <span className="text-primary-foreground/70">Years Experience</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-3xl font-heading font-bold text-primary">500+</span>
              <span className="text-primary-foreground/70">Projects Completed</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-3xl font-heading font-bold text-primary">3</span>
              <span className="text-primary-foreground/70">Countries</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/services" className="btn-hero text-sm py-3 px-6">
              Explore Services
            </Link>
            <Link to="/contact" className="btn-outline-hero text-sm py-3 px-6">
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
