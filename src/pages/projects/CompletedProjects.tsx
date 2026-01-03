import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const projects = [
  {
    image: hero1,
    title: "Industrial Plant Construction",
    location: "Al Jubail, Saudi Arabia",
    category: "Industrial",
    year: "2023",
    client: "Major Petrochemical Company",
    description: "Complete construction of industrial manufacturing facility with utilities and infrastructure."
  },
  {
    image: hero2,
    title: "Refinery Maintenance Project",
    location: "Dammam, Saudi Arabia",
    category: "Maintenance",
    year: "2023",
    client: "Saudi Aramco",
    description: "Major turnaround and maintenance project for refinery operations."
  },
  {
    image: hero3,
    title: "Pipeline Installation Project",
    location: "Al Khobar, Saudi Arabia",
    category: "Engineering",
    year: "2023",
    client: "SABIC",
    description: "Installation of industrial pipeline network for chemical transport."
  },
  {
    image: hero2,
    title: "Petrochemical Facility Upgrade",
    location: "Yanbu, Saudi Arabia",
    category: "Industrial",
    year: "2022",
    client: "Saudi Aramco",
    description: "Modernization and upgrade of existing petrochemical processing units."
  },
  {
    image: hero1,
    title: "Manufacturing Plant Setup",
    location: "Al Jubail, Saudi Arabia",
    category: "Manufacturing",
    year: "2022",
    client: "Industrial Client",
    description: "Complete setup of manufacturing facility with production lines."
  },
  {
    image: hero3,
    title: "Electrical Substation Construction",
    location: "Riyadh, Saudi Arabia",
    category: "Electrical",
    year: "2021",
    client: "SEC",
    description: "Construction of high-voltage electrical substation."
  },
];

const CompletedProjects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero1} alt="Completed Projects" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Completed Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Our Track Record of Excellence
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
                  className="card-industrial overflow-hidden group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-8 h-8 text-green-500 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
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

export default CompletedProjects;
