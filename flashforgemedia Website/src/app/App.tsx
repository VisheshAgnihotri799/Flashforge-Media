import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  ChevronRight,
} from "lucide-react";

const YELLOW = "#f5c800";

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Work", "Process", "About", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="w-8 h-8 flex items-center justify-center" style={{ background: YELLOW }}>
            <span className="text-black text-xs font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>FF</span>
          </span>
          <span className="text-white text-lg uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}>
            Flashforge
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm uppercase transition-colors duration-200"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = YELLOW)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {l}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-3 text-sm uppercase transition-all duration-200"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, background: YELLOW, color: "#0a0a0a", letterSpacing: "0.1em" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = YELLOW; }}
        >
          Get Started <ArrowRight size={14} />
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-8 pt-2 flex flex-col gap-6" style={{ background: "#0a0a0a" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white uppercase text-sm"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm uppercase self-start"
            style={{ background: YELLOW, color: "#0a0a0a", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }}
            onClick={() => setOpen(false)}
          >
            Get Started <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-24 pt-40 px-6 lg:px-12 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-0 w-1 h-full" style={{ background: YELLOW }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 uppercase text-sm" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
            Social Media Marketing Agency
          </p>
          <h1
            className="uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4rem, 14vw, 13rem)",
              color: "#ffffff",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
            }}
          >
            WE FORGE<br />
            <span style={{ color: YELLOW }}>BRANDS</span><br />
            THAT BURN.
          </h1>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-0 justify-between mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="max-w-sm" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            We build relentless social media presences for brands that refuse to go unnoticed. Strategy. Content. Domination.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#work"
              className="flex items-center gap-3 px-8 py-4 uppercase text-sm transition-all duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, background: YELLOW, color: "#0a0a0a", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = YELLOW; }}
            >See Our Work <ArrowRight size={16} /></a>
            <a
              href="#contact"
              className="flex items-center gap-3 px-8 py-4 uppercase text-sm border border-white/20 transition-all duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#fff", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = YELLOW; e.currentTarget.style.color = YELLOW; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}
            >
              Talk To Us
            </a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    { num: "01", title: "Social Strategy", desc: "Data-driven roadmaps that align every post, reel, and story to your growth objectives. We don't guess — we engineer." },
    { num: "02", title: "Content Production", desc: "Scroll-stopping visuals, copy, and video crafted to convert passive viewers into loyal customers." },
    { num: "03", title: "Paid Social", desc: "Precision-targeted ad campaigns across Meta, TikTok, and LinkedIn that consistently outperform industry benchmarks." },
{ num: "05", title: "Community Building", desc: "We grow tight-knit communities around your brand that generate organic reach and genuine advocacy." },
    { num: "06", title: "Analytics & Reporting", desc: "Real-time dashboards and monthly deep-dives that prove ROI and guide smarter decisions." },
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-12" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-20 border-b border-white/10 pb-10"
        >
          <div>
            <p className="uppercase text-sm mb-4" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
              What We Do
            </p>
            <h2 className="uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#fff", lineHeight: 0.9 }}>
              FULL-SPECTRUM<br />SOCIAL POWER
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-10 cursor-pointer transition-all duration-300"
              style={{ background: "#0a0a0a" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#111"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#0a0a0a"; }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase" style={{ fontFamily: "'Barlow', sans-serif", color: YELLOW, fontWeight: 600, letterSpacing: "0.1em" }}>{s.num}</span>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: YELLOW }} />
              </div>
              <h3 className="uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#fff", lineHeight: 1 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                {s.desc}
              </p>
              <div className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: YELLOW }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { client: "Novalux Skincare", category: "Brand Launch · Paid Social", result: "+420% reach in 60 days", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop&auto=format", span: "md:col-span-2", height: "h-96" },
    { client: "Kinetica Sportswear", category: "Influencer Campaign", result: "12M impressions", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=700&fit=crop&auto=format", span: "md:col-span-1", height: "h-96" },
    { client: "Vexa Financial", category: "Content Strategy", result: "3.8x follower growth", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=500&fit=crop&auto=format", span: "md:col-span-1", height: "h-72" },
    { client: "Ember Coffee Co.", category: "Community Building", result: "200K organic community", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=500&fit=crop&auto=format", span: "md:col-span-2", height: "h-72" },
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-12" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="uppercase text-sm mb-4" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
            Case Studies
          </p>
          <div className="flex items-end justify-between">
            <h2 className="uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#fff", lineHeight: 0.9 }}>
              RESULTS THAT<br />SPEAK LOUD
            </h2>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 text-sm uppercase transition-colors duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = YELLOW; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
            >
              View All Work <ChevronRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.client}
              className={`${p.span} relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className={`relative ${p.height} overflow-hidden`} style={{ background: "#111" }}>
                <img src={p.img} alt={p.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="uppercase text-xs mb-2" style={{ fontFamily: "'Barlow', sans-serif", color: YELLOW, fontWeight: 600, letterSpacing: "0.15em" }}>{p.category}</p>
                  <h3 className="uppercase mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff" }}>{p.client}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}>{p.result}</p>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ background: YELLOW }}>
                  <ArrowUpRight size={18} color="#0a0a0a" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { num: 140, suffix: "+", label: "Brands Scaled" },
    { num: 98, suffix: "%", label: "Client Retention" },
    { num: 320, suffix: "M+", label: "Monthly Impressions" },
    { num: 8, suffix: "x", label: "Average ROI" },
  ];

  return (
    <section className="py-32 px-6 lg:px-12" style={{ background: YELLOW }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="uppercase leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#0a0a0a", lineHeight: 0.9 }}>
                <AnimatedNumber target={s.num} suffix={s.suffix} />
              </div>
              <p className="uppercase" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.7rem", color: "rgba(0,0,0,0.55)", letterSpacing: "0.2em" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { n: "01", title: "Discovery", desc: "We deep-dive into your brand, audience, competitors, and goals to build an unshakeable foundation." },
    { n: "02", title: "Strategy", desc: "A bespoke 90-day roadmap covering channels, content pillars, posting cadence, and paid amplification." },
    { n: "03", title: "Execution", desc: "Our in-house team produces and publishes content with military precision. Zero guesswork." },
    { n: "04", title: "Optimise", desc: "Weekly data reviews and continuous A/B testing ensure we compound results over time." },
  ];

  return (
    <section id="process" className="py-32 px-6 lg:px-12" style={{ background: "#0f0f0f" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="uppercase text-sm mb-4" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
            How We Work
          </p>
          <h2 className="uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#fff", lineHeight: 0.9 }}>
            THE FORGE<br />PROCESS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className="p-10"
              style={{ background: "#0f0f0f" }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-6" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "3.5rem", color: "rgba(245,200,0,0.12)", lineHeight: 1 }}>{s.n}</div>
              <h3 className="uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#fff" }}>{s.title}</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const testi = [
    {
      quote: "Flashforge didn't just grow our social presence — they completely transformed how our brand shows up online. The results in 90 days were beyond anything we projected.",
      name: "Maya Ortega",
      role: "CMO, Novalux Skincare",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
    },
    {
      quote: "These guys are obsessively focused on outcomes. Our TikTok went from zero to 180K followers in four months. The paid social work alone paid back 11x.",
      name: "James Weatherford",
      role: "Founder, Kinetica Sportswear",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
    },
    {
      quote: "Working with Flashforge felt like having a world-class marketing team embedded in our company. Strategic, creative, and relentlessly accountable.",
      name: "Aisha Thompson",
      role: "Brand Director, Ember Coffee Co.",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&auto=format",
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12" style={{ background: "#0a0a0a" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="uppercase text-sm mb-4" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
            Testimonials
          </p>
          <h2 className="uppercase leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#fff", lineHeight: 0.9 }}>
            CLIENTS WHO<br />TRUST US
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {testi.map((t, i) => (
            <motion.div
              key={t.name}
              className="p-10 cursor-pointer transition-all duration-300"
              style={{ background: active === i ? "#111" : "#0d0d0d", border: active === i ? `1px solid ${YELLOW}` : "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-5xl mb-6" style={{ color: active === i ? YELLOW : "rgba(255,255,255,0.1)", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>"</div>
              <p className="mb-8" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                {t.quote}
              </p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" style={{ filter: "grayscale(40%)" }} />
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", letterSpacing: "0.05em" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 lg:px-12" style={{ background: "#0a0a0a" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase text-sm mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
              About Flashforge
            </p>
            <h2 className="uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff", lineHeight: 0.9 }}>
              WE DON'T DO<br />
              <span style={{ color: YELLOW }}>AVERAGE.</span>
            </h2>
            <p className="mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
              Flashforge Media was born from frustration with agencies that talk big and deliver little. Founded in 2026, we've built our reputation on one thing: results that are impossible to ignore.
            </p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}></p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 uppercase text-sm transition-all duration-200"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, background: YELLOW, color: "#0a0a0a", letterSpacing: "0.12em" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = YELLOW; }}
              >
                Work With Us <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 overflow-hidden" style={{ background: "#111" }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                alt="Flashforge team collaborating"
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(20%)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(245,200,0,0.12) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute -bottom-6 -left-6 px-8 py-6" style={{ background: YELLOW }}>
              <div className="uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#0a0a0a", lineHeight: 1 }}>Since</div>
              <div className="uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2.5rem", color: "#0a0a0a", lineHeight: 1 }}>2026</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Social Strategy", "Content Production", "Paid Social", "Influencer Marketing", "Community Growth", "Brand Identity", "Analytics"];
  return (
    <div className="py-6 overflow-hidden border-y" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0a" }}>
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 uppercase text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: i % 2 === 0 ? "#fff" : YELLOW, letterSpacing: "0.15em" }}>
            {item}
            <span style={{ color: YELLOW, fontSize: "1.2rem" }}>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSending(true);
  try {
    const res = await fetch("https://formspree.io/f/mnjylown", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setSent(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch {
    alert("Something went wrong. Please try again.");
  } finally {
    setSending(false);
  }
};

  return (
    <section id="contact" className="py-32 px-6 lg:px-12" style={{ background: "#0f0f0f" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <div>
            <p className="uppercase text-sm mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, color: YELLOW, letterSpacing: "0.2em" }}>
              Let's Talk
            </p>
            <h2 className="uppercase leading-none mb-8" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#fff", lineHeight: 0.9 }}>
              READY TO<br />
              <span style={{ color: YELLOW }}>IGNITE</span><br />
              YOUR BRAND?
            </h2>
            <p className="mb-12" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.8 }}>
              Tell us about your brand and goals. We'll respond within 24 hours with a tailored proposal.
            </p>
            <div className="space-y-6">
              {[
                { label: "Email", val: "hello@flashforgemedia.com" },
                { label: "Phone", val: "+1 (310) 555-0182" },
                { label: "Location", val: "Los Angeles · New York · London" },
              ].map((c) => (
                <div key={c.label}>
                  
                  
                </div>
              ))}
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex flex-col justify-center items-start">
                <div className="mb-4" style={{ fontSize: "4rem", color: YELLOW, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>✓</div>
                <h3 className="uppercase mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", color: "#fff" }}>Message Received</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>We'll be in touch within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm uppercase" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: YELLOW, letterSpacing: "0.15em" }}>Send another →</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { key: "name", label: "Your Name", type: "text" },
                  { key: "email", label: "Email Address", type: "email" },
                  { key: "company", label: "Company", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block uppercase text-xs mb-2" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>{f.label}</label>
                    <input
                      type={f.type}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-0 py-4 bg-transparent border-b outline-none text-white transition-colors duration-200"
                      style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, borderColor: "rgba(255,255,255,0.12)", borderTop: "none", borderLeft: "none", borderRight: "none" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = YELLOW; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block uppercase text-xs mb-2" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em" }}>Tell Us About Your Goals</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b outline-none text-white resize-none transition-colors duration-200"
                    style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, borderColor: "rgba(255,255,255,0.12)", borderTop: "none", borderLeft: "none", borderRight: "none" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = YELLOW; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                  />
                </div>
               <button
  type="submit"
  disabled={sending}
  className="flex items-center gap-3 px-10 py-5 uppercase text-sm transition-all duration-200 w-full justify-center"
  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, background: YELLOW, color: "#0a0a0a", letterSpacing: "0.12em", opacity: sending ? 0.6 : 1 }}
  onMouseEnter={(e) => { if (!sending) e.currentTarget.style.background = "#fff"; }}
  onMouseLeave={(e) => { if (!sending) e.currentTarget.style.background = YELLOW; }}
>
  {sending ? "Sending..." : "Send Message"} <ArrowRight size={16} />
</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-16 border-t" style={{ background: "#0a0a0a", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 flex items-center justify-center" style={{ background: YELLOW }}>
                <span className="text-black text-xs font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>FF</span>
              </span>
              <span className="text-white text-lg uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.15em" }}>Flashforge Media</span>
            </div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: "26rem" }}>
              We forge brands that refuse to be ignored. Social media marketing that moves culture, not just metrics.
            </p>
          </div>
          <div>
            <p className="uppercase text-xs mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: YELLOW, letterSpacing: "0.2em" }}>Navigation</p>
            <div className="space-y-3">
              {["Services", "Work", "Process", "About", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm uppercase transition-colors duration-200" style={{ fontFamily: "'Barlow', sans-serif", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = YELLOW; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}>
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="uppercase text-xs mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, color: YELLOW, letterSpacing: "0.2em" }}>Follow Us</p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <a key={i} href="https://www.instagram.com/media_flashforge"  target="_blank" rel="noopener noreferrer  className="w-10 h-10 flex items-center justify-center border border-white/10 transition-all duration-200"
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = YELLOW; el.style.background = YELLOW; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.background = "transparent"; }}>
                  <Icon size={16} style={{ color: "rgba(255,255,255,0.5)" }} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
            © 2026 Flashforge Media. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "rgba(255,255,255,0.25)" }}>
            Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
