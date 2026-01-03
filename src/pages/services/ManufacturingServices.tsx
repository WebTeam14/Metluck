import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Layers, Paintbrush, FlaskConical, Warehouse, Shield } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const capabilities = [
  { icon: Factory, title: "Fabrication", description: "State-of-the-art fabrication services for industrial components." },
  { icon: Layers, title: "Manufacturing", description: "High-quality manufacturing of industrial parts and equipment." },
  { icon: Warehouse, title: "Storage", description: "Secure storage facilities for materials and finished products." },
  { icon: Paintbrush, title: "Sand Blasting & Painting", description: "Professional surface preparation and coating services." },
  { icon: FlaskConical, title: "Testing", description: "Comprehensive quality testing and inspection services." },
  { icon: Shield, title: "Quality Assurance", description: "Rigorous QA/QC processes ensuring highest standards." },
];

const ManufacturingServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero2} alt="Manufacturing & Production" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Manufacturing & Production
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              40,000 m² Production Facility
            </motion.p>
          </div>
        </section>

        {/* Factory Overview */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  Our Production Facility
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our manufacturing facility spans 40,000 m² and is equipped with modern machinery 
                  and technology to handle high-quality industrial fabrication and production requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Total Land Area: 40,000 m²
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Modern fabrication equipment
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Certified quality processes
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Experienced workforce
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img src={hero2} alt="Factory" className="rounded-lg shadow-industrial w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Our Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive manufacturing and production capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
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

export default ManufacturingServices;
