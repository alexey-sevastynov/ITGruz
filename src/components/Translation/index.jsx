import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import '../../i18next'

import classNames from 'classnames';

import styles from './Translation.module.scss';




function Translation() {
    const popupRef = useRef();

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        popupRef.current.classList.add(`${styles.active}`);
    }

    return (
        <>
            {/*className: active replace translation !!! */}
            {<div ref={popupRef} className={styles.translation}>
                <div className={styles.window}>
                    <h3 className={styles.title} >{t("promo.language")}</h3>
                    <div className={styles.inline}>
                        <button onClick={() => changeLanguage('ua')} >{t("header.ua")}</button>
                        <span className={styles.divider}></span>
                        <button onClick={() => changeLanguage('ru')} >{t("header.ru")}</button>
                        <span className={styles.divider}></span>
                        <button onClick={() => changeLanguage('en')} >{t("header.en")}</button>
                    </div>
                </div>
            </div>}
        </>

    )
}

export default Translation;