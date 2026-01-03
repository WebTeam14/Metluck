import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Handshake, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Access to major industrial projects",
  "Aramco & SABIC certified partnership",
  "Long-term business relationships",
  "Technical support & resources",
  "Competitive compensation",
  "Growth opportunities",
];

export function PartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border border-primary-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-primary-foreground/20 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6">
              <Handshake className="w-5 h-5" />
              <span className="font-semibold">Partner With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Become a Partner
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Join our network of trusted partners and gain access to major industrial 
              projects across Saudi Arabia and the Middle East. We believe in building 
              long-term relationships based on mutual growth and success.
            </p>
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 bg-primary-foreground text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all group"
            >
              Register as Partner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-heading font-bold mb-6">Partnership Benefits</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
