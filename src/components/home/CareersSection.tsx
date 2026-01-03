import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const openings = [
  {
    title: "Project Engineer",
    location: "Al Jubail, Saudi Arabia",
    type: "Full-time",
    experience: "5+ years",
  },
  {
    title: "Site Supervisor",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    experience: "3+ years",
  },
  {
    title: "Safety Officer",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    experience: "4+ years",
  },
];

export function CareersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-alt">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Join Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
              Build Your Career With Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Metluck Group, we believe our people are our greatest asset. Join a 
              team of dedicated professionals working on some of the most challenging 
              and rewarding projects in the industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/careers" className="btn-hero">
                View All Openings
              </Link>
              <Link
                to="/careers#apply"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Job Listings */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to="/careers"
                  className="block card-industrial p-6 group hover:border-primary/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
