/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <UrgencyBar />
      <HeroSection />
      <CarouselSection />
      <ReceiveSection />
      <WhySection />
      <IdealSection />
      <BonusSection />
      <OffersSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-10 px-4 text-center text-sm">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <p>Copyright &copy; 2026 | Todos os direitos reservados.</p>
        <p>Todos os direitos sobre a obra "+1.000 Artes Prontas para Bottons e Imãs" são reservados ao produto, nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais).</p>
      </div>
    </footer>
  );
}

function UrgencyBar() {
  return (
    <div className="bg-red-600 text-white text-center py-2 text-sm md:text-base font-bold uppercase tracking-wider">
      Oferta válida até <span id="data-oferta">29/06/2026</span>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="px-4 py-12 md:py-20 flex flex-col items-center text-center max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6 px-4 py-1.5 border border-gray-200 rounded-full bg-transparent text-gray-700 font-bold text-sm shadow-sm">
        <img src="https://i.ibb.co/W4HpkXCw/Design-sem-nome-3.webp" alt="Canva" className="w-5 h-5" decoding="async" />
        Editáveis no Canva
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
        <span className="text-[#2563eb]">+1.000</span>
        <span className="text-[#1A1A1A]"> Artes Prontas para </span>
        <span className="text-[#2563eb]">Bottons e Imãs</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
        Tenha acesso imediato a mais de 1.000 artes profissionais prontas para imprimir, produzir e começar a vender hoje mesmo.
      </p>
      <div className="w-full max-w-3xl mb-8">
          <img
            src="https://i.ibb.co/cKLpp4Km/Chat-GPT-Image-30-de-jun-de-2026-02-00-24.png"
            alt="Chat GPT Image 30 de jun de 2026 02 00 24"
            className="w-full h-auto object-cover rounded-2xl shadow-xl"
            decoding="async"
            fetchPriority="high"
          />
      </div>
      <a
        href="#ofertas"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-[#16a34a] hover:bg-green-700 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-full shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] transition-transform hover:scale-105"
      >
        QUERO COMEÇAR HOJE
      </a>
    </section>
  );
}

const images = [
  "https://i.ibb.co/dwGSqPkY/Screenshot-2026-06-30-12-15-22-084-com-canva-editor-edit.webp",
  "https://i.ibb.co/My7JTh2b/Screenshot-2026-06-30-12-17-50-578-com-canva-editor-edit.webp",
  "https://i.ibb.co/gZwYwx1V/Screenshot-2026-06-30-12-13-20-238-com-canva-editor-edit.webp",
  "https://i.ibb.co/B5MRzSMD/Screenshot-2026-06-30-12-13-40-291-com-canva-editor-edit.webp",
  "https://i.ibb.co/5W6YqCSB/Screenshot-2026-06-30-12-13-55-476-com-canva-editor-edit.webp",
  "https://i.ibb.co/8LByvbnD/Screenshot-2026-06-30-12-14-08-230-com-canva-editor-edit.webp",
  "https://i.ibb.co/B2Vg9fx0/Screenshot-2026-06-30-12-14-23-058-com-canva-editor-edit.webp",
  "https://i.ibb.co/zTdXLvgw/Screenshot-2026-06-30-12-14-38-535-com-canva-editor-edit.webp"
];

function CarouselSection() {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-[8.5vw] sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 uppercase whitespace-nowrap tracking-tighter">
          VEJA ALGUMAS ARTES
        </p>
        <span className="block w-24 h-1 bg-[#2563eb] mx-auto rounded-full"></span>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-mobile md:animate-scroll">
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-none w-64 md:w-80 mx-1">
              <img src={src} alt="Artes Prontas" className="w-full h-auto" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const itemsList = [
  'Animes',
  'Copa do Mundo 2026',
  'Personagens',
  'Filmes',
  'Frases Cristãs',
  'Séries',
  'K-Pop',
  'E muito mais...'
];

function ReceiveSection() {
  return (
    <section className="receive-section">
      <div className="badge-green">ACESSO IMEDIATO</div>
      <h2 className="section-title" style={{ marginTop: '16px' }}>O QUE VOCÊ VAI RECEBER</h2>
      <div className="receive-grid">
        <div className="receive-card">
          <span className="item-badge">ITEM 01</span>
          <h3>+1.000 Artes Prontas para Bottons e Imãs</h3>
          <p>Artes organizadas e prontas para impressão nos modelos que mais vendem atualmente.</p>
          <ul className="receive-list">
            {itemsList.map((item, i) => (
              <li key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="receive-card">
          <span className="item-badge">ITEM 02</span>
          <h3>Guia de Impressão e Produção</h3>
          <p>Aprenda como imprimir corretamente suas artes e produzir bottons e imãs de forma simples, mesmo começando do zero.</p>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: '🎯', title: 'Comece do zero sem travar', desc: 'Mesmo sem experiência você consegue produzir.' },
  { icon: '⚡', title: 'Tudo pronto para imprimir', desc: 'Não perca horas criando artes do zero.' },
  { icon: '💰', title: 'Alta margem de lucro', desc: 'Produza gastando pouco e venda com excelente lucro.' },
  { icon: '🛒', title: 'Artes dos temas mais vendidos', desc: 'Modelos com alta procura e grande potencial de vendas.' },
  { icon: '📦', title: 'Tudo organizado', desc: 'Encontre rapidamente qualquer arte sempre que precisar.' }
];

function WhySection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">POR QUE ESCOLHER ESSAS ARTES?</h2>
        <span className="block w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-12"></span>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <span className="text-5xl mb-4 block">{r.icon}</span>
              <h3 className="text-xl font-bold mb-2">{r.title}</h3>
              <p className="text-gray-600">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#ofertas" onClick={(e) => { e.preventDefault(); document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block bg-[#16a34a] hover:bg-green-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] transition-transform hover:scale-105">
            QUERO AS ARTES AGORA
          </a>
        </div>
      </div>
    </section>
  );
}

const ideals = [
  'Quer economizar horas criando artes do zero',
  'Já faz bottons e quer aumentar sua produção',
  'Precisa de artes prontas para vender mais rápido',
  'Quer oferecer mais opções aos clientes sem ter trabalho',
  'Está começando e não sabe quais artes fazem sucesso',
  'Busca um acervo completo para vender bottons e ímãs personalizados',
  'Deseja produzir mais e perder menos tempo'
];

function IdealSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">
          IDEAL <span className="text-[#2563eb]">PARA VOCÊ</span> QUE:
        </h2>
        <span className="block w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-10"></span>

        <ul className="flex flex-col gap-4 max-w-fit mx-auto">
          {ideals.map((item, i) => (
            <li key={i} className="flex items-start gap-3 w-full">
              <span className="text-xl mt-[2px]">✅</span>
              <span style={{ fontSize: '16px' }} className="text-gray-800 font-medium text-left">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const bonuses = [
  { num: 1, title: 'Kit Gabaritos para Máquinas de Ímãs e Bottons', desc: 'Mais uma coleção pronta para ampliar seu catálogo e vender ainda mais.', old: 'R$27', img: 'https://i.ibb.co/y7v6JMs/Chat-GPT-Image-30-de-jun-de-2026-19-04-34.webp' },
  { num: 2, title: 'Planilha de Custos e Precificação', desc: 'Ferramenta essencial para calcular e garantir seu lucro real.', old: 'R$27', img: 'https://i.ibb.co/Mym62RqQ/Chat-GPT-Image-30-de-jun-de-2026-19-04-25.webp' },
  { num: 3, title: 'Scripts para fechar vendas no WhatsApp', desc: 'Mensagens estratégicas prontas para converter clientes.', old: 'R$37', img: 'https://i.ibb.co/ZpQT7VvW/Chat-GPT-Image-30-de-jun-de-2026-19-08-43.webp' },
];

function BonusSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-3xl md:text-4xl font-black mb-2 text-gray-900">E NÃO PARA POR AÍ... <span className="text-[#2563eb]">TEM MAIS!</span></p>
        <p className="text-xl text-gray-600 mb-6 uppercase">VOCÊ TAMBÉM VAI RECEBER…</p>
        <span className="inline-block bg-[#2563eb] text-white font-bold text-lg px-6 py-2 rounded-full mb-12 shadow-[0_0_15px_rgba(37,99,235,0.5)] uppercase">
          3 Bônus Exclusivos
        </span>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {bonuses.map((b) => (
            <div key={b.num} className="bg-white rounded-2xl overflow-hidden flex flex-col border border-gray-200 shadow-md hover:border-[#2563eb] transition-colors">
              <div className="w-full bg-gray-50 p-4 aspect-square flex items-center justify-center border-b border-gray-100">
                <img src={b.img} alt={b.title} className="max-w-full max-h-full object-contain" loading="lazy" decoding="async" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[#2563eb] font-bold text-xs uppercase tracking-wider mb-2">#{b.num} – BÔNUS HOJE!</span>
                <h4 className="font-bold text-lg mb-3 leading-tight text-gray-900">{b.title}</h4>
                <p className="text-gray-600 text-sm mb-6 flex-1">{b.desc}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <span className="text-gray-400 line-through text-sm">De {b.old}</span>
                  <span className="text-green-500 font-bold text-lg">GRÁTIS HOJE</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefitsList = [
  { label: '+1.000 Artes Prontas para Bottons e Imãs' },
  { label: 'Guia de Impressão e Produção' },
  { label: 'Acesso Digital e Vítalicio' },
  { label: 'Garantia de 30 dias' },
  { label: 'Atualizações Mensais' },
  { label: 'Suporte Prioritário' },
  { prefix: 'BÔNUS:', label: 'Kit Gabaritos para Máquinas de Ímãs e Bottons' },
  { prefix: 'BÔNUS:', label: 'Planilha de Custos e Precificação' },
  { prefix: 'BÔNUS:', label: 'Scripts para fechar vendas no WhatsApp' },
];

function OffersSection() {
  const [timeLeft, setTimeLeft] = useState({ h: 3, m: 38, s: 27 });
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        if (h === 0 && m === 0 && s === 0) return prev;
        if (s > 0) { s--; }
        else {
          s = 59;
          if (m > 0) { m--; }
          else { m = 59; h--; }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <section id="ofertas" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 uppercase">ESCOLHA O MELHOR PLANO <span className="text-[#2563eb]">PARA VOCÊ!</span></h2>
        <span className="block w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-12"></span>

        <div className="text-center mb-10">
          <p className="font-bold text-[#2563eb] mb-3 tracking-widest text-sm uppercase">OFERTA LIMITADA – TERMINA EM:</p>
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm flex flex-col items-center">
              <span className="block text-3xl md:text-4xl font-black text-[#2563eb]">{format(timeLeft.h)}</span>
              <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold mt-1">Horas</span>
            </div>
            <span className="text-[#2563eb] font-black text-3xl md:text-4xl pb-1">:</span>
            <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm flex flex-col items-center">
              <span className="block text-3xl md:text-4xl font-black text-[#2563eb]">{format(timeLeft.m)}</span>
              <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold mt-1">Min</span>
            </div>
            <span className="text-[#2563eb] font-black text-3xl md:text-4xl pb-1">:</span>
            <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-sm flex flex-col items-center">
              <span className="block text-3xl md:text-4xl font-black text-[#2563eb]">{format(timeLeft.s)}</span>
              <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold mt-1">Seg</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Plano Básico */}
          <div style={{ background: '#FFFFFF', border: '2px solid #222222', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', margin: '0 0 12px', textAlign: 'center', textTransform: 'uppercase' }}>PLANO BÁSICO</p>
            <div style={{ background: '#FEF9C3', color: '#92400E', fontSize: '13px', fontWeight: 600, padding: '8px 14px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>⚠️ Você está perdendo os bônus</div>
            <p style={{ color: '#dc2626', textDecoration: 'line-through', fontSize: '14px', margin: '0 0 2px', textAlign: 'center' }}>De R$47,00</p>
            <p style={{ fontSize: '48px', fontWeight: 900, color: '#16a34a', lineHeight: 1.1, margin: '0 0 20px', textAlign: 'center' }}>R$10</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1, textAlign: 'left' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #F0F0F0' }}><span>✅</span><span>+1.000 Artes Prontas para Bottons e Imãs</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #F0F0F0' }}><span>✅</span><span>Guia de Impressão e Produção</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #F0F0F0' }}><span>✅</span><span>Acesso Digital e Vítalicio</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #F0F0F0' }}><span>✅</span><span>Garantia de 30 dias</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #F0F0F0' }}><span>❌</span><span>Bônus Exclusivos</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #F0F0F0' }}><span>❌</span><span>Atualizações Mensais</span></li>
            </ul>
            <button id="btn-basico" onClick={(e) => { e.preventDefault(); setShowUpsell(true); }} style={{ display: 'block', width: '100%', boxSizing: 'border-box', padding: '16px', borderRadius: '8px', background: '#16a34a', color: '#ffffff', fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: '17px', textAlign: 'center', border: 'none', cursor: 'pointer' }}>QUERO O BÁSICO</button>
            <p style={{ color: '#dc2626', textAlign: 'center', fontSize: '18px', fontWeight: 700, lineHeight: 1.3, margin: '20px 0 8px' }}>92% das pessoas aproveitam a oferta abaixo:</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <span className="animate-bounce-down flex items-center justify-center w-[34px] h-[34px] bg-red-600 rounded-full text-white text-[18px] font-bold">↓</span>
            </div>
          </div>

          {/* Plano Completo */}
          <div style={{ background: '#eff6ff', border: '2px solid #2563eb', borderRadius: '20px', padding: '28px 24px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 32px rgba(37,99,235,0.12)' }}>
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <span style={{ display: 'inline-block', background: '#2563eb', color: '#ffffff', fontWeight: 700, fontSize: '12px', padding: '5px 16px', borderRadius: '999px', marginBottom: '6px' }}>⭐ Mais escolhido</span><br />
              <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', fontSize: '13px', fontWeight: 600, padding: '5px 14px', borderRadius: '999px' }}>+5.489 pessoas escolheram essa oferta</span>
            </div>
            <p id="completo-title" style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 10px', textAlign: 'center' }}>PLANO COMPLETO</p>
            <div style={{ marginBottom: '16px', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: '#14532d', color: '#ffffff', fontWeight: 600, fontSize: '12px', padding: '5px 16px', borderRadius: '999px' }}>TODOS OS BÔNUS INCLUSOS</span>
            </div>
            <p style={{ color: '#dc2626', textDecoration: 'line-through', fontSize: '14px', margin: '0 0 2px', textAlign: 'center' }}>De R$197,00</p>
            <p id="completo-price" style={{ fontSize: '52px', fontWeight: 900, color: '#16a34a', lineHeight: 1.1, margin: '0 0 8px', textAlign: 'center' }}>R$27</p>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: '#dcfce7', color: '#16a34a', fontWeight: 600, fontSize: '13px', padding: '6px 18px', borderRadius: '999px' }}>Você economiza R$381,10</span>
            </div>
            <div style={{ marginBottom: '16px', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: '#dbeafe', color: '#1d4ed8', fontWeight: 700, fontSize: '12px', padding: '5px 14px', borderRadius: '999px' }}>⚡ 3x mais conteúdos</span>
            </div>
            <ul id="completo-benefits" style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flex: 1, textAlign: 'left' }}>
              {benefitsList.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#1A1A1A', fontSize: '15px', padding: '7px 0', borderBottom: '1px solid #bfdbfe' }}>
                  <span>✅</span>
                  <span>{item.prefix && <strong style={{ color: '#2563eb' }}>{item.prefix} </strong>}{item.label}</span>
                </li>
              ))}
            </ul>
            <a id="btn-completo" href="https://ggcheckout.app/checkout/v5/IUteR2HzxCUL9WTTbVCa" className="btn-completo-shine relative overflow-hidden transition-all shadow-[0_4px_15px_rgba(22,163,74,0.4)] block w-full box-border p-4 rounded-lg bg-green-600 text-white font-black text-xl text-center no-underline before:absolute before:inset-0 before:w-1/2 before:-translate-x-[150%] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-[shine_2s_infinite]">QUERO O COMPLETO</a>
            <p style={{ fontSize: '11px', fontWeight: 400, color: '#9CA3AF', textAlign: 'center', margin: '10px 0 6px' }}>Acesso imediato e vitalício</p>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#2563eb', textAlign: 'center', margin: 0 }}>APROVEITE AGORA: Você não vai encontrar esse preço depois!</p>
          </div>
        </div>
      </div>

      {showUpsell && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 md:p-4">
          <div id="upsell-modal" className="bg-white rounded-2xl w-full max-w-md p-5 md:p-6 relative animate-[popupIn_0.3s_ease_forwards] max-h-[95vh] overflow-y-auto">
            <button id="upsell-close" onClick={() => setShowUpsell(false)} aria-label="Fechar" className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-gray-800 text-xl font-bold">✕</button>
            <p className="text-center font-black text-2xl text-black mb-1.5 md:mb-2 uppercase">Espere! Oferta Especial 🔥</p>
            <p className="text-center font-bold text-gray-800 text-[13px] md:text-sm mb-3 md:mb-4" id="upsell-subtitle">Leve o PLANO COMPLETO com desconto exclusivo!</p>
            <p className="text-center text-gray-400 line-through text-[13px] md:text-sm mb-0.5 md:mb-1" id="upsell-old-price">De R$27,00</p>
            <p className="text-center text-[40px] md:text-5xl font-black text-green-600 mb-4 md:mb-6 leading-none">R$17</p>
            <ul id="upsell-list" className="space-y-2.5 md:space-y-3 mb-5 md:mb-6 text-left w-fit mx-auto">
              <li className="flex items-start gap-2 text-[13px] md:text-sm text-gray-800 border-b border-gray-100 pb-1.5 md:pb-2">
                <span>✅</span><span>+1.000 Artes Prontas para Bottons e Imãs</span>
              </li>
              <li className="flex items-start gap-2 text-[13px] md:text-sm text-gray-800 border-b border-gray-100 pb-1.5 md:pb-2">
                <span>✅</span><span>Guia de Impressão e Produção</span>
              </li>
              <li className="flex items-start gap-2 text-[13px] md:text-sm text-gray-800 border-b border-gray-100 pb-1.5 md:pb-2">
                <span>✅</span><span>Atualizações Mensais</span>
              </li>
              <li className="flex items-start gap-2 text-[13px] md:text-sm text-gray-800 border-b border-gray-100 pb-1.5 md:pb-2">
                <span>✅</span><span><strong style={{color: '#2563eb'}}>BÔNUS:</strong> Kit Gabaritos para Máquinas</span>
              </li>
              <li className="flex items-start gap-2 text-[13px] md:text-sm text-gray-800 border-b border-gray-100 pb-1.5 md:pb-2">
                <span>✅</span><span><strong style={{color: '#2563eb'}}>BÔNUS:</strong> Planilha de Custos e Precificação</span>
              </li>
              <li className="flex items-start gap-2 text-[13px] md:text-sm text-gray-800 border-b border-gray-100 pb-1.5 md:pb-2">
                <span>✅</span><span><strong style={{color: '#2563eb'}}>BÔNUS:</strong> Scripts de vendas no WhatsApp</span>
              </li>
            </ul>
            <a href="https://ggcheckout.app/checkout/v5/NbBS5H7FyEpG2X7D9t2v" className="block w-full bg-green-600 hover:bg-green-700 text-white font-black text-[16px] md:text-lg text-center py-3.5 md:py-4 rounded-lg mb-2 shadow-[0_4px_15px_rgba(22,163,74,0.4)] transition-colors">QUERO O COMPLETO POR R$17</a>
            <a href="https://ggcheckout.app/checkout/v5/hP4KHlfuZ0PReMGM5Ets" className="block w-full text-center text-gray-500 hover:text-gray-800 text-[13px] md:text-sm font-bold underline py-2">Continuar com o Básico</a>
          </div>
        </div>
      )}
    </section>
  );
}

const reviews = [
  { name: 'Ana Maria P.', meta: '2d • Recife, PE', text: '"Eu gastava horas procurando artes boas na internet. Agora é só escolher, imprimir e vender. Economizei muito tempo e já consegui várias vendas."', avatar: 'https://i.ibb.co/hFRSvHjL/296352808-375680588013690-6272023175404857598-n.jpg' },
  { name: 'Camila S.', meta: '1d • Fortaleza, CE', text: '"Não sabia criar arte nenhuma. As artes já vieram prontas e organizadas. Foi só imprimir e começar a vender."', avatar: 'https://i.ibb.co/rfM4BLbn/483456766-668212382345127-5124146534366065313-n.jpg' },
  { name: 'Juliana R.', meta: '3d • Belém, PA', text: '"Valeu cada centavo. A variedade de temas impressiona e meus clientes adoraram."', avatar: 'https://i.ibb.co/V0Bf9sd4/Captura-de-tela-2026-04-13-214740.png' },
];

function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center mb-6">
          <span className="inline-block bg-[#2563eb] text-white font-bold text-sm px-5 py-2 rounded-full">
            6.195 pessoas já compraram
          </span>
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">O QUE OS CLIENTES ESTÃO DIZENDO</h2>
        <span className="block w-24 h-1 bg-[#2563eb] mx-auto rounded-full mb-12"></span>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src={r.avatar} alt={r.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" loading="lazy" decoding="async" />
                <div>
                  <div className="font-bold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.meta}</div>
                </div>
              </div>
              <div className="text-yellow-400 text-lg mb-3 tracking-widest">★★★★★</div>
              <p className="text-gray-600 text-sm leading-relaxed italic">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto p-8 md:p-12">
        <img src="https://i.ibb.co/VYmYvyZM/Selo-Garantia.png" alt="Selo Garantia" className="w-32 h-32 md:w-48 md:h-48 object-contain mb-8" loading="lazy" decoding="async" />
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">GARANTIA TOTAL DE 30 DIAS</h3>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            Oferecemos uma garantia incondicional de 30 dias. Se você não gostar do material ou não conseguir utilizar as artes, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas.
          </p>
          <a href="#ofertas" className="inline-block bg-[#2563eb] text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
            COMPRAR SEM RISCO
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'Preciso saber criar artes?', a: 'Não. As mais de 1.000 artes já vêm prontas. É só imprimir, produzir seus bottons ou imãs e vender.' },
  { q: 'Preciso de máquina profissional?', a: 'Você pode usar as máquinas manuais de botton mais comuns do mercado ou produzir imãs simples usando mantas magnéticas e tesoura.' },
  { q: 'Funciona em qualquer impressora?', a: 'Sim. Qualquer impressora doméstica comum serve. Você também pode imprimir em gráficas rápidas ou copiadoras.' },
  { q: 'O acesso é por quanto tempo?', a: 'O acesso é imediato e vitalício. Você paga uma vez e tem acesso a todas as artes para sempre.' },
  { q: 'Como recebo as artes?', a: 'Assim que o pagamento for confirmado, você recebe o link de acesso direto no seu e-mail instantaneamente.' },
  { q: 'Posso ganhar dinheiro de verdade com isso?', a: 'Sim. Bottons e imãs são produtos de alto giro, com custo de produção de centavos e margem de lucro excelente para venda em quantidade.' },
];

function FaqSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 uppercase">PERGUNTAS FREQUENTES</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { key?: number | string, question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-gray-50"
      >
        <span className="font-bold text-gray-800 pr-4">{question}</span>
        <span className={`text-[#2563eb] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
}
