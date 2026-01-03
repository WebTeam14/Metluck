import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const projects = [
  {
    image: hero1,
    title: "Industrial Plant Construction",
    location: "Al Jubail, Saudi Arabia",
    category: "Industrial",
    status: "Completed",
    year: "2023",
  },
  {
    image: hero2,
    title: "Refinery Maintenance Project",
    location: "Dammam, Saudi Arabia",
    category: "Maintenance",
    status: "Completed",
    year: "2023",
  },
  {
    image: hero3,
    title: "Infrastructure Development",
    location: "Riyadh, Saudi Arabia",
    category: "Civil",
    status: "Ongoing",
    year: "2024",
  },
  {
    image: hero2,
    title: "Petrochemical Facility Upgrade",
    location: "Yanbu, Saudi Arabia",
    category: "Industrial",
    status: "Completed",
    year: "2022",
  },
  {
    image: hero1,
    title: "Commercial Building Construction",
    location: "Mumbai, India",
    category: "Real Estate",
    status: "Ongoing",
    year: "2024",
  },
  {
    image: hero3,
    title: "Pipeline Installation Project",
    location: "Al Khobar, Saudi Arabia",
    category: "Engineering",
    status: "Completed",
    year: "2023",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero3} alt="Our Projects" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Excellence Delivered Across the Region
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="card-industrial overflow-hidden group">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
                          {project.category}
                        </span>
                        <span className={`px-3 py-1 text-sm font-semibold rounded ${
                          project.status === "Ongoing" 
                            ? "bg-green-500 text-white" 
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
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

export default Projects;
