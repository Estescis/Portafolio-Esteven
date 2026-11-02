import Link from "next/link";

export default function Home() {
  return (
    <main className="portfolio">
      <header className="navbar">
        <Link href="/" className="brand">
          <span className="brand-icon">E</span>
          <span>
            ESTEVE<span className="accent">N.</span>
          </span>
        </Link>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>

        <a href="#contacto" className="contact-link">
          Hablemos <span>↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            MI ESPACIO CREATIVO DIGITAL
          </div>

          <p className="eyebrow">HOLA, SOY ESTEVEN 👋</p>

          <h1>
            Transformando
            <br />
            ideas en <span className="gradient-text">código.</span>
          </h1>

          <p className="hero-description">
            Soy Esteven Rodríguez Ayala. Me gusta crear soluciones
            digitales, explorar nuevas tecnologías y convertir ideas
            en proyectos que cobran vida.
          </p>

          <div className="hero-actions">
            <a href="#proyectos" className="button-primary">
              Explorar proyectos <span>↗</span>
            </a>

            <a href="#sobre-mi" className="button-secondary">
              Conocerme más
            </a>
          </div>

          <div className="hero-footer">
            <span>DESARROLLO DE SOFTWARE</span>
            <span className="footer-line" />
            <span>CREATIVIDAD + TECNOLOGÍA</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="floating-card code-card">
            <div className="card-top">
              <span className="window-dot pink" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
              <span className="file-name">mi-proximo-proyecto.tsx</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {"{"}</p>
              <p className="indent">
                name: <span className="code-green">"Esteven"</span>,
              </p>
              <p className="indent">
                passion: <span className="code-green">"Crear"</span>,
              </p>
              <p className="indent">
                ideas: <span className="code-pink">Infinity</span>,
              </p>
              <p>{"}"}</p>
              <p className="code-comment">
                // Siempre aprendiendo...
              </p>
            </div>
          </div>

          <div className="floating-card tech-card">
            <span className="tech-icon">{"</>"}</span>
            <div>
              <strong>BUILD. CREATE.</strong>
              <span>REPEAT.</span>
            </div>
          </div>

          <div className="floating-card spark-card">
            <span>✳</span>
          </div>

          <div className="hero-orb">
            <div className="orb-core">
              <span>{"{ }"}</span>
            </div>
          </div>

          <div className="art-caption">
            <span>01 / THE BEGINNING</span>
            <span>IDEAS EN CONSTRUCCIÓN ↗</span>
          </div>
        </div>

        <a href="#proyectos" className="scroll-indicator">
          <span className="scroll-mouse" />
          DESLIZA PARA EXPLORAR
          <span>↓</span>
        </a>
      </section>

      <section className="projects-intro" id="proyectos">
        <div>
          <p className="eyebrow">
            <span className="section-number">01</span> MI TRABAJO
          </p>
          <h2>
            Ideas que se convierten
            <br />
            en <span className="gradient-text">proyectos reales.</span>
          </h2>
        </div>

        <p className="projects-description">
          Cada proyecto tiene una historia, un propósito y algo nuevo
          que enseñarme. Este es el espacio donde voy a compartirlos.
        </p>

        <div className="projects-grid">
          {/* TARJETA PEED (PRINCIPAL) */}
          <Link
            href="/projects/peed"
            className="project-card project-peed project-link"
          >
            <div className="project-cover peed-cover">
              <div className="peed-window">
                <div className="peed-sidebar">
                  <span className="peed-logo">P<span>.</span></span>
                  <span className="peed-side-active" />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="peed-dashboard">
                  <div className="peed-heading">
                    <div>
                      <span>PLATAFORMA DIGITAL</span>
                      <strong>Panel de evaluación</strong>
                    </div>
                    <span className="peed-avatar">E</span>
                  </div>

                  <div className="peed-stats">
                    <div><span>Exámenes</span><strong>01</strong></div>
                    <div><span>Preguntas</span><strong>•••</strong></div>
                  </div>

                  <div className="peed-chart">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="peed-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <span className="cover-index">PROJECT / 001</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">EDTECH · WEB APP</span>
                <span className="project-status status-progress">
                  <span /> En desarrollo
                </span>
              </div>

              <h3>PEED</h3>

              <p>
                Una plataforma para gestionar exámenes digitales, administrar
                preguntas y consultar resultados en procesos de selección.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>

              <div className="project-bottom">
                <span className="project-number">01 / 03</span>
                <span className="project-action">
                  Próximamente <span>↗</span>
                </span>
              </div>
            </div>
          </Link>

          {/* TARJETA JOHA SHOP (SECUNDARIA) */}
          <Link
            href="/projects/joha-shop"
            className="project-card project-joha project-link"
          >
            <div className="project-cover joha-cover">
              <div className="project-cover-top">
                <span className="cover-brand">by johanny<span>.</span></span>
                <span className="cover-menu">☰</span>
              </div>

              <div className="joha-visual">
                <span className="cover-kicker">TU MOMENTO, TU ESTILO</span>
                <strong>
                  Belleza que
                  <br />
                  inspira<span>.</span>
                </strong>
                <span className="joha-flower">✿</span>
                <span className="cover-shop-label">BEAUTY · CARE · HOME</span>
              </div>

              <span className="cover-index">PROJECT / 002</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">E-COMMERCE</span>
                <span className="project-status status-progress">
                  <span /> En desarrollo
                </span>
              </div>

              <h3>Joha Shop</h3>

              <p>
                Una tienda virtual creada para reunir productos de belleza,
                cuidado personal, perfumes y hogar en una sola experiencia.
              </p>

              <div className="project-tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>CSS</span>
              </div>

              <div className="project-bottom">
                <span className="project-number">02 / 03</span>
                <span className="project-action">
                  Próximamente <span>↗</span>
                </span>
              </div>
            </div>
          </Link>
          
          {/* TARJETA CAJA VELOX (SECUNDARIA) */}
          <Link
            href="/projects/caja-velox"
            className="project-card project-link project-velox"
          >
            <div className="project-cover velox-cover">
              <div className="velox-cover-glow" />

              <div className="velox-window">
                <div className="velox-window-header">
                  <span className="velox-brand-mini">
                    CAJA <strong>VELOX</strong>
                  </span>
                  <span className="velox-live">
                    <i /> POS
                  </span>
                </div>

                <div className="velox-dashboard-preview">
                  <div className="velox-sidebar-preview">
                    <span className="active">▦</span>
                    <span>▤</span>
                    <span>▣</span>
                    <span>◷</span>
                  </div>

                  <div className="velox-preview-content">
                    <span className="velox-preview-label">
                      RESUMEN DE CAJA
                    </span>

                    <div className="velox-preview-total">
                      <span>Ventas del día</span>
                      <strong>$ 1.285.000</strong>
                    </div>

                    <div className="velox-preview-stats">
                      <div>
                        <span>Productos</span>
                        <strong>128</strong>
                      </div>
                      <div>
                        <span>Transacciones</span>
                        <strong>36</strong>
                      </div>
                    </div>

                    <div className="velox-preview-chart">
                      {[35, 55, 43, 78, 52, 90, 67, 100, 62].map(
                        (height, index) => (
                          <span
                            key={index}
                            style={{ height: `${height}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <span className="cover-index">PROJECT / 003</span>
            </div>

            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">POS · GESTIÓN COMERCIAL</span>

                <span className="project-status status-progress">
                  <span /> En desarrollo
                </span>
              </div>

              <h3>Caja Velox</h3>

              <p>
                Sistema POS para gestionar ventas, inventario, usuarios y cierres
                de caja, con simulación de facturación electrónica para el mercado
                colombiano.
              </p>

              <div className="project-tags">
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
              </div>

              <div className="project-bottom">
                <span className="project-number">03 / 03</span>

                <span className="project-action">
                  Explorar proyecto <span>↗</span>
                </span>
              </div>
            </div>
          </Link>

        </div>
      </section>

      <section className="about-section" id="sobre-mi">
        <div className="about-heading">
          <p className="eyebrow">
            <span className="section-number">02</span> UN POCO SOBRE MÍ
          </p>
          <span className="about-heading-line" />
        </div>

        <div className="about-content">
          <div className="about-visual">
            <div className="about-visual-glow" />

            <div className="about-frame">
              <div className="about-frame-top">
                <span>PROFILE / 001</span>
                <span className="about-live">
                  <i /> ONLINE
                </span>
              </div>

              <div className="about-monogram">
                <span>E</span>
                <div className="about-monogram-ring" />
              </div>

              <div className="about-frame-bottom">
                <span>ESTEVEN RODRÍGUEZ</span>
                <span>CREATIVE DEVELOPER</span>
              </div>
            </div>

            <span className="about-decoration about-decoration-one">{"{ }"}</span>
            <span className="about-decoration about-decoration-two">✳</span>
            <span className="about-coordinate">3° 27' N · 76° 32' W</span>
          </div>

          <div className="about-text">
            <span className="about-kicker">MÁS ALLÁ DEL CÓDIGO</span>

            <h2>
              Curioso por naturaleza.
              <br />
              <span className="gradient-text">
                Desarrollador por pasión.
              </span>
            </h2>

            <p>
              Soy Esteven Rodríguez Ayala. Me gusta explorar nuevas ideas,
              entender cómo funcionan las cosas y encontrar formas de
              convertirlas en soluciones digitales.
            </p>

            <p>
              Estoy construyendo mi camino en el desarrollo de software,
              aprendiendo con cada proyecto, enfrentando nuevos retos y
              disfrutando cada parte del proceso.
            </p>

            <div className="about-signature">
              <span className="about-signature-line" />
              <span>SIEMPRE HAY ALGO NUEVO POR CREAR.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />

        <div className="about-heading">
          <p className="eyebrow">
            <span className="section-number">03</span> HABLEMOS
          </p>

          <span className="about-heading-line" />
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <span className="contact-kicker">
              <span className="contact-status-dot" />
              SIEMPRE ABIERTO A NUEVAS IDEAS
            </span>

            <h2>
              ¿Tienes algo
              <br />
              <span className="gradient-text">en mente?</span>
            </h2>

            <p>
              Todo gran proyecto comienza con una conversación.
              Si quieres conocer mi trabajo, compartir una idea
              o simplemente conectar, puedes encontrarme por aquí.
            </p>

            <div className="contact-signature">
              <span />
              <strong>CREEMOS ALGO INCREÍBLE.</strong>
            </div>
          </div>

          <div className="contact-cards">
            <a
              href="mailto:estescis.150396@gmail.com"
              className="contact-card contact-email"
              aria-label="Enviarme un correo electrónico"
            >
              <div className="contact-card-top">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span className="contact-arrow">↗</span>
              </div>

              <div className="contact-card-info">
                <span className="contact-label">ESCRÍBEME</span>
                <h3>Correo electrónico</h3>
                <p>estescis.150396@gmail.com</p>
              </div>

              <span className="contact-card-action">
                Enviar un correo <span>↗</span>
              </span>
            </a>

            <a
              href="https://wa.me/573028452489"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-whatsapp"
              aria-label="Contactarme por WhatsApp"
            >
              <div className="contact-card-top">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                    <path d="M9 9c.4 2 2 3.6 4 4l1-1 2 1c-.3 1.5-1.5 2-3 1.5-2.5-.8-4.5-2.8-5.3-5.3C7.2 7.7 7.7 6.5 9.2 6.2l1 2L9 9Z" />
                  </svg>
                </span>
                <span className="contact-arrow">↗</span>
              </div>

              <div className="contact-card-info">
                <span className="contact-label">HABLEMOS DIRECTAMENTE</span>
                <h3>WhatsApp</h3>
                <p>+57 302 845 2489</p>
              </div>

              <span className="contact-card-action">
                Iniciar conversación <span>↗</span>
              </span>
            </a>

            <a
              href="https://github.com/Estescis"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card contact-github"
              aria-label="Visitar mi perfil de GitHub"
            >
              <div className="contact-card-top">
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7.2a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.9S17 0 13 3a13.5 13.5 0 0 0-7 0C2 0 1.8.5 1.8.5a5.2 5.2 0 0 0-.1 3.9A5.6 5.6 0 0 0 .2 8.3c0 5.6 3.5 6.8 6.8 7.2a3.4 3.4 0 0 0-1 2.6V22" transform="translate(2 0) scale(.9)" />
                  </svg>
                </span>
                <span className="contact-arrow">↗</span>
              </div>

              <div className="contact-card-info">
                <span className="contact-label">MI CÓDIGO Y PROYECTOS</span>
                <h3>GitHub</h3>
                <p>github.com/Estescis</p>
              </div>

              <span className="contact-card-action">
                Explorar perfil <span>↗</span>
              </span>
            </a>
          </div>
        </div>

      </section>

      <footer className="site-footer">
        <Link href="/" className="brand">
          <span className="brand-icon">E</span>
          <span>
            ESTEVE<span className="accent">N.</span>
          </span>
        </Link>

        <p>Ideas, código y muchas cosas por crear.</p>

        <span>© 2026 Esteven Rodríguez Ayala</span>
      </footer>
    </main>
  );
}