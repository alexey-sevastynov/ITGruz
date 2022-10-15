import React from "react";

import { useTranslation } from "react-i18next";
import '../../i18next'

import styles from './Promo.module.scss';

function Promo() {
    const { t } = useTranslation();



    return (
        <section className={styles.promo}>
            <div className={styles.title}>{t("promo.title1")}<br />{t("promo.title2")}</div>
            <button className={styles.btn}>{t("promo.btn")}</button>
        </section>
    )
}

export default Promo;