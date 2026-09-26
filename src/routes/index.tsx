import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Heart,
  Leaf,
  Menu,
  Recycle,
  Smartphone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import { HiLogo } from "@/components/hi-logo";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Human In — Tecnologia para a mudança individual",
      },
      {
        name: "description",
        content:
          "A Human In desenvolve aplicações de impacto social, colaborando no combate a problemas socioambientais por meio da mudança individual.",
      },
      { property: "og:title", content: "Human In — Tecnologia para a mudança individual" },
      {
        property: "og:description",
        content:
          "Aplicações de tecnologia com propósito: impacto social e combate a problemas socioambientais por meio da mudança individual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como atuamos", href: "#como-atuamos" },
  { label: "Nossas causas", href: "#nossas-causas" },
  { label: "Contato", href: "#contato" },
];

const PILLARS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Smartphone,
    title: "Aplicações com propósito",
    text: "Desenhamos e desenvolvemos produtos digitais que colocam o impacto social no centro da experiência — tecnologia a serviço de pessoas.",
  },
  {
    icon: Users,
    title: "Mudança individual",
    text: "Todo produto nosso parte de uma pergunta simples: como essa pessoa pode agir, hoje, de forma concreta? Acreditamos que grandes transformações começam em gestos pequenos.",
  },
  {
    icon: Leaf,
    title: "Impacto socioambiental",
    text: "Do consumo consciente ao cuidado com a comunidade, direcionamos nosso esforço para os problemas socioambientais mais urgentes do nosso tempo.",
  },
];

const CAUSES: { icon: LucideIcon; label: string }[] = [
  { icon: Leaf, label: "Meio ambiente e clima" },
  { icon: Recycle, label: "Consumo consciente" },
  { icon: Users, label: "Comunidades e inclusão" },
  { icon: BookOpen, label: "Educação" },
  { icon: Heart, label: "Bem-estar" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((v) => !v)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <main>
        <Hero />
        <About />
        <HowWeAct />
        <Causes />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Header --------------------------------- */

function SiteHeader({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-3" onClick={onCloseMenu}>
          <HiLogo className="size-9 text-ink" />
          <span className="text-lg font-extrabold tracking-tight">Human In</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
          >
            Fale com a gente
          </a>
        </nav>

        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={onToggleMenu}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onCloseMenu}
              className="flex items-center justify-between border-b border-border/60 py-4 text-base font-medium"
            >
              {link.label}
              <ArrowRight className="size-4 text-primary" />
            </a>
          ))}
          <a
            href="#contato"
            onClick={onCloseMenu}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Fale com a gente
          </a>
        </nav>
      )}
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[480px] rounded-full bg-tint blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 md:grid-cols-2 md:gap-8 md:pb-24 lg:gap-16">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            <span className="size-2 rounded-full bg-primary" />
            Tecnologia social
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            A mudança começa em você
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos a Human In: uma empresa de tecnologia que desenvolve aplicações
            para causar impacto social, colaborando no combate a problemas
            socioambientais por meio da mudança individual.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quem-somos"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Conheça nossa missão
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Fale com a gente
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-4xl bg-tint"
          />
          <img
            src={heroImg}
            alt="Ilustração de pessoas de diferentes idades erguendo pequenas luzes azuis e plantando uma muda"
            width={1024}
            height={1280}
            className="relative w-full rounded-3xl border border-border bg-card object-cover shadow-[0_24px_60px_-24px_var(--color-primary)]"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- About ---------------------------------- */

function About() {
  return (
    <section id="quem-somos" className="scroll-mt-20 border-t border-border/70">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Quem somos
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Tecnologia com propósito humano
            <span className="text-primary">.</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Human In é uma empresa de tecnologia focada no desenvolvimento de
              aplicações com um objetivo claro: causar impacto no âmbito social.
            </p>
            <p>
              Acreditamos que os grandes desafios socioambientais — das mudanças
              climáticas à desigualdade — só serão enfrentados quando cada pessoa
              tiver, na palma da mão, formas simples e concretas de agir. Por
              isso, construímos produtos que transformam intenção em hábito, e
              hábito em mudança coletiva.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <blockquote className="rounded-2xl border border-border bg-card p-6">
            <p className="text-lg font-semibold leading-snug">
              “Nenhuma mudança é pequena demais quando somada a milhões de
              pessoas.”
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              A crença que guia cada produto que construímos.
            </p>
          </blockquote>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-3xl font-extrabold text-primary">1:1</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tecnologia feita pessoa a pessoa
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-3xl font-extrabold text-primary">∞</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Impacto que se multiplica em rede
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- How we act ------------------------------- */

function HowWeAct() {
  return (
    <section
      id="como-atuamos"
      className="scroll-mt-20 border-t border-border/70 bg-secondary/50"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Como atuamos
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Da intenção à ação
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nosso trabalho conecta três frentes que se reforçam o tempo todo.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-tint text-primary">
                <pillar.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Causes --------------------------------- */

function Causes() {
  return (
    <section id="nossas-causas" className="scroll-mt-20 border-t border-border/70">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Nossas causas
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Onde fazemos a diferença
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Escolhemos as frentes em que a mudança individual tem o maior
              poder de multiplicação. Cada causa orienta os produtos que
              desenhamos e as parcerias que buscamos.
            </p>
          </div>
          <ul className="grid gap-3">
            {CAUSES.map((cause) => (
              <li
                key={cause.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/60"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-tint text-primary">
                  <cause.icon className="size-5" />
                </span>
                <span className="font-semibold">{cause.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CTA band -------------------------------- */

function CtaBand() {
  return (
    <section className="px-5 sm:px-8">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-4xl bg-ink px-6 py-14 text-center sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
          Vamos construir um futuro mais humano
          <span className="text-primary">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
          Se sua organização compartilha desse propósito, queremos conversar.
        </p>
        <a
          href="#contato"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
        >
          Entrar em contato
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

/* --------------------------------- Contact --------------------------------- */

function Contact() {
  return (
    <section id="contato" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contato
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Fale com a gente<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Quer propor uma parceria, tirar uma dúvida ou conhecer nosso
              trabalho? Escreva para nós — respondemos todas as mensagens.
            </p>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const nome = String(data.get("nome") ?? "");
              const email = String(data.get("email") ?? "");
              const mensagem = String(data.get("mensagem") ?? "");
              const subject = encodeURIComponent(
                `Contato pelo site — ${nome || "Visitante"}`,
              );
              const body = encodeURIComponent(
                `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`,
              );
              window.location.href = `mailto:contato@humanin.com.br?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-sm font-medium">
                Nome
                <input
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                E-mail
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="voce@email.com"
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <label className="grid gap-1.5 text-sm font-medium">
                Mensagem
                <textarea
                  name="mensagem"
                  required
                  rows={4}
                  placeholder="Conte um pouco sobre você ou sua organização…"
                  className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
              >
                Enviar mensagem
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */

function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <HiLogo className="size-8 text-ink" />
          <span className="font-extrabold tracking-tight">Human In</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Tecnologia para a mudança individual.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Human In. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
