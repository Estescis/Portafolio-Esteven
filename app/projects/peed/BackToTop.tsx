"use client";

import styles from "./page.module.css";

export default function BackToTop() {
    return (
        <button
            type="button"
            className={styles["peed-footer-back"]}
            onClick={() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }}
        >
            Volver al inicio ↑
        </button>
    );
}