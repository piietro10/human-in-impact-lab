import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarCheck,
  Droplets,
  Feather,
  HeartHandshake,
  Lightbulb,
  Menu,
  RefreshCw,
  ScanLine,
  Sparkles,
  Sprout,
  UserRound,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { HiLogo } from "@/components/hi-logo";
import planpazLogo from "@/assets/planpaz-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Human In — Tecnologia para a mudança individual" },
      {
        name: "description",
        content:
          "A Human In desenvolve aplicações de impacto social, colaborando no combate a problemas socioambientais por meio da mudança individual.",
      },
      { property: "og:title", content: "Human In — Tecnologia para a mudança individual" },
      {
        property: "og:description",
        content:
          "Empresa brasileira de tecnologia de impacto social. Criadora do PlanPaz.",
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
  { label: "Concepção", href: "#concepcao" },
  { label: "Produtos", href: "#produtos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Equipe", href: "#equipe" },
];

const TEAM = [
  { name: "Integrante 1", role: "Função a definir" },
  { name: "Integrante 2", role: "Função a definir" },
  { name: "Integrante 3", role: "Função a definir" },
  { name: "Integrante 4", role: "Função a definir" },
  { name: "Integrante 5", role: "Função a definir" },
];

const VALUES: { icon: LucideIcon; name: string; text: string }[] = [
  { icon: HeartHandshake, name: "Humanização", text: "O humano faz uso da tecnologia, e não o contrário." },
  { icon: Lightbulb, name: "Inovação", text: "Criatividade para resolver problemas com tecnologia." },
  { icon: Feather, name: "Simplicidade", text: "Entregar apenas o necessário para agregar valor." },
  { icon: Zap, name: "Eficiência", text: "Soluções rápidas em cumprir seu propósito." },
  { icon: Sparkles, name: "Colaboração", text: "A realidade social muda a partir da mudança individual." },
];

/* --------------------------------- Helpers --------------------------------- */

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}

function Dot() {
  return <span className="text-primary">.</span>;
}

