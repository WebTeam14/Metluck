import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Building, Globe } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Team Members" },
  { icon: Building, value: "500+", label: "Projects Completed" },
  { icon: Globe, value: "3", label: "Countries" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero2} alt="About Metluck Group" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Building Excellence Since 2008
            </motion.p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-8">
                Metluck Group
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Metluck Group is a diversified multinational organization delivering excellence 
                in engineering, construction, industrial services, manufacturing, and infrastructure 
                solutions across Saudi Arabia, India, and the Middle East.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since our establishment in 2008, we have been supporting major industries with 
                reliable, safe, and innovative solutions aligned with Aramco and SABIC standards. 
                With headquarters in Al Jubail, Saudi Arabia, we have built a reputation for 
                quality, safety, and timely project delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 gradient-primary">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-primary-foreground"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding section-alt">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-industrial p-10"
              >
                <div className="service-icon mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver high-quality engineering, construction, and industrial solutions 
                  through innovation, skilled manpower, and global standards while ensuring 
                  safety, sustainability, and client satisfaction.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-industrial p-10"
              >
                <div className="service-icon mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally trusted industrial and infrastructure partner, 
                  recognized for technical excellence, reliability, and long-term 
                  value creation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KSA & India Operations */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Presence
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2">
                Operations
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-industrial p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  KSA Operations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Industrial construction, plant maintenance, shutdown services, fabrication, 
                  and infrastructure projects across the Kingdom of Saudi Arabia.
                </p>
              </div>
              <div className="card-industrial p-8">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                  India Operations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real estate development including residential, commercial, and mixed-use 
                  projects throughout India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
