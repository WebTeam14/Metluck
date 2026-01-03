import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Metluck Group is a leading plant construction and industrial services provider, 
              headquartered in Al Jubail, Saudi Arabia, with a strong presence across the 
              Kingdom and India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Since our establishment in 2008, we have been supporting major industries 
              with reliable, safe, and innovative solutions aligned with Aramco and SABIC 
              standards. With over 10+ years of experience, we have built a reputation 
              for quality, safety, and timely project delivery.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block text-2xl font-heading font-bold text-foreground">10+</span>
                  <span className="text-sm text-muted-foreground">Years Experience</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block text-2xl font-heading font-bold text-foreground">500+</span>
                  <span className="text-sm text-muted-foreground">Team Members</span>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-hero">
              Learn More About Us
            </Link>
          </motion.div>

          {/* Right Content - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="card-industrial p-8">
              <div className="flex items-start gap-4">
                <div className="service-icon flex-shrink-0">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver high-quality engineering, construction, and industrial solutions 
                    through innovation, skilled manpower, and global standards while ensuring 
                    safety, sustainability, and client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="card-industrial p-8">
              <div className="flex items-start gap-4">
                <div className="service-icon flex-shrink-0">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a globally trusted industrial and infrastructure partner, 
                    recognized for technical excellence, reliability, and long-term 
                    value creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Presence */}
            <div className="gradient-primary rounded-lg p-8 text-primary-foreground">
              <h3 className="text-xl font-heading font-bold mb-4">Our Presence</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <span className="block text-2xl font-heading font-bold">KSA</span>
                  <span className="text-sm text-primary-foreground/70">Saudi Arabia</span>
                </div>
                <div>
                  <span className="block text-2xl font-heading font-bold">IND</span>
                  <span className="text-sm text-primary-foreground/70">India</span>
                </div>
                <div>
                  <span className="block text-2xl font-heading font-bold">ME</span>
                  <span className="text-sm text-primary-foreground/70">Middle East</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
