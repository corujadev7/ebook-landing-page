"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, BookOpen, Headphones, Star, Shield, Zap } from "lucide-react"

export default function AudiobookLandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // Carrega os scripts do Wistia apenas uma vez
    const script1 = document.createElement("script");
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://fast.wistia.com/embed/wune0rmsby.js";
    script2.async = true;
    script2.type = "module";

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToOffer = () => {
    document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Transforme sua vida com o conhecimento dos <span className="text-red-700">maiores best-sellers</span> do mundo em áudios práticos e acessíveis
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">Assista o Vídeo Abaixo</p>

          <div className="mb-8 flex justify-center">
            <div className="relative max-w-2xl w-full">
              <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
               <wistia-player media-id="wune0rmsby" aspect="0.5625"></wistia-player>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToOffer}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg w-full sm:w-auto"
            >
              Quero acessar agora
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              Garantia de 7 dias
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              +1.200 clientes satisfeitos
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              Download imediato
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              Suporte 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Por que escolher nossa biblioteca digital?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-card-foreground">200+ Áudios Exclusivos</h3>
                <p className="text-sm text-muted-foreground">
                  Acesso instantâneo aos melhores resumos em áudio dos maiores best-sellers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-card-foreground">3.500 PDFs de Bônus</h3>
                <p className="text-sm text-muted-foreground">
                  Biblioteca completa organizada por categorias para consulta rápida
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-card-foreground">Economia de Tempo</h3>
                <p className="text-sm text-muted-foreground">
                  Resumos práticos que capturam a essência de cada livro em minutos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-card-foreground">Transformação Comprovada</h3>
                <p className="text-sm text-muted-foreground">
                  Conhecimento aplicável para evolução pessoal e financeira real
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book Library Section */}
      <section className="bg-card py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-card-foreground">
            Alguns livros inclusos na biblioteca
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 text-pretty">
            Confira uma pequena amostra dos best-sellers disponíveis. São mais de 3.500 títulos em PDF e 200 audiobooks
            esperando por você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <img
                    src="/do-mil-ao-milhao-book-cover.png"
                    alt="Capa do livro Do Mil ao Milhão, escrito por Thiago Nigro"
                    className="w-48 h-64 object-cover rounded-md shadow-md"
                    loading="lazy"
                  />
                </div>

                <Badge variant="secondary" className="mb-3">
                  Finanças
                </Badge>

                <h2 className="font-bold text-lg mb-1 text-card-foreground">
                  Do Mil ao Milhão
                </h2>
                <p className="text-sm text-muted-foreground">Thiago Nigro</p>
              </CardContent>
            </Card>


            <Card className="p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <img
                    src="/7-habitos-book-cover.png"
                    alt="Capa do livro Os 7 Hábitos das Pessoas Altamente Eficazes de Stephen R. Covey"
                    className="w-48 h-64 object-cover rounded-md shadow-md"
                  />
                </div>
                <Badge variant="secondary" className="mb-4">
                  Desenvolvimento Pessoal
                </Badge>
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Os 7 Hábitos das Pessoas Altamente Eficazes
                </h3>
                <p className="text-sm text-muted-foreground">Stephen R. Covey</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <img
                    src="/pai-rico-pai-pobre-book-cover.png"
                    alt="Capa do livro Pai Rico Pai Pobre de Robert T. Kiyosaki"
                    className="w-48 h-64 object-cover rounded-md shadow-md"
                  />
                </div>
                <Badge variant="secondary" className="mb-4">
                  Educação Financeira
                </Badge>
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Pai Rico Pai Pobre</h3>
                <p className="text-sm text-muted-foreground">Robert T. Kiyosaki</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <img
                    src="/quem-pensa-enriquece-book-cover.png"
                    alt="Capa do livro Quem Pensa Enriquece de Napoleon Hill"
                    className="w-48 h-64 object-cover rounded-md shadow-md"
                  />
                </div>
                <Badge variant="secondary" className="mb-4">
                  Mindset
                </Badge>
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Quem Pensa Enriquece</h3>
                <p className="text-sm text-muted-foreground">Napoleon Hill</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-card py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-card-foreground">Sobre Nossa Missão</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Nossa missão é democratizar o acesso ao conhecimento dos maiores best-sellers do mundo. Reunimos uma equipe
            de especialistas para criar resumos de alta qualidade que capturam a essência de cada obra, permitindo que
            você absorva conhecimento valioso de forma rápida e eficiente.
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Anos de experiência</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1.200+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Áudios produzidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            O que nossos clientes dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Incrível! Consegui absorver conhecimento de 50 livros em apenas 2 meses. Minha produtividade aumentou
                  drasticamente."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Maria Silva</div>
                    <div className="text-xs text-muted-foreground">Empresária</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "A qualidade dos áudios é excepcional. Escuto no trânsito e já li mais este ano do que nos últimos 5
                  anos juntos."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    J
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">João Santos</div>
                    <div className="text-xs text-muted-foreground">Executivo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "Investimento que se paga sozinho. Os conhecimentos que adquiri me ajudaram a aumentar minha renda em
                  40%."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    A
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Ana Costa</div>
                    <div className="text-xs text-muted-foreground">Consultora</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="bg-card py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-card-foreground">Oferta Especial - Apenas Hoje!</h2>

          <div className="bg-background border-2 border-primary rounded-lg p-8 mb-8">
            <div className="text-sm text-muted-foreground mb-2">Valor normal na Amazon:</div>
            <div className="text-2xl text-muted-foreground line-through mb-4">R$ 297,00</div>

            <div className="text-sm text-accent font-semibold mb-2">Seu preço hoje:</div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-4">R$ 19,90</div>

            <div className="text-sm text-muted-foreground mb-6">Economia de R$ 277,10 (93% de desconto)</div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg w-full sm:w-auto mb-4"
              asChild
            >
              <a href="https://pay.cakto.com.br/rfyes75_550088" target="_blank" rel="noopener noreferrer">
                Comprar Agora - R$ 19,90
              </a>
            </Button>

            <div className="text-xs text-muted-foreground">Pagamento seguro • Acesso imediato • Garantia de 7 dias</div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-accent mb-4">⏰ Oferta expira em:</h3>
            <div className="flex justify-center gap-4 text-center">
              <div className="bg-accent text-accent-foreground rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs">Horas</div>
              </div>
              <div className="bg-accent text-accent-foreground rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-xs">Min</div>
              </div>
              <div className="bg-accent text-accent-foreground rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-xs">Seg</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Garantia Incondicional de 7 Dias</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Teste por 7 dias. Se não gostar, devolvemos 100% do valor sem perguntas. Nosso compromisso é com sua
            satisfação total.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Como recebo o acesso aos áudios e PDFs?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Após a confirmação do pagamento, você receberá um email com o link de download e instruções de acesso.
                Todo o conteúdo fica disponível imediatamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Posso ouvir os áudios offline?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Todos os áudios podem ser baixados e ouvidos offline em qualquer dispositivo. Você terá acesso
                vitalício ao conteúdo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Quais formas de pagamento vocês aceitam?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aceitamos cartão de crédito, débito, PIX e boleto bancário. Todos os pagamentos são processados com
                segurança.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Há atualizações do conteúdo?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Adicionamos novos áudios e PDFs regularmente. Todos os clientes recebem as atualizações
                gratuitamente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">Como funciona o suporte?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Oferecemos suporte 24/7 via email e WhatsApp. Nossa equipe está sempre pronta para ajudar com qualquer
                dúvida.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground">
            Não perca esta oportunidade única!
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
            Junte-se a mais de 1.200 pessoas que já transformaram suas vidas com nosso conteúdo.
          </p>

          <Button
            size="lg"
            className="bg-background hover:bg-background/90 text-foreground font-bold px-6 md:px-8 py-4 rounded-lg text-base md:text-lg mb-4 w-full sm:w-auto max-w-md mx-auto"
            asChild
          >
            <a href="https://pay.cakto.com.br/rfyes75_550088" target="_blank" rel="noopener noreferrer">
              Garantir Meu Acesso Agora - R$ 19,90
            </a>
          </Button>

          <div className="text-sm text-primary-foreground/80">
            ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte 24/7
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-background mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-background/80">
                <div>📧 suporte@audiobooksdigitais.com</div>
                <div>📱 (11) 99999-9999</div>
                <div>🕒 Atendimento 24/7</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-background mb-4">Links Úteis</h3>
              <div className="space-y-2 text-sm text-background/80">
                <div>Termos de Uso</div>
                <div>Política de Privacidade</div>
                <div>Política de Reembolso</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-background mb-4">Redes Sociais</h3>
              <div className="space-y-2 text-sm text-background/80">
                <div>Instagram</div>
                <div>Facebook</div>
                <div>YouTube</div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-sm text-background/60">© 2024 Audiobooks Digitais. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
