import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Construction, Forklift, Container, Droplet, Wrench } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

const equipment = [
  { icon: Truck, title: "Excavators & Bulldozers", description: "Heavy earthmoving equipment for construction and excavation projects." },
  { icon: Construction, title: "Mobile Cranes (25-240 Ton)", description: "Certified mobile cranes for all lifting requirements." },
  { icon: Forklift, title: "Forklifts & Loaders", description: "Material handling equipment including skid steer loaders." },
  { icon: Container, title: "Dump Trucks & Flatbeds", description: "Transportation vehicles for materials and equipment." },
  { icon: Truck, title: "Trailers & Tanker Trucks", description: "Heavy-duty trailers and tanker trucks for logistics." },
  { icon: Droplet, title: "Water Pumps & Service Trucks", description: "Pumping equipment and service vehicles for site support." },
];

const EquipmentRental = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero1} alt="Equipment Rental" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Equipment Rental
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Aramco & SABIC Certified Equipment
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
                Premium Equipment Fleet
              </h2>
              <p className="text-lg text-muted-foreground">
                Metluck Group offers Aramco & SABIC certified equipment on hire across Saudi Arabia. 
                Our well-maintained fleet ensures reliable performance for your projects.
              </p>
            </motion.div>

            {/* Equipment Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipment.map((item, index) => (
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

        {/* Certifications */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                  Certified & Compliant
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  All our equipment meets Aramco and SABIC standards, ensuring compliance 
                  and safety for your industrial operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Aramco Certified Equipment
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    SABIC Approved Fleet
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Regular Maintenance & Inspection
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Trained Operators Available
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img src={hero1} alt="Equipment" className="rounded-lg shadow-industrial w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-6">
              Need Equipment for Your Project?
            </h2>
            <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
              Request Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EquipmentRental;
