import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Camera,
  Building2,
  Flame,
  Handshake,
  HelpCircle,
  Plus,
  Target,
  TrendingUp,
  Trophy,
  Droplets,
  Flower2,
  Heart,
  Leaf,
  Menu,
  MessageCircle,
  Sprout,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

import planpazLogo from "@/assets/planpaz-logo.png";
import bibliotecaAsset from "@/assets/planpaz-biblioteca.png.asset.json";
import comunidadeAsset from "@/assets/planpaz-comunidade.png.asset.json";
import inicioAsset from "@/assets/planpaz-inicio.png.asset.json";
import jardimAsset from "@/assets/planpaz-jardim.png.asset.json";
import welcomeAsset from "@/assets/planpaz-welcome.png.asset.json";
import { HiLogo } from "@/components/hi-logo";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/planpaz")({
  head: () => ({
    meta: [
      { title: "PlanPaz — Cultive mudanças, de semente em semente" },
      {
        name: "description",
        content: "Conheça o PlanPaz, aplicativo da Human In para identificar plantas, cuidar do seu jardim e compartilhar experiências com a comunidade.",
      },
      { property: "og:title", content: "PlanPaz — Um produto Human In" },
      { property: "og:description", content: "O aplicativo para quem quer fazer a mudança no mundo, de semente em semente." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanPazPage,
});

const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Por dentro", href: "#por-dentro" },
  { label: "Comunidade", href: "#comunidade" },
];

function SectionEyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-medium uppercase text-muted-foreground">
      <span className="text-leaf">{index}</span><span className="h-px w-8 bg-leaf/35" />{children}
    </p>
  );
}

function PlanPazPage() {
  return (
    <div className="planpaz-atmosphere min-h-screen overflow-x-hidden text-foreground">
      <PlanPazHeader />
      <main>
        <PlanPazHero />
        <Problem />
        <HowItWorks />
        <Features />
        <Screens />
        <Gamification />
        <Community />
        <Impact />
        <FinalCta />
      </main>
      <PlanPazFooter />
    </div>
  );
}

function PlanPazHeader() {
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
      <div className={cn("mx-auto grid h-14 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center rounded-full border px-2.5 backdrop-blur-xl transition-colors sm:px-3", scrolled ? "border-leaf/25 bg-glass" : "border-foreground/10 bg-background/55")}>
        <Link to="/planpaz" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={planpazLogo} alt="PlanPaz" className="size-8 shrink-0 object-contain" />
          <span className="truncate text-sm font-bold">PlanPaz</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">por Human In</span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação PlanPaz">
            {NAV.map((link) => <a key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground">{link.label}</a>)}
          </nav>
          <Button asChild variant="outline" className="hidden rounded-full sm:inline-flex">
            <Link to="/"><ArrowLeft /> Human In</Link>
          </Button>
          <Button type="button" variant="outline" size="icon" className="rounded-full lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open ? (
        <nav className="mx-auto mt-2 max-w-6xl rounded-lg border border-leaf/20 bg-card p-3 shadow-xl lg:hidden" aria-label="Menu móvel PlanPaz">
          {NAV.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-md px-4 py-3 text-sm hover:bg-accent">{link.label}<ArrowRight className="size-4 text-leaf" /></a>)}
          <Button asChild variant="outline" className="mt-2 w-full rounded-full"><Link to="/" onClick={() => setOpen(false)}><ArrowLeft /> Voltar para Human In</Link></Button>
        </nav>
      ) : null}
    </header>
  );
}

function PhoneScreenshot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full overflow-hidden rounded-[2.2rem] border-[7px] border-foreground/85 bg-leaf-deep shadow-2xl", className)}>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

