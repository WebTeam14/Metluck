import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Settings, Shield, Clock, Users, Wrench } from "lucide-react";
import hero3 from "@/assets/hero-3.jpg";

const services = [
  { icon: Building, title: "Building Maintenance", description: "Comprehensive maintenance for commercial and industrial buildings." },
  { icon: Settings, title: "Mechanical Systems", description: "HVAC, plumbing, and mechanical system maintenance." },
  { icon: Shield, title: "Safety & Security", description: "Security systems management and safety compliance." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock support for facility emergencies." },
  { icon: Users, title: "Staff Management", description: "Trained facility management personnel." },
  { icon: Wrench, title: "Preventive Maintenance", description: "Scheduled maintenance programs for optimal performance." },
];

const FacilityManagement = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero3} alt="Facility Management" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Facility Management
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Comprehensive Facility Solutions
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
                Complete Facility Management
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive facility management solutions ensuring operational efficiency, 
                safety, and asset longevity for your industrial and commercial facilities.
              </p>
            </motion.div>

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
              Need Facility Management Services?
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

export default FacilityManagement;
