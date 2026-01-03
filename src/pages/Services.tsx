import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Wrench,
  Factory,
  HardHat,
  Truck,
  Building2,
  Settings,
  ShoppingCart,
  Cpu,
  Layers,
  Users,
  ArrowRight,
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const services = [
  {
    icon: Wrench,
    title: "Industrial Services",
    description: "Complete industrial support including plant maintenance, turnaround, electrical & instrumentation, mechanical rotating equipment overhaul, valve services, and technical support.",
    href: "/services/industrial",
  },
  {
    icon: Factory,
    title: "Manufacturing & Production",
    description: "40,000 m² facility with capabilities in fabrication, manufacturing, storage, sand blasting, painting, and testing.",
    href: "/services/manufacturing",
  },
  {
    icon: HardHat,
    title: "Engineering & Construction",
    description: "End-to-end EPC solutions including civil, structural steel, mechanical, piping, FRP/GRP, electrical & instrumentation works.",
    href: "/services/engineering",
  },
  {
    icon: Truck,
    title: "Equipment Rental",
    description: "Aramco & SABIC certified equipment including excavators, cranes, forklifts, dump trucks, and more.",
    href: "/services/equipment-rental",
  },
  {
    icon: Building2,
    title: "Civil Construction",
    description: "Building & infrastructure projects, roads, earthworks, residential housing, electrical & mechanical works.",
    href: "/services/civil-construction",
  },
  {
    icon: Settings,
    title: "Facility Management",
    description: "Comprehensive facility management solutions ensuring operational efficiency, safety, and asset longevity.",
    href: "/services/facility-management",
  },
  {
    icon: ShoppingCart,
    title: "Trading of Industrial Materials",
    description: "Supply of heavy equipment, machinery, compressors, turbines, generators, valves, pumps, and more.",
    href: "/services/trading",
  },
  {
    icon: Cpu,
    title: "IT & Software Solutions",
    description: "Custom software development, business process automation, cloud computing, cyber security, and SAP ERP solutions.",
    href: "/services/it-solutions",
  },
  {
    icon: Layers,
    title: "Scaffolding Services",
    description: "Erection & dismantling, inspection, cup lock, frame & tube scaffolding, hanging & mobile access solutions.",
    href: "/services/scaffolding",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Skilled and certified manpower for plant maintenance, shutdown operations, and long-term projects.",
    href: "/services/manpower",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero1} alt="Our Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Comprehensive Industrial & Engineering Solutions
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">
                Strategic Business Segments
              </h2>
              <p className="text-muted-foreground text-lg">
                Delivering excellence across multiple industrial and construction domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
