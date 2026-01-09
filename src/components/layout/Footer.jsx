import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="footer-wrapper bg-gray-50">
      {/* Image above footer with border */}
      <div className="w-full flex justify-center border-t border-gray-300">
        <div className="container">
          <div className="flex justify-center">
            <Image
              src="/images/footer-bg.png"
              alt="Footer decorative image"
              width={1200}
              height={200}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-[#ECF1FA] py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Description Column */}
            <div className="flex flex-col items-start">
              <div className="mb-6 w-full max-w-xs">
                <Link href={"/about"}>
  
                  <Image
                    src="/images/logoo.png"
                    alt="Dr. Abhishek Saxena Logo"
                    width={320}
                    height={100}
                    className="h-24 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
                Dr. Abhishek Saxena, a distinguished orthopedic surgeon, brings
                over 10+ years of experience and 500+ successful surgeries.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://www.facebook.com/bonesandjoint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/boneandjoints.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl mb-6 text-gray-800 relative inline-block pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  { href: "/", text: "Home" },
                  { href: "/about", text: "About Us" },
                  { href: "/contact", text: "Contact Us" },
                  { href: "/blogs", text: "Blogs" },
                  { href: "/nutrition-fitness", text: "Nutrition & Fitness" },
                ].map((link) => (
                  <li key={link.href} className="group">
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center group-hover:translate-x-1"
                    >
                      <ChevronRight size={16} className="mr-2 text-blue-500" />
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col">
              <h3 className="font-bold text-xl mb-6 text-gray-800 relative inline-block pb-2">
                <Link href={"/contact"}>Contact Us</Link>
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-500"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <Phone
                    size={20}
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <a
                    href="tel:+918618243967"
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1"
                  >
                    +91 86182 43967
                  </a>
                </li>
                <li className="flex items-start group">
                  <Mail
                    size={20}
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <a
                    href="mailto:abhishek.saxena1120@gmail.com"
                    className="text-gray-700 hover:text-blue-600 transition-all duration-300 break-words group-hover:translate-x-1"
                  >
                    abhishek.saxena1120@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin
                    size={20}
                    className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                  />
                  <address className="text-gray-700 not-italic text-sm leading-relaxed">
                    Dr Abhishek Saxena,
                    <br />
                    near Jeevan Jyoti Hospital,
                    <br />
                    Lajpat Nagar, Ramganj, Ajmer,
                    <br />
                    Rajasthan 305001
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
            <p>
              Copyright © {new Date().getFullYear()} | Powered by{" "}
              <a
                href="https://seocialmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                SEOcial Media Solutions
              </a>
                      
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