/* ---------------------------------- Page ----------------------------------- */

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_80%)]" />
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Products />
        <Concept />
        <Methodology />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Header --------------------------------- */

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
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border pl-3 pr-2 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "border-foreground/15 bg-glass shadow-[0_10px_40px_-15px_var(--color-ink)]" : "border-foreground/10 bg-glass/40"
        }`}
      >
        <a href="#" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <HiLogo className="size-8 rounded-lg" />
          <span className="text-sm font-bold tracking-tight">
            Human<span className="text-primary">.</span>In
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#produtos"
            className="group hidden items-center gap-1.5 rounded-full border border-foreground/10 bg-ink px-4 py-2 text-sm font-medium text-paper transition-all hover:border-primary/60 hover:glow-primary sm:inline-flex"
          >
            Conheça o PlanPaz
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-full border border-foreground/10 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 max-w-5xl rounded-3xl border border-foreground/10 bg-glass p-3 backdrop-blur-xl md:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm hover:bg-foreground/5"
            >
              {l.label}
              <ArrowRight className="size-4 text-primary" />
            </a>
          ))}
          <a
            href="#produtos"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
          >
            Conheça o PlanPaz <ArrowRight className="size-4" />
          </a>
        </nav>
      )}
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center pt-32 pb-20">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      {/* Interface lines */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent lg:block" />
      <div aria-hidden className="pointer-events-none absolute right-[8%] top-[28%] hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 lg:block">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]" /> sprint semanal · ativo
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute left-[7%] bottom-[22%] hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 lg:block">
        human + in · 2026
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" />
            Tecnologia de impacto social · IFSP São Miguel Paulista
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[5.5rem]">
            Tecnologia que serve
            <br />
            <span className="text-muted-foreground">às pessoas</span>
            <Dot />
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Desenvolvemos aplicações com o objetivo de causar impacto no âmbito social, colaborando no combate a problemas
            socioambientais por meio da mudança individual.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#produtos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-primary"
            >
              Ver nossos produtos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#concepcao"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              Nossa concepção
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/40 backdrop-blur">
            {[
              ["2025", "Fundação"],
              ["5", "Estudantes"],
              ["1", "Produto no ar"],
            ].map(([n, l]) => (
              <div key={l} className="px-4 py-5">
                <p className="text-2xl font-semibold tracking-tight">{n}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Products -------------------------------- */

const FEATURES: { icon: LucideIcon; title: string; meta: string; pos: string }[] = [
  { icon: ScanLine, title: "Identificação de plantas", meta: "Espécie reconhecida · 98%", pos: "lg:left-0 lg:top-[8%]" },
  { icon: Droplets, title: "Cuidados personalizados", meta: "Rega a cada 3 dias", pos: "lg:right-0 lg:top-[4%]" },
  { icon: Bell, title: "Lembretes", meta: "Hoje, 18:00", pos: "lg:left-[2%] lg:top-[52%]" },
  { icon: Users, title: "Comunidade", meta: "+ ações coletivas", pos: "lg:right-[1%] lg:top-[46%]" },
  { icon: Sprout, title: "Jardim pessoal", meta: "12 plantas cultivadas", pos: "lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0" },
];

function Products() {
  return (
    <section id="produtos" className="relative scroll-mt-24 border-t border-border py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf/10 blur-[140px]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow index="01">Produto principal</Eyebrow>
              <div className="mt-6 flex items-center gap-4">
                <img src={planpazLogo} alt="Logo do PlanPaz" width={128} height={128} className="size-14 rounded-2xl border border-leaf/30 bg-card object-contain p-1.5" />
                <h2 className="text-6xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                  PlanPaz<span className="text-leaf">.</span>
                </h2>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                “O aplicativo para quem quer fazer a mudança no mundo, de semente em semente.”
              </p>
            </div>
            <a
              href={PLANPAZ_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-leaf/40 bg-leaf-soft px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-leaf hover:glow-leaf"
            >
              Visitar o site do PlanPaz
              <ArrowUpRight className="size-4 text-leaf transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="relative mt-16 lg:h-[720px]">
          <Reveal className="relative z-10 mx-auto w-fit">
            <PhoneMockup />
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:block">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={150 + i * 90} className={`lg:absolute ${f.pos}`}>
                <div className="float-soft group flex w-full items-center gap-3 rounded-2xl border border-foreground/10 bg-glass p-3 pr-5 backdrop-blur-xl transition-colors hover:border-leaf/50 lg:w-72" style={{ animationDelay: `${i * 0.8}s` }}>
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-leaf-soft text-leaf">
                    <f.icon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{f.title}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{f.meta}</p>
                  </div>
                  <span className="ml-auto size-1.5 rounded-full bg-leaf shadow-[0_0_8px_var(--color-leaf)]" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-border p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Mais produtos em desenvolvimento.</span> Seguimos analisando
              problemas reais — em Sprints semanais.
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">em breve</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[280px] rounded-[2.75rem] border border-foreground/15 bg-card p-2.5 glow-leaf sm:w-[310px]">
      <div className="overflow-hidden rounded-[2.2rem] border border-border bg-background">
        <div className="flex items-center justify-between px-5 pt-4 font-mono text-[10px] text-muted-foreground">
          <span>9:41</span>
          <span className="h-5 w-20 rounded-full bg-card" />
          <span>100%</span>
        </div>
        <div className="px-5 pb-6 pt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Bom dia</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">Seu jardim<span className="text-leaf">.</span></p>

          <div className="mt-5 rounded-2xl border border-leaf/25 bg-leaf-soft p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">Impacto da semana</span>
              <Sprout className="size-4 text-leaf" />
            </div>
            <p className="mt-3 text-3xl font-semibold tracking-tight">+4</p>
            <p className="text-[11px] text-muted-foreground">novas mudas plantadas</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-foreground/10">
              <div className="h-full w-2/3 rounded-full bg-leaf" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {[
              ["Manjericão", "Regar hoje"],
              ["Hortelã", "Saudável"],
            ].map(([n, s]) => (
              <div key={n} className="rounded-xl border border-border bg-card p-3">
                <span className="inline-flex size-7 items-center justify-center rounded-lg bg-leaf-soft">
                  <Sprout className="size-3.5 text-leaf" />
                </span>
                <p className="mt-2 text-xs font-medium">{n}</p>
                <p className="text-[10px] text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-card p-3">
            <CalendarCheck className="size-4 text-leaf" />
            <div className="flex-1">
              <p className="text-xs font-medium">Mutirão no bairro</p>
              <p className="text-[10px] text-muted-foreground">Sábado · 32 participantes</p>
            </div>
            <ArrowRight className="size-3.5 text-muted-foreground" />
          </div>

          <div className="mt-5 flex justify-around border-t border-border pt-3 text-muted-foreground">
            <Sprout className="size-4 text-leaf" />
            <ScanLine className="size-4" />
            <Users className="size-4" />
            <UserRound className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Concept --------------------------------- */

function Concept() {
  return (
    <section id="concepcao" className="relative scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="02">Concepção</Eyebrow>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Human <span className="text-muted-foreground">+</span> In
              <Dot />
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Dois dos nossos principais valores no próprio nome: <span className="text-foreground">humanização</span> (Human)
              e <span className="text-foreground">inovação</span> (In).
            </p>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              A Human In é formada por um grupo de cinco estudantes do IFSP campus São Miguel Paulista, do curso de
              Informática para Internet, da turma ingressante em 2023.
            </p>
            <p>
              Analisamos problemas reais enfrentados pela população e pensamos maneiras de aplicar inovação tecnológica para
              auxiliar as pessoas no combate a tais problemas — criando uma rede em prol de causas em comum, através da
              participação individual.
            </p>
            <p>
              Nosso público não tem restrição de gênero, idade ou situação: nos interessam as pessoas dispostas a{" "}
              <span className="text-foreground">mudar a si mesmas para mudar o mundo</span>.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal>
          <div className="mt-20 grid overflow-hidden rounded-2xl border border-border md:grid-cols-2">
            <div className="border-b border-border p-8 md:border-b-0 md:border-r">
              <p className="font-mono text-xs text-muted-foreground">2025</p>
              <p className="mt-3 text-xl font-semibold tracking-tight">AB Studios</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Surge na disciplina de Projeto Integrador, em homenagem a um momento importante na vida de um integrante da
                equipe.
              </p>
            </div>
            <div className="relative bg-tint p-8">
              <p className="font-mono text-xs text-primary">2026</p>
              <p className="mt-3 text-xl font-semibold tracking-tight">Human In</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Reformulação do nome e da marca para representar humanização e inovação.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mission / Vision */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-card/50 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Missão</p>
              <p className="mt-4 text-lg leading-relaxed">
                Produzir soluções tecnológicas efetivas de mobilização e mudança individual, conduzindo os usuários a
                atitudes que contribuam para a transformação da realidade social e façam do mundo um lugar melhor.
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="h-full rounded-2xl border border-border bg-card/50 p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Visão</p>
              <p className="mt-4 text-lg leading-relaxed">
                Em um mundo de excessos e de design predatório, trazer a tecnologia como ferramenta para auxiliar humanos na
                solução de problemas reais — não um produto sem impacto a ser consumido e vendido.
              </p>
            </article>
          </Reveal>
        </div>

        {/* Values */}
        <Reveal>
          <div className="mt-6 grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <div
                key={v.name}
                className={`group p-6 transition-colors hover:bg-tint ${i < VALUES.length - 1 ? "border-b border-border lg:border-b-0 lg:border-r" : ""}`}
              >
                <v.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <p className="mt-6 font-medium">{v.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Quotes */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <Reveal>
            <blockquote>
              <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                “Seja a mudança que você quer ver no mundo.”
              </p>
              <footer className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">— Mahatma Gandhi</footer>
            </blockquote>
          </Reveal>
          <Reveal delay={100}>
            <blockquote>
              <p className="text-lg leading-relaxed text-muted-foreground">
                “Nenhum de nós, incluindo eu, jamais faz grandes coisas. Mas todos podemos fazer pequenas coisas, com grande
                amor, e juntos podemos fazer algo maravilhoso.”
              </p>
              <footer className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">— Madre Teresa de Calcutá</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Methodology ------------------------------- */

const STEPS = [
  { n: "01", title: "Problema real", text: "Partimos de problemas reais enfrentados pela população." },
  { n: "02", title: "Planejamento", text: "Organizamos o backlog e definimos as metas da Sprint semanal." },
  { n: "03", title: "Desenvolvimento", text: "Tarefas distribuídas de acordo com a capacidade e especialização de cada membro." },
  { n: "04", title: "Revisão", text: "Avaliamos a evolução da aplicação e ajustamos a rota para a próxima Sprint." },
];

function Methodology() {
  return (
    <section id="metodologia" className="relative scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow index="03">Metodologia</Eyebrow>
              <h2 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Scrum, em Sprints semanais
                <Dot />
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Uma metodologia ágil para todas as operações técnicas, controlando a evolução e o desenvolvimento das nossas
              aplicações.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div aria-hidden className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-primary/60 via-border to-border md:block" />
          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group">
                  <span className="relative inline-flex size-11 items-center justify-center rounded-full border border-border bg-background font-mono text-xs text-muted-foreground transition-all group-hover:border-primary group-hover:text-primary group-hover:glow-primary">
                    {s.n}
                  </span>
                  <p className="mt-6 text-lg font-medium">{s.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <RefreshCw className="size-3.5 text-primary" /> Ciclo repetido toda semana
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Team ----------------------------------- */

function Team() {
  return (
    <section id="equipe" className="relative scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow index="04">Equipe</Eyebrow>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Quem faz a Human In
            <Dot />
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-card">
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 transition-colors group-hover:text-primary/60">
                    <UserRound className="size-12" strokeWidth={1.25} />
                  </div>
                  <span className="absolute left-3 top-3 font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <figcaption className="mt-4 border-t border-border pt-3">
                  <p className="font-medium">{m.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{m.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Contact --------------------------------- */

function Contact() {
  const field =
    "rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25";
  return (
    <section id="contato" className="relative scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-20">
        <Reveal>
          <Eyebrow index="05">Contato</Eyebrow>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Vamos construir um futuro mais humano
            <Dot />
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Quer propor uma parceria, tirar uma dúvida ou conhecer nosso trabalho? Escreva para nós.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <form
            className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const d = new FormData(e.currentTarget);
              const nome = String(d.get("nome") ?? "");
              const email = String(d.get("email") ?? "");
              const mensagem = String(d.get("mensagem") ?? "");
              const subject = encodeURIComponent(`Contato pelo site — ${nome || "Visitante"}`);
              const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`);
              window.location.href = `mailto:contato@humanin.com.br?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-sm">
                Nome
                <input name="nome" required placeholder="Seu nome" className={field} />
              </label>
              <label className="grid gap-1.5 text-sm">
                E-mail
                <input name="email" type="email" required placeholder="voce@email.com" className={field} />
              </label>
              <label className="grid gap-1.5 text-sm">
                Mensagem
                <textarea name="mensagem" required rows={4} placeholder="Conte um pouco sobre você ou sua organização…" className={`resize-none ${field}`} />
              </label>
              <button
                type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-primary"
              >
                Enviar mensagem
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */

function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <HiLogo className="size-8 rounded-lg" />
          <span className="text-sm font-bold">
            Human<span className="text-primary">.</span>In
          </span>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          © {new Date().getFullYear()} Human In · Seja a mudança
        </p>
      </div>
    </footer>
  );
}
