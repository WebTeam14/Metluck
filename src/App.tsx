import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Partner from "./pages/Partner";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import IndustrialServices from "./pages/services/IndustrialServices";
import ManufacturingServices from "./pages/services/ManufacturingServices";
import EngineeringServices from "./pages/services/EngineeringServices";
import EquipmentRental from "./pages/services/EquipmentRental";
import CivilConstruction from "./pages/services/CivilConstruction";
import FacilityManagement from "./pages/services/FacilityManagement";

// Project Pages
import OngoingProjects from "./pages/projects/OngoingProjects";
import CompletedProjects from "./pages/projects/CompletedProjects";

// Operations Pages
import SaudiArabiaOperations from "./pages/operations/SaudiArabiaOperations";
import IndiaOperations from "./pages/operations/IndiaOperations";
import MiddleEastOperations from "./pages/operations/MiddleEastOperations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/industrial" element={<IndustrialServices />} />
          <Route path="/services/manufacturing" element={<ManufacturingServices />} />
          <Route path="/services/engineering" element={<EngineeringServices />} />
          <Route path="/services/equipment-rental" element={<EquipmentRental />} />
          <Route path="/services/civil-construction" element={<CivilConstruction />} />
          <Route path="/services/facility-management" element={<FacilityManagement />} />
          
          {/* Projects Routes */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ongoing" element={<OngoingProjects />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          
          {/* Operations Routes */}
          <Route path="/operations" element={<About />} />
          <Route path="/operations/saudi-arabia" element={<SaudiArabiaOperations />} />
          <Route path="/operations/india" element={<IndiaOperations />} />
          <Route path="/operations/middle-east" element={<MiddleEastOperations />} />
          
          <Route path="/partner" element={<Partner />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
