import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";
import WovenBorder from "./WovenBorder";

export default function Footer() {
  return (
    <footer className="bg-oxblood-dark text-ivory-deep font-body">
      <WovenBorder height={6} />
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="font-display text-xl mb-3 text-ivory">Goan Parampara</h3>
          <p className="mb-4">Handwoven by Heritage, Styled for Today</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/goanparampara" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/1B62sYKVSV/" aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="tracking-wide mb-3 text-gold-light">Information</h4>
          <ul className="space-y-2">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/refund-returns">Refund Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="tracking-wide mb-3 text-gold-light">Discover</h4>
          <ul className="space-y-2">
            <li><a href="/category/sarees">Sarees</a></li>
            <li><a href="/category/accessories">Accessories</a></li>
            <li><a href="/category/jackets">Jackets</a></li>
            <li><a href="/category/gifting">Gifting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="tracking-wide mb-3 text-gold-light">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone size={14} /> +91 88060 38755
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5" /> Campal Trade Centre, Panjim, Goa
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} /> help@goanparampara.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-5 border-t border-gold/30">
        © 2026 Goan Parampara
      </div>
    </footer>
  );
}
