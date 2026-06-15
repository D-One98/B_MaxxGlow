/** Developed by Divintech for Belkhariya Maxx Glow - 2026
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Droplets, 
  Paintbrush, 
  CheckCircle2, 
  X, 
  Menu, 
  ArrowRight, 
  MessageSquare, 
  Clock, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Check,
  Building,
  Sparkles,
  ShieldAlert,
  Flame,
  Sun,
  Lock
} from 'lucide-react';

interface LogoProps {
  className?: string;
}

const BelkhariyaLogo: React.FC<LogoProps> = ({ className = "w-11 h-11" }) => (
  <img 
    src="/Gemini_Generated_Image_krfzvpkrfzvpkrfz.jpg" 
    alt="Belkhariya Maxx Glow Logo" 
    className={`${className} object-contain shrink-0 rounded-md`} 
  />
);

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: {
    coverage: string;
    dilution: string;
    finish: string;
    coates: string;
  };
  image: string;
  imageAlt: string;
}

const PRODUCTS: Product[] & { image: string; imageAlt: string }[] = [
  {
    id: "cement-primer",
    name: "Cement Primer",
    tagline: "High-Adhesion Undercoat",
    description: "Formulated with premium synthetic polymers to provide exceptional anchoring, alkali resistance, and sealing on plaster, concrete, and brickwork surfaces.",
    features: [
      "Outstanding alkali & efflorescence resistance",
      "Superior substrate penetration and binding",
      "Reduces topcoat paint consumption by 30%",
      "Fast drying & environmentally compliant"
    ],
    specs: {
      coverage: "120 - 140 sq.ft / Litre / Coat",
      dilution: "1:1 with pure water",
      finish: "Matt & White opaque",
      coates: "1 - 2 Coats"
    },
    // Added image paths
    image: "/primer.png", 
    imageAlt: "Cement Primer Buckets"
  },
  {
    id: "wp-universal",
    name: "Waterproof Universal Wall Putty",
    tagline: "Ultimate Moisture Barrier",
    description: "Premium white cement-based putty infused with advanced water-repellent polymers. Engineered to provide a 100% waterproof shield and a glass-smooth finish, eliminating dampness and extending topcoat life in extreme weather.",
    features: [
      "Active water-repellent molecular structure",
      "Exceptional whiteness & ultra-smooth finish",
      "Significantly reduces topcoat paint consumption",
      "Zero curing required after application"
    ],
    specs: {
      coverage: "15 - 20 sq.ft / kg / 2 Coats",
      dilution: "35% - 40% water by weight",
      finish: "Ultra Smooth White",
      coates: "2 Coats recommended"
    },
    image: "/waterproof.png", 
    imageAlt: "Waterproof Wall Putty Bag"
  },
  {
    id: "white-cement-putty",
    name: "White Cement Based Wall Putty",
    tagline: "Professional Grade Base",
    description: "High-grade white cement putty designed to fill fine pores in concrete and plaster. It creates a highly breathable, superior-adhesion base layer that prevents flaking and perfectly anchors premium commercial topcoats.",
    features: [
      "Excellent bonding strength to plaster surfaces",
      "Prevents flaking and peeling of expensive paints",
      "Highly durable and breathable layer",
      "Cost-effective solution for bulk housing projects"
    ],
    specs: {
      coverage: "18 - 22 sq.ft / kg / 2 Coats",
      dilution: "35% - 40% clean water",
      finish: "Smooth Matte White",
      coates: "2 Coats"
    },
    image: "/putty.png", 
    imageAlt: "White Cement Wall Putty Bag"
  },
  {
    id: "acrylic-distemper",
    name: "Acrylic Distemper",
    tagline: "Ultra-Rich Matte Finish",
    description: "A water-based interior wall paint that offers a premium, smooth matte aesthetic while remaining highly breathable and incredibly cost-effective for large projects.",
    features: [
      "Rich color retention technology",
      "Smooth, uniform non-reflective matte finish",
      "Excellent coverage with high washability",
      "Perfect for mass residential & advertising projects"
    ],
    specs: {
      coverage: "150 - 180 sq.ft / Litre / Coat",
      dilution: "40% - 50% by weight with water",
      finish: "Smooth Matte",
      coates: "2 Coats recommended"
    },
    // Added image paths
    image: "/distemper.png",
    imageAlt: "Acrylic Distemper Buckets"
  },
  {
    id: "water-thinnable-paint",
    name: "Water Thinnable Paint",
    tagline: "Eco-Friendly Pro Coating",
    description: "Our advanced eco-friendly formula optimized for rapid application, offering maximum hiding capability, high opacity, and non-yellowing durability.",
    features: [
      "Zero-toxic low VOC (Volatile Organic Compounds)",
      "Excellent dry and wet rub resistance",
      "Quick touch-up compatibility",
      "Brilliant high-hiding pigmentation profile"
    ],
    specs: {
      coverage: "130 - 150 sq.ft / Litre / Coat",
      dilution: "30% - 40% with potable water",
      finish: "Superb Soft Sheen",
      coates: "2 Coats"
    },
    image: "/waterpaint.png", 
    imageAlt: "Water Thinnable Paint"
  },
  {
    id: "emulsion-coat",
    name: "Emulsion Coat (Interior/Exterior)",
    tagline: "All-Weather Maximum Guard",
    description: "The crown jewel of protection. Formulated with high-grade acrylic resins that shield your building from rain, heavy UV radiation, and microbial growth.",
    features: [
      "Dual action UV shield and cooling formula",
      "Anti-algae, anti-fungal, and dirt-pickup resistant",
      "Washable elastomer structure with anti-peel guarantee",
      "Micro-porous breathable membrane prevents dampness"
    ],
    specs: {
      coverage: "140 - 160 sq.ft / Litre / Coat",
      dilution: "40% - 50% with clean water",
      finish: "Eggshell / Rich Semi-Gloss",
      coates: "2 - 3 Coats for extreme durability"
    },
    // Added image paths
    image: "/emulsion.png",
    imageAlt: "Emulsion Coat Buckets"
  }
];

const HERO_SLIDES = [
  {
    // Slide 1: The user's provided mural billboard showing a painter styling a vibrant red Maxx Glow thinnable painted wall
    url: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=80",
    alt: "Vibrant red Belkhariya Maxx Glow formulation being painted by a professional on site"
  },
  {
    url: "/Gemini_Generated_Image_ge43otge43otge43.png",
    alt: "Slide 2: High efficiency protective coating application on architectural surfaces"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    alt: "Slide 3: Premium architectural luxury exterior finished with Belkhariya extreme shield formula"
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [spotlightSlide, setSpotlightSlide] = useState(0);
  const SPOTLIGHT_IMAGES = [
    "/waterpaint.png", 
    "/waterpaint-side.png", 
    "/waterpaint-wall.png", 
    "/waterpaint-action.png" 
  ];

  useEffect(() => {
    const spotlightTimer = setInterval(() => {
      setSpotlightSlide((prev) => (prev + 1) % SPOTLIGHT_IMAGES.length);
    }, 3500);
    return () => clearInterval(spotlightTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [captchaToken, setCaptchaToken] = useState("");

  const handleEnquiryClick = (productName: string = "") => {
    setSelectedProduct(productName);
    setIsEnquiryModalOpen(true);
    setFormSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the Security Check!");
      return;
    }

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `New B2B Lead: ${formData.fullName} - Maxx Glow Paints`,
      from_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      product_interested: selectedProduct || "General Inquiry",
      client_message: formData.message,
      "h-captcha-response": captchaToken
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        
        setTimeout(() => {
          setFormData({ fullName: "", email: "", phone: "", message: "" });
          setSelectedProduct("");
          setCaptchaToken(""); // <-- Token reset
          setIsEnquiryModalOpen(false);
          setFormSubmitted(false);
        }, 2800);
      } else {
        alert("Server issue. Please call us directly.");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      alert("Failed to send inquiry. Please check your internet connection.");
    }
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen selection:bg-red-600 selection:text-white">
      
      {/* 1. GLOBAL FLOATING ELEMENTS */}
      
      {/* Bottom Left Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* whatsapp FAB */}
        <a 
          href="https://wa.me/919598425257?text=Hello,%20I'm%20interested%20in%20Belkhariya%20Maxx%20Glow%20Paints" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          id="whatsapp-fab"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.188-1.359a9.95 9.95 0 0 0 4.819 1.238h.004c5.507 0 9.99-4.478 9.991-10.005a9.98 9.98 0 0 0-9.99-9.874zm6.052 14.124c-.267.755-1.554 1.378-2.133 1.464-.5.074-1.15.132-3.355-.783-2.82-1.171-4.643-4.036-4.784-4.223-.14-.187-1.144-1.52-1.144-2.9 0-1.38.724-2.058.981-2.331.258-.273.565-.34.754-.34.188 0 .376.002.538.01.17.008.397-.065.621.474.223.54.764 1.86.829 1.995.066.134.11.29.02.467-.09.177-.134.29-.267.447-.134.156-.282.35-.403.47-.135.133-.277.278-.12.548.156.27.695 1.145 1.49 1.854.795.709 1.463.928 1.669 1.012.207.085.328.064.449-.074.12-.138.522-.607.662-.813.14-.207.283-.166.478-.094.195.073 1.24.584 1.455.692.216.108.358.162.411.253.053.09.053.522-.214 1.277z"/>
          </svg>
          <span className="absolute left-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            WhatsApp B2B Support
          </span>
        </a>
        
        {/* Phone Call FAB */}
        <a 
          href="tel:+919598425257" 
          className="group relative flex items-center justify-center w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300"
          id="phone-fab"
          aria-label="Call Sales Representative"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute left-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
            Call Live Desk
          </span>
        </a>
      </div>

      {/* Right Edge: Sticky Vertical Inquiry Tab */}
      <button
        onClick={() => handleEnquiryClick()}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm tracking-wider uppercase px-4 py-5 rounded-l-xl shadow-2xl transition-all duration-300 transform hover:-translate-x-1 hover:scale-105 select-none [writing-mode:vertical-lr] text-center"
        id="vertical-enquiry-tab"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="flex items-center gap-2 tracking-widest text-center py-2">
          Enquiry Now
        </span>
      </button>

      {/* 2. HEADER & NAVIGATION WITH SUB-BAR */}
      <header className="sticky top-0 z-30 w-full transition-all duration-300">
        
        {/* Top Info Bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 md:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1">
              <a href="tel:+919598425257" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>Contact Our Chief Executive Officer</span>
              </a>
              <a href="mailto:info@belkhariyabmaxxglow.com" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span>info@belkhariyabmaxxglow.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-red-500" /> Mon - Sat: 9:00 AM - 7:00 PM
              </span>
              <span className="hidden md:inline-block h-3 w-[1px] bg-slate-700"></span>
              <span className="hidden md:inline-block bg-red-600/10 text-red-400 font-bold px-2 py-0.5 rounded border border-red-500/20">
                ISO 9001:2015 Verified
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
            
            {/* Logo Area */}
            <div 
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={() => scrollToSection('home')}
              id="header-brand-logo"
            >
              <BelkhariyaLogo className="w-11 h-11" />
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-[10px] text-[#1a4fbf] tracking-widest uppercase leading-none mb-0.5">
                  BELKHARIYA
                </span>
                <span className="font-display font-black text-xl sm:text-2xl text-slate-950 tracking-tight leading-none uppercase">
                  MAXX GLOW
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 font-sans text-sm font-medium text-slate-700">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-600 cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-600 cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-red-600">About Us</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-red-600 cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Products</button>
              <button onClick={() => scrollToSection('quality')} className="hover:text-red-600 cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Quality Control</button>
              <button onClick={() => scrollToSection('blog')} className="hover:text-red-600 cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 cursor-pointer transition-colors py-2 border-b-2 border-transparent hover:border-red-600">Contact Us</button>
            </nav>

            {/* Header Right Action */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleEnquiryClick()}
                className="bg-slate-900 hover:bg-red-600 text-white font-medium text-xs tracking-wider uppercase px-5 py-3 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                id="header-cta-button"
              >
                Instant Quote
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-red-600 focus:outline-none"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel Slider */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-lg shadow-lg absolute left-0 w-full animate-fade-in z-20">
            <div className="px-4 py-6 flex flex-col gap-4 font-semibold text-slate-800">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-red-600 border-b border-slate-50">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-red-600 border-b border-slate-50">About Us</button>
              <button onClick={() => scrollToSection('products')} className="text-left py-2 hover:text-red-600 border-b border-slate-50">Products</button>
              <button onClick={() => scrollToSection('quality')} className="text-left py-2 hover:text-red-600 border-b border-slate-50">Quality Control</button>
              <button onClick={() => scrollToSection('blog')} className="text-left py-2 hover:text-red-600 border-b border-slate-50">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-red-600 border-b border-slate-50">Contact Us</button>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleEnquiryClick();
                }}
                className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium text-sm tracking-widest uppercase py-3.5 rounded-lg shadow mt-2"
              >
                Quick Enquiry
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative relative-overflow bg-slate-900 min-h-[580px] lg:min-h-[680px] flex items-center pt-8 pb-16 lg:py-0">
        
