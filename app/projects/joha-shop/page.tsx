import Link from "next/link";
import styles from "./page.module.css";
import BackToTop from "./BackToTop";

const features = [
    {
        number: "01",
        title: "Catálogo digital",
        description:
        "Un espacio para descubrir productos de belleza, perfumes, cuidado personal y hogar.",
    },
    {
        number: "02",
        title: "Experiencia de compra",
        description:
        "Una experiencia pensada para facilitar la exploración de productos y la preparación de pedidos.",
    },
    {
        number: "03",
        title: "Una marca familiar",
        description:
        "Un proyecto que busca llevar una idea familiar al mundo digital con una identidad propia.",
    },
];

export default function JohaShopPage() {
    return (
        <main className={styles.page}>
        <header className={styles.header}>
            <Link href="/" className={styles.brand}>
                <span className={styles.brandIcon}>E.</span>
                    ESTEVEN <span> / PROYECTO 01</span>
            </Link>

            <Link href="/" className={styles.back}>
                <span>←</span> Volver al portafolio
            </Link>
        </header>

        <section className={styles.hero}>
            <div className={styles.heroCopy}>
            <div className={styles.label}>
                <span /> PROYECTO DESTACADO · E-COMMERCE
            </div>

            <h1>
                JOHA
                <br />
                <span>SHOP.</span>
            </h1>

            <p className={styles.subtitle}>
                Belleza, cuidado y estilo. Todo en un solo lugar.
            </p>

            <p className={styles.description}>
                Una tienda virtual desarrollada para convertir una idea
                familiar en una experiencia digital. Un proyecto enfocado
                en reunir productos de belleza, perfumes, cuidado personal
                y hogar en un mismo espacio.
            </p>

            <div className={styles.actions}>
                <a href="#sobre-el-proyecto" className={styles.primary}>
                Descubrir el proyecto <span>↓</span>
                </a>

                <span className={styles.development}>
                <span /> En desarrollo
                </span>
            </div>
            </div>

            <div
            className={styles.art}
            aria-label="Ilustración de la identidad visual de Joha Shop"
            >
            <div className={styles.artRing} />
            <div className={`${styles.artRing} ${styles.artRingTwo}`} />

            <div className={styles.artPanel}>
                <span className={styles.artSmall}>YOUR DAILY DOSE OF</span>

                <div className={styles.artFlower}>✿</div>

                <div className={styles.artTitle}>
                Beauty
                <br />
                <i>& beyond.</i>
                </div>

                <span className={styles.artBottom}>
                BEAUTY · CARE · HOME
                </span>
            </div>

            <span className={`${styles.floating} ${styles.floatingOne}`}>
                ✳
            </span>

            <span className={`${styles.floating} ${styles.floatingTwo}`}>
                MADE WITH ♡
            </span>

            <span className={styles.artIndex}>JS — 001</span>
            </div>

            <div className={styles.heroBottom}>
            <span>DISEÑO WEB</span>
            <span>EXPERIENCIA DIGITAL</span>
            <span>2026</span>
            </div>
        </section>

        <section className={styles.overview} id="sobre-el-proyecto">
            <div className={styles.sectionHeading}>
            <span>01 / SOBRE EL PROYECTO</span>
            <h2>
                Una idea familiar,
                <br />
                <i>convertida en experiencia digital.</i>
            </h2>
            </div>

            <div className={styles.overviewCopy}>
            <p>
                Joha Shop, bajo la marca By Johanny, nace con la idea
                de ofrecer una tienda virtual donde los clientes puedan
                explorar diferentes categorías de productos desde un
                mismo lugar.
            </p>

            <p>
                Mi objetivo es construir una experiencia clara, agradable
                y fácil de utilizar, que permita conocer los productos y
                facilite el proceso de compra y la comunicación con la
                vendedora.
            </p>
            </div>
        </section>

        <section className={styles.features}>
            <div className={styles.sectionHeading}>
            <span>02 / LO QUE ESTOY CONSTRUYENDO</span>
            <h2>
                Funcionalidad con
                <br />
                <i>un propósito.</i>
            </h2>
            </div>

            <div className={styles.featureGrid}>
            {features.map((feature) => (
                <article className={styles.feature} key={feature.number}>
                <span className={styles.featureNumber}>
                    {feature.number}
                </span>

                <div className={styles.featureSymbol}>✳</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <span className={styles.featureLine} />
                </article>
            ))}
            </div>
        </section>

        <section className={styles.tech}>
            <div>
            <span className={styles.techLabel}>03 / TECNOLOGÍAS</span>

            <h2>
                Construido con
                <br />
                <i>tecnología web.</i>
            </h2>
            </div>

            <div className={styles.techList}>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
            </div>
        </section>

        <section className={styles.closing}>
            <span className={styles.closingFlower}>✿</span>

            <span className={styles.techLabel}>
            UN PROYECTO EN EVOLUCIÓN
            </span>

            <h2>
            Las ideas crecen
            <br />
            cuando les damos vida.
            </h2>

            <Link href="/" className={styles.primary}>
            Explorar más proyectos <span>↗</span>
            </Link>
        </section>

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