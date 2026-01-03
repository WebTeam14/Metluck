import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Handshake, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import hero2 from "@/assets/hero-2.jpg";

const benefits = [
  "Access to major industrial projects",
  "Aramco & SABIC certified partnership",
  "Long-term business relationships",
  "Technical support & resources",
  "Competitive compensation",
  "Growth opportunities",
  "Networking opportunities",
  "Priority project allocation",
];

const Partner = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    companyType: "",
    servicesOffered: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Partner Registration - ${formData.companyName}`;
    const body = `
Partner Registration Request

Company Details:
- Company Name: ${formData.companyName}
- Contact Person: ${formData.contactPerson}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company Type: ${formData.companyType || "Not specified"}
- Services Offered: ${formData.servicesOffered || "Not specified"}

Additional Message:
${formData.message || "No additional message"}
    `.trim();

    const mailtoLink = `mailto:globaliotschool@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    const opened = window.open(mailtoLink, "_self");

    if (opened) {
      toast.success(
        "Email client opened. Please click Send to complete your registration."
      );
    } else {
      toast.error(
        "Unable to open email client. Please send an email manually to globaliotschool@gmail.com"
      );
    }

    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      companyType: "",
      servicesOffered: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center mt-[120px]">
          <div className="absolute inset-0">
            <img
              src={hero2}
              alt="Become a Partner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>

          <div className="relative z-10 text-center text-primary-foreground">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-heading font-bold mb-4"
            >
              Become a Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-primary-foreground/80"
            >
              Join Our Network of Trusted Partners
            </motion.p>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding gradient-primary text-primary-foreground">
          <div className="section-container">
            <div className="text-center mb-12">
              <Handshake className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-4xl font-heading font-bold mb-4">
                Partnership Benefits
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Join our network and gain access to major industrial projects
                across the Middle East.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  Partner Registration
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    required
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                  />

                  <Input
                    required
                    placeholder="Contact Person"
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactPerson: e.target.value,
                      })
                    }
                  />

                  <Input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <Input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />

                  <Input
                    placeholder="Company Type"
                    value={formData.companyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companyType: e.target.value,
                      })
                    }
                  />

                  <Input
                    placeholder="Services Offered"
                    value={formData.servicesOffered}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        servicesOffered: e.target.value,
                      })
                    }
                  />
                </div>

                <Textarea
                  placeholder="Additional Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <div className="text-center">
                  <Button type="submit" className="btn-hero">
                    Submit Registration
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

export default Partner;