function PlanPazHero() {
  return (
    <section className="tech-grid relative overflow-hidden border-b border-leaf/15 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute -right-24 top-24 hidden size-96 rounded-full bg-leaf/10 blur-3xl lg:block" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="animate-reveal-up text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-leaf-soft px-4 py-2 text-xs text-leaf"><Leaf className="size-3.5" /> Um produto Human In</p>
          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">Cultive. Cuide.<br /><span className="text-leaf">Transforme.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">O PlanPaz conecta você à natureza e transforma o cuidado com suas plantas em uma experiência simples, prática e envolvente.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="rounded-full bg-leaf text-leaf-deep transition-transform hover:-translate-y-0.5 hover:bg-leaf/90"><a href="#por-dentro">Conheça o PlanPaz <ArrowRight /></a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><a href="#como-funciona">Descubra como funciona <ArrowDown /></a></Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">De semente em semente.</p>
        </div>
        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm">
          <div className="absolute inset-x-6 bottom-4 h-24 rounded-full bg-leaf/20 blur-3xl" />
          <div className="animate-gentle-float"><PhoneScreenshot src={welcomeAsset.url} alt="Tela de boas-vindas do PlanPaz" className="relative max-w-[15rem] sm:max-w-[17.5rem]" /></div>
          {[
            { icon: Camera, text: "Planta identificada", pos: "-left-3 top-[14%] sm:-left-10" },
            { icon: Droplets, text: "Regar amanhã, 8h", pos: "-right-3 top-[38%] sm:-right-12" },
            { icon: TrendingUp, text: "+12% de crescimento", pos: "-left-2 bottom-[24%] sm:-left-14" },
            { icon: Flower2, text: "6 plantas no jardim", pos: "-right-2 bottom-[6%] sm:-right-8" },
          ].map(({ icon: Icon, text, pos }, i) => (
            <div key={text} style={{ animationDelay: `${300 + i * 150}ms` }} className={cn("animate-reveal-up absolute flex items-center gap-2 rounded-lg border border-leaf/25 bg-glass px-3 py-2 text-[11px] shadow-lg backdrop-blur sm:text-xs", pos)}><Icon className="size-3.5 text-leaf" />{text}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROBLEMS = ["Não sabe qual é a espécie?", "Esquece quando precisa regar?", "Não sabe como cuidar?", "Tem dúvidas sobre a saúde da planta?", "Não tem com quem compartilhar experiências?"];

function Problem() {
  return (
    <section id="sobre" className="section-graphite scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><SectionEyebrow index="01">O problema</SectionEyebrow><h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">Cuidar de uma planta nem sempre é simples<span className="text-leaf">.</span></h2></Reveal>
        <div className="mt-10 flex flex-wrap gap-3">
          {PROBLEMS.map((p, i) => <Reveal key={p} delay={i * 70}><p className="lift flex items-center gap-2 rounded-full border border-foreground/10 bg-card px-4 py-2.5 text-sm hover:border-leaf/30"><HelpCircle className="size-4 text-muted-foreground" />{p}</p></Reveal>)}
        </div>
        <Reveal className="mt-10 flex items-center gap-3 text-xl font-medium sm:text-2xl"><ArrowRight className="size-5 shrink-0 text-leaf" /><p>O PlanPaz transforma essas dúvidas em <span className="text-leaf">cuidado</span>.</p></Reveal>

        <div className="mt-20 grid gap-10 border-t border-leaf/15 pt-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <Reveal><p className="text-xs font-medium uppercase tracking-wide text-leaf">Objetivo geral</p><h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">Incentivar o hábito do cultivo de plantas caseiras<span className="text-leaf">.</span></h3></Reveal>
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>O objetivo principal é incentivar o hábito do cultivo de plantas caseiras, visto os inúmeros benefícios desta prática — oferecendo funcionalidades simples, mas efetivas, para ajudar qualquer pessoa que já possua esse hábito, ou queira desenvolver.</p>
            <p>Além de criar uma comunidade de cultivadores da paz, queremos provar, por meio de pesquisas acadêmicas, que essas práticas também podem melhorar o meio ambiente, a saúde mental e física dos usuários.</p>
            <p>O principal foco é a <span className="text-foreground">preservação do meio ambiente</span>, estimulando atividades sustentáveis no dia a dia, nas principais áreas em que o aplicativo está sendo utilizado — principalmente nas áreas urbanas.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", icon: Camera, title: "Descubra", text: "Identifique sua planta." },
    { n: "02", icon: BookOpen, title: "Entenda", text: "Aprenda como cuidar dela." },
    { n: "03", icon: Droplets, title: "Cuide", text: "Receba lembretes e acompanhe seu desenvolvimento." },
    { n: "04", icon: Users, title: "Compartilhe", text: "Faça parte da comunidade." },
  ];
  return (
    <section id="como-funciona" className="scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><SectionEyebrow index="02">Como funciona</SectionEyebrow><h2 className="mt-6 max-w-2xl text-3xl font-semibold sm:text-5xl">Quatro passos, um novo hábito<span className="text-leaf">.</span></h2></Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-leaf/15 bg-leaf/15 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, icon: Icon, title, text }, i) => (
            <Reveal key={n} delay={i * 90} as="article" className="group bg-background/85 p-6 transition-colors hover:bg-card sm:p-8">
              <div className="flex items-start justify-between"><span className="text-5xl font-semibold text-leaf/30 transition-colors group-hover:text-leaf sm:text-6xl">{n}</span><Icon className="size-5 text-leaf" /></div>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURES: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Camera, title: "Identificação de plantas", detail: "Descubra a espécie a partir de uma foto." },
  { icon: Droplets, title: "Cuidados e lembretes", detail: "Rega e fertilização no momento certo." },
  { icon: Flower2, title: "Jardim pessoal", detail: "Todas as suas plantas em um só lugar." },
  { icon: Users, title: "Comunidade", detail: "Troque dúvidas e experiências." },
  { icon: Trophy, title: "Evolução e conquistas", detail: "Acompanhe seu progresso como cultivador." },
  { icon: BookOpen, title: "Informações sobre espécies", detail: "Origem, características e necessidades." },
];

function Features() {
  return (
    <section id="funcionalidades" className="section-blueprint scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><SectionEyebrow index="03">Funcionalidades</SectionEyebrow><h2 className="mt-6 text-3xl font-semibold sm:text-5xl">Tudo o que seu jardim precisa<span className="text-leaf">.</span></h2></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, detail }, i) => (
            <Reveal key={title} delay={i * 60} as="article" className="lift group rounded-lg border border-leaf/15 bg-card/70 p-6 hover:border-leaf/40">
              <span className="grid size-11 place-items-center rounded-full bg-leaf-soft text-leaf transition-transform duration-300 group-hover:scale-110"><Icon className="size-5" /></span>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  { src: inicioAsset.url, alt: "Tela inicial do PlanPaz com clima e próximos lembretes", label: "Início", text: "Clima do dia e próximos cuidados logo na abertura." },
  { src: bibliotecaAsset.url, alt: "Biblioteca de espécies do PlanPaz", label: "Identificação", text: "Busque e descubra espécies com filtros simples." },
  { src: jardimAsset.url, alt: "Galeria do Meu Jardim no PlanPaz", label: "Minha planta & cuidados", text: "Seu jardim organizado, com a rotina de cada planta." },
  { src: comunidadeAsset.url, alt: "Feed da comunidade do PlanPaz", label: "Comunidade", text: "Compartilhe conquistas e tire dúvidas." },
];

function Screens() {
  return (
    <section id="por-dentro" className="tech-grid scroll-mt-24 overflow-hidden border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center"><SectionEyebrow index="04">Por dentro</SectionEyebrow><h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold sm:text-5xl">Conheça o PlanPaz por dentro<span className="text-leaf">.</span></h2><p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">Uma pequena jornada pelas telas do aplicativo.</p></Reveal>
        <div className="-mx-5 mt-14 flex snap-x snap-proximity gap-6 overflow-x-auto px-5 pb-4 [overscroll-behavior-inline:contain] [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-10 sm:overflow-visible sm:px-0 lg:grid-cols-4 lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {JOURNEY.map((s, i) => (
            <Reveal key={s.label} as="figure" delay={i * 120} className={cn("w-[68vw] max-w-[17rem] shrink-0 snap-center sm:w-auto sm:max-w-none", i % 2 === 1 && "lg:translate-y-10")}>
              <PhoneScreenshot src={s.src} alt={s.alt} className="transition-transform duration-500 hover:-translate-y-2" />
              <figcaption className="mt-5"><p className="flex items-center gap-2 text-sm font-semibold"><span className="text-xs text-leaf">0{i + 1}</span>{s.label}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p></figcaption>
            </Reveal>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">Deslize para ver as telas →</p>
      </div>
    </section>
  );
}

function Gamification() {
  const items = [
    { icon: Sprout, label: "Nível", value: "Broto · nível 3", bar: 62 },
    { icon: Flame, label: "Sequência de cuidados", value: "12 dias seguidos", bar: 80 },
    { icon: Target, label: "Meta da semana", value: "4 de 5 regas", bar: 80 },
    { icon: Trophy, label: "Conquistas", value: "Primeira muda · Jardim com 5 plantas", bar: 45 },
  ];
  return (
    <section className="section-graphite border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><SectionEyebrow index="05">Evolução</SectionEyebrow><h2 className="mt-6 text-3xl font-semibold sm:text-5xl">Seu cuidado também evolui<span className="text-leaf">.</span></h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">O PlanPaz não é apenas um aplicativo de lembretes: é uma experiência que incentiva você a continuar cuidando, dia após dia.</p><p className="mt-4 text-xs text-muted-foreground">Exemplo conceitual da proposta.</p></Reveal>
        <Reveal delay={120} className="rounded-xl border border-leaf/20 bg-card/80 p-5 shadow-2xl sm:p-7">
          <div className="space-y-5">
            {items.map(({ icon: Icon, label, value, bar }) => (
              <div key={label}>
                <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf"><Icon className="size-4" /></span><div className="min-w-0"><p className="text-[11px] uppercase text-muted-foreground">{label}</p><p className="truncate text-sm font-medium">{value}</p></div></div>
                <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-foreground/10"><div className="h-full rounded-full bg-leaf" style={{ width: `${bar}%` }} /></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const POSTS = [
  { user: "Ana", initials: "AN", text: "Minha primeira muda!", likes: 24, replies: 6, tone: "bg-leaf/25" },
  { user: "Rafael", initials: "RF", text: "Alguém sabe o que está acontecendo com minha planta? As folhas estão amarelando.", likes: 8, replies: 14, tone: "bg-leaf/15" },
  { user: "Júlia", initials: "JU", text: "Meu jardim depois de 30 dias.", likes: 51, replies: 9, tone: "bg-leaf/35" },
];

function Community() {
  return (
    <section id="comunidade" className="scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><SectionEyebrow index="06">Comunidade</SectionEyebrow><h2 className="mt-6 text-3xl font-semibold sm:text-5xl">Cultivar também é compartilhar<span className="text-leaf">.</span></h2><p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">Um espaço de troca de conhecimento: dúvidas, descobertas e pequenas conquistas.</p></Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.user} as="article" delay={i * 100} className="lift overflow-hidden rounded-lg border border-leaf/15 bg-card hover:border-leaf/35">
              <div className={cn("grid h-36 place-items-center", p.tone)}><Sprout className="size-12 text-leaf" strokeWidth={1.2} /></div>
              <div className="p-5">
                <div className="flex items-center gap-2.5"><span className="grid size-8 place-items-center rounded-full bg-leaf-soft text-[10px] font-semibold text-leaf">{p.initials}</span><p className="text-sm font-medium">{p.user}</p><span className="ml-auto text-[11px] text-muted-foreground">exemplo</span></div>
                <p className="mt-3 text-sm leading-relaxed">{p.text}</p>
                <div className="mt-4 flex gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1"><Heart className="size-3.5" />{p.likes}</span><span className="flex items-center gap-1"><MessageCircle className="size-3.5" />{p.replies} respostas</span></div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="figure" className="mx-auto mt-16 max-w-3xl border-l-2 border-leaf/50 pl-5 sm:pl-7">
          <blockquote className="text-lg leading-relaxed sm:text-2xl">“Nenhum de nós, incluindo eu, jamais faz grandes coisas. Mas todos podemos fazer pequenas coisas, com grande amor, e juntos podemos fazer algo maravilhoso.”</blockquote>
          <figcaption className="mt-3 text-xs uppercase text-muted-foreground">Madre Teresa de Calcutá</figcaption>
        </Reveal>
      </div>
    </section>
  );
}

function Impact() {
  const pillars = [
    { icon: Sprout, title: "Cultivo", text: "Incentivar o contato cotidiano com plantas." },
    { icon: Building2, title: "Mais verde", text: "Estimular práticas sustentáveis em ambientes urbanos." },
    { icon: Handshake, title: "Comunidade", text: "Conectar pessoas através do cuidado e da troca de conhecimento." },
  ];
  const chain = ["Identificação", "Informação", "Cuidados", "Lembretes", "Jardim pessoal", "Comunidade", "Evolução"];
  return (
    <section className="section-blueprint border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><SectionEyebrow index="07">Impacto</SectionEyebrow><h2 className="mt-6 text-3xl font-semibold sm:text-5xl">Pequenas ações. Grandes impactos<span className="text-leaf">.</span></h2><p className="mt-5 max-w-xl text-sm text-muted-foreground">Objetivos e proposta do projeto.</p></Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-leaf/15 bg-leaf/15 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => <Reveal key={title} delay={i * 90} as="article" className="bg-background/85 p-7"><Icon className="size-6 text-leaf" /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></Reveal>)}
        </div>
        <Reveal className="mt-20 text-center">
          <p className="text-xs uppercase tracking-wide text-leaf">O diferencial</p>
          <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold sm:text-4xl">Tudo reunido em um único aplicativo<span className="text-leaf">.</span></h3>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
            {chain.map((c, i) => <span key={c} className="flex items-center gap-2 sm:gap-3"><span className="rounded-full border border-leaf/30 bg-leaf-soft px-4 py-2 text-sm transition-colors hover:bg-leaf hover:text-leaf-deep">{c}</span>{i < chain.length - 1 ? <Plus className="size-3.5 text-leaf/60" /> : null}</span>)}
          </div>
          <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-leaf/40 px-5 py-2.5"><img src={planpazLogo} alt="" className="size-6 object-contain" /><span className="text-sm font-semibold">= PlanPaz</span></div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="absolute inset-0 bg-leaf-soft opacity-40" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <img src={planpazLogo} alt="PlanPaz" className="mx-auto h-20 w-auto object-contain" />
        <h2 className="mt-7 text-4xl font-semibold leading-tight sm:text-6xl">Comece a cultivar mudanças<span className="text-leaf">.</span></h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">Uma planta de cada vez. Um cuidado de cada vez.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full bg-leaf text-leaf-deep transition-transform hover:-translate-y-0.5 hover:bg-leaf/90"><a href="#por-dentro">Conheça o PlanPaz <ArrowRight /></a></Button>
          <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/"><ArrowLeft /> Voltar para Human In</Link></Button>
        </div>
      </Reveal>
    </section>
  );
}
function PlanPazFooter() {
  return <footer className="border-t border-leaf/15 px-5 py-8 sm:px-8"><div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div className="flex min-w-0 items-center gap-3"><img src={planpazLogo} alt="PlanPaz" className="size-9 shrink-0 object-contain" /><div className="min-w-0"><p className="truncate text-sm font-bold">PlanPaz</p><p className="truncate text-[10px] text-muted-foreground">Um produto Human In</p></div></div><Link to="/" aria-label="Voltar para Human In" className="flex shrink-0 items-center text-muted-foreground transition-colors hover:text-foreground"><HiLogo className="h-7 w-auto max-w-28 object-contain" /></Link></div></footer>;
}
