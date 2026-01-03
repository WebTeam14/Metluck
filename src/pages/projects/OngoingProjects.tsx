import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const projects = [
  {
    image: hero3,
    title: "Infrastructure Development",
    location: "Riyadh, Saudi Arabia",
    category: "Civil",
    year: "2024",
    progress: 65,
    description: "Major infrastructure development project including roads, utilities, and public facilities."
  },
  {
    image: hero1,
    title: "Commercial Building Construction",
    location: "Mumbai, India",
    category: "Real Estate",
    year: "2024",
    progress: 45,
    description: "Modern commercial complex with office spaces and retail areas."
  },
  {
    image: hero2,
    title: "Industrial Plant Expansion",
    location: "Al Jubail, Saudi Arabia",
    category: "Industrial",
    year: "2024",
    progress: 30,
    description: "Expansion of existing petrochemical plant facilities."
  },
];

const OngoingProjects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero3} alt="Ongoing Projects" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Ongoing Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Current Projects in Progress
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial overflow-hidden"
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded">
                        Ongoing
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground font-medium">Progress</span>
                        <span className="text-primary font-bold">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-primary rounded-full"
                        />
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

export default OngoingProjects;
