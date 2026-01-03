import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Factory,
  HardHat,
  Truck,
  Building2,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Industrial Services",
    description: "Plant maintenance, turnaround services, electrical & instrumentation, and technical support.",
    href: "/services/industrial",
  },
  {
    icon: Factory,
    title: "Manufacturing & Production",
    description: "40,000 m² facility for fabrication, manufacturing, sand blasting, painting & testing.",
    href: "/services/manufacturing",
  },
  {
    icon: HardHat,
    title: "Engineering & Construction",
    description: "End-to-end EPC solutions including civil, structural, mechanical, and piping works.",
    href: "/services/engineering",
  },
  {
    icon: Truck,
    title: "Equipment Rental",
    description: "Aramco & SABIC certified equipment including cranes, excavators, and heavy machinery.",
    href: "/services/equipment-rental",
  },
  {
    icon: Building2,
    title: "Civil Construction",
    description: "Building & infrastructure projects, roads, earthworks, and residential housing.",
    href: "/services/civil-construction",
  },
  {
    icon: Settings,
    title: "Facility Management",
    description: "Comprehensive facility management ensuring operational efficiency and safety.",
    href: "/services/facility-management",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding section-alt">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
            Our Strategic Business Segments
          </h2>
          <p className="text-muted-foreground text-lg">
            Delivering comprehensive industrial, manufacturing, and construction solutions 
            tailored to meet the diverse needs of our clients.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.href} className="block h-full">
                <div className="card-industrial h-full p-8 group">
                  <div className="service-icon mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-hero">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
