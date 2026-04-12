"use client";

export default function CVPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4;
          margin: 0;
        }
        @media print {
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm;
            height: 297mm;
            font-size: 10.5pt;
          }
          div.max-w-6xl {
            max-width: none !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .cv-container {
            margin: 0 !important;
            padding: 8mm 15mm !important; /* Extremely tight top/bottom */
            box-shadow: none !important;
            width: 100% !important;
            max-width: none !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          section, .job-entry {
            break-inside: avoid;
            margin-top: 5px !important; /* Minimal spacing */
          }
          header {
            margin-bottom: 10px !important;
            padding-bottom: 5px !important;
          }
          h2 {
            margin-top: 10px !important;
            margin-bottom: 5px !important;
            font-size: 12pt !important;
          }
          h1 {
            font-size: 18pt !important;
          }
          .subtitle {
            font-size: 10pt !important;
          }
          p, li, .contact-info {
            font-size: 9.5pt !important;
            line-height: 1.25 !important;
          }
          ul li {
            margin-bottom: 1px !important;
          }
          a {
            text-decoration: none !important;
            color: #333 !important;
          }
          .no-print {
            display: none !important;
          }
        }
        .cv-body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.4;
          max-width: 800px;
          margin: 0 auto;
          background: white;
        }
        .cv-container {
          padding: 40px;
          background: white;
          position: relative;
        }
        .print-button {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 8px 16px;
          background: #333;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          transition: background 0.2s;
        }
        .print-button:hover {
          background: #000;
        }
        header {
          text-align: center;
          margin-bottom: 25px;
          border-bottom: 2px solid #333;
          padding-bottom: 20px;
        }
        h1 {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 24px;
          color: #000;
        }
        .subtitle {
          font-size: 16px;
          font-weight: bold;
          color: #555;
          margin-top: 5px;
        }
        .contact-info {
          font-size: 14px;
          margin-top: 10px;
        }
        .contact-info a {
          color: #333;
          text-decoration: none;
          margin: 0 5px;
        }
        h2 {
          font-size: 16px;
          text-transform: uppercase;
          border-bottom: 1px solid #ddd;
          padding-bottom: 5px;
          margin-top: 20px;
          margin-bottom: 12px;
          color: #000;
        }
        p, li {
          font-size: 14px;
        }
        ul {
          padding-left: 18px;
          margin: 0;
        }
        li {
          margin-bottom: 4px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 2px;
        }
        .company {
          font-weight: bold;
          font-size: 15px;
        }
        .role {
          font-style: italic;
          color: #444;
        }
        .date, .location {
          font-size: 13px;
          color: #666;
        }
      ` }} />
      
      <div className="cv-body dark:bg-white dark:text-gray-900 shadow-xl border border-gray-100 my-8 print:my-0 print:border-none print:shadow-none">
        <div className="cv-container">
          <button 
            onClick={() => window.print()}
            className="print-button no-print"
          >
            Download PDF / Imprimir
          </button>
          <header>
            <h1>José Trovarelli Neto</h1>
            <div className="subtitle">Software Engineer | Backend & Full Stack Developer</div>
            <div className="contact-info">
              Bariri, SP • (14) 99188-6974 • <a href="mailto:jtneto.dev@gmail.com">jtneto.dev@gmail.com</a><br />
              <a href="https://www.linkedin.com/in/josetrovarelli" target="_blank" rel="noopener noreferrer">LinkedIn</a> • 
              <a href="https://github.com/Trovarelli" target="_blank" rel="noopener noreferrer">GitHub</a> • 
              <a href="https://trovarelli.github.io/portifolio/" target="_blank" rel="noopener noreferrer">Portfólio</a>
            </div>
          </header>

          <section>
            <h2>Resumo Profissional</h2>
            <p>
              Engenheiro de Software com foco em <strong>Backend e Sistemas Escaláveis</strong>. Especialista no desenvolvimento de APIs robustas e microsserviços utilizando <strong>Node.js e Golang</strong>, com sólida experiência em otimização de performance (redução de latência em 90%) e integrações complexas (WhatsApp Business API). Proficiente em modelagem de dados (PostgreSQL/MongoDB) e arquitetura nativa em nuvem com Docker. Complemento as soluções com domínio em React/Next.js para criar ferramentas internas e dashboards de alta performance.
            </p>
          </section>

          <section>
            <h2>Competências Técnicas</h2>
            <ul>
              <li><strong>Backend & Integração:</strong> Node.js, Golang (Go), RESTful APIs, Integração de APIs (WhatsApp/Payment), Filas de Processamento (BullMQ), Webhooks.</li>
              <li><strong>Banco de Dados & Infra:</strong> PostgreSQL (Otimização de Queries), MongoDB, Docker, CI/CD (GitHub Actions), Git.</li>
              <li><strong>Frontend:</strong> React.js, Next.js, TypeScript, Tailwind CSS, Vue.js/Nuxt.js, SSR, SEO.</li>
              <li><strong>Ferramentas & Metodologias:</strong> Linux, Figma, SCRUM, Testes Automatizados (Jest/Cypress).</li>
            </ul>
          </section>

          <section>
            <h2>Experiência Profissional</h2>

            <div className="job-entry" style={{ marginBottom: '20px' }}>
              <div className="job-header">
                <span className="company">Domtec Sistemas</span>
                <span className="location">Bariri, SP</span>
              </div>
              <div className="job-header">
                <span className="role">Software Engineer (Backend Focused)</span>
                <span className="date">Out 2022 – Presente</span>
              </div>
              <ul>
                <li><strong>Otimização de Performance (Backend):</strong> Refatoração de rotinas críticas de processamento em Go, reduzindo o tempo de resposta de <strong>1 minuto para 5 segundos</strong> em endpoints de alto volume.</li>
                <li><strong>Arquitetura de Mensageria:</strong> Engenharia de sistema de comunicação robusto integrado à API oficial do WhatsApp, utilizando <strong>BullMQ</strong> e Node.js para garantir entrega confiável em larga escala.</li>
                <li><strong>Desenvolvimento de APIs:</strong> Criação e manutenção de APIs RESTful escaláveis utilizando Golang e Node.js para operações corporativas B2B críticas.</li>
                <li><strong>Dashboards & UX:</strong> Desenvolvimento de interfaces administrativas de alto desempenho com Next.js, focadas em visualização de dados complexos e ferramentas internas.</li>
              </ul>
            </div>

            <div className="job-entry" style={{ marginBottom: '20px' }}>
              <div className="job-header">
                <span className="company">SUTHUB</span>
                <span className="location">Remoto</span>
              </div>
              <div className="job-header">
                <span className="role">Desenvolvedor Front-end</span>
                <span className="date">Out 2021 – Set 2022</span>
              </div>
              <ul>
                <li>Desenvolvimento de plataforma de vendas de seguros escalável utilizando <strong>Vue.js e Nuxt.js</strong> com TypeScript.</li>
                <li>Implementação fiel de interfaces (Pixel-perfect) baseadas em protótipos Figma, garantindo consistência visual.</li>
                <li>Otimização de <strong>Core Web Vitals</strong>, implementando Server-Side Rendering (SSR) e reduzindo o tempo de carregamento inicial em 20%.</li>
                <li>Integração de autenticação complexa (OAuth2) e gestão de estados globais para fluxos de contratação.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Formação Acadêmica</h2>
            <div className="job-header">
              <span className="company">FATEC Jahu</span>
              <span className="date">Concluído em 2023</span>
            </div>
            <div>Tecnologia em Sistemas para Internet</div>
          </section>

          <section>
            <h2>Certificações</h2>
            <ul>
              <li>Next.js e React Avançado (FIAP/Alura)</li>
              <li>Formação Golang (Alura)</li>
              <li>Arquitetura de Sistemas (DIO)</li>
            </ul>
          </section>

          <section>
            <h2>Idiomas</h2>
            <ul>
              <li><strong>Inglês:</strong> Técnico (Leitura avançada de documentação, escrita e comunicação intermediária).</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
