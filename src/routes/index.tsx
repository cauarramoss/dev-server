import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Heart,
  Sparkles,
  Users,
  Leaf,
  Brain,
  Compass,
  Sunrise,
  ShieldCheck,
  Flame,
  UserCheck,
  Instagram,
  MessageCircle,
  MapPin,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/vanessa-hero.jpeg";
import aboutImg from "@/assets/vanessa-about.jpeg";
import contactImg from "@/assets/vanessa-contact.jpeg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanessa | Psicóloga TCC — Terapia para uma vida mais leve" },
      {
        name: "description",
        content:
          "Psicóloga especialista em Terapia Cognitivo-Comportamental com mais de 20 anos de experiência. Atendimento humanizado online e presencial para mulheres.",
      },
      { property: "og:title", content: "Vanessa | Psicóloga TCC" },
      {
        property: "og:description",
        content:
          "Transforme sua relação consigo mesma através da Terapia Cognitivo-Comportamental.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const WHATSAPP_URL = "https://wa.me/5511941550255";
const INSTAGRAM_URL = "https://www.instagram.com/van.patrocinio?igsh=dGkxeGoxdDh0cnM5&utm_source=qr";

function Landing() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-2xl tracking-wide text-primary">
            Vanessa<span className="text-gold">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
            <a href="#sobre" className="hover:text-gold transition">Sobre</a>
            <a href="#ajudar" className="hover:text-gold transition">Como ajudo</a>
            <a href="#para-quem" className="hover:text-gold transition">Para quem</a>
            <a href="#depoimentos" className="hover:text-gold transition">Depoimentos</a>
            <a href="#contato" className="hover:text-gold transition">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-shine hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm shadow-soft hover:shadow-elegant transition-all"
          >
            <MessageCircle className="h-4 w-4" /> Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero">
        {/* organic blobs */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 w-[420px] h-[420px] organic-blob bg-gradient-warm opacity-60 animate-float"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        <div
          className="pointer-events-none absolute top-40 right-[-100px] w-[360px] h-[360px] organic-blob bg-gradient-gold opacity-30 animate-float"
          style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: "2s" }}
        />
        <Leaf className="absolute top-32 right-1/4 h-8 w-8 text-gold/40 animate-float" />
        <Sparkles className="absolute bottom-20 left-1/3 h-6 w-6 text-gold/50 animate-float" style={{ animationDelay: "1s" }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Psicóloga · TCC
            </span>
            <h1 className="mt-6 text-[2rem] sm:text-5xl md:text-6xl leading-[1.08] text-primary">
              Sua terapeuta para uma vida mais{" "}
              <span className="italic text-gold">leve</span>, consciente e feliz.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Transforme sua relação consigo mesma através da Terapia Cognitivo-Comportamental.
              Um espaço seguro para você crescer emocionalmente, fortalecer sua autoestima e
              viver com mais equilíbrio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 shadow-soft hover:shadow-elegant transition-all"
              >
                <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 backdrop-blur px-7 py-3.5 text-primary hover:bg-secondary transition-all"
              >
                <Instagram className="h-4 w-4" /> Conhecer Instagram
              </a>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-3 text-sm text-foreground/80">
              {[
                "20+ anos de experiência",
                "Especialista em TCC",
                "Atendimento humanizado",
                "Somente online",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-30 organic-blob blur-2xl" />
            <div className="relative organic-blob overflow-hidden shadow-elegant border-4 border-background">
              <img
                src={heroImg}
                alt="Vanessa, psicóloga TCC"
                className="w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 left-2 sm:-left-6 bg-card rounded-2xl shadow-soft px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 border border-border max-w-[calc(100%-1rem)]">
              <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Acolhimento</p>
                <p className="text-sm font-medium">+1000 mulheres atendidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="reveal relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-warm organic-blob blur-xl opacity-70" />
            <img
              src={aboutImg}
              alt="Vanessa em pé"
              className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] object-cover rounded-[2rem] shadow-elegant"
              loading="lazy"
            />
            <div className="absolute top-6 right-2 sm:-right-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft">
              <p className="font-serif text-3xl text-gold">20+</p>
              <p className="text-xs text-muted-foreground">anos de jornada</p>
            </div>
          </div>
          <div className="reveal order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Conheça</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Conheça Vanessa</h2>
            <p className="mt-3 italic text-muted-foreground">
              Psicóloga especializada em TCC com mais de 20 anos de experiência.
            </p>
            <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Olá! Eu sou a Vanessa, psicóloga por vocação e profundamente apaixonada
                pelos processos de evolução humana.
              </p>
              <p>
                Minha jornada começou em 2002, com formação e especialização em Terapia
                Cognitivo-Comportamental (TCC).
              </p>
              <p>
                Minha essência é guiar você na redescoberta de si mesma. Acredito que
                amadurecer é um processo de autoescolha — feito com consciência, coragem
                e, acima de tudo, leveza.
              </p>
              <p>
                Ao longo dos anos, tenho ajudado mulheres a compreenderem seus
                pensamentos, fortalecerem sua autoestima, desenvolverem inteligência
                emocional e construírem relações mais saudáveis consigo mesmas e com o mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO POSSO TE AJUDAR */}
      <section id="ajudar" className="relative py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Especialidades</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Como posso te ajudar</h2>
            <p className="mt-4 text-muted-foreground">
              Áreas em que caminho ao seu lado com escuta atenta e técnica.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {[
              { i: Brain, t: "Ansiedade", d: "Preocupações excessivas" },
              { i: Heart, t: "Autoestima", d: "Autoconfiança" },
              { i: Users, t: "Relacionamentos", d: "Vínculos afetivos" },
              { i: Flame, t: "Dependência emocional", d: "Autonomia afetiva" },
              { i: Sunrise, t: "Desenvolvimento pessoal", d: "Evolução contínua" },
              { i: Sparkles, t: "Inteligência emocional", d: "Equilíbrio interno" },
              { i: Compass, t: "Autoconhecimento", d: "Reencontro com você" },
              { i: ShieldCheck, t: "Estresse e sobrecarga", d: "Pausa e cuidado" },
              { i: Leaf, t: "Transições de vida", d: "Novos ciclos" },
              { i: UserCheck, t: "Síndrome da impostora", d: "Reconhecer seu valor" },
            ].map(({ i: Icon, t, d }) => (
              <div
                key={t}
                className="reveal group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-warm flex items-center justify-center mb-4 group-hover:bg-gradient-gold transition">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-primary">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section id="para-quem" className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute -right-40 top-1/4 w-[500px] h-[500px] organic-blob bg-gradient-warm opacity-50"
          style={{ transform: `translateY(${(scrollY - 1800) * 0.05}px)` }}
        />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Para você</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">
              Você não precisa enfrentar tudo sozinha
            </h2>
            <p className="mt-5 text-muted-foreground">A terapia pode ser para você que:</p>
          </div>
          <div className="reveal mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {[
              "Se sente constantemente sobrecarregada",
              "Tem dificuldade em colocar limites",
              "Vive preocupada com o futuro",
              "Sente que perdeu sua essência",
              "Deseja fortalecer sua autoestima",
              "Busca mais equilíbrio emocional",
              "Quer relacionamentos mais saudáveis",
              "Está pronta para uma nova fase",
            ].map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/60 backdrop-blur hover:border-gold hover:bg-card transition"
              >
                <div className="h-6 w-6 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <p className="text-foreground/85">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute -left-20 -top-20 w-[300px] h-[300px] organic-blob bg-gold/20 blur-2xl" />
        <div className="absolute -right-20 bottom-0 w-[400px] h-[400px] organic-blob bg-gold/10 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Benefícios</span>
            <h2 className="mt-3 text-4xl md:text-5xl">O que a terapia pode despertar em você</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Mais clareza emocional",
              "Redução da ansiedade",
              "Fortalecimento da autoestima",
              "Melhores relacionamentos",
              "Maior autoconhecimento",
              "Segurança pessoal",
              "Equilíbrio e qualidade de vida",
              "Sentido e propósito",
            ].map((b) => (
              <div
                key={b}
                className="reveal rounded-2xl p-6 border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur hover:bg-primary-foreground/10 transition"
              >
                <Sparkles className="h-5 w-5 text-gold mb-3" />
                <p className="font-serif text-xl leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Histórias</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Depoimentos</h2>
            <p className="mt-4 text-muted-foreground">
              Mulheres que iniciaram sua jornada de transformação.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Hoje me sinto muito mais segura e confiante para tomar decisões.",
                n: "Mariana",
              },
              {
                q: "A terapia me ajudou a recuperar minha autoestima e minha paz.",
                n: "Camila",
              },
              {
                q: "Foi um processo transformador que mudou minha forma de enxergar a vida.",
                n: "Letícia",
              },
            ].map((d) => (
              <div
                key={d.n}
                className="reveal relative rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-elegant transition"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-xl text-primary leading-relaxed">
                  "{d.q}"
                </p>
                <div className="mt-6 flex items-center">
                  <p className="text-sm font-medium text-muted-foreground">{d.n}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Processo</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Como funciona</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Contato", d: "Entre em contato pelo WhatsApp." },
              { n: "02", t: "Agendamento", d: "Agendamos sua primeira sessão." },
              { n: "03", t: "Plano", d: "Definimos o melhor plano terapêutico." },
              { n: "04", t: "Jornada", d: "Iniciamos sua transformação emocional." },
            ].map((s, idx) => (
              <div key={s.n} className="reveal relative">
                <div className="rounded-2xl bg-card border border-border p-7 shadow-soft h-full hover:-translate-y-1 transition">
                  <span className="font-serif text-5xl text-gold/80">{s.n}</span>
                  <h3 className="mt-3 font-serif text-2xl text-primary">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 h-5 w-5 text-gold" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.25em] text-gold">Contato</span>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary leading-tight">
              Sua transformação pode <span className="italic text-gold">começar hoje</span>.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
              Dar o primeiro passo é um ato de coragem e amor-próprio. Estou aqui para
              caminhar ao seu lado nessa jornada.
            </p>

            <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-foreground/80">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Atendimento somente online</span>
              <span className="hidden sm:inline text-gold">·</span>
              <span>Seg a Sex 9h–19h · Sáb 9h–14h</span>
            </div>

            <div className="relative mt-10 mx-auto w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 organic-blob blur-2xl" />
              <img
                src={contactImg}
                alt="Vanessa"
                className="relative w-full h-[360px] sm:h-[420px] object-cover rounded-[2rem] shadow-elegant"
                loading="lazy"
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 shadow-soft hover:shadow-elegant"
              >
                <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-primary hover:bg-secondary"
              >
                <Instagram className="h-4 w-4" /> Seguir no Instagram
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/90 py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-serif text-2xl">
              Vanessa<span className="text-gold">.</span>
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
              Psicóloga especialista em Terapia Cognitivo-Comportamental. Acolhimento,
              escuta e transformação.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-serif text-lg text-gold mb-2">Contato</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold transition">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-serif text-lg text-gold mb-2">Atendimento</p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5" /> Somente online
            </p>
            <p className="text-primary-foreground/70">Segunda a sexta · 9h às 19h</p>
            <p className="text-primary-foreground/70">Sábado · 9h às 14h</p>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 px-6 max-w-7xl mx-auto text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Vanessa Psicologia. Todos os direitos reservados.</p>
          <p>Feito com cuidado e leveza.</p>
        </div>
      </footer>
    </div>
  );
}
