import { useState } from "react";
import {
  Menu, X, MessageCircle, Check, ArrowRight, Sparkles, Smartphone,
  ShieldCheck, Zap, MapPin, Instagram, Image as ImageIcon, FileText,
  Store, Utensils, Scissors, Home, Wrench, Palette, ChevronDown,
} from "lucide-react";
import logoAsset from "@/assets/lmw-logo.png";
import heroMockup from "@/assets/hero-mockup.jpg";
import imgImperial from "@/assets/portfolio-imperial-store.png";
import imgNoFake from "@/assets/portfolio-no-fake-enseada.png";
import imgSabor from "@/assets/portfolio-sabor-da-casa.png";
import imgManicure from "@/assets/portfolio-manicure-premium.png";

const WHATSAPP_URL =
  "https://wa.me/5547984969457?text=" +
  encodeURIComponent("Olá Lucas, vi o site da LMW Sites e quero saber mais sobre criação de site para meu negócio.");

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Como funciona", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return <img src={logoAsset} alt="LMW Sites" className={className} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <Logo className="h-14 w-14" />
          <div className="leading-none">
            <div className="font-display text-xl tracking-wide text-gold-gradient">LMW Sites</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1 hidden sm:block">
              Sites e vitrines digitais para negócios locais
            </div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform">
          Pedir orçamento <ArrowRight className="w-4 h-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gold" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold/20 bg-background/95">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}
                className="text-base text-muted-foreground hover:text-gold">{n.label}</a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-gold to-gold-light text-primary-foreground">
              Pedir orçamento <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs uppercase tracking-[0.25em]">
      <Sparkles className="w-3 h-3" /> {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative pt-28 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, #C9A45A 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[minmax(260px,320px)_1fr_1fr] gap-10 lg:gap-12 items-center">
        {/* Coluna esquerda: logo grande LMW Sites */}
        <div className="hidden lg:flex justify-center items-center animate-fade-up">
          <img
            src={logoAsset}
            alt="LMW Sites"
            className="w-full max-w-[320px] h-auto object-contain opacity-50 [filter:drop-shadow(0_0_45px_rgba(201,164,90,0.25))]"
          />
        </div>
        <div className="animate-fade-up">
          {/* Logo mobile reduzida acima do título */}
          <div className="flex lg:hidden justify-center mb-6">
            <img
              src={logoAsset}
              alt="LMW Sites"
              className="w-28 h-28 object-contain opacity-70"
            />
          </div>



          <SectionLabel>LMW Sites · 2026</SectionLabel>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
            Sites profissionais para <span className="text-gold-gradient italic">negócios locais</span> venderem melhor no digital.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Criação de sites, vitrines digitais, cardápios, catálogos e páginas de apresentação com visual premium,
            botão para WhatsApp e foco em transformar visitantes em clientes.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Quero um site para meu negócio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 text-off-white hover:bg-gold/10 transition-colors">
              Ver portfólio
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Smartphone, label: "Site responsivo" },
              { icon: MessageCircle, label: "Botão WhatsApp" },
              { icon: Sparkles, label: "Visual premium" },
              { icon: ShieldCheck, label: "Sem mensalidade" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="grid place-items-center w-8 h-8 rounded-full border border-gold/30 text-gold">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up">
          <img
            src={logoAsset}
            alt=""
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-10 -right-10 lg:-top-20 lg:-right-24 w-[420px] lg:w-[620px] max-w-none opacity-[0.08] z-0"
          />
          <div className="absolute -inset-6 bg-gradient-to-tr from-gold/20 via-transparent to-deep-blue/40 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-premium">
            <img src={heroMockup} alt="Exemplos de sites criados pela LMW Sites" width={1536} height={1024} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-gold/30 shadow-card animate-float">
            <div className="grid place-items-center w-10 h-10 rounded-full bg-gold/10 text-gold"><Zap className="w-5 h-5" /></div>
            <div>
              <div className="text-xs text-muted-foreground">Resposta direta</div>
              <div className="text-sm font-medium">WhatsApp em 1 clique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    "Informações espalhadas em vários lugares",
    "Cliente perguntando sempre a mesma coisa",
    "Link da bio pouco profissional",
    "Pouca confiança antes do primeiro contato",
  ];
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Seu negócio ainda depende só do <span className="text-gold-gradient italic">Instagram</span> ou WhatsApp?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            O Instagram ajuda, mas nem sempre organiza tudo que o cliente precisa ver. Um site bem feito funciona
            como uma central própria da sua marca, reunindo informações, fotos, serviços, localização e contato em
            um só lugar.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((t, i) => (
            <div key={t} className="p-6 rounded-2xl border border-gold/15 bg-card/40 backdrop-blur hover:border-gold/40 transition-colors">
              <div className="text-gold/80 text-sm font-mono">0{i + 1}</div>
              <p className="mt-3 text-off-white">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brand() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative rounded-3xl border border-gold/25 bg-gradient-to-br from-graphite via-background to-graphite/60 p-10 lg:p-16 shadow-premium overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-2xl" />
                <img
                  src={logoAsset}
                  alt="Logo LMW Sites"
                  className="relative h-40 w-40 lg:h-56 lg:w-56 object-contain drop-shadow-[0_10px_40px_rgba(201,164,90,0.3)]"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gold-gradient">LMW Sites</h2>
              <div className="mt-3 text-sm uppercase tracking-[0.25em] text-gold/80">
                Sites e vitrines digitais para negócios locais
              </div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Uma marca criada para transformar negócios locais em presenças digitais mais profissionais,
                com páginas modernas, responsivas, objetivas e focadas em facilitar o contato pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Store, title: "Site vitrine", desc: "Apresentação completa do seu negócio em uma única página premium." },
    { icon: Utensils, title: "Cardápio digital", desc: "Cardápio organizado, com fotos, categorias e pedido pelo WhatsApp." },
    { icon: ImageIcon, title: "Catálogo online", desc: "Produtos e serviços organizados, prontos para serem compartilhados." },
    { icon: Home, title: "Aluguel de temporada", desc: "Páginas para casas, apartamentos e imóveis de temporada." },
    { icon: Palette, title: "Estética e beleza", desc: "Vitrines elegantes para manicures, salões e estúdios." },
    { icon: Utensils, title: "Restaurante e delivery", desc: "Páginas para restaurantes, lanchonetes e delivery." },
    { icon: Store, title: "Lojas locais", desc: "Vitrine para lojas físicas mostrarem categorias e contato." },
    { icon: FileText, title: "Landing page comercial", desc: "Páginas focadas em conversão para campanhas e anúncios." },
  ];
  return (
    <section id="servicos" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>A solução</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Transforme seu link em uma <span className="text-gold-gradient italic">vitrine profissional</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A LMW Sites cria páginas simples, bonitas e objetivas para apresentar seu negócio com mais profissionalismo
            e facilitar o contato pelo WhatsApp.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative p-7 rounded-2xl border border-gold/15 bg-gradient-to-br from-card/80 to-card/30 hover:border-gold/50 hover:-translate-y-1 transition-all">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gold/10 text-gold border border-gold/20 group-hover:bg-gold group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    img: imgImperial,
    name: "Imperial Store",
    type: "Catálogo / loja online simples",
    desc: "Página comercial com visual sofisticado para apresentar coleção, categorias, identidade da marca e contato direto pelo WhatsApp.",
    link: "https://imperial-store.netlify.app",
  },
  {
    img: imgNoFake,
    name: "No Fake Enseada",
    type: "Site para aluguel de temporada",
    desc: "Vitrine para casas e apartamentos de temporada na Praia de Enseada, com fotos, comodidades, informações importantes e consulta pelo WhatsApp.",
    link: "https://nofake-enseada.vercel.app",
  },
  {
    img: imgSabor,
    name: "Sabor da Casa Delivery",
    type: "Cardápio digital / delivery",
    desc: "Página para delivery com apresentação da marca, botão de pedido no WhatsApp e acesso rápido ao cardápio.",
    link: "https://sabor-da-casa-delivery.netlify.app",
  },
  {
    img: imgManicure,
    name: "Template Manicure Premium",
    type: "Vitrine para manicure / nail designer",
    desc: "Modelo premium para nail designer ou estúdio de unhas, com apresentação dos serviços, resultados, localização e botão de agendamento.",
    link: "https://template-manicure-premium.netlify.app",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>Portfólio</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Projetos reais e <span className="text-gold-gradient italic">modelos criados</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Alguns exemplos de sites, vitrines e modelos criados para negócios locais, delivery,
            aluguel de temporada, lojas e beleza.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map(p => (
            <article
              key={p.name}
              className="group relative rounded-2xl overflow-hidden border border-gold/20 bg-card/60 shadow-card transition-all duration-500 hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold"
            >
              <div className="aspect-[16/9] overflow-hidden bg-graphite">
                <img
                  src={p.img}
                  alt={`Preview do projeto ${p.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <div className="text-[11px] uppercase tracking-[0.2em] text-gold">{p.type}</div>
                <h3 className="mt-2 text-2xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-sm font-medium shadow-gold hover:scale-[1.03] transition-transform"
                >
                  Ver projeto <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 text-xs text-muted-foreground/70 text-center max-w-2xl mx-auto italic">
          Alguns projetos exibidos podem ser modelos, prévias comerciais ou demonstrações criadas
          para apresentar possibilidades de uso.
        </p>
      </div>
    </section>
  );
}

function ForWho() {
  const list = [
    { icon: Utensils, label: "Restaurantes e lanchonetes" },
    { icon: Palette, label: "Manicures e salões de beleza" },
    { icon: Scissors, label: "Barbearias" },
    { icon: Home, label: "Casas de temporada" },
    { icon: Store, label: "Lojas locais" },
    { icon: Wrench, label: "Prestadores de serviço" },
    { icon: Sparkles, label: "Estúdios de tatuagem" },
    { icon: ShieldCheck, label: "Higienização de estofados" },
    { icon: MessageCircle, label: "Negócios que atendem pelo WhatsApp" },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Público-alvo</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
          Para quem a <span className="text-gold-gradient italic">LMW Sites</span> cria páginas?
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4 p-5 rounded-xl border border-gold/15 bg-card/50 hover:border-gold/40 transition-colors">
              <span className="grid place-items-center w-11 h-11 rounded-lg bg-gold/10 text-gold border border-gold/20">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-off-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Entendimento do negócio", desc: "O cliente envia informações, fotos, serviços, localização e objetivo da página." },
    { n: "02", title: "Criação da prévia", desc: "É criada uma primeira versão visual para avaliação." },
    { n: "03", title: "Ajustes", desc: "São ajustados textos, fotos, botões, cores e detalhes importantes." },
    { n: "04", title: "Publicação", desc: "O site é publicado e pode ser usado na bio do Instagram, WhatsApp, cartões e divulgações." },
    { n: "05", title: "Manutenção opcional", desc: "Alterações futuras podem ser combinadas separadamente, sem mensalidade obrigatória." },
  ];
  return (
    <section id="processo" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionLabel>Processo</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">Como funciona o <span className="text-gold-gradient italic">processo</span>.</h2>
        <div className="mt-14 grid gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="group grid md:grid-cols-[120px_1fr] gap-6 p-7 rounded-2xl border border-gold/15 bg-gradient-to-r from-card/70 to-transparent hover:border-gold/40 transition-colors">
              <div className="font-display text-5xl text-gold-gradient">{s.n}</div>
              <div>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  const plans = [
    { name: "Site simples / vitrine", price: "A partir de R$ 600", desc: "Ideal para apresentar um negócio, serviços, fotos, localização e botão para WhatsApp.", features: ["Página única responsiva", "Botão para WhatsApp", "Apresentação dos serviços", "Localização e contato"] },
    { name: "Cardápio ou catálogo digital", price: "Sob consulta", featured: true, desc: "Ideal para restaurantes, lojas, produtos ou serviços organizados em categorias.", features: ["Categorias e itens", "Fotos e descrições", "Pedido pelo WhatsApp", "Visual premium"] },
    { name: "Página personalizada premium", price: "Sob consulta", desc: "Ideal para negócios que querem uma apresentação mais completa e elaborada.", features: ["Múltiplas seções", "Copy comercial", "Galeria de fotos", "Visual mais elaborado"] },
  ];
  return (
    <section id="planos" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>Planos</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">Modelos de <span className="text-gold-gradient italic">site</span>.</h2>
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {plans.map(p => (
            <div key={p.name} className={`relative p-8 rounded-2xl border transition-all ${p.featured ? "border-gold bg-gradient-to-b from-gold/10 to-card/60 glow-gold" : "border-gold/15 bg-card/50 hover:border-gold/40"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-semibold">
                  Mais procurado
                </div>
              )}
              <h3 className="text-2xl">{p.name}</h3>
              <div className="mt-4 text-3xl font-display text-gold-gradient">{p.price}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${p.featured ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-gold" : "border border-gold/40 text-off-white hover:bg-gold/10"}`}>
                Pedir orçamento <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground max-w-3xl">
          * Valores podem variar conforme tamanho do projeto, quantidade de páginas, funcionalidades, textos,
          imagens e ajustes necessários.
        </p>
      </div>
    </section>
  );
}

function Included() {
  const items = [
    "Design responsivo para celular e computador",
    "Botões para WhatsApp",
    "Integração com Instagram",
    "Botão de localização/rota no Google Maps",
    "Galeria de fotos",
    "Apresentação de serviços",
    "Cardápio ou catálogo",
    "Textos comerciais",
    "Publicação do site",
    "Orientação para usar o link na bio",
  ];
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div>
          <SectionLabel>O que pode estar incluso</SectionLabel>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Tudo para sua <span className="text-gold-gradient italic">marca brilhar</span> no digital.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Cada projeto é montado a partir destes blocos, combinados conforme a necessidade do seu negócio.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {items.map(i => (
            <li key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gold/15 bg-card/40">
              <Check className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span className="text-sm text-off-white">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="p-8 lg:p-12 rounded-3xl border border-gold/20 bg-gradient-to-br from-deep-blue/40 to-card/60">
          <SectionLabel>Aviso importante</SectionLabel>
          <h3 className="mt-5 text-2xl sm:text-3xl">Site simples não é sistema completo.</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sites simples e vitrines digitais não incluem automaticamente funcionalidades avançadas como login,
            painel administrativo, pagamento online, checkout, estoque, reserva automática, calendário em tempo
            real ou integração com impressora. Essas funções podem ser estudadas como projeto avançado separado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    "Mais profissionalismo",
    "Mais confiança antes do contato",
    "Link mais completo para a bio",
    "Informações organizadas",
    "Atendimento mais direto",
    "Marca mais valorizada",
  ];
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <SectionLabel>Por que ter um site próprio?</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
          O Instagram mostra o movimento. O site apresenta a marca.
        </h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(i => (
            <div key={i} className="p-6 rounded-2xl border border-gold/15 bg-card/40">
              <Check className="w-5 h-5 text-gold mx-auto" />
              <p className="mt-3 text-off-white">{i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Preciso pagar mensalidade?", a: "Não há mensalidade obrigatória comigo para sites simples. Domínio, hospedagem e manutenção podem ser tratados separadamente." },
    { q: "O site funciona no celular?", a: "Sim. Todos os sites são criados para funcionar bem no celular e no computador, com layout responsivo e boa experiência de navegação." },
    { q: "Você faz site com WhatsApp?", a: "Sim. O site pode ter botões diretos para WhatsApp com mensagem pronta, facilitando o contato do cliente com o negócio." },
    { q: "Posso colocar o site no Instagram?", a: "Sim. O link pode ser usado na bio do Instagram, WhatsApp, cartões digitais, grupos, anúncios e materiais de divulgação." },
    { q: "Você faz loja virtual completa?", a: "Site simples não inclui loja completa, checkout, pagamento online, estoque automático ou painel administrativo. Essas funções podem ser estudadas como projeto avançado separado." },
    { q: "Eu preciso ter fotos?", a: "O ideal é usar fotos reais e autorizadas do seu negócio. Se necessário, podem ser usadas imagens temporárias apenas como referência até as fotos oficiais ficarem prontas." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionLabel>Dúvidas frequentes</SectionLabel>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">Perguntas <span className="text-gold-gradient italic">comuns</span>.</h2>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="rounded-2xl border border-gold/15 bg-card/50 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left">
                <span className="text-lg">{it.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="relative p-10 lg:p-16 rounded-3xl border border-gold/30 bg-gradient-to-br from-graphite via-deep-blue/40 to-graphite text-center shadow-premium overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
          <div className="relative">
            <Logo className="h-16 w-16 mx-auto" />
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
              Quer um site profissional para seu <span className="text-gold-gradient italic">negócio</span>?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fale com a LMW Sites pelo WhatsApp e conte o que você precisa. Você recebe orientação sobre o melhor
              modelo de página para divulgar seu negócio com mais profissionalismo.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform">
              <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
            </a>
            <div className="mt-6 text-sm text-muted-foreground">
              (47) 98496-9457 · sitesdolucas.com.br
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-background/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-4">
            <Logo className="h-20 w-20" />
            <div>
              <div className="font-display text-2xl text-gold-gradient">LMW Sites</div>
              <div className="text-xs text-muted-foreground mt-1">Sites e vitrines digitais para negócios locais</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Criação de sites premium para negócios locais que querem ser levados a sério no digital.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Contato</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-gold" /> WhatsApp: (47) 98496-9457</li>
            <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-gold" />
              <a href="https://www.instagram.com/lucas_weichselbaum/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                Instagram: @lucas_weichselbaum
              </a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Site: sitesdolucas.com.br</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Avisos</div>
          <ul className="mt-4 space-y-3 text-xs text-muted-foreground leading-relaxed">
            <li>Fotos, marcas, logos, cardápios, preços e informações exibidas nos projetos devem ser autorizadas pelos respectivos clientes.</li>
            <li>Valores sujeitos a alteração conforme escopo do projeto.</li>
            <li>Sites simples não incluem funcionalidades de sistema completo, como login, painel, checkout, pagamento online, estoque, reserva automática ou integrações avançadas.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 LMW Sites · sitesdolucas.com.br</div>
          <div>Sites e vitrines digitais para negócios locais</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsFloat() {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-light text-primary-foreground shadow-gold hover:scale-110 transition-transform">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Brand />
        <Services />
        <Portfolio />
        <ForWho />
        <Process />
        <Plans />
        <Included />
        <Disclaimer />
        <Trust />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsFloat />
    </div>
  );
}
