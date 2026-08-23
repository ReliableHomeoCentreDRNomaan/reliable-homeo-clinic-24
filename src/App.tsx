import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import BookAppointment from "./pages/BookAppointment";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ShippingAndDeliveryPolicy from "./pages/ShippingAndDeliveryPolicy";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<BookAppointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy_policy" element={<PrivacyPolicy />} />
              <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
              <Route path="/cancellation_refund_policy" element={<CancellationRefundPolicy />} />
              <Route path="/shipping_and_delivery_policy" element={<ShippingAndDeliveryPolicy />} />
              <Route path="/contact_us" element={<ContactUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
