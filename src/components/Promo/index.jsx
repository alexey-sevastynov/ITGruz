import React from "react";
import { useContext } from "react";
import { MyContext } from "../../App";

import { useTranslation } from "react-i18next";

import '../../i18next'

import styles from './Promo.module.scss';

function Promo() {
    const { t } = useTranslation();

    const { callBack, setCallBack } = useContext(MyContext);

    return (
        <section className={styles.promo}>
            <div className={styles.title}>{t("promo.title1")}<br />{t("promo.title2")}</div>
            <button
                className={styles.btn}
                onClick={() => setCallBack(!callBack)}
            >{t("promo.btn")}</button>
        </section>
    )
}

export default Promo;