import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  {
    name: "OUR SERVICES",
    href: "/services",
    submenu: [
      { name: "Industrial Services", href: "/services/industrial" },
      { name: "Manufacturing & Production", href: "/services/manufacturing" },
      { name: "Engineering & Construction", href: "/services/engineering" },
      { name: "Equipment Rental", href: "/services/equipment-rental" },
      { name: "Civil Construction", href: "/services/civil-construction" },
      { name: "Facility Management", href: "/services/facility-management" },
    ],
  },
  {
    name: "PROJECTS",
    href: "/projects",
    submenu: [
      { name: "Ongoing Projects", href: "/projects/ongoing" },
      { name: "Completed Projects", href: "/projects/completed" },
    ],
  },
  {
    name: "OUR OPERATIONS",
    href: "/operations",
    submenu: [
      { name: "Saudi Arabia", href: "/operations/saudi-arabia" },
      { name: "India", href: "/operations/india" },
      { name: "Middle East", href: "/operations/middle-east" },
    ],
  },
  { name: "BECOME A PARTNER", href: "/partner" },
  { name: "CAREERS", href: "/careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-topbar text-primary-foreground">
        <div className="section-container flex justify-end py-1.5 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-medium">Contact Us</span>
            <div className="flex items-center gap-3">
              <a href="#" className="font-medium">f</a>
              <a href="#" className="font-medium">x</a>
              <a href="#" className="font-medium">in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`bg-background transition-all duration-300 ${
          isScrolled ? "shadow-industrial" : ""
        }`}
      >
        <div className="section-container flex items-center py-4">
          
          {/* LEFT: Logo + Company Name + Navigation */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src={logo}
                alt="Metluck Group"
                className="h-12 w-auto"
              />
              <span className="text-lg font-bold text-topbar text-center leading-tight whitespace-nowrap">
  Metluck <br />
  Group
</span>

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-3 h-3" />}
                  </Link>

                  <AnimatePresence>
                    {item.submenu && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-background border border-border rounded-lg shadow-industrial z-50"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-sm hover:bg-muted hover:text-primary"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </div>

          {/* RIGHT: Search + Language */}
          <div className="ml-auto hidden lg:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="w-28 px-3 py-1.5 text-sm border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <div className="flex items-center gap-1 text-sm font-medium cursor-pointer">
              ENG <ChevronDown className="w-3 h-3" />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="h-1 bg-topbar" />
      </div>

      {/* Contact Info Bar */}
      <div className="bg-background border-b border-border">
        <div className="section-container flex justify-end py-2 text-sm gap-6">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            +966-13
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            info@metluckgroup.com.sa
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="section-container py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm text-muted-foreground"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
