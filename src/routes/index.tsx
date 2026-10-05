import { Link, createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Feather,
  HeartHandshake,
  Lightbulb,
  Menu,
  Sparkles,
  UserRound,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import planpazLogo from "@/assets/planpaz-logo.png";
import { HiLogo } from "@/components/hi-logo";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Human In — Tecnologia para a mudança individual" },
      {
        name: "description",
        content:
          "A Human In desenvolve aplicações de impacto social para colaborar no combate a problemas socioambientais por meio da mudança individual.",
      },
      { property: "og:title", content: "Human In — Tecnologia para a mudança individual" },
      {
        property: "og:description",
        content: "Empresa brasileira de tecnologia de impacto social e criadora do PlanPaz.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Concepção", href: "#concepcao" },
  { label: "Produtos", href: "#produtos" },
  { label: "Equipe", href: "#equipe" },
];

const TEAM = [
  { name: "Andrew Gabriel", role: "Scrum Master" },
  { name: "João Manuel", role: "Dev Backend" },
  { name: "Leonardo Ciardi", role: "Dev Frontend" },
  { name: "João Paulo", role: "Design" },
  { name: "Matheus Pietro", role: "Design" },
];

const VALUES: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: HeartHandshake, name: "Humanização", text: "O humano faz uso da tecnologia, e não o contrário." },
  { icon: Lightbulb, name: "Inovação", text: "Criatividade para resolver problemas com tecnologia." },
  { icon: Feather, name: "Simplicidade", text: "Entregar apenas o necessário para agregar valor." },
  { icon: Zap, name: "Eficiência", text: "Soluções rápidas em cumprir seu propósito." },
  { icon: Sparkles, name: "Colaboração", text: "A realidade social muda a partir da mudança individual." },
];

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase text-muted-foreground">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}

