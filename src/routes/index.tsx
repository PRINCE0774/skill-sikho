import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const skills = [
  "90 Din Me ₹1 Lakh Tak Earning Roadmap",
  "High-Income Money Skills",
  "Client Kaise Laye (Step-by-Step)",
  "Daily Income Setup",
  "Zero Investment Se Start",
  "Mobile Se Kaam Karne Ka Tarika",
];

const audience = [
  "College Students", "School Students (18+)", "Beginners", "Job Seekers",
  "Ghar Se Earn Karna Chahte Hain", "Hindi Medium", "English Medium", "Part-Time Earners",
];

const learn = [
  { icon: "💰", text: "90 Din Me ₹1 Lakh Earning Plan" },
  { icon: "📈", text: "High-Income Money Skill" },
  { icon: "🤝", text: "Client / Order Kaise Laye" },
  { icon: "🏦", text: "Daily Payment Setup" },
  { icon: "🔥", text: "Fast Growth Strategy" },
  { icon: "🧠", text: "Money Mindset" },
  { icon: "📱", text: "Sirf Mobile Se Kaam" },
  { icon: "🎯", text: "Real Practical Method" },
];

const benefits = [
  "Step-by-Step Video Classes", "Practical Money-Making Method", "Lifetime Access",
  "Regular Updates", "Community Support", "Real Case Studies", "Beginner Friendly",
];

const testimonials = [
  { name: "Rohit", text: "45 din me maine apni pehli ₹22,000 ki earning kar li. Method bilkul practical hai." },
  { name: "Aman", text: "Course join karne ke baad 2 mahine me ₹60,000+ earn kar chuka hoon." },
  { name: "Priya", text: "Ghar baithe mobile se kaam start kiya, ab monthly income aa rahi hai." },
  { name: "Rahul", text: "Sirf ₹39 me itna value milega socha nahi tha. Life change ho gayi." },
];

const whatsappMsgs = [
  "Sir first ₹5000 payment mil gayi ❤️",
  "2 mahine me ₹40k cross ho gaya 🙌",
  "Method bahut clear aur simple hai 👍",
  "₹39 me itna kuch — paisa vasool 🔥",
  "Thank you sir, life set 🙏",
];

const whyUs = [
  "Sirf Money-Oriented Skill", "Beginner Friendly", "Practical Learning",
  "Real Earning Method", "90 Din Ka Clear Roadmap", "Regular Updates", "Support Community",
];

const ENROLL_ID = "enroll";
const ENROLL_URL = "https://rzp.io/rzp/Ijldrn3";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={visible ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
}

function CTA({ label = "🚀 Enroll Now — Only ₹39", sub }: { label?: string; sub?: string }) {
  return (
    <a
      href={ENROLL_URL}
      className="inline-flex flex-col items-center justify-center rounded-2xl bg-primary px-8 py-4 text-primary-foreground font-bold text-lg shadow-glow hover:bg-primary-dark transition-all hover:scale-105 animate-pulse-glow"
    >
      <span>{label}</span>
      {sub && <span className="text-xs font-medium opacity-90 mt-0.5">{sub}</span>}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-foreground leading-tight">
      {children}
    </h2>
  );
}

function CheckCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
      <div className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-primary/10 text-primary font-bold">✓</div>
      <p className="text-base md:text-lg font-medium text-foreground min-w-0">{children}</p>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  const getTarget = () => {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istTime = new Date(now.getTime() + istOffset);
    const endOfDayIst = new Date(
      Date.UTC(istTime.getUTCFullYear(), istTime.getUTCMonth(), istTime.getUTCDate() + 1)
    );
    return new Date(endOfDayIst.getTime() - istOffset);
  };

  useEffect(() => {
    setMounted(true);
    const target = getTarget();
    const calculate = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    };
    setTimeLeft(calculate());
    const id = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(id);
  }, []);

  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-background text-primary px-2 py-3 sm:py-4 text-center shadow-card"
        >
          <div className="text-2xl sm:text-3xl font-black tabular-nums leading-none">
            {mounted ? format(item.value) : "00"}
          </div>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wide mt-1 text-muted-foreground">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground">💰</span>
            <span>Skill<span className="text-primary">Sikho</span></span>
          </div>
          <a
            href={ENROLL_URL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-primary-foreground text-sm font-bold shadow-soft hover:bg-primary-dark transition-colors"
          >
            <span>🚀</span>
            <span>Enroll @ ₹39</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-10 pb-16 md:pt-20 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold mb-6">
              🔥 India's #1 Hinglish Money Skill Course
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] tracking-tight">
              💰 Mobile se <span className="text-primary">Skill Sikho</span>,
              <br className="hidden sm:block" /> Online Earn Karna Start Karo.
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-bold text-primary">
              (90 Din Me ₹1 Lakh Tak Earn Karna)
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Agar aap <b className="text-foreground">Student</b> ho, <b className="text-foreground">Job</b> karte ho ya <b className="text-foreground">Beginner</b> ho…
              yahan aap wo <b className="text-foreground">Money-Oriented Skill</b> seekhoge jisse 90 din me ₹1 lakh tak earning possible hai.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm font-medium">
              <span className="rounded-full bg-secondary px-3 py-1">✅ Hindi + English Easy Learning</span>
              <span className="rounded-full bg-secondary px-3 py-1">✅ No Experience Required</span>
              <span className="rounded-full bg-secondary px-3 py-1">✅ Only ₹39</span>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-8 flex justify-center">
              <CTA sub="90 Din Me ₹1 Lakh Roadmap" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="px-4 py-16 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Is Course Me Kya Milega?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s, i) => (
              <Reveal key={s} delay={i * 60}><CheckCard>{s}</CheckCard></Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><CTA /></div>
        </div>
      </section>

      {/* Audience */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Ye Course Kiske Liye Hai?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audience.map((a, i) => (
              <Reveal key={a} delay={i * 50}><CheckCard>{a}</CheckCard></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learn */}
      <section className="px-4 py-16 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Aap Kya Sikhoge?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learn.map((l, i) => (
              <Reveal key={l.text} delay={i * 60}>
                <div className="h-full rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all text-center">
                  <div className="text-4xl mb-3 animate-float">{l.icon}</div>
                  <p className="font-semibold text-foreground">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><CTA /></div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Aapko Kya Milega?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 60}><CheckCard>{b}</CheckCard></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Student Success Stories</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="rounded-2xl bg-card border border-border p-6 shadow-soft h-full">
                  <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-foreground leading-relaxed">"{t.text}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center font-bold">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">— {t.name}</p>
                      <p className="text-xs text-muted-foreground">Verified Student</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp-style Reviews */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <SectionTitle>Student Reviews</SectionTitle>
          <div className="rounded-3xl p-4 sm:p-6 shadow-card border border-border" style={{ background: "var(--whatsapp-bg)" }}>
            <div className="flex items-center gap-3 pb-3 mb-4 border-b border-border/60">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground grid place-items-center font-bold">S</div>
              <div>
                <p className="font-bold text-sm">Students Group</p>
                <p className="text-xs text-muted-foreground">online</p>
              </div>
            </div>
            <div className="space-y-3">
              {whatsappMsgs.map((m, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-primary text-primary-foreground px-4 py-2.5 shadow-soft">
                      <p className="text-sm md:text-base">{m}</p>
                      <p className="text-[10px] opacity-80 text-right mt-1">10:{20 + i}0 AM ✓✓</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center"><CTA /></div>
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 py-16 bg-secondary/40">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Why Choose Us?</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((w, i) => (
              <Reveal key={w} delay={i * 60}><CheckCard>{w}</CheckCard></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment / Pricing */}
      <section id={ENROLL_ID} className="px-4 py-20 scroll-mt-20">
        <div className="max-w-2xl mx-auto rounded-3xl bg-card border-2 border-primary p-8 md:p-12 text-center shadow-glow">
          <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-bold mb-4">
            🎉 LIMITED TIME OFFER
          </span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-2">
            Enroll Karo Aaj Hi
          </h2>
          <p className="text-muted-foreground mb-6">90 Din Me ₹1 Lakh Earning Roadmap</p>

          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-2xl md:text-3xl font-bold text-muted-foreground line-through decoration-red-500 decoration-2">
              ₹199
            </span>
            <span className="text-5xl md:text-6xl font-black text-primary">₹39</span>
          </div>
          <p className="text-sm font-semibold text-red-600 mb-6">80% OFF — Only Today</p>

          <ul className="text-left space-y-2 mb-8 max-w-sm mx-auto">
            {["Complete Money Skill Course", "90 Din Ka Earning Roadmap", "Lifetime Access", "Community Support", "Regular Updates"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-bold">✓</span>
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mb-6">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Offer aaj raat 11:59 PM IST tak valid hai:</p>
            <CountdownTimer />
          </div>

          <a
            href={ENROLL_URL}
            className="inline-flex items-center gap-2 justify-center rounded-2xl bg-primary text-primary-foreground px-10 py-4 font-extrabold text-lg shadow-card hover:scale-105 transition-transform w-full sm:w-auto animate-pulse-glow"
          >
            <span>🚀</span>
            <span>Enroll Now — Pay ₹39</span>
          </a>
          <p className="text-xs text-muted-foreground mt-3">Instant Access • 100% Safe Payment</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 border-t border-border">
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 font-medium">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
            <a href="#" className="hover:text-primary">Disclaimer</a>
          </div>
          <p>Copyright © 2026 SkillSikho. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden p-3 bg-background/95 backdrop-blur border-t border-border">
        <a
          href={ENROLL_URL}
          className="flex items-center justify-center gap-2 w-full rounded-2xl bg-primary text-primary-foreground py-4 font-bold text-lg shadow-glow"
        >
          <span>🚀</span>
          <span>Enroll Now — <span className="line-through opacity-70">₹199</span> ₹39</span>
        </a>
      </div>

      <div className="h-20 sm:hidden" />
    </div>
  );
}
