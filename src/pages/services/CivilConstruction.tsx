import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, MapPin, Home, Zap, Hammer, Layers, Lock, Wrench } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const services = [
  { icon: Building2, title: "Building & Infrastructure Projects", description: "Complete construction of commercial and industrial buildings." },
  { icon: MapPin, title: "Roads & Earthworks", description: "Road construction, grading, and earthwork services." },
  { icon: Home, title: "Residential Housing Projects", description: "Quality residential construction and development." },
  { icon: Zap, title: "Electrical & Mechanical Works", description: "MEP installation and commissioning services." },
  { icon: Hammer, title: "Site Preparation & Foundations", description: "Ground preparation, excavation, and foundation works." },
  { icon: Layers, title: "Structural & Masonry Works", description: "Structural construction and masonry services." },
  { icon: Wrench, title: "Utilities & Infrastructure", description: "Water, sewage, and utility infrastructure installation." },
  { icon: Lock, title: "Security & Control Infrastructure", description: "Security systems and control infrastructure installation." },
];

const CivilConstruction = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero2} alt="Civil Construction" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Civil Construction
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Building Infrastructure Excellence
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Civil Construction Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive civil construction services for residential, commercial, 
                and infrastructure projects across the Kingdom.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-6 text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Start Your Construction Project
            </h2>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CivilConstruction;
