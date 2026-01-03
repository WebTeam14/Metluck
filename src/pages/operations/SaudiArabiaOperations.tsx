import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Building, Factory, Users, Award } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const highlights = [
  { icon: Building, title: "Headquarters", value: "Al Jubail" },
  { icon: Factory, title: "Manufacturing Facility", value: "40,000 m²" },
  { icon: Users, title: "Workforce", value: "500+ Professionals" },
  { icon: Award, title: "Certifications", value: "Aramco & SABIC" },
];

const locations = [
  "Al Jubail Industrial City",
  "Dammam",
  "Al Khobar",
  "Riyadh",
  "Yanbu",
  "Jeddah",
];

const SaudiArabiaOperations = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero1} alt="Saudi Arabia Operations" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Saudi Arabia Operations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Our Primary Hub for Industrial Excellence
            </motion.p>
          </div>
        </section>

        {/* Highlights */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-6 text-center"
                >
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xl text-primary font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Overview */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  Kingdom-Wide Operations
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Headquartered in Al Jubail, Saudi Arabia, Metluck Group has a strong presence across 
                  the Kingdom. Our KSA operations encompass industrial construction, plant maintenance, 
                  shutdown services, fabrication, and infrastructure projects.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  With over 10+ years of experience working with major clients including Aramco and SABIC, 
                  we have built a reputation for quality, safety, and timely project delivery.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Our Locations</h3>
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
                <img src={hero1} alt="Saudi Operations" className="rounded-lg shadow-industrial w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services in KSA */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Services in Saudi Arabia
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Industrial Construction",
                "Plant Maintenance",
                "Shutdown Services",
                "Fabrication",
                "Equipment Rental",
                "Manpower Supply",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-6"
                >
                  <h3 className="text-lg font-heading font-bold text-foreground">{service}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Partner With Us in Saudi Arabia
            </h2>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Our KSA Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SaudiArabiaOperations;
