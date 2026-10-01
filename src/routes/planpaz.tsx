import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  Droplets,
  Flower2,
  Heart,
  Leaf,
  Menu,
  MessageCircle,
  Sparkles,
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
  { label: "Telas", href: "#telas" },
];

const FEATURES: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Camera, title: "Identificação de plantas", detail: "Descubra a espécie a partir de uma imagem." },
  { icon: BookOpen, title: "Informações sobre espécies", detail: "Conheça origem, características e necessidades." },
  { icon: Sparkles, title: "Cuidados personalizados", detail: "Receba orientações adequadas para cada planta." },
  { icon: Droplets, title: "Lembretes de rega", detail: "Mantenha uma rotina simples e consistente." },
  { icon: Sprout, title: "Fertilização", detail: "Acompanhe os momentos certos para nutrir." },
  { icon: Flower2, title: "Jardim pessoal", detail: "Organize todas as suas plantas em um só lugar." },
  { icon: Users, title: "Comunidade", detail: "Encontre pessoas que também cultivam mudanças." },
  { icon: MessageCircle, title: "Compartilhamento", detail: "Troque experiências, aprendizados e conquistas." },
];

const SCREENS = [
  { src: inicioAsset.url, alt: "Tela inicial do PlanPaz com clima e próximos lembretes", label: "Início" },
  { src: bibliotecaAsset.url, alt: "Biblioteca de espécies do PlanPaz", label: "Biblioteca de espécies" },
  { src: jardimAsset.url, alt: "Galeria do Meu Jardim no PlanPaz", label: "Meu jardim" },
  { src: comunidadeAsset.url, alt: "Feed da comunidade do PlanPaz", label: "Comunidade" },
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
        <About />
        <HowItWorks />
        <Features />
        <Screens />
        <Community />
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
    <section className="tech-grid relative min-h-[94svh] overflow-hidden border-b border-leaf/15 px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
      <div className="pointer-events-none absolute right-[9%] top-28 hidden h-48 w-48 rounded-full border border-leaf/15 lg:block" />
      <div className="mx-auto grid min-h-[72svh] max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:gap-20">
        <div className="animate-reveal-up text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-leaf-soft px-4 py-2 text-xs text-leaf"><Leaf className="size-3.5" /> Um produto Human In</p>
          <img src={planpazLogo} alt="PlanPaz" className="mx-auto mt-8 h-28 w-auto object-contain lg:mx-0 lg:h-36" />
          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl">Cultive a mudança<span className="text-leaf">.</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">O aplicativo para quem quer fazer a mudança no mundo, de semente em semente.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg" className="rounded-full bg-leaf text-leaf-deep hover:bg-leaf/90"><a href="#como-funciona">Descobrir o PlanPaz <ArrowDown /></a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/">Conhecer a Human In</Link></Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-gentle-float lg:max-w-md">
          <div className="absolute inset-x-8 bottom-2 h-24 rounded-full bg-leaf/15 blur-3xl" />
          <PhoneScreenshot src={welcomeAsset.url} alt="Tela de boas-vindas do PlanPaz" className="relative max-w-[16rem] rotate-3 sm:max-w-[18rem]" />
          <div className="absolute -left-2 top-1/3 rounded-lg border border-leaf/25 bg-glass px-3 py-2 text-xs backdrop-blur sm:left-0"><span className="text-leaf">●</span> Próxima rega amanhã</div>
          <div className="absolute -right-1 bottom-1/4 rounded-lg border border-leaf/25 bg-glass px-3 py-2 text-xs backdrop-blur sm:right-0"><Check className="mr-1 inline size-3 text-leaf" /> Planta identificada</div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="section-graphite scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <div><SectionEyebrow index="01">O que é</SectionEyebrow><h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">Natureza e tecnologia no mesmo ritmo<span className="text-leaf">.</span></h2></div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p className="text-xs font-medium uppercase tracking-wide text-leaf">Objetivo geral</p>
          <p>O objetivo principal é incentivar o hábito do cultivo de plantas caseiras, visto os inúmeros benefícios desta prática — oferecendo funcionalidades simples, mas efetivas, para ajudar qualquer pessoa que já possua esse hábito, ou queira desenvolver.</p>
          <p>Além de criar uma comunidade de cultivadores da paz, queremos provar, por meio de pesquisas acadêmicas, que essas práticas também podem melhorar o meio ambiente, a saúde mental e física dos usuários.</p>
          <p>O principal foco é a <span className="text-foreground">preservação do meio ambiente</span>, estimulando atividades sustentáveis no dia a dia, nas principais áreas em que o aplicativo está sendo utilizado — principalmente nas áreas urbanas.</p>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-leaf/15 bg-leaf/15 pt-px"><Metric value="01" label="Jardim" /><Metric value="08" label="Recursos" /><Metric value="∞" label="Descobertas" /></div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) { return <div className="bg-card px-3 py-5 text-center"><p className="text-2xl font-semibold text-leaf">{value}</p><p className="mt-1 text-[10px] uppercase text-muted-foreground sm:text-xs">{label}</p></div>; }

function HowItWorks() {
  const steps = [{ n: "01", icon: Camera, title: "Observe", text: "Fotografe uma planta ou escolha uma espécie." }, { n: "02", icon: Sparkles, title: "Entenda", text: "Acesse informações e cuidados personalizados." }, { n: "03", icon: Sprout, title: "Cultive", text: "Acompanhe sua rotina e compartilhe a evolução." }];
  return <section id="como-funciona" className="scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-6xl"><SectionEyebrow index="02">Como funciona</SectionEyebrow><h2 className="mt-6 max-w-2xl text-4xl font-semibold sm:text-5xl">Da descoberta ao cuidado diário<span className="text-leaf">.</span></h2><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-leaf/15 bg-leaf/15 md:grid-cols-3">{steps.map(({ n, icon: Icon, title, text }) => <article key={n} className="bg-background/80 p-7 sm:p-8"><div className="flex items-center justify-between"><Icon className="size-6 text-leaf" /><span className="text-xs text-muted-foreground">{n}</span></div><h3 className="mt-12 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>;
}

function Features() {
  return <section id="funcionalidades" className="section-blueprint scroll-mt-24 border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-6xl"><div className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><SectionEyebrow index="03">Funcionalidades</SectionEyebrow><h2 className="mt-6 text-4xl font-semibold sm:text-5xl">Tudo o que seu jardim precisa<span className="text-leaf">.</span></h2></div><p className="max-w-lg leading-relaxed text-muted-foreground lg:justify-self-end">Recursos conectados para transformar informação em um cuidado possível, contínuo e compartilhado.</p></div><div className="mt-12 divide-y divide-leaf/15 border-y border-leaf/15">{FEATURES.map(({ icon: Icon, title, detail }, index) => <article key={title} className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 py-5 sm:grid-cols-[auto_minmax(0,0.8fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-6"><span className="text-xs text-muted-foreground">0{index + 1}</span><div className="flex min-w-0 items-center gap-3"><Icon className="size-5 shrink-0 text-leaf transition-transform group-hover:scale-110" /><h3 className="font-medium">{title}</h3></div><p className="col-start-2 text-sm leading-relaxed text-muted-foreground sm:col-auto">{detail}</p><ArrowRight className="hidden size-4 text-leaf/50 transition-transform group-hover:translate-x-1 sm:block" /></article>)}</div></div></section>;
}

function Screens() {
  return <section id="telas" className="tech-grid scroll-mt-24 overflow-hidden border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto max-w-6xl text-center"><SectionEyebrow index="04">Telas do aplicativo</SectionEyebrow><h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold sm:text-5xl">Uma experiência que cresce com você<span className="text-leaf">.</span></h2><p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">Clareza para descobrir, organizar e compartilhar o cuidado, em cada etapa.</p><div className="mt-16 grid grid-cols-2 items-start gap-3 sm:gap-8 lg:grid-cols-4"><figure className="-rotate-2 transition-transform duration-500 hover:rotate-0"><PhoneScreenshot src={SCREENS[0].src} alt={SCREENS[0].alt} /><figcaption className="mt-3 text-center text-xs text-muted-foreground">{SCREENS[0].label}</figcaption></figure><figure className="rotate-2 transition-transform duration-500 hover:rotate-0 sm:translate-y-8"><PhoneScreenshot src={SCREENS[1].src} alt={SCREENS[1].alt} /><figcaption className="mt-3 text-center text-xs text-muted-foreground">{SCREENS[1].label}</figcaption></figure><figure className="-rotate-2 transition-transform duration-500 hover:rotate-0"><PhoneScreenshot src={SCREENS[2].src} alt={SCREENS[2].alt} /><figcaption className="mt-3 text-center text-xs text-muted-foreground">{SCREENS[2].label}</figcaption></figure><figure className="rotate-2 transition-transform duration-500 hover:rotate-0 sm:translate-y-8"><PhoneScreenshot src={SCREENS[3].src} alt={SCREENS[3].alt} /><figcaption className="mt-3 text-center text-xs text-muted-foreground">{SCREENS[3].label}</figcaption></figure></div></div></section>;
}

function Community() {
  return <section id="comunidade" className="section-graphite border-b border-leaf/15 px-5 py-20 sm:px-8 md:py-28"><div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20"><div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center"><div className="absolute inset-[12%] rounded-full border border-leaf/15" /><div className="absolute inset-[27%] rounded-full border border-leaf/25" />{["left-3 top-1/3", "right-3 top-1/4", "bottom-3 left-1/3", "bottom-1/4 right-1/4"].map((position, index) => <span key={position} className={cn("absolute grid size-12 place-items-center rounded-full border border-leaf/25 bg-card text-xs text-leaf shadow-lg", position)}>0{index + 1}</span>)}<Users className="size-20 text-leaf" strokeWidth={1} /></div><div><SectionEyebrow index="05">Comunidade</SectionEyebrow><h2 className="mt-6 text-4xl font-semibold sm:text-5xl">Cultivar também é compartilhar<span className="text-leaf">.</span></h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">A comunidade PlanPaz conecta experiências reais: dúvidas, descobertas e pequenas conquistas que inspiram outras pessoas a cuidar.</p><div className="mt-8 flex items-center gap-4 border-l-2 border-leaf pl-5"><Heart className="size-6 shrink-0 text-leaf" /><p className="text-sm text-muted-foreground">Cada cuidado individual fortalece uma mudança coletiva.</p></div><blockquote className="mt-10 border-l-2 border-leaf/40 pl-5 sm:pl-6"><p className="text-lg leading-relaxed sm:text-xl">“Nenhum de nós, incluindo eu, jamais faz grandes coisas. Mas todos podemos fazer pequenas coisas, com grande amor, e juntos podemos fazer algo maravilhoso”.<span className="text-leaf">”</span></p><footer className="mt-3 text-xs uppercase text-muted-foreground">Madre Teresa de Calcutá</footer></blockquote></div></div></section>;
}

function FinalCta() {
  return <section className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-36"><div className="absolute inset-0 bg-leaf-soft opacity-40" /><div className="relative mx-auto max-w-4xl text-center"><Leaf className="mx-auto size-8 text-leaf" /><h2 className="mt-7 text-4xl font-semibold leading-tight sm:text-6xl">Pronto para cultivar uma nova relação com a natureza<span className="text-leaf">?</span></h2><p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">O PlanPaz está crescendo. Acompanhe este produto da Human In e faça parte da mudança, de semente em semente.</p><Button asChild size="lg" className="mt-9 rounded-full bg-leaf text-leaf-deep hover:bg-leaf/90"><a href="#inicio" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Voltar ao início <ArrowRight /></a></Button></div></section>;
}

function PlanPazFooter() {
  return <footer className="border-t border-leaf/15 px-5 py-8 sm:px-8"><div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div className="flex min-w-0 items-center gap-3"><img src={planpazLogo} alt="PlanPaz" className="size-9 shrink-0 object-contain" /><div className="min-w-0"><p className="truncate text-sm font-bold">PlanPaz</p><p className="truncate text-[10px] text-muted-foreground">Um produto Human In</p></div></div><Link to="/" className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"><HiLogo className="size-7 rounded-md" /><span className="hidden sm:inline">Human In</span></Link></div></footer>;
}
