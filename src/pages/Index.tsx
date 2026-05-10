import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import {
  Youtube, Sparkles, Zap, Rocket, Play, BarChart3, Megaphone,
  Share2, Bot, ArrowRight, Check, Star, TrendingUp, Eye, Users,
  Calendar, Mail, Brain, Target, Wand2, Send,
} from "lucide-react";

const services = [
  { icon: Youtube, title: "AI Product Promotion", desc: "Long-form YouTube placements and integrations that put your AI product in front of buyers.", tag: "YouTube + Shorts" },
  { icon: Zap, title: "Viral Content Creation", desc: "Reels, Shorts and TikToks engineered for the algorithm — written, shot, and edited end-to-end.", tag: "Short-form" },
  { icon: Play, title: "Product Reviews & Demos", desc: "Authentic, influencer-style reviews that turn features into stories and stories into signups.", tag: "Storytelling" },
  { icon: Rocket, title: "Startup Growth Marketing", desc: "Full-funnel campaigns: positioning, hooks, landing experiments, and paid amplification.", tag: "Growth" },
  { icon: Share2, title: "Social Distribution", desc: "Multi-platform publishing across YouTube, X, LinkedIn, IG, and TikTok with native edits.", tag: "Distribution" },
  { icon: Bot, title: "AI Tool Reviews", desc: "Expert breakdowns and comparisons that establish your AI tool as a category leader.", tag: "Authority" },
];

const steps = [
  { num: "01", icon: Send, title: "Submit your AI product", desc: "Tell us what you've built, who it's for, and where you want to grow." },
  { num: "02", icon: Wand2, title: "We craft a viral strategy", desc: "Hooks, storyboards, scripts and creator pairings — tuned for your ICP." },
  { num: "03", icon: Rocket, title: "We publish & distribute", desc: "Maximum reach across YouTube, Shorts, Reels, and tech communities." },
];

const cases = [
  { name: "PromptForge", category: "AI Writing SaaS", views: "4.2M", growth: "+312%", thumb: "from-violet-500 to-fuchsia-500" },
  { name: "VisionLabs", category: "Computer Vision API", views: "1.8M", growth: "+184%", thumb: "from-cyan-500 to-blue-600" },
  { name: "AgentOps", category: "AI Agents Platform", views: "2.6M", growth: "+221%", thumb: "from-indigo-500 to-purple-600" },
  { name: "VoxAI", category: "Voice Cloning Tool", views: "5.1M", growth: "+402%", thumb: "from-pink-500 to-rose-500" },
  { name: "DataPilot", category: "AI Analytics", views: "980K", growth: "+157%", thumb: "from-emerald-500 to-cyan-500" },
  { name: "Cortexa", category: "RAG Infrastructure", views: "1.3M", growth: "+205%", thumb: "from-amber-500 to-orange-600" },
];

const stats = [
  { icon: Eye, label: "Views Generated", value: "120M+" },
  { icon: Users, label: "Audience Reached", value: "8.4M" },
  { icon: TrendingUp, label: "Avg. Engagement", value: "11.6%" },
  { icon: Rocket, label: "AI Startups Scaled", value: "60+" },
];

