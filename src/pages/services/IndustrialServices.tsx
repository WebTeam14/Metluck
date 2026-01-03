import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Settings, Cog, Shield, Clock, CheckCircle } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const services = [
  { icon: Wrench, title: "Plant Maintenance & Turnaround", description: "Complete maintenance solutions for industrial plants with minimal downtime." },
  { icon: Settings, title: "Electrical & Instrumentation", description: "Expert electrical and instrumentation services for all industrial applications." },
  { icon: Cog, title: "Mechanical Equipment Overhaul", description: "Comprehensive rotating equipment overhaul and repair services." },
  { icon: Shield, title: "Valve Services", description: "Professional valve maintenance, repair, and replacement services." },
  { icon: Clock, title: "Plant Modification & Shutdown", description: "Planned shutdown services and plant modification projects." },
  { icon: CheckCircle, title: "Technical Support & Maintenance", description: "24/7 technical support and building maintenance services." },
];

const IndustrialServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero1} alt="Industrial Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Industrial Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Complete Industrial Support Solutions
            </motion.p>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Comprehensive Industrial Support
              </h2>
              <p className="text-lg text-muted-foreground">
                We provide complete industrial support services to major industries across Saudi Arabia. 
                Our experienced team ensures safe, efficient, and reliable operations for your facilities.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-8 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Need Industrial Services?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your industrial service requirements.
            </p>
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

export default IndustrialServices;
