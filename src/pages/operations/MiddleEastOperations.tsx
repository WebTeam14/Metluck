import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Building, Wrench, Users } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

const services = [
  { icon: Building, title: "Industrial Projects", description: "Large-scale industrial construction and maintenance projects." },
  { icon: Wrench, title: "Maintenance Services", description: "Plant maintenance and turnaround services for industrial clients." },
  { icon: Users, title: "Manpower Supply", description: "Skilled workforce deployment for regional projects." },
  { icon: Globe, title: "Project-Based Operations", description: "Flexible project-based engagement for various industries." },
];

const regions = [
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Oman",
];

const MiddleEastOperations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero3} alt="Middle East Operations" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Middle East Operations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Regional Project-Based Services
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
                  Expanding Across the Middle East
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Building on our strong foundation in Saudi Arabia, Metluck Group extends its 
                  industrial expertise across the Middle East through project-based operations.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our regional presence allows us to serve clients across the GCC with the same 
                  commitment to quality, safety, and excellence that defines our operations.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Regional Coverage</h3>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <div key={region} className="flex items-center gap-2 text-foreground">
                      <Globe className="w-4 h-4 text-primary" />
                      {region}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={hero3} alt="Middle East Operations" className="rounded-lg shadow-industrial w-full" />
              </motion.div>
            </div>

            {/* Services */}
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
              Explore Regional Opportunities
            </h2>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MiddleEastOperations;
