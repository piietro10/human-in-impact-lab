import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Feather,
  HeartHandshake,
  Lightbulb,
  Menu,
  Repeat,
  Smartphone,
  Sparkles,
  UserRound,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { HiLogo } from "@/components/hi-logo";
import heroImg from "@/assets/hero.jpg";
import planpazLogo from "@/assets/planpaz-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Human In — Tecnologia para a mudança individual",
      },
      {
        name: "description",
        content:
          "A Human In desenvolve aplicações com o objetivo de causar impacto no âmbito social, colaborando no combate a problemas socioambientais por meio da mudança individual.",
      },
      {
        property: "og:title",
        content: "Human In — Tecnologia para a mudança individual",
      },
      {
        property: "og:description",
        content:
          "Empresa de tecnologia de impacto social. Humanização e inovação no combate a problemas socioambientais por meio da mudança individual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// TODO: substituir pelo endereço real do site do Planpaz
const PLANPAZ_URL = "https://planpaz.com.br";

const NAV_LINKS = [
  { label: "Produtos", href: "#produtos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como atuamos", href: "#como-atuamos" },
  { label: "Nossa essência", href: "#essencia" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

const TEAM = [
  "Integrante 1",
  "Integrante 2",
  "Integrante 3",
  "Integrante 4",
  "Integrante 5",
];

const PILLARS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Smartphone,
    title: "Aplicações com propósito",
    text: "Desenvolvemos aplicações com o objetivo de causar impacto no âmbito social — tecnologia a serviço de pessoas, não de métricas.",
  },
  {
    icon: Repeat,
    title: "Método ágil",
    text: "Trabalhamos com Scrum, em Sprints semanais, direcionando tarefas para cada integrante de acordo com sua capacidade e especialização.",
  },
  {
    icon: Users,
    title: "Mudança individual",
    text: "Analisamos problemas reais enfrentados pela população e aplicamos inovação tecnológica para auxiliar as pessoas a combatê-los, criando uma rede em prol de causas em comum.",
  },
];

const VALUES: { icon: LucideIcon; name: string; text: string }[] = [
  {
    icon: HeartHandshake,
    name: "Humanização",
    text: "O humano faz uso da tecnologia, e não o contrário.",
  },
  {
    icon: Lightbulb,
    name: "Inovação",
    text: "Criatividade para resolver problemas com tecnologia.",
  },
  {
    icon: Feather,
    name: "Simplicidade",
    text: "Entregar apenas o necessário para agregar valor.",
  },
  {
    icon: Zap,
    name: "Eficiência",
    text: "Soluções rápidas em cumprir seu propósito.",
  },
  {
    icon: Sparkles,
    name: "Colaboração",
    text: "A realidade social muda a partir da mudança individual.",
  },
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
        <Products />
        <About />
        <HowWeAct />
        <Essence />
        <CtaBand />
        <Team />
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
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" onClick={onCloseMenu}>
          <HiLogo className="size-9" />
          <span className="text-lg font-extrabold tracking-tight">Human In</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
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
          className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={onToggleMenu}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 sm:px-6 pb-6 pt-2 lg:hidden">
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
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-2 md:pb-24">
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
            Somos a Human In: uma empresa de tecnologia focada no
            desenvolvimento de aplicações com o objetivo de causar impacto no
            âmbito social, colaborando no combate a problemas socioambientais
            por meio da mudança individual.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quem-somos"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Conheça nossa história
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              Ver nossos produtos
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
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Quem somos
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Humanização e inovação
            <span className="text-primary">.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Human In é formada por um grupo de cinco estudantes do IFSP
              campus São Miguel Paulista, do curso de Informática para Internet,
              da turma ingressante em 2023.
            </p>
            <p>
              Analisamos problemas reais enfrentados pela população e pensamos
              maneiras de aplicar inovação tecnológica para auxiliar as pessoas
              no combate a tais problemas — de forma a criar uma rede em prol de
              causas em comum, através da participação individual.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Nossa história
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            A empresa surgiu em <strong className="text-foreground">2025</strong>,
            durante a disciplina de Projeto Integrador, com o nome{" "}
            <strong className="text-foreground">AB Studios</strong> — em
            homenagem a um momento importante na vida de um integrante da
            equipe. Em <strong className="text-foreground">2026</strong>,
            realizamos uma reformulação do nome e da marca, para representar
            de forma clara dois dos nossos principais valores:{" "}
            <strong className="text-foreground">humanização</strong> (Human) e{" "}
            <strong className="text-foreground">inovação</strong> (In).
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <p className="text-sm font-bold tracking-tight">2025</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Nasce a <span className="font-semibold text-foreground">AB Studios</span>,
              no Projeto Integrador do IFSP.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-tint p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <p className="text-sm font-bold tracking-tight text-primary">2026</p>
            <p className="mt-1 text-sm leading-relaxed text-accent-foreground">
              Renascemos como <span className="font-semibold">Human In</span>:
              humanização e inovação na identidade da marca.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <div className="flex items-center gap-3">
              <Users className="size-5 shrink-0 text-primary" />
              <p className="text-sm font-semibold">
                5 estudantes · Informática para Internet
              </p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              IFSP campus São Miguel Paulista, turma ingressante em 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Team ----------------------------------- */

function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 border-t border-border/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Nossa equipe
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Quem faz a Human In
          <span className="text-primary">.</span>
        </h2>
        <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {TEAM.map((member) => (
            <article
              key={member}
              className="flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md sm:p-8"
            >
              <span className="inline-flex aspect-square w-full max-w-28 items-center justify-center rounded-full bg-tint text-primary">
                <UserRound className="size-10" />
              </span>
              <p className="mt-4 font-bold tracking-tight">{member}</p>
              <p className="mt-1 text-xs text-muted-foreground">Foto em breve</p>
            </article>
          ))}
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
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Como atuamos
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Da intenção à ação
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nosso trabalho conecta três frentes que se reforçam o tempo todo.
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]"
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

        <blockquote className="mx-auto mt-14 max-w-3xl rounded-4xl border border-border bg-card px-8 py-10 text-center">
          <p className="text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
            Nosso público não tem restrição de gênero, idade ou situação — nos
            interessam as pessoas dispostas a mudar a si mesmas para mudar o
            mundo
            <span className="text-primary">.</span>
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground">
            Para quem construímos.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

/* --------------------------------- Essence --------------------------------- */

function Essence() {
  return (
    <section id="essencia" className="scroll-mt-20 border-t border-border/70">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Nossa essência
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Missão, visão e valores
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <h3 className="text-xl font-bold tracking-tight">Missão</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Produzir soluções tecnológicas efetivas de mobilização e mudança
              individual, conduzindo os usuários a atitudes que contribuam para
              a transformação da realidade social e façam do mundo um lugar
              melhor.
            </p>
          </article>
          <article className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <h3 className="text-xl font-bold tracking-tight">Visão</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Em um mundo de excesso de informação e de designs predatórios que
              manipulam a atenção, queremos trazer uma visão de tecnologia como
              ferramenta para auxiliar humanos na solução de problemas reais —
              não um produto sem impacto, feito apenas para ser consumido e
              vendido.
            </p>
          </article>
        </div>

        <h3 className="mt-14 text-lg font-bold tracking-tight">Nossos valores</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value) => (
            <div
              key={value.name}
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-tint text-primary">
                <value.icon className="size-5" />
              </span>
              <p className="mt-3 font-bold">{value.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <blockquote className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <p className="text-lg font-semibold leading-snug">
              “Seja a mudança que você quer ver no mundo.”
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Mahatma Gandhi
            </p>
          </blockquote>
          <blockquote className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8">
            <p className="text-lg font-semibold leading-snug">
              “Nenhum de nós, incluindo eu, jamais faz grandes coisas. Mas todos
              podemos fazer pequenas coisas, com grande amor, e juntos podemos
              fazer algo maravilhoso.”
            </p>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              Madre Teresa de Calcutá
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Products -------------------------------- */

function Products() {
  return (
    <section
      id="produtos"
      className="scroll-mt-20 border-t border-border/70 bg-secondary/50"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Produtos
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            O que estamos construindo
            <span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cada aplicação da Human In nasce de um problema real e de uma
            pergunta: como essa pessoa pode agir, hoje, de forma concreta?
          </p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <article className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_40px_-20px_color-mix(in_oklab,var(--color-primary)_35%,transparent)]">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-tint px-3 py-1 text-xs font-semibold text-primary">
                Produto Human In
              </span>
              <img
                src={planpazLogo}
                alt="Logo do Planpaz"
                width={128}
                height={128}
                loading="lazy"
                className="size-16 shrink-0 rounded-2xl border border-border bg-background object-cover p-1.5"
              />
            </div>
            <h3 className="mt-5 text-3xl font-extrabold tracking-tight">
              Planpaz<span className="text-primary">.</span>
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              O Planpaz é a primeira aplicação da Human In, criado para
              transformar intenções em ações no dia a dia. Ele conduz cada
              pessoa a pequenas atitudes que trazem mais paz para a própria
              rotina — e, a partir dela, para a comunidade ao redor.
            </p>
            <a
              href={PLANPAZ_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
            >
              Visitar o site do Planpaz
              <ArrowUpRight className="size-4" />
            </a>
          </article>
          <div className="flex flex-col items-start justify-center rounded-3xl border border-dashed border-border bg-card/50 p-8">
            <p className="text-2xl font-extrabold tracking-tight text-ink-soft">
              Mais produtos em caminho<span className="text-primary">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Seguimos analisando problemas reais e desenvolvendo novas
              aplicações — em Sprints semanais, como sempre fizemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CTA band -------------------------------- */

function CtaBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-4xl bg-ink px-6 py-14 text-center sm:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
          Vamos construir um futuro mais humano
          <span className="text-primary">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/70">
          Se sua organização compartilha desse propósito, queremos conversar.
        </p>
        <a
          href="#contato"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
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
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contato
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
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
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
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
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div className="flex items-center gap-3">
          <HiLogo className="size-8" />
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