{/* Background Image Slideshow with Crossfade auto-slider */}
        <div className="absolute inset-4 sm:inset-6 rounded-3xl overflow-hidden block z-0">
          {/* Static gradient dark professional-grade coating overlay on top of all sliding images */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Clean Image Slider */}
          {HERO_SLIDES.map((slide, index) => (
            <img 
              key={index}
              className={`w-full h-full object-cover select-none object-center absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              src={slide.url}
              alt={slide.alt}
              referrerPolicy="no-referrer"
            />
          ))}

          {/* Flat, minimalist visual pagination selector overlay */}
          <div className="absolute bottom-6 right-8 z-20 flex gap-2">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-[400ms] ${
                  index === activeSlide ? "bg-red-500 w-6" : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Select Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Hero Content Container */}
        <div className="relative z-25 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6 lg:mt-0">
          
          {/* Glassmorphic card custom aligned on the left */}
          <div className="lg:col-span-8 xl:col-span-7 bg-white/10 backdrop-blur-xl border border-white/15 p-8 sm:p-12 rounded-2xl shadow-2xl mr-auto animate-fade-in-up">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Protective Coatings
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              PAINT THE FUTURE WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dd1c32] via-[#a30a1c] to-[#6f030e] drop-shadow-sm">MAXX GLOW</span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg lg:text-md font-light leading-relaxed mb-8 max-w-xl">
              Engineered for extreme architectural, commercial, and outdoor advertising durability. Belkhariya Maxx Glow offers high-hiding pigmentation, superior weather shielding, and water-thinnable eco-formulas tested for rigorous B2B applications.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => handleEnquiryClick()}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-8 py-4.5 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                id="hero-enquire-cta"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('products')}
                className="bg-slate-850/60 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide px-8 py-4.5 rounded-lg border border-white/15 transition-all text-center hover:border-white/30"
              >
                Explore Product Portfolio
              </button>
            </div>

            {/* Industrial Trust Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Zero Peel Formula</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Water Repellent Tech</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>Low VOC Paints</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* THE NEW KHATARNAAK SPOTLIGHT SECTION: WATER THINNABLE ENAMEL */}
      {/* ============================================================== */}
      <section className="relative py-24 bg-slate-950 overflow-hidden border-t-4 border-red-600">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a4fbf]/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Typography & Features */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                <Zap className="w-4 h-4 text-red-500" /> Flagship Advertising Formulation
              </div>
              
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
                WATER THINNABLE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">ENAMEL COLORS</span>
              </h2>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg font-light">
                The absolute pinnacle of commercial advertising paint. Achieve hyper-vibrant, non-fading wall murals and commercial hoardings with our rapid-drying, eco-friendly water base. No harsh solvents needed.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="bg-red-600/20 text-red-500 p-2.5 rounded-lg"><Droplets className="w-5 h-5"/></div>
                  <div>
                    <h4 className="text-white font-bold text-sm">100% Water Soluble</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Mixes smoothly with potable water, eliminating toxic thinners.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="bg-red-600/20 text-red-500 p-2.5 rounded-lg"><Sun className="w-5 h-5"/></div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Anti-Fading Pigmentation</h4>
                    <p className="text-slate-400 text-xs mt-0.5">Locks in bright reds, blues, and yellows even under harsh UV rays.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleEnquiryClick("Water Thinnable Enamel Paint - Bulk")}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase px-8 py-4.5 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-all duration-300 flex items-center gap-2 group"
              >
                Get Advertising Bulk Rates
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

            {/* Right Dynamic Product Display (WITH CAROUSEL) */}
            <div className="order-1 lg:order-2 relative flex flex-col items-center justify-center">
              {/* Spinning/Glowing ring effect behind the product */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] border border-red-500/20 rounded-full animate-[spin_10s_linear_infinite] border-t-red-600"></div>
                <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] border border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-b-[#1a4fbf]"></div>
              </div>
              
              {/* The Image Carousel Box */}
              <div className="relative z-10 w-full max-w-sm lg:max-w-md aspect-square flex items-center justify-center">
                {SPOTLIGHT_IMAGES.map((imgSrc, index) => (
                  <img 
                    key={index}
                    src={imgSrc}
                    alt={`Water Thinnable Enamel Showcase ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out ${
                      index === spotlightSlide ? "opacity-100 scale-105" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  />
                ))}
              </div>
              {/* Pagination Dots for Carousel */}
              <div className="relative z-20 flex gap-2 mt-6">
                {SPOTLIGHT_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSpotlightSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === spotlightSlide ? "bg-red-500 w-8" : "bg-white/20 hover:bg-white/50 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Floating Spec Tag */}
              <div className="absolute bottom-16 right-0 sm:-right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl animate-bounce" style={{animationDuration: '3s'}}>
                <div className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-1">Coverage</div>
                <div className="text-white font-mono font-bold text-lg">150 sq.ft/L</div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ============================================================== */}
      {/* SHORT SECTION ABOUT BRAND WITH DUAL PROFILES */}
      <section id="about" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-extrabold uppercase text-xs tracking-widest block mb-3 font-display">Synergistic Industrial Alliance</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Our Advanced Corporate Partnership
            </h2>
            <div className="w-16 h-1.5 bg-red-650 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Belkhariya Maxx Glow is brought to life through a powerful industrial alliance. We combine world-class polymer synthesis with a powerhouse marketing and distribution framework.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Manufacturing Profile: Akash Plastics Paints and Chemical */}
            <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e40af]/10 border border-[#1e40af]/20 text-[#1a4fbf] rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                  <Building className="w-3.5 h-3.5" /> Manufacturing Profile
                </div>
                
                <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight leading-snug mb-4">
                  Akash Plastics Paints and Chemical
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  All high-end chemical synthesis, viscosity balancing, and copolymer raw productions are run by <strong>Akash Plastics Paints and Chemical</strong>. Equipped with automated reactor facilities and rigorous diagnostic laboratories, Akash Plastics guarantees that every batch meets elite weather-prevention parameters.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Copolymer Chemical Reactors</strong>: Operating high-volume reactors for pristine emulsion cohesion.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Rigorous Lab QC</strong>: Continual evaluations on substrate adhesion, alkali shielding, and density metrics.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>ISO 13000 Standard Metrics</strong>: Eco-friendly compliance monitoring ensuring minimum harmful VOC footprints.</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e40af]/5 p-4 rounded-xl border border-[#1e40af]/10 flex items-center justify-between text-xs mt-4">
                <span className="text-[#1a4fbf] font-bold">Industrial Synthesis Authority</span>
                <span className="font-mono text-slate-500 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">100% Quality Audited</span>
              </div>
            </div>

            {/* Marketing Profile: Belkhariya Paints */}
            <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-650/20 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                  <Award className="w-3.5 h-3.5" /> Marketing Profile
                </div>
                
                <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight leading-snug mb-4">
                  Belkhariya Paints
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                  Our professional consumer experiences, B2B deal strategies, dealer logistics, and customized architectural catalogs are spearheaded by <strong>Belkhariya Paints</strong>. Belkhariya Paints oversees general distributor setups, on-demand shipping, and project-specific pricing plans.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Wholesale B2B Portals</strong>: Providing tailored enterprise quotations and batch logs inside 2 hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Swift Multi-city Distribution</strong>: Preventing local construction bottlenecking through rapid freight partners.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Customer Success Teams</strong>: Supplying diagnostic wet samples directly to corporate architect forums.</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-600/5 p-4 rounded-xl border border-red-650/10 flex items-center justify-between text-xs mt-4">
                <span className="text-red-700 font-bold">Commercial & Retail Authority</span>
                <span className="font-mono text-slate-500 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">Live Dealer Desks</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PRODUCTS SECTION (4 Core Pillars) */}
      <section id="products" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-extrabold uppercase text-xs tracking-widest block mb-3 font-display">Core Pillars of formulation</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
              Our Professional Product Catalog
            </h2>
            <div className="w-16 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Discover our carefully engineered line of high-grade commercial coatings. Each product class is manufactured strictly to ensure exceptional coverage, durability under load, and precise colors matching global palettes.
            </p>
          </div>

          {/* HORIZONTAL LIST VIEW (Satva Style) */}
          <div className="flex flex-col gap-10">
            {PRODUCTS.map((prod, index) => {
              const icons = [
                <ShieldCheck className="w-5 h-5 text-red-600" />,
                <Paintbrush className="w-5 h-5 text-amber-500" />,
                <Droplets className="w-5 h-5 text-emerald-600" />,
                <Sun className="w-5 h-5 text-indigo-600" />,
                <Sparkles className="w-5 h-5 text-sky-500" />,
                <Building className="w-5 h-5 text-purple-600" />
              ];
              const borderColors = [
                "border-l-4 border-l-red-600",
                "border-l-4 border-l-amber-500",
                "border-l-4 border-l-emerald-500",
                "border-l-4 border-l-indigo-500",
                "border-l-4 border-l-sky-500",    
                "border-l-4 border-l-purple-600"
              ];

              return (
                <div 
                  key={prod.id} 
                  className={`bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-200 transition-all duration-300 flex flex-col md:flex-row overflow-hidden group ${borderColors[index]}`}
                  id={`product-card-${prod.id}`}
                >
                  
                  {/* Left Side: Content & Specs */}
                  <div className="p-8 md:w-3/5 lg:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-slate-50 rounded-lg shadow-sm border border-slate-100">
                        {icons[index]}
                      </div>
                      <h3 className="font-display font-black text-slate-900 text-2xl group-hover:text-red-600 transition-colors">
                        {prod.name}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                      {prod.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">Features :</h4>
                        <div className="space-y-2">
                          {prod.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <ArrowRight className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-700 text-xs font-medium">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Specs */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                         <div className="space-y-2 text-xs">
                          <div className="flex justify-between border-b border-slate-200/50 pb-1">
                            <span className="text-slate-500 font-medium">Coverage:</span>
                            <span className="text-slate-800 font-bold font-mono">{prod.specs.coverage}</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-200/50 pb-1">
                            <span className="text-slate-500 font-medium">Dilution:</span>
                            <span className="text-slate-800 font-bold font-mono">{prod.specs.dilution}</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-200/50 pb-1">
                            <span className="text-slate-500 font-medium">Coats:</span>
                            <span className="text-slate-800 font-bold font-mono">{prod.specs.coates}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-medium">Finish:</span>
                            <span className="text-slate-800 font-bold">{prod.specs.finish}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button 
                        onClick={() => handleEnquiryClick(prod.name)}
                        className="bg-slate-900 hover:bg-red-600 text-white font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-lg shadow-sm transition-colors w-max"
                      >
                        Enquire Specifications
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Product Image Array */}
                  <div className="md:w-2/5 lg:w-1/3 bg-slate-50 p-6 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100">
                    <img 
                      src={prod.image} 
                      alt={prod.imageAlt} 
                      className="w-full h-auto max-h-72 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                    />
                  </div>

                </div>
              );
            })}
          </div>

          {/* Catalog Trust Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mt-12 border border-slate-800 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-650/20 text-red-500 rounded-xl p-3 border border-red-500/20 hidden sm:inline-block">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Need Custom Tint Batches or Bulk Volumes?</h3>
                <p className="text-slate-400 text-xs sm:text-xs mt-1 max-w-xl">
                  We formulate custom viscosity levels and heavy protective metrics for high-volume infrastructure projects. Get tailored corporate contracts and customized pricing maps today.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleEnquiryClick("Custom Bulk Formulation")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-6 py-4.5 rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 w-full md:w-auto text-center"
            >
              Get Corporate Pricing
            </button>
          </div>

        </div>
      </section>

      {/* 5. QUALITY CONTROL SECTION */}
      <section id="quality" className="py-24 bg-white scroll-mt-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Panel Left */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-950 aspect-[4/3] border border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
                
                <img 
                  className="w-full h-full object-cover"
                  src="/quality.png"
                  alt="Industrial Testing and Chemical Lab QC of Paint Coatings"
                  referrerPolicy="no-referrer"
                />

                {/* ISO Trust Badge overlay */}
                <div className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-sm flex items-center gap-4">
                  <div className="bg-red-600 text-white p-2.5 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-xs">ISO 9001:2015 Approved</h4>
                    <p className="text-slate-400 text-[10px] mt-0.5">Continuous evaluation across adhesion, color persistence, and alkali-shield metrics.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Content Right */}
            <div className="lg:col-span-6">
              <span className="text-red-600 font-extrabold uppercase text-xs tracking-widest block mb-3 font-display">Zero-defect Quality System</span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
                Scientifically Tested For Lifetime Durability
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                At Belkhariya Maxx Glow, quality is not a static endpoint—it is the very architecture of our production reactors. Every batch undergoes accelerated weathering simulation to ensure color persistence and polymer bonding strength survive high UV, downpours, and extreme alkaline cement reactions.
              </p>

              {/* Grid of trust characteristics using custom clean iconography */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex gap-4 items-start">
                  <div className="bg-red-50 text-red-650 p-2 rounded-lg mt-1 border border-red-100 flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Durability Assured</h3>
                    <p className="text-slate-500 text-xs">Formulated to resist hairline crack formation, bubbling, damp migration, and persistent peeling issues.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-red-50 text-red-650 p-2 rounded-lg mt-1 border border-red-100 flex-shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Weather Resistance</h3>
                    <p className="text-slate-500 text-xs">Tested to endure harsh seasonal transitions, keeping exterior paints vibrant for years on end.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-red-50 text-red-650 p-2 rounded-lg mt-1 border border-red-100 flex-shrink-0">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-1">Anti-Algae Formula</h3>
                    <p className="text-slate-500 text-xs">Unique biocide additives eliminate mold and black lichen spores, especially in excessive rainfall zones.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-red-50 text-red-650 p-2 rounded-lg mt-1 border border-red-100 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-1">ISO Standards</h3>
                    <p className="text-slate-500 text-xs">Standardized chemical ratios verified periodically to guarantee non-toxic and uniform batches.</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-24 bg-slate-50 border-t border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-extrabold uppercase text-xs tracking-widest block mb-3 font-display">Coating Insights</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mb-4">
              Our Professional Coater's Digest
            </h2>
            <p className="text-slate-600 text-sm">
              Discover tips, chemical breakdowns, and industrial best practices direct from our research lab specialists to maximize substrate quality.
            </p>
          </div>

          {/* 3 simple elegant blog columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Post 1 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Modern painted home facade showing premium coatings"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Guides
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-slate-400 text-[11px] font-medium uppercase font-mono block mb-2">June 02, 2026</span>
                <h3 className="font-display font-bold text-slate-900 text-base mb-3 leading-snug group-hover:text-red-600 transition-colors">
                  Why Plaster Primer is Crucial Before Painting
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-light">
                  Learn how unprimed brickwork leaches alkaline salt that ruins chemical emulsion bonds, and how our prime barrier counters damp migration.
                </p>
                <button 
                  onClick={() => handleEnquiryClick("Inquiry about Plaster Primer guide")}
                  className="mt-auto text-slate-800 hover:text-red-600 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  Read Technical details <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://plus.unsplash.com/premium_photo-1663099416258-7f82682bd2b1?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Acrylic materials and high density liquid paint formulations"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Science
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-slate-400 text-[11px] font-medium uppercase font-mono block mb-2">May 21, 2026</span>
                <h3 className="font-display font-bold text-slate-900 text-base mb-3 leading-snug group-hover:text-red-600 transition-colors">
                  The Acrylic Advantage: Acrylic Resin Resins
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-light">
                  A comprehensive breakdown of how high polymer density acrylic particles bond under high-torque mixing to prevent weather degradation.
                </p>
                <button 
                  onClick={() => handleEnquiryClick("Inquiry about Acrylic Resin guide")}
                  className="mt-auto text-slate-800 hover:text-red-600 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  Read Technical details <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop"
                  alt="Industrial commercial spray coating setup inside facility"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Wholesale
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-slate-400 text-[11px] font-medium uppercase font-mono block mb-2">April 14, 2026</span>
                <h3 className="font-display font-bold text-slate-900 text-base mb-3 leading-snug group-hover:text-red-600 transition-colors">
                  Best Dilution Practices for Spray Painting
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-light">
                  Maximize paint mist uniformity and prevent nozzle clogs. Inside tips for maintaining viscosity targets on big-volume projects.
                </p>
                <button 
                  onClick={() => handleEnquiryClick("Inquiry about Viscosity guides")}
                  className="mt-auto text-slate-800 hover:text-red-600 font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  Read Technical details <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. THE ENQUIRY MODAL (Popup) */}
      {isEnquiryModalOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          
          {/* Modal Overlay backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsEnquiryModalOpen(false)}
          ></div>

          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-105 animate-zoom-in z-10">
            
            {/* Header branding band of modal */}
            <div className="bg-gradient-to-r from-red-600 to-amber-500 p-6 text-white relative">
              <button 
                onClick={() => setIsEnquiryModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 p-1.5 rounded-full transition-colors flex items-center justify-center"
                aria-label="Close Enquiry Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight">
                Quick Enquiry for Maxx Glow Paints
              </h3>
              
              <p className="text-white/80 text-xs mt-1.5 font-light">
                Secure immediate direct bulk prices and custom tinting options directly from our factory floor.
              </p>
            </div>

            {/* Modal Body / Form Container */}
            <div className="p-6 sm:p-8">
              
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 mb-6 shadow-sm">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-900 text-xl mb-2">
                    Enquiry Submitted Successfully!
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mb-1.5 leading-relaxed">
                    Thank you. Your request is registered under reference <span className="font-mono text-xs font-semibold text-red-650 bg-red-50 px-1 py-0.5 rounded">#MGLOW-{Math.floor(10000 + Math.random() * 90000)}</span>.
                  </p>
                  <p className="text-slate-400 text-xs">
                    Our technical support panel will respond in under 12-24 hours with wholesale quotation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name input */}
                  <div>
                    <label htmlFor="fullName" className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    />
                  </div>

                  {/* Two column layout for Email & Phone on sm layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email ID input */}
                    <div>
                      <label htmlFor="email" className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rajesh@enterprise.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      />
                    </div>

                    {/* Phone Number input */}
                    <div>
                      <label htmlFor="phone" className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Product selection dropdown */}
                  <div>
                    <label htmlFor="product" className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                      Select Target Product Category
                    </label>
                    <select 
                      id="product" 
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">General Corporate Enquiry</option>
                      <option value="Cement Primer (Water Thinnable)">Cement Primer (Water Thinnable)</option>
                      <option value="Acrylic Distemper">Acrylic Distemper</option>
                      <option value="Water Thinnable Paint">Water Thinnable Paint</option>
                      <option value="Emulsion Coat (Interior/Exterior)">Emulsion Coat (Interior/Exterior)</option>
                      <option value="Custom Bulk Formulation">Custom Bulk Formulation</option>
                    </select>
                  </div>

                  {/* Message input */}
                  <div>
                    <label htmlFor="message" className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                      Your Message / Bulk Volume Specs
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please specify wall type, square footage, expected shipment timeline, or color requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Official Web3Forms hCaptcha */}
                  <div className="flex justify-center mt-4 mb-4">
                    <HCaptcha
                      sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" 
                      onVerify={(token: string) => setCaptchaToken(token)}
                    />
                  </div>

                  {/* Action row with Red submit button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 mt-6">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-500" /> Data encrypted & secure
                    </span>
                    <button 
                      type="submit"
                      className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg shadow-lg hover:shadow-red-600/20 active:translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
                      id="modal-submit-btn"
                    >
                      Submit B2B Enquiry
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      )}

      {/* QUICK CONTACT BANNER BEFORE FOOTER */}
      <section id="contact" className="py-20 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full pointer-events-none -translate-y-12 translate-x-12"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-red-600 font-extrabold uppercase text-xs tracking-widest block mb-2 font-display">Contract Support Desk</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                  Reach Out Directly to our Corporate Planners
                </h3>
                <p className="text-slate-600 text-sm mt-3 max-w-xl leading-relaxed">
                  Have project coordinates ready? Discuss raw materials, custom tinting processes, accelerated testing guidelines, or general logistics solutions directly.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-xs text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Mr. SK Soni (CEO)</p>
                      <a href="tel:+919598765432" className="text-red-650 font-semibold hover:underline">+91 95987 65432</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Official Mail</p>
                      <a href="mailto:info@belkhariyabmaxxglow.com" className="text-red-650 font-semibold hover:underline">info@belkhariyabmaxxglow.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200/60 shadow-sm">
                <h4 className="font-display font-bold text-slate-900 text-base mb-4">Request a free sample kit</h4>
                <p className="text-slate-500 text-xs mb-6 font-light">We ship customized paint patch samples to prospective construction firms and commercial contractors to verify quality firsthand.</p>
                
                <button
                  onClick={() => handleEnquiryClick("Sample Coating Patch Kit")}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-xs tracking-wider uppercase py-4 rounded-lg shadow-sm transition-all duration-300"
                >
                  Order Sample Patch
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. HEAVY-DUTY DARK FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
            
            {/* Column 1: Logo, brief, social icons squares */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div 
                className="flex items-center gap-3 cursor-pointer select-none"
                onClick={() => scrollToSection('home')}
                id="footer-logo"
              >
                <BelkhariyaLogo className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-sans font-extrabold text-[9px] text-[#3b82f6] tracking-widest uppercase leading-none mb-0.5">
                    BELKHARIYA
                  </span>
                  <span className="font-display font-black text-lg text-white tracking-tight leading-none uppercase">
                    MAXX GLOW
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
                Premium surface chemists supplying reliable, heavy-duty protective undercoats, Acrylic Distempers, and rich Exterior/Interior Emulsions to the real estate, advertising and corporate infrastructure markets.
              </p>

              {/* Social Media Squares */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/people/MaxxGlow-Paint/61585381097052/#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-red-600 text-white rounded transition-colors flex items-center justify-center border border-slate-800"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              
              <a 
                href="https://www.instagram.com/maxxglowpaints/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-red-600 text-white rounded transition-colors flex items-center justify-center border border-slate-800"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/belkhariya-paints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-red-600 text-white rounded transition-colors flex items-center justify-center border border-slate-800"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* X (Twitter) Icon - perfectly aligned with the square theme */}
              <a 
                href="https://x.com/MaxxGlowPaints" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-900 hover:bg-red-600 text-white rounded transition-colors flex items-center justify-center border border-slate-800"
                aria-label="Follow us on X"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            </div>


            {/* Column 2: Get in Touch (Location marker, email, phone) */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <h4 className="font-display font-bold text-slate-100 text-xs uppercase tracking-widest border-l-2 border-red-600 pl-3">
                Get in Touch
              </h4>
              <ul className="space-y-4 text-xs font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400">
                    Kh, No. 664, Tala Pratapgarh-230403, Uttar Pradesh, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href="mailto:info@belkhariyabmaxxglow.com" className="hover:text-white transition-colors">
                    info@belkhariyabmaxxglow.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href="tel:+919598765432" className="hover:text-white transition-colors">
                    +91 95987 65432
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <h4 className="font-display font-bold text-slate-100 text-xs uppercase tracking-widest border-l-2 border-red-600 pl-3">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-white text-left transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-red-500 transition-colors" /> Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white text-left transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-red-500 transition-colors" /> About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="hover:text-white text-left transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-red-500 transition-colors" /> Products Catalog
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('quality')} className="hover:text-white text-left transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-red-500 transition-colors" /> Quality Control
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('blog')} className="hover:text-white text-left transition-colors flex items-center gap-1 group">
                    <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-red-500 transition-colors" /> Science Blog
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Products list */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <h4 className="font-display font-bold text-slate-100 text-xs uppercase tracking-widest border-l-2 border-red-600 pl-3">
                Products Spec
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li>
                  <button onClick={() => scrollToSection('products')} className="hover:text-white text-left transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> Cement Primer
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="hover:text-white text-left transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Acrylic Distemper
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="hover:text-white text-left transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Water Thinnable Paint
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="hover:text-white text-left transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Emulsion Coat (Int/Ext)
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar copyright info */}
          <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-5 text-[11px] text-slate-500 font-light">
            <span>© 2026 Maxx Glow. All Rights Reserved. | Designed & Developed by DivineTech</span>
            <div className="flex gap-6 uppercase tracking-wider">
              <a href="#" onClick={(e) => { e.preventDefault(); handleEnquiryClick("Privacy Policy"); }} className="hover:text-slate-350 transition-colors">Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleEnquiryClick("B2B terms"); }} className="hover:text-slate-350 transition-colors">Terms of Supply</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleEnquiryClick("Sitemap Request"); }} className="hover:text-slate-350 transition-colors font-mono">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
