import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="bg-white text-primary-600 px-3 py-2 rounded inline-block font-bold text-xl mb-4">
              BP
            </div>
            <p className="text-gray-400 mb-4">
              Where medical expertise meets luxury wellness for exceptional aesthetic results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#treatments" className="text-gray-400 hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#experts" className="text-gray-400 hover:text-white transition-colors">Our Experts</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Before & After</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Treatments</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HydraFacial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Botox & Fillers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Body Contouring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Laser Treatments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Skin Rejuvenation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">123 Harley Street, London W1G 6BA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">+44 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">info@beyondmedispa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Beyond Medispa. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;