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
            <div className="subtitle">Software Engineer | Backend & System Architecture</div>
            <div className="contact-info">
              Bariri, SP • (14) 99188-6974 • <a href="mailto:jtneto.dev@gmail.com">jtneto.dev@gmail.com</a><br />
              <a href="https://www.linkedin.com/in/jose-trovarelli-neto/" target="_blank" rel="noopener noreferrer">LinkedIn</a> • 
              <a href="https://github.com/Trovarelli" target="_blank" rel="noopener noreferrer">GitHub</a> • 
              <a href="https://trovarelli.github.io/portifolio/" target="_blank" rel="noopener noreferrer">Portfólio</a>
            </div>
          </header>

          <section>
            <h2>Resumo Profissional</h2>
            <p>
              Engenheiro de Software com sólida experiência na construção de sistemas distribuídos e de alta performance. Minha atuação principal é no Back-end (Golang e Node.js), projetando arquiteturas resilientes e sustentáveis. Atualmente curso a pós-graduação "Go Expert" (Full Cycle) para elevar a robustez das minhas entregas. Acredito que o desenvolvimento de software vai além do código: envolve comunicação clara, trabalho em equipe e análise cuidadosa de trade-offs. Trago uma base sólida em mensageria, otimização de banco de dados e vivência Full Stack, alinhando a eficiência da infraestrutura às necessidades de negócio.
            </p>
          </section>

          <section>
            <h2>Competências Técnicas</h2>
            <ul>
              <li><strong>Core Backend & Arquitetura:</strong> Golang (Go), Node.js, Clean Architecture, Microsserviços, Design de Sistemas Distribuídos, Concorrência (Goroutines/Channels), REST APIs, gRPC.</li>
              <li><strong>Dados & Mensageria:</strong> PostgreSQL (Otimização de Consultas), MongoDB, RabbitMQ.</li>
              <li><strong>Infraestrutura & Cultura DevOps:</strong> Docker, CI/CD (GitHub Actions), Git, Linux, Code Review.</li>
              <li><strong>Interface & Experiência (Full Stack):</strong> TypeScript, React.js, Next.js, Tailwind CSS, Vue.js.</li>
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
                <span className="role">Software Engineer</span>
                <span className="date">Out 2022 – Presente</span>
              </div>
              <ul>
                <li><strong>Otimização de Vazão de Dados:</strong> Refatoração estrutural de pipelines legados no PostgreSQL, aplicando estratégias de processamento em lote que reduziram o tempo de resposta de 1 minuto para ~5 segundos em rotinas críticas.</li>
                <li><strong>Arquitetura Orientada a Eventos:</strong> Engenharia de integração com a API Oficial do WhatsApp, implementando filas com Node.js e RabbitMQ para garantir controle de concorrência e resiliência a falhas em larga escala.</li>
                <li><strong>Engenharia Backend:</strong> Desenvolvimento e evolução de microsserviços e APIs corporativas utilizando Golang e Node.js, priorizando estabilidade e Clean Code.</li>
                <li><strong>Segurança & Acessos:</strong> Estruturação de camadas de segurança (Autenticação JWT e RBAC) para garantir controle granular em ambiente B2B.</li>
                <li><strong>Visão Sistêmica:</strong> Construção de dashboards administrativos de alta performance com React/Next.js, focados na usabilidade e visualização de dados complexos.</li>
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
                <li><strong>Plataforma B2C:</strong> Atuação no desenvolvimento de uma plataforma complexa de seguros (Vue.js, Nuxt.js e TypeScript), construindo fluxos de cotação focados em conversão.</li>
                <li><strong>Performance (Web Vitals):</strong> Otimização da aplicação através de Server-Side Rendering (SSR), reduzindo o tempo de carregamento inicial em 20% e melhorando métricas de SEO.</li>
                <li><strong>Padronização & Qualidade:</strong> Contribuição ativa para a estabilidade da plataforma por meio de componentização, testes e revisão de código (Code Review), promovendo boas práticas colaborativas.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Formação Acadêmica & Especializações</h2>
            <div className="job-entry" style={{ marginBottom: '8px' }}>
              <div className="job-header">
                <span className="company">Full Cycle</span>
                <span className="date">Em andamento</span>
              </div>
              <div>Pós-graduação: Go Expert</div>
            </div>
            <div className="job-entry" style={{ marginBottom: '8px' }}>
              <div className="job-header">
                <span className="company">FATEC Jahu</span>
                <span className="date">Concluído em 2023</span>
              </div>
              <div>Tecnologia em Sistemas para Internet</div>
            </div>
          </section>

          <section>
            <h2>Certificações & Idiomas</h2>
            <ul>
              <li>Next.js e React Avançado (FIAP/Alura) | Formação Golang (Alura) | Arquitetura de Sistemas (DIO)</li>
              <li><strong>Inglês:</strong> Técnico (Leitura avançada de documentação, escrita e comunicação intermediária).</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}