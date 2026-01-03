import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, MapPin, Clock, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import hero1 from "@/assets/hero-1.jpg";

const openings = [
  {
    title: "Project Engineer",
    location: "Al Jubail, Saudi Arabia",
    type: "Full-time",
    experience: "5+ years",
    department: "Engineering",
  },
  {
    title: "Site Supervisor",
    location: "Dammam, Saudi Arabia",
    type: "Full-time",
    experience: "3+ years",
    department: "Operations",
  },
  {
    title: "Safety Officer",
    location: "Riyadh, Saudi Arabia",
    type: "Full-time",
    experience: "4+ years",
    department: "HSE",
  },
  {
    title: "Mechanical Engineer",
    location: "Al Jubail, Saudi Arabia",
    type: "Full-time",
    experience: "5+ years",
    department: "Engineering",
  },
  {
    title: "QA/QC Engineer",
    location: "Yanbu, Saudi Arabia",
    type: "Full-time",
    experience: "4+ years",
    department: "Quality",
  },
  {
    title: "Welding Supervisor",
    location: "Al Khobar, Saudi Arabia",
    type: "Full-time",
    experience: "6+ years",
    department: "Operations",
  },
];

const culture = [
  { icon: Users, title: "Team Collaboration", description: "Work with diverse, skilled professionals" },
  { icon: Award, title: "Growth Opportunities", description: "Continuous learning and career development" },
  { icon: Heart, title: "Work-Life Balance", description: "We value your personal time" },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Job Application - ${formData.position}`;
    const body = `
Job Application

Applicant Details:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Position Applied For: ${formData.position}

Cover Message:
${formData.message || "No additional message"}
    `.trim();

    const mailtoLink = `mailto:careers@metluckgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    
    toast.success("Email client opened. Please send the email to complete your application.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img src={hero1} alt="Careers" className="w-full h-full object-cover" />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Careers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Build Your Future With Us
            </motion.p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Join Us
              </span>
              <h2 className="text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Our Culture
              </h2>
              <p className="text-muted-foreground">
                At Metluck Group, we believe our people are our greatest asset.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {culture.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-8 text-center"
                >
                  <div className="service-icon mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="section-padding section-alt">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Open Positions
              </span>
              <h2 className="text-4xl font-heading font-bold text-foreground mt-2">
                Current Openings
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {openings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-industrial p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {job.department}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-foreground mt-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="flex-shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Apply Now
                </h2>
                <p className="text-muted-foreground">
                  Submit your application and we'll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Position Applied For *
                    </label>
                    <Input
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="Enter position"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cover Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Button type="submit" className="btn-hero">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