const featuredTools = [
  "PromptForge", "VisionLabs", "AgentOps", "VoxAI", "DataPilot", "Cortexa",
  "NeuralFlow", "SynthMind", "RAGstack", "AutoPilotAI", "ModelHub", "InferIQ",
];

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-fade-up");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Strategy call requested",
      description: "We'll reach out within 24 hours with next steps.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "You're in", description: "Weekly AI growth ideas — straight to your inbox." });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <div className="relative">
              <Brain className="w-7 h-7 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/40 rounded-full" />
            </div>
            <span className="text-gradient">NeuroReach AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
            <a href="#contact">Book a Call</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center" data-reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">AI-focused content marketing agency</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              We Make <span className="text-gradient">AI Products</span><br />Go Viral
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We help AI startups grow through powerful content, YouTube promotion, and short-form viral marketing — built for the algorithm and your ICP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow">
                <a href="#contact">Book a Call <ArrowRight className="ml-1" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10">
                <a href="#work">See Our Work</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> AI-focused agency</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Content-driven growth</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Built for SaaS</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Trusted by 60+ startups</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto" data-reveal>
            {stats.map((s) => (
              <Card key={s.label} className="glass border-border p-6 text-center hover:border-primary/50 transition-all">
                <s.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED AI TOOLS MARQUEE */}
      <section className="py-12 border-y border-border/50 overflow-hidden">
        <div className="container mb-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Featured AI Tools We've Promoted</p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...featuredTools, ...featuredTools].map((t, i) => (
              <div key={i} className="mx-8 flex items-center gap-3 text-xl font-semibold text-muted-foreground/70">
                <Bot className="w-5 h-5 text-primary" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mb-16" data-reveal>
            <div className="text-sm text-accent font-semibold mb-3">SERVICES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Marketing engineered for AI startups.</h2>
            <p className="text-muted-foreground text-lg">Six high-leverage services that turn technical AI products into category-defining brands.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Card
                key={s.title}
                data-reveal
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative glass p-7 hover:border-primary/60 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                     style={{ background: "radial-gradient(400px at 50% 0%, hsl(var(--primary) / 0.15), transparent 60%)" }} />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 glow">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-xs text-accent font-semibold mb-2">{s.tag}</div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16" data-reveal>
            <div className="text-sm text-accent font-semibold mb-3">HOW IT WORKS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From product to viral in 3 steps.</h2>
            <p className="text-muted-foreground text-lg">A streamlined system designed for fast-moving AI teams.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.num} data-reveal style={{ animationDelay: `${i * 120}ms` }} className="relative">
                <Card className="glass p-8 h-full hover:border-primary/60 transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-extrabold text-gradient opacity-80">{s.num}</span>
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center neon-border">
                      <s.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-reveal>
            <div className="max-w-2xl">
              <div className="text-sm text-accent font-semibold mb-3">CASE STUDIES</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">AI tools we've helped break through.</h2>
              <p className="text-muted-foreground text-lg">A snapshot of recent campaigns and the growth they delivered.</p>
            </div>
            <Button variant="outline" className="border-primary/40 hover:bg-primary/10 self-start">View all <ArrowRight className="ml-1 w-4 h-4" /></Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <Card key={c.name} data-reveal style={{ animationDelay: `${i * 80}ms` }}
                    className="group glass overflow-hidden hover:border-primary/60 transition-all hover:-translate-y-1">
                <div className={`relative aspect-video bg-gradient-to-br ${c.thumb} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md glass text-xs font-medium">
                    {c.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{c.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-accent font-semibold">
                      <TrendingUp className="w-3 h-3" /> {c.growth}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Eye className="w-3 h-3" /> {c.views} views
                    <span className="mx-1">·</span>
                    <Star className="w-3 h-3 text-accent" /> Featured campaign
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE EMBED */}
      <section className="py-24 md:py-32 relative">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
            <div className="text-sm text-accent font-semibold mb-3 flex items-center justify-center gap-2">
              <Youtube className="w-4 h-4" /> ON YOUTUBE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Watch the work in motion.</h2>
            <p className="text-muted-foreground text-lg">Hand-picked promo videos, demos, and reviews from our channel.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6" data-reveal>
            {[
              "dQw4w9WgXcQ", "ScMzIvxBSi4", "9bZkp7q19f0",
            ].map((id) => (
              <div key={id} className="relative aspect-video rounded-xl overflow-hidden glass border border-border hover:border-primary/60 transition-all">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title="NeuroReach AI promo"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal>
              <div className="text-sm text-accent font-semibold mb-3">ABOUT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">A content-driven agency built only for AI.</h2>
              <p className="text-muted-foreground text-lg mb-6">
                NeuroReach AI is a focused team of strategists, creators, and editors obsessed with one thing: making AI products famous. We don't do generic marketing — we live in the AI space, speak its language, and know exactly what makes a tool go viral.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-native team — we use the tools we promote",
                  "Built for SaaS and developer-first products",
                  "Distribution-first creative process",
                  "Transparent reporting, real growth metrics",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal className="relative">
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "AI-Focused", val: "100%" },
                  { icon: Megaphone, label: "Channels", val: "12+" },
                  { icon: BarChart3, label: "Avg. ROI", val: "6.4x" },
                  { icon: Calendar, label: "Founded", val: "2023" },
                ].map((c, i) => (
                  <Card key={c.label} className={`glass p-6 ${i % 2 ? "mt-8" : ""} hover:border-primary/60 transition-all animate-float`}
                        style={{ animationDelay: `${i * 0.5}s` }}>
                    <c.icon className="w-6 h-6 text-accent mb-3" />
                    <div className="text-3xl font-extrabold text-gradient">{c.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.label}</div>
                  </Card>
                ))}
              </div>
              <div className="absolute -inset-10 bg-primary/10 blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20">
        <div className="container">
          <Card className="glass p-8 md:p-12 neon-border max-w-4xl mx-auto" data-reveal>
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="max-w-md">
                <div className="text-sm text-accent font-semibold mb-2">NEWSLETTER</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Get weekly AI growth ideas</h3>
                <p className="text-sm text-muted-foreground">Tactical playbooks, viral hooks, and AI marketing breakdowns. No fluff.</p>
              </div>
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Input type="email" required placeholder="you@startup.ai" className="bg-background/50 border-border w-full sm:w-72" />
                <Button type="submit" className="bg-gradient-primary text-primary-foreground font-semibold">
                  Subscribe <Mail className="ml-1 w-4 h-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
            <div className="text-sm text-accent font-semibold mb-3">BOOK A STRATEGY CALL</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's make your AI product the next big thing.</h2>
            <p className="text-muted-foreground text-lg">Tell us about your product. We'll send back a 30-min growth strategy call.</p>
          </div>
          <Card className="glass p-6 md:p-10 max-w-2xl mx-auto neon-border" data-reveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Name</label>
                  <Input required name="name" placeholder="Ada Lovelace" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Email</label>
                  <Input required type="email" name="email" placeholder="ada@startup.ai" className="bg-background/50" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Company</label>
                  <Input required name="company" placeholder="NeuralFlow Inc." className="bg-background/50" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">Product link</label>
                  <Input required type="url" name="product" placeholder="https://yourproduct.ai" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-2 block">What are your growth goals? (optional)</label>
                <Textarea name="goals" rows={4} placeholder="We want to launch our new agent product to developers..." className="bg-background/50" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground font-semibold glow">
                Book Strategy Call <Calendar className="ml-1 w-4 h-4" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">We typically respond within 24 hours.</p>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-gradient">NeuroReach AI</span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NeuroReach AI. Built for AI startups.</p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
