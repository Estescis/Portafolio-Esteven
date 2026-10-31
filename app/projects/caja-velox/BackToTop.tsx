"use client";

import styles from "./page.module.css";

export default function BackToTop() {
    return (
        <button
            type="button"
            className={styles.footerBack}
            onClick={() => {
                document.getElementById("inicio")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }}
        >
            Volver al inicio ↑
        </button>
    );
}