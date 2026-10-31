import Link from "next/link";
import styles from "./page.module.css";
import BackToTop from "./BackToTop";

const features = [
    {
        number: "01",
        title: "Gestión de usuarios",
        description:
            "Registro e inicio de sesión para administradores y candidatos, con información propia de cada usuario.",
    },
    {
        number: "02",
        title: "Creación de exámenes",
        description:
            "Los administradores pueden crear y gestionar exámenes digitales junto con sus preguntas y opciones.",
    },
    {
        number: "03",
        title: "Presentación digital",
        description:
            "Los candidatos pueden consultar los exámenes asignados y presentar sus evaluaciones directamente desde la plataforma.",
    },
    {
        number: "04",
        title: "Resultados",
        description:
            "La plataforma permite consultar los resultados obtenidos después de completar las evaluaciones.",
    },
];

const technologies = [
    {
        name: "Java",
        type: "Lenguaje",
    },
    {
        name: "Spring Boot",
        type: "Backend",
    },
    {
        name: "React",
        type: "Frontend",
    },
    {
        name: "PostgreSQL",
        type: "Base de datos",
    },
    {
        name: "JavaScript",
        type: "Desarrollo web",
    },
    {
        name: "CSS",
        type: "Estilos",
    },
];

export default function PeedPage() {
    return (
        <main className={styles.page}>
            {/* HEADER */}
            <header className={styles.header}>
                <Link href="/" className={styles.brand}>
                    <span className={styles.brandIcon}>E.</span>
                    ESTEVEN <span>/ PROYECTO 02</span>
                </Link>

                <Link href="/" className={styles.back}>
                    <span>←</span> Volver al portafolio
                </Link>
            </header>

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <div className={styles.label}>
                        <span />
                        PROYECTO DESTACADO
                        <span className={styles.labelDivider}>/</span>
                        PLATAFORMA WEB
                    </div>

                    <h1>
                        PEED<span className={styles.titleDot}>.</span>
                    </h1>

                    <h2 className={styles.heroTitle}>
                        Plataforma Evaluadora
                        <br />
                        de <span>Exámenes Digitales.</span>
                    </h2>

                    <p className={styles.description}>
                        Una plataforma web para la creación, gestión y
                        presentación de evaluaciones digitales en procesos
                        de selección de personal.
                    </p>

                    <div className={styles.actions}>
                        <a
                            href="#sobre-el-proyecto"
                            className={styles.primary}
                        >
                            Conocer el proyecto <span>↓</span>
                        </a>

                        <span className={styles.development}>
                            <span />
                            En desarrollo
                        </span>
                    </div>

                    <div className={styles.heroMeta}>
                        <span>DESARROLLO WEB</span>
                        <span>EVALUACIÓN DIGITAL</span>
                    </div>
                </div>

                <div
                    className={styles.heroVisual}
                    aria-label="Representación conceptual del panel de PEED"
                >
                    <div className={styles.visualAura} />

                    <div className={styles.visualFrame}>
                        <div className={styles.dashboard}>
                            <div className={styles.dashboardTop}>
                                <div className={styles.dashboardDots}>
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <span className={styles.dashboardCaption}>
                                    PEED / PANEL DE CONTROL
                                </span>

                                <span className={styles.dashboardVersion}>
                                    V.01
                                </span>
                            </div>

                            <div className={styles.dashboardBody}>
                                <aside className={styles.sidebar}>
                                    <div className={styles.sidebarLogo}>P.</div>

                                    <span className={styles.sidebarItemActive}>
                                        <span />
                                    </span>

                                    <span className={styles.sidebarItem}>
                                        <span />
                                    </span>

                                    <span className={styles.sidebarItem}>
                                        <span />
                                    </span>

                                    <span className={styles.sidebarItem}>
                                        <span />
                                    </span>

                                    <span className={styles.sidebarItem}>
                                        <span />
                                    </span>
                                </aside>

                                <div className={styles.dashboardContent}>
                                    <div className={styles.dashboardHeading}>
                                        <div>
                                            <span className={styles.eyebrow}>
                                                RESUMEN GENERAL
                                            </span>

                                            <strong>Panel de control</strong>
                                        </div>

                                        <div className={styles.profile}>E</div>
                                    </div>

                                    <div className={styles.stats}>
                                        <div className={styles.stat}>
                                            <span>Exámenes</span>
                                            <strong>12</strong>
                                            <small>Registrados</small>
                                        </div>

                                        <div className={styles.stat}>
                                            <span>Candidatos</span>
                                            <strong>48</strong>
                                            <small>Registrados</small>
                                        </div>

                                        <div className={styles.stat}>
                                            <span>Resultados</span>
                                            <strong>36</strong>
                                            <small>Consultas</small>
                                        </div>
                                    </div>

                                    <div className={styles.chart}>
                                        <div className={styles.chartHeader}>
                                            <div>
                                                <strong>Actividad general</strong>
                                                <span>Vista conceptual</span>
                                            </div>

                                            <span className={styles.chartBadge}>
                                                2026
                                            </span>
                                        </div>

                                        <div className={styles.chartGrid}>
                                            <div className={styles.chartAxis}>
                                                <span>100</span>
                                                <span>75</span>
                                                <span>50</span>
                                                <span>25</span>
                                            </div>

                                            <div className={styles.chartArea}>
                                                <span />
                                                <span />
                                                <span />
                                                <span />
                                                <span />
                                                <span />
                                                <span />
                                            </div>
                                        </div>

                                        <div className={styles.chartMonths}>
                                            <span>ENE</span>
                                            <span>FEB</span>
                                            <span>MAR</span>
                                            <span>ABR</span>
                                            <span>MAY</span>
                                            <span>JUN</span>
                                            <span>JUL</span>
                                        </div>
                                    </div>

                                    <div className={styles.activity}>
                                        <div className={styles.activityHeading}>
                                            <strong>Evaluaciones recientes</strong>
                                            <span>Vista previa</span>
                                        </div>

                                        <div className={styles.activityRow}>
                                            <span className={styles.activityIcon}>
                                                E
                                            </span>

                                            <span className={styles.activityName}>
                                                Evaluación general
                                                <small>Examen digital</small>
                                            </span>

                                            <span className={styles.status}>
                                                Activo
                                            </span>
                                        </div>

                                        <div className={styles.activityRow}>
                                            <span className={styles.activityIcon}>
                                                T
                                            </span>

                                            <span className={styles.activityName}>
                                                Prueba técnica
                                                <small>Examen digital</small>
                                            </span>

                                            <span className={styles.status}>
                                                Activo
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.visualIndex}>
                            <span>PROYECTO</span>
                            <strong>PEED — 002</strong>
                        </div>
                    </div>

                    <div className={styles.visualNote}>
                        <span />
                        INTERFAZ CONCEPTUAL
                    </div>
                </div>

                <div className={styles.heroBottom}>
                    <span>PLATAFORMA EVALUADORA DE EXÁMENES DIGITALES</span>
                    <span>PORTAFOLIO / 2026</span>
                </div>
            </section>

            {/* OVERVIEW */}
            <section
                className={styles.overview}
                id="sobre-el-proyecto"
            >
                <div className={styles.sectionHeading}>
                    <span>01 / SOBRE EL PROYECTO</span>

                    <h2>
                        Una plataforma para
                        <br />
                        <i>evaluaciones digitales.</i>
                    </h2>
                </div>

                <div className={styles.overviewCopy}>
                    <p>
                        PEED — Plataforma Evaluadora de Exámenes Digitales —
                        es una aplicación web orientada a apoyar procesos de
                        selección de personal mediante evaluaciones realizadas
                        de forma virtual.
                    </p>

                    <p>
                        El sistema busca facilitar la administración de
                        exámenes, preguntas, candidatos y resultados,
                        proporcionando diferentes funcionalidades de acuerdo
                        con el tipo de usuario que utiliza la plataforma.
                    </p>
                </div>
            </section>

            {/* FEATURES */}
            <section className={styles.features}>
                <div className={styles.sectionHeading}>
                    <span>02 / FUNCIONALIDADES</span>

                    <h2>
                        Un sistema pensado
                        <br />
                        <i>para evaluar mejor.</i>
                    </h2>
                </div>

                <div className={styles.featureGrid}>
                    {features.map((feature) => (
                        <article
                            className={styles.feature}
                            key={feature.number}
                        >
                            <span className={styles.featureNumber}>
                                {feature.number}
                            </span>

                            <div className={styles.featureIcon}>
                                +
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                            <span className={styles.featureLine} />
                        </article>
                    ))}
                </div>
            </section>

            {/* PLATFORM */}
            <section className={styles.platform}>
                <div className={styles.platformHeading}>
                    <span>03 / EXPERIENCIA DE LA PLATAFORMA</span>

                    <h2>
                        Información clara,
                        <br />
                        <i>en un solo lugar.</i>
                    </h2>
                </div>

                <div className={styles.platformPreview}>
                    <div className={styles.previewHeader}>
                        <span>PEED</span>

                        <div>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>

                    <div className={styles.previewBody}>
                        <div className={styles.previewSidebar}>
                            <strong>P.</strong>

                            <span className={styles.active} />
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className={styles.previewMain}>
                            <div className={styles.previewTitle}>
                                <span>DASHBOARD</span>
                                <strong>Resumen general</strong>
                            </div>

                            <div className={styles.previewCards}>
                                <div>
                                    <span>Exámenes activos</span>
                                    <strong>08</strong>
                                </div>

                                <div>
                                    <span>En proceso</span>
                                    <strong>21</strong>
                                </div>

                                <div>
                                    <span>Completados</span>
                                    <strong>35</strong>
                                </div>
                            </div>

                            <div className={styles.previewTable}>
                                <div>
                                    <span>EXAMEN</span>
                                    <span>ESTADO</span>
                                    <span>RESULTADOS</span>
                                </div>

                                <div>
                                    <span>Evaluación general</span>
                                    <b>Activo</b>
                                    <strong>18</strong>
                                </div>

                                <div>
                                    <span>Prueba técnica</span>
                                    <b>Activo</b>
                                    <strong>12</strong>
                                </div>

                                <div>
                                    <span>Evaluación inicial</span>
                                    <b>Finalizado</b>
                                    <strong>24</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECHNOLOGIES */}
            <section className={styles.tech}>
                <div>
                    <span className={styles.techLabel}>
                        04 / TECNOLOGÍAS
                    </span>

                    <h2>
                        Construido con
                        <br />
                        <i>tecnología web.</i>
                    </h2>
                </div>

                <div className={styles.techList}>
                    {technologies.map((technology) => (
                        <div
                            className={styles.techItem}
                            key={technology.name}
                        >
                            <span>{technology.type}</span>
                            <strong>{technology.name}</strong>
                        </div>
                    ))}
                </div>
            </section>

            {/* CLOSING */}
            <section className={styles.closing}>
                <span className={styles.closingMark}>+</span>

                <span className={styles.techLabel}>
                    UN PROYECTO EN EVOLUCIÓN
                </span>

                <h2>
                    Tecnología para
                    <br />
                    <i>transformar procesos.</i>
                </h2>

                <Link href="/" className={styles.primary}>
                    Explorar más proyectos <span>↗</span>
                </Link>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <Link href="/" className={styles.brand}>
                    ESTEVE<span>N.</span>
                </Link>

                <span className={styles.footerText}>
                    Un proyecto de Esteven Rodríguez Ayala · 2026
                </span>

                <BackToTop />
            </footer>
        </main>
    );
}