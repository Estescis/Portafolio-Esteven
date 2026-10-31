
import Link from "next/link";
import styles from "./page.module.css";
import BackToTop from "./BackToTop";

export default function CajaVeloxPage() {
    return (
        <main id="inicio" className={`project-detail ${styles.page}`}>
            <header className={styles.navbar}>
                <Link href="/" className={styles.brand}>
                    <span className={styles.brandIcon}>E.</span>
                    <span className={styles.brandName}>
                        ESTEVEN <span className={styles.projectNumber}>/ PROYECTO 03</span>
                    </span>
                </Link>

                <Link href="/#proyectos" className={styles.back}>
                    <span aria-hidden="true">←</span>
                    Volver al portafolio
                </Link>
            </header>

            <section className={styles.hero}>
                <span className={styles.eyebrow}>
                    PROYECTO 03 / SISTEMA DE GESTIÓN COMERCIAL
                </span>

                <h1 className={styles.heroTitle}>
                    Caja <span>Velox.</span>
                </h1>

                <p className={styles.heroDescription}>
                    Una solución de punto de venta diseñada para facilitar la
                    administración de productos, ventas e inventario, con herramientas
                    pensadas para los negocios colombianos.
                </p>

                <div className={styles.badges}>
                    <span>En desarrollo</span>
                    <span>Aplicación web</span>
                    <span>Mercado colombiano</span>
                </div>

                <div className={styles.preview}>
                    <div className={styles.window}>
                        <div className={styles.topbar}>
                            <span className={styles.logo}>
                                CAJA <strong>VELOX</strong>
                            </span>

                            <span className={styles.indicator}>
                                <i aria-hidden="true" />
                                PANEL DE CONTROL
                            </span>
                        </div>

                        <div className={styles.dashboard}>
                            <aside className={styles.sidebar}>
                                <span className={styles.selected}>▦ Resumen</span>
                                <span>▤ Productos</span>
                                <span>▣ Ventas</span>
                                <span>◷ Caja</span>
                            </aside>

                            <div className={styles.dashboardMain}>
                                <span className={styles.dashboardLabel}>
                                    RESUMEN GENERAL
                                </span>

                                <h2 className={styles.dashboardTitle}>
                                    Panel de control
                                </h2>

                                <div className={styles.stats}>
                                    <article>
                                        <span>Ventas del día</span>
                                        <strong>$ 1.285.000</strong>
                                        <small>Vista ilustrativa</small>
                                    </article>

                                    <article>
                                        <span>Productos</span>
                                        <strong>128</strong>
                                        <small>Dato de ejemplo</small>
                                    </article>

                                    <article>
                                        <span>Transacciones</span>
                                        <strong>36</strong>
                                        <small>Dato de ejemplo</small>
                                    </article>
                                </div>

                                <div className={styles.chart}>
                                    <div className={styles.chartHeading}>
                                        <strong>Actividad de ventas</strong>
                                        <span>Vista de demostración</span>
                                    </div>

                                    <div className={styles.chartBars}>
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
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <span className={styles.sectionNumber}>01 / DESCRIPCIÓN</span>

                <h2 className={styles.sectionTitle}>
                    Una caja más organizada.
                </h2>

                <p className={styles.sectionDescription}>
                    Caja Velox es un proyecto de software orientado a los pequeños y
                    medianos negocios que necesitan controlar sus productos, registrar
                    ventas y consultar el movimiento de su caja desde una misma
                    plataforma.
                </p>

                <p className={styles.sectionDescription}>
                    La idea es centralizar las tareas habituales de un punto de venta
                    en una interfaz clara, práctica y fácil de utilizar.
                </p>
            </section>

            <section className={styles.section}>
                <span className={styles.sectionNumber}>02 / FUNCIONALIDADES</span>

                <h2 className={styles.sectionTitle}>
                    ¿Qué busca ofrecer?
                </h2>

                <div className={styles.features}>
                    <article>
                        <span>01</span>
                        <h3>Inventario</h3>
                        <p>
                            Registrar productos, actualizar información y controlar
                            existencias.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>Ventas</h3>
                        <p>
                            Agregar productos al carrito, calcular totales y registrar
                            operaciones de venta.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Control de caja</h3>
                        <p>
                            Consultar movimientos y apoyar los procesos de cierre de caja.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>Usuarios y roles</h3>
                        <p>
                            Gestionar el acceso al sistema según los permisos definidos
                            para cada usuario.
                        </p>
                    </article>

                    <article>
                        <span>05</span>
                        <h3>Reportes</h3>
                        <p>
                            Consultar información de ventas y generar reportes para apoyar
                            el seguimiento del negocio.
                        </p>
                    </article>

                    <article>
                        <span>06</span>
                        <h3>Comprobantes</h3>
                        <p>
                            Generar comprobantes de venta y desarrollar una simulación del
                            proceso de facturación electrónica.
                        </p>
                    </article>
                </div>
            </section>

            <section className={styles.section}>
                <span className={styles.sectionNumber}>03 / TECNOLOGÍAS</span>

                <h2 className={styles.sectionTitle}>
                    Construido con tecnología web.
                </h2>

                <p className={styles.sectionDescription}>
                    El proyecto contempla una interfaz web, un servidor para la lógica
                    del negocio y una base de datos para almacenar la información.
                </p>

                <div className={styles.techList}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                </div>
            </section>

            <section className={`${styles.section} ${styles.notice}`}>
                <span className={styles.sectionNumber}>04 / ESTADO ACTUAL</span>

                <h2 className={styles.sectionTitle}>
                    En desarrollo.
                </h2>

                <p className={styles.sectionDescription}>
                    Caja Velox continúa en construcción. La facturación electrónica
                    presentada en el proyecto es una simulación y todavía no representa
                    una integración oficial con la DIAN ni con un proveedor tecnológico
                    autorizado.
                </p>
            </section>

            <footer className={styles.footer}>
                <Link href="/" className={styles.footerBrand}>
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