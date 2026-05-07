import { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Mountain,
  Truck,
  Building2,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Menu,
  X,
} from 'lucide-react';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const CDC_URL = 'https://cdc.company';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-lato bg-[#f3f4f5] text-gray-900 overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#2e2e2e] border-b border-white/10 ${
          scrolled ? 'py-3 shadow-xl' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-4">
            <img
              src={import.meta.env.BASE_URL + 'Logo_CDC_new.png'}
              alt="CDC"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-8' : 'h-9 md:h-10'}`}
            />
            <div className="h-8 w-px bg-white/30 hidden sm:block" />
            <span className="text-white hidden sm:block" style={{ fontFamily: "'Goodly', Arial, sans-serif", fontWeight: 700, fontSize: scrolled ? '26px' : '30px', lineHeight: 1, letterSpacing: '0.02em' }}>
              AFRICA
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Finance', 'Technology', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors duration-300 uppercase"
                style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
              >
                {item}
              </a>
            ))}
            <a
              href={CDC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-[#ff751f] hover:bg-[#ff751f] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 uppercase tracking-wider"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
            >
              Visit CDC
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-[#2e2e2e] transition-all duration-300 overflow-hidden border-t border-white/10 ${
            menuOpen ? 'max-h-80 py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col items-center gap-5 px-6">
            {['Solutions', 'Finance', 'Technology', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-bold tracking-wider text-gray-300 hover:text-white transition-colors uppercase"
                style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
              >
                {item}
              </a>
            ))}
            <a
              href={CDC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff751f] hover:bg-[#d4580a] text-white text-xs font-bold px-6 py-3 rounded-full uppercase tracking-wider"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
            >
              Visit CDC
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0f0f0f]/75" />
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#ff751f]/15 border border-[#ff751f]/30 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#ff751f] animate-pulse" />
            <span className="text-[#ff751f] text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
              Ropeway Infrastructure for Africa
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-[78px] leading-tight text-white mb-6 animate-slide-up"
            style={{ fontFamily: "'Goodly', Arial, sans-serif", fontWeight: 300 }}
          >
            Building the<br />
            <span className="text-[#ff751f]">Future of Mobility</span><br />
            in Africa
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-150"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}>
            CDC delivers turnkey ropeway infrastructure — from feasibility through operation — connecting communities, unlocking tourism, and serving industry across Africa's most challenging terrain.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <a
              href={CDC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff751f] hover:bg-[#d4580a] text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff751f]/30"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
            >
              Explore Our Solutions <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white hover:border-[#ff751f] text-white hover:text-[#ff751f] font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-all duration-300"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#solutions" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-[#ff751f] transition-colors">
          <span className="text-xs tracking-widest uppercase font-bold" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </section>

      {/* STATS STRIP */}
      <StatsStrip />

      {/* SOLUTIONS */}
      <SolutionsSection />

      {/* FINANCE */}
      <FinanceSection />

      {/* TECHNOLOGY */}
      <TechSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={import.meta.env.BASE_URL + 'Logo_CDC_new.png'} alt="CDC" className="h-8 w-auto opacity-70 grayscale" />
            <div className="h-6 w-px bg-white/20" />
            <span className="text-gray-400" style={{ fontFamily: "'Goodly', Arial, sans-serif", fontWeight: 700, fontSize: '22px', lineHeight: 1 }}>
              AFRICA
            </span>
          </div>
          <p className="text-gray-400 text-sm text-center" style={{ fontFamily: 'Lato, sans-serif' }}>
            &copy; 2026 CDC Cableway Development Company. All rights reserved.
          </p>
          <a
            href={CDC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff751f] hover:text-[#d4580a] text-sm font-bold transition-colors uppercase tracking-wider"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
          >
            cdc.company →
          </a>
        </div>
      </footer>

      <style>{`
        @font-face {
          font-family: 'Goodly';
          src: url('${import.meta.env.BASE_URL}fonts/Goodly-Bold.otf') format('opentype');
          font-weight: 700;
          font-display: swap;
        }
        @font-face {
          font-family: 'Goodly';
          src: url('${import.meta.env.BASE_URL}fonts/Goodly-Light.otf') format('opentype');
          font-weight: 300;
          font-display: swap;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease forwards; }
        .delay-150 { animation-delay: 0.15s; animation-fill-mode: both; }
        .delay-300 { animation-delay: 0.3s; animation-fill-mode: both; }
        .font-lato { font-family: Lato, Arial, sans-serif; }
        .font-goodly { font-family: 'Goodly', Arial, sans-serif; }
        h1, h2 { font-family: 'Goodly', Arial, sans-serif; font-weight: 300; }
      `}</style>
    </div>
  );
}

/* ─── STATS STRIP ──────────────────────────────────────────── */
function StatsStrip() {
  const { ref, inView } = useInView();
  const stats = [
    { value: '54', label: 'African Countries', suffix: '' },
    { value: '40', label: 'Tonne Capacity', suffix: 't+' },
    { value: '60', label: 'Max Slope Angle', suffix: '°' },
    { value: '100', label: 'Years Combined Expertise', suffix: '+' },
  ];
  return (
    <div ref={ref} className="bg-[#ff751f] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="font-bold text-4xl md:text-5xl text-white"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
              {s.value}<span className="text-white/70">{s.suffix}</span>
            </div>
            <div className="text-white/80 text-sm mt-1 uppercase tracking-wider font-bold"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SOLUTIONS ────────────────────────────────────────────── */
const solutions = [
  {
    icon: Building2,
    title: 'Urban Mobility',
    subtitle: 'Congestion-Free City Transit',
    description:
      'Aerial ropeway systems cut across traffic gridlock, linking suburbs to city centres without road infrastructure. Our AirBridge® technology supports high-frequency urban passenger transit with minimal urban footprint.',
    bullets: ['Up to 4,000 passengers/hour', 'Carbon-neutral options', 'Integrates with existing transit'],
    image: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Mountain,
    title: 'Tourism',
    subtitle: 'Kilimanjaro · Madagascar · Beyond',
    description:
      'Unlock Africa\'s most iconic landscapes with premium passenger ropeways. From Kilimanjaro\'s slopes to Madagascar\'s rainforests, we deliver world-class tourism infrastructure that respects fragile ecosystems.',
    bullets: ['Eco-sensitive engineering', 'World Heritage site expertise', 'Year-round operations'],
    image: 'https://images.pexels.com/photos/6650168/pexels-photo-6650168.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: MapPin,
    title: 'Remote Access',
    subtitle: 'Bridging the Unreachable',
    description:
      'Connect isolated communities, national parks, and off-grid facilities where roads are impossible or prohibitively expensive. Ropeways provide cost-effective, reliable access over rivers, valleys, and escarpments.',
    bullets: ['No road infrastructure needed', 'Year-round reliability', 'Community development focus'],
    image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Truck,
    title: 'Mining & Heavy Industry',
    subtitle: '40t+ Payload · 60° Slopes',
    description:
      'Purpose-built cargo ropeway systems for Africa\'s extractive industries. Transport ore, equipment, and bulk materials across terrain no haul road can tackle — safely, efficiently, and continuously.',
    bullets: ['40+ tonne payload capacity', 'Operates on 60° inclines', 'Continuous aerial conveying'],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="Our Solutions" />
        <SectionHeading
          title="Four Pillars of"
          highlight="African Mobility"
        />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-16 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
          From bustling capital cities to remote wilderness, CDC brings proven ropeway technology to every corner of the continent.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <SolutionCard key={sol.title} {...sol} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  icon: Icon, title, subtitle, description, bullets, image, index,
}: {
  icon: React.ElementType; title: string; subtitle: string;
  description: string; bullets: string[]; image: string; index: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#ff751f] hover:shadow-xl transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute top-4 left-4 bg-[#ff751f] p-2.5 rounded-lg">
          <Icon size={20} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-[#ff751f] text-xs font-bold tracking-widest uppercase mb-1"
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
          {subtitle}
        </p>
        <h3 className="font-bold text-2xl text-gray-900 mb-3"
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-5 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff751f] flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
        <a
          href={CDC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#ff751f] hover:text-[#d4580a] text-sm font-bold transition-colors group/link"
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
        >
          Learn More <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

/* ─── FINANCE ──────────────────────────────────────────────── */
function FinanceSection() {
  const { ref, inView } = useInView();
  const pillars = [
    {
      icon: TrendingUp,
      title: 'Public-Private Partnerships',
      body: 'We structure PPP frameworks that align public sector goals with private capital efficiency — delivering infrastructure at scale without overextending government budgets.',
    },
    {
      icon: Building2,
      title: 'Concession Agreements',
      body: 'CDC leads end-to-end concession processes: from bid preparation and financial modelling to long-term O&M contracts, ensuring sustainable revenue streams for all stakeholders.',
    },
    {
      icon: Globe,
      title: 'Development Finance',
      body: 'Our projects are structured to be compatible with DFI financing (IFC, AfDB, DBSA) and blended finance mechanisms, reducing risk and unlocking concessional funding.',
    },
    {
      icon: TrendingUp,
      title: 'Turnkey Project Delivery',
      body: 'From feasibility and environmental studies through engineering, construction, and commissioning — one contract, one partner, zero gaps.',
    },
  ];
  return (
    <section id="finance" className="py-20 px-6 bg-[#f3f4f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <SectionLabel label="Financing & Structuring" />
            <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight mb-6 font-goodly" style={{ fontWeight: 300 }}>
              PPP & Concession<br /><span className="text-[#ff751f]">Expertise</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
              CDC brings deep experience structuring complex infrastructure finance across African markets. We navigate regulatory environments, work with development banks, and close deals that move projects from concept to steel in the ground.
            </p>
            <a
              href={CDC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff751f] hover:bg-[#d4580a] text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
            >
              Discuss a Project <ArrowRight size={16} />
            </a>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const { ref: pRef, inView: pIn } = useInView();
              return (
                <div
                  key={p.title}
                  ref={pRef}
                  className={`bg-white border border-gray-200 hover:border-[#ff751f] rounded-xl p-6 transition-all duration-700 hover:shadow-lg ${
                    pIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 bg-[#ff751f]/15 rounded-lg flex items-center justify-center mb-4">
                    <p.icon size={18} className="text-[#ff751f]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2"
                    style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                    {p.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TECHNOLOGY ───────────────────────────────────────────── */
function TechSection() {
  const { ref, inView } = useInView();
  const specs = [
    { label: 'Max Payload', value: '40t+' },
    { label: 'Max Slope', value: '60°' },
    { label: 'Max Span', value: '5 km' },
    { label: 'System Life', value: '30+ yrs' },
  ];
  return (
    <section id="technology" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionLabel label="Our Technology" />
        <SectionHeading title="AirBridge" highlight="® Ropeway Systems" />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center mb-16 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
          Proprietary aerial infrastructure technology engineered for Africa's most demanding environments — combining Swiss precision with local operational reality.
        </p>

        <div
          ref={ref}
          className={`relative rounded-lg overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Hero image strip */}
          <div
            className="relative h-80 md:h-96"
            style={{
              backgroundImage: `url('${import.meta.env.BASE_URL}hero-bg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10 md:px-16">
              <div className="max-w-lg">
                <h3 className="text-3xl md:text-4xl text-gray-900 mb-4 font-goodly" style={{ fontWeight: 300 }}>
                  Built for Africa's<br /><span className="text-[#ff751f]">Toughest Terrain</span>
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Whether spanning a Rift Valley gorge or ascending a volcano's flank, AirBridge® systems are engineered for continuous, low-maintenance operation in extreme conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Spec bar */}
          <div className="bg-gray-100 border-t border-[#ff751f]/20 grid grid-cols-2 md:grid-cols-4">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`p-6 text-center border-r border-gray-200 last:border-r-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="font-bold text-3xl text-[#ff751f] mb-1"
                  style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                  {s.value}
                </div>
                <div className="text-gray-600 text-xs uppercase tracking-wider font-bold"
                  style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          {[
            { title: 'Eco-Minimal Footprint', body: 'Towers are the only ground contact — no roads, no clearance, no habitat destruction. Perfect for protected areas and fragile ecosystems.' },
            { title: 'All-Weather Operations', body: 'Systems engineered for tropical heat, high-altitude cold, and coastal humidity. Redundant drives ensure >99% operational availability.' },
            { title: 'Digital Monitoring', body: 'Real-time telemetry, predictive maintenance, and remote diagnostics reduce downtime and operational costs across the full asset lifecycle.' },
          ].map((f, i) => {
            const { ref: fRef, inView: fIn } = useInView();
            return (
              <div
                key={f.title}
                ref={fRef}
                className={`bg-white border border-gray-200 hover:border-[#ff751f] rounded-lg p-6 transition-all duration-700 ${fIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-full h-1 bg-[#ff751f] rounded mb-4" />
                <h4 className="font-bold text-gray-900 text-base mb-2"
                  style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                  {f.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ──────────────────────────────────────────────── */
function ContactSection() {
  const { ref, inView } = useInView();
  return (
    <section id="contact" className="py-20 px-6 bg-[#f3f4f5]">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionLabel label="Get In Touch" />
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-goodly" style={{ fontWeight: 300 }}>
            Ready to Connect<br /><span className="text-[#ff751f]">Africa's Future?</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
            Whether you represent a government authority, development bank, mining company, or tourism operator — we want to hear about your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={CDC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#ff751f] hover:bg-[#d4580a] text-white font-bold px-10 py-4 rounded text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
            >
              <Globe size={16} /> Visit cdc.company
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Globe, label: 'Website', value: 'cdc.company', href: CDC_URL },
              { icon: Mail, label: 'Email', value: 'info@cdc.company', href: 'mailto:info@cdc.company' },
              { icon: Phone, label: 'Enquiries', value: 'Via cdc.company', href: CDC_URL },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') && !c.href.startsWith('mailto') ? '_blank' : undefined}
                rel={c.href.startsWith('http') && !c.href.startsWith('mailto') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-3 bg-white border border-gray-200 hover:border-[#ff751f] rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-[#ff751f]/15 group-hover:bg-[#ff751f]/25 rounded-lg flex items-center justify-center transition-colors">
                  <c.icon size={20} className="text-[#ff751f]" />
                </div>
                <span className="text-gray-600 text-xs uppercase tracking-wider font-bold"
                  style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                  {c.label}
                </span>
                <span className="text-gray-900 text-sm font-bold"
                  style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
                  {c.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SHARED COMPONENTS ────────────────────────────────────── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex justify-center mb-4">
      <span className="inline-flex items-center gap-2 text-[#ff751f] text-xs font-bold tracking-widest uppercase"
        style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
        <span className="w-6 h-px bg-[#ff751f]" />
        {label}
        <span className="w-6 h-px bg-[#ff751f]" />
      </span>
    </div>
  );
}

function SectionHeading({ title, highlight }: { title: string; highlight: string }) {
  return (
    <h2 className="text-4xl md:text-5xl text-gray-900 text-center mb-6 font-goodly" style={{ fontWeight: 300 }}>
      {title} <span className="text-[#ff751f]">{highlight}</span>
    </h2>
  );
}