function Dot() {
  return <span className="text-primary">.</span>;
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Concept />
        <Products />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      <div
        className={cn(
          "mx-auto grid h-14 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center rounded-full border px-2.5 backdrop-blur-xl transition-colors sm:px-3",
          scrolled ? "border-foreground/15 bg-glass" : "border-foreground/10 bg-background/70",
        )}
      >
        <a href="#inicio" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
          <HiLogo className="h-8 w-auto max-w-40 shrink-0 object-contain" />
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav className="mx-auto mt-2 max-w-6xl rounded-lg border border-border bg-card p-3 shadow-xl md:hidden" aria-label="Menu móvel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md px-4 py-3 text-sm hover:bg-accent">
              {link.label}<ArrowRight className="size-4 text-primary" />
            </a>
          ))}
          <Button asChild className="mt-2 w-full rounded-full">
            <Link to="/planpaz" onClick={() => setOpen(false)}>Conheça o PlanPaz <ArrowUpRight /></Link>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="tech-grid relative flex min-h-[92svh] items-center overflow-hidden border-b border-border px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute inset-y-0 right-[12%] hidden w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent lg:block" />
      <div className="pointer-events-none absolute right-[12%] top-[31%] hidden size-2 rounded-full bg-primary/50 lg:block" />
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          <span className="size-1.5 shrink-0 rounded-full bg-primary" />
          <span>Tecnologia de impacto social · IFSP São Miguel Paulista</span>
        </p>
        <h1 className="animate-reveal-up mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-[1.06] [animation-delay:120ms] sm:text-6xl lg:text-7xl">
          Tecnologia que serve<br className="hidden sm:block" /> <span className="text-muted-foreground">às pessoas</span><Dot />
        </h1>
        <p className="animate-reveal-up mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground [animation-delay:220ms] sm:text-lg">
          Desenvolvemos aplicações para causar impacto social e colaborar no combate a problemas socioambientais por meio da mudança individual.
        </p>
        <div className="animate-reveal-up mt-9 flex flex-col items-stretch [animation-delay:320ms] justify-center gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/planpaz">Conheça o PlanPaz <ArrowRight /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#concepcao">Quem somos</a>
          </Button>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-border overflow-hidden rounded-lg border border-border bg-card/40 sm:mt-20">
          {[["2025", "Fundação"], ["5", "Estudantes"], ["1", "Produto"]].map(([number, label]) => (
            <div key={label} className="min-w-0 px-2 py-5 sm:px-5 sm:py-6">
              <p className="text-xl font-semibold sm:text-2xl">{number}</p>
              <p className="mt-1 text-[10px] uppercase text-muted-foreground sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section id="concepcao" className="section-blueprint scroll-mt-32 border-b border-border px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <SectionLabel index="01">Concepção</SectionLabel>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">Human <span className="text-muted-foreground">+</span> In<Dot /></h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Humanização e inovação estão no nome e orientam tudo o que criamos.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {[
              ["Quem somos", "Cinco estudantes do IFSP São Miguel Paulista, curso de Informática para Internet (turma 2023)."],
              ["O que fazemos", "Aplicações de impacto social contra problemas socioambientais."],
              ["O problema", "Tecnologia que explora a atenção em vez de resolver problemas reais."],
              ["Como usamos tecnologia", "Como ferramenta para formar redes em prol de causas comuns, pela participação individual."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} as="article" className="bg-background p-6 transition-colors hover:bg-card">
                <p className="text-xs uppercase text-primary">{t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid border-y border-border md:grid-cols-2">
          <article className="py-8 md:border-r md:border-border md:pr-10">
            <p className="text-xs uppercase text-primary">Missão</p>
            <p className="mt-4 text-lg leading-relaxed">Produzir soluções tecnológicas efetivas de mobilização e mudança individual, estimulando atitudes que transformem a realidade social.</p>
          </article>
          <article className="border-t border-border py-8 md:border-t-0 md:pl-10">
            <p className="text-xs uppercase text-primary">Visão</p>
            <p className="mt-4 text-lg leading-relaxed">Fazer da tecnologia uma ferramenta para humanos resolverem problemas reais, sem explorar ou manipular sua atenção.</p>
          </article>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value) => (
            <article key={value.name} className="group bg-background p-6 transition-colors hover:bg-card">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"><value.icon className="size-5" /></span>
              <h3 className="mt-5 font-medium">{value.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="mx-auto mt-16 max-w-3xl text-center sm:mt-20">
          <p className="text-2xl font-medium leading-snug sm:text-4xl">“Seja a mudança que você quer ver no mundo.”</p>
          <footer className="mt-4 text-xs uppercase text-muted-foreground">Mahatma Gandhi</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="produtos" className="section-graphite scroll-mt-32 border-b border-border px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02">Nossos produtos</SectionLabel>
        <Reveal className="mt-8 flex flex-wrap items-center gap-2 text-xs uppercase text-muted-foreground sm:gap-3">
          <span className="flex items-center rounded-full border border-border px-3 py-1.5"><HiLogo className="h-4 w-auto max-w-20 object-contain" /></span>
          <ArrowRight className="size-3.5 text-primary" />
          <span className="rounded-full border border-border px-3 py-1.5">Projeto</span>
          <ArrowRight className="size-3.5 text-leaf" />
          <span className="flex items-center gap-2 rounded-full border border-leaf/40 bg-leaf-soft px-3 py-1.5 text-leaf"><img src={planpazLogo} alt="" className="size-4 object-contain" /> PlanPaz</span>
        </Reveal>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="group flex min-h-60 items-center justify-center rounded-lg border border-leaf/30 bg-leaf-soft p-8 transition-colors hover:border-leaf/60 sm:min-h-96 sm:p-10">
            <img src={planpazLogo} alt="Logomarca PlanPaz" width={490} height={676} className="max-h-52 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:max-h-80" />
          </div>
          <div>
            <p className="text-xs uppercase text-leaf">Produto principal</p>
            <h2 className="mt-4 text-5xl font-semibold sm:text-7xl">PlanPaz<span className="text-leaf">.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Nosso principal projeto: um aplicativo que incentiva o cultivo de plantas caseiras, transformando pequenas atitudes individuais em impacto socioambiental positivo.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Desenvolvido pela Human In.</p>
            <Button asChild size="lg" className="mt-8 w-full rounded-full transition-transform hover:-translate-y-0.5 sm:w-auto">
              <Link to="/planpaz">Conheça o PlanPaz <ArrowUpRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="equipe" className="section-blueprint scroll-mt-32 border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel index="03">Equipe</SectionLabel>
        <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <h2 className="min-w-0 text-4xl font-semibold leading-tight sm:text-5xl">Quem faz a Human In<Dot /></h2>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
          {TEAM.map((member, index) => (
            <article
              key={member.name}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/40 max-sm:last:col-span-2 max-sm:last:aspect-[7/4] sm:aspect-[3/4]"
            >
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/35 transition-colors group-hover:text-primary/60">
                <UserRound className="size-14" strokeWidth={1} />
              </div>
              <span className="absolute left-4 top-4 font-mono text-xs text-muted-foreground">0{index + 1}</span>
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/90 p-3 backdrop-blur sm:p-4">
                <p className="truncate text-sm font-medium">{member.name}</p>
                <p className="mt-1 text-[10px] uppercase text-primary">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const fieldClass = "rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <section id="contato" className="section-graphite scroll-mt-32 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel index="04">Contato</SectionLabel>
          <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">Vamos construir um futuro mais humano<Dot /></h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Quer propor uma parceria, tirar uma dúvida ou conhecer nosso trabalho? Escreva para nós.</p>
        </div>
        <form
          className="grid gap-4 border-t border-border pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const name = String(data.get("nome") ?? "");
            const email = String(data.get("email") ?? "");
            const message = String(data.get("mensagem") ?? "");
            const subject = encodeURIComponent(`Contato pelo site — ${name || "Visitante"}`);
            const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`);
            window.location.href = `mailto:contato@humanin.com.br?subject=${subject}&body=${body}`;
          }}
        >
          <label className="grid gap-2 text-sm">Nome<input name="nome" required placeholder="Seu nome" className={fieldClass} /></label>
          <label className="grid gap-2 text-sm">E-mail<input name="email" type="email" required placeholder="voce@email.com" className={fieldClass} /></label>
          <label className="grid gap-2 text-sm">Mensagem<textarea name="mensagem" required rows={5} placeholder="Conte um pouco sobre você ou sua organização…" className={cn(fieldClass, "resize-none")} /></label>
          <Button type="submit" size="lg" className="mt-1 rounded-full">Enviar mensagem <ArrowRight /></Button>
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <HiLogo className="h-8 w-auto max-w-40 shrink-0 object-contain" />
        </div>
        <p className="shrink-0 text-right text-[10px] uppercase text-muted-foreground sm:text-xs">© {new Date().getFullYear()} Human In</p>
      </div>
    </footer>
  );
}
