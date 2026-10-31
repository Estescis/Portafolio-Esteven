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
          <Link href="#inicio">Inicio</Link>
          <Link href="#proyectos">Proyectos</Link>
          <Link href="#sobre-mi">Sobre mí</Link>
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

      <section className="about-intro" id="sobre-mi">
        <p className="eyebrow">
          <span className="section-number">02</span> UN POCO SOBRE MÍ
        </p>
        <h2>
          Curioso por naturaleza.
          <br />
          <span className="gradient-text">Desarrollador por pasión.</span>
        </h2>
        <p>
          Creo que cada idea puede convertirse en algo extraordinario.
          Estoy construyendo mi camino en el desarrollo de software,
          aprendiendo con cada proyecto y disfrutando el proceso.
        </p>
      </section>

      <footer className="site-footer" id="contacto">
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