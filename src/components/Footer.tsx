import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Reliable Homeo Centre" className="h-12 w-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black tracking-wide" style={{ color: '#DC2626' }}>RELIABLE</span>
                <span className="text-sm font-medium tracking-wider" style={{ color: '#6B7280' }}>HOMOEO CENTRE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing gentle, natural, and effective homeopathy care to the people of Hyderabad.
              Your trusted partner in holistic healing.
            </p>
            <div className="flex flex-col items-start gap-4 text-sm text-muted-foreground">
              <div className="flex gap-1 items-center">
                <Phone className="h-4 w-4" />
                <a href="tel:+918686904404" className="hover:text-primary transition-smooth">
                  +91 86869 04404 (Mehdipatnam Branch)
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <Phone className="h-4 w-4" />
                <a href="tel:+917780396837" className="hover:text-primary transition-smooth">
                  +91 77803 96837 (Abids Branch)
                </a>
              </div>
            </div>
          </div>


          {/* Abids Clinic */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Abids Clinic</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  4-1-414, Sagar Plaza, <br />Opposite Sachin Sports,<br />Abids road, Bank Street.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon - Thu & Saturday: 11:30 AM - 2:30 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon, Wed & Saturday: 6 PM - 9 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Sunday: 1 PM to 3 PM</span>
              </div>
            </div>
          </div>

          {/* Mehdipatnam Clinic */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Mehdipatnam Clinic</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  #13-6-437/B/2, Khadar Bagh,<br />
                  Nanal Nagar
                  <br />
                  (Near Quba Masjid & Premier Hospital)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Tuesday & Thursday Only: 5 PM - 8 PM</span>
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
              <Link
                to="/book"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Book Appointment
              </Link>
              <Link
                to="/faq"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                FAQ
              </Link>
              <Link
                to="/blog"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Health Tips
              </Link>
              <Link
                to="/contact_us"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">

            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              © {new Date().getFullYear()} Reliable Homeo Clinics. All rights reserved.
            </p>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link
                to="/privacy_policy"
                className="hover:text-primary transition-smooth"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms_and_conditions"
                className="hover:text-primary transition-smooth"
              >
                Terms and Conditions
              </Link>

              <Link
                to="/cancellation_refund_policy"
                className="hover:text-primary transition-smooth"
              >
                Cancellation & Refund Policy
              </Link>

              <Link
                to="/shipping_and_delivery_policy"
                className="hover:text-primary transition-smooth"
              >
                Shipping & Delivery Policy
              </Link>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
              <span>Contact:</span>

              <a
                href="mailto:info@reliablehomeo.com"
                className="flex items-center gap-2 hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@reliablehomeo.com</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;