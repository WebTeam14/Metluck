import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Building2, Home, Layers } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const projects = [
  { icon: Building2, title: "Commercial Projects", description: "Modern commercial complexes and office buildings." },
  { icon: Home, title: "Residential Projects", description: "Quality residential developments and housing projects." },
  { icon: Layers, title: "Mixed-Use Developments", description: "Integrated mixed-use commercial and residential spaces." },
];

const locations = [
  "Mumbai",
  "Delhi NCR",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
];

const IndiaOperations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero2} alt="India Operations" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              India Operations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Real Estate Development Excellence
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  Real Estate Development in India
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our India operations focus on real estate development including residential, 
                  commercial, and mixed-use projects across major metropolitan areas.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With a deep understanding of the Indian real estate market and construction 
                  landscape, we deliver quality developments that meet international standards.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Presence Across India</h3>
                <div className="grid grid-cols-2 gap-3">
                  {locations.map((location) => (
                    <div key={location} className="flex items-center gap-2 text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {location}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={hero2} alt="India Operations" className="rounded-lg shadow-industrial w-full" />
              </motion.div>
            </div>

            {/* Project Types */}
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Explore Investment Opportunities in India
            </h2>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Our India Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndiaOperations;
