import React from "react";
import { useTranslation } from "react-i18next";
import '../../i18next'

import styles from './Header.module.scss';



function Header() {


    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <section className={styles.header}>
            <div className={styles.background1}>
                <div className="container">
                    <div className={styles.flex}>
                        <div className="header__city">{t("header.city")}</div>
                        <div className="header__schedule ">{t("header.schedule")}</div>
                        <div className={styles.inline}>
                            <button onClick={() => changeLanguage('ua')} >{t("header.ua")}</button>
                            <span className={styles.divider}></span>
                            <button onClick={() => changeLanguage('ru')} >{t("header.ru")}</button>
                            <span className={styles.divider}></span>
                            <button onClick={() => changeLanguage('en')} >{t("header.en")}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class={styles.background2}>
                <div class="container">
                    <div class={styles.flex}>

                        <img src="../public/img/gruzchik.png" alt="logo" class="hat__logo" />

                        <div class="hat__burger">
                            <span></span>
                        </div>
                        <nav class="hat__menu menu">
                            <ul class="menu__list">
                                <li>
                                    <a href="index-autopark.html" class="menu__link text-rus">Автопарк</a>
                                    <a href="index-autopark.html" class="menu__link text-ua">Автопарк</a>
                                </li>
                                <li>
                                    <a href="index-price.html" class="menu__link text-rus">Цены</a>
                                    <a href="index-price.html" class="menu__link text-ua">Ціни</a>
                                </li>
                                <li>
                                    <a href="" class="menu__link text-rus">Услуги</a>
                                    <a href="#" class="menu__link text-ua">Послуги</a>
                                    <spam class="menu__arrow"></spam>
                                    <nav class="menu__subtitle dropdown-window">
                                        <div class="dropdown-window__moving">
                                            <div class="dropdown-window__title text-rus">Переезды</div>
                                            <div class="dropdown-window__title text-ua">Переїзди</div>

                                            <a href="index-homeMoving.html"
                                                class="dropdown-window__link text-rus">Квартирный переезд</a>
                                            <a href="index-homeMoving.html"
                                                class="dropdown-window__link text-ua">Квартирний переїзд</a>

                                            <a href="index-oficeMoving.html"
                                                class="dropdown-window__link text-rus">Офисный переезд</a>
                                            <a href="index-oficeMoving.html"
                                                class="dropdown-window__link text-ua">Офісний переїзд</a>

                                            <a href="index-cottageHouseMoving.html"
                                                class="dropdown-window__link text-rus">Дачный переезд</a>
                                            <a href="index-cottageHouseMoving.html"
                                                class="dropdown-window__link text-ua">Дачний переїзд</a>
                                        </div>
                                        <div class="dropdown-window__shiping">
                                            <div class="dropdown-window__title text-rus">Перевозки</div>
                                            <div class="dropdown-window__title text-ua">Перевезення</div>

                                            <a href="index-movers.html"
                                                class="dropdown-window__link text-rus">Грузчики</a>
                                            <a href="index-movers.html"
                                                class="dropdown-window__link text-ua">Вантажники</a>

                                            <a href="index-taxi.html" class="dropdown-window__link text-rus">Грузоаое
                                                такси</a>
                                            <a href="index-taxi.html" class="dropdown-window__link text-ua">Вантажне
                                                таксі</a>

                                            <a href="index-cabinet.html"
                                                class="dropdown-window__link text-rus">Перевозка мебели</a>
                                            <a href="index-cabinet.html"
                                                class="dropdown-window__link text-ua">Перевезення меблів</a>

                                            <a href="index-things.html" class="dropdown-window__link text-rus">Перевозка
                                                вещей</a>
                                            <a href="index-things.html"
                                                class="dropdown-window__link text-ua">Перевезення речей</a>

                                            <a href="index-build.html" class="dropdown-window__link text-rus">Перевозка
                                                стройматериалов</a>
                                            <a href="index-build.html" class="dropdown-window__link text-ua">Перевезення
                                                будматеріалів</a>

                                            <a href="index-appliances.html"
                                                class="dropdown-window__link text-rus">Перевозка бытовой
                                                техники</a>
                                            <a href="index-appliances.html"
                                                class="dropdown-window__link text-ua">Перевезення побутової
                                                техніки</a>
                                        </div>
                                    </nav>
                                </li>
                                <li>
                                    <a href="index-contacs.html" class="menu__link text-rus">Контакты</a>
                                    <a href="index-contacs.html" class="menu__link text-ua">Контакти</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="hat__mobile mobile">
                            <a href="viber://chat?number=%2B380974211929" class="mobile__vieber">
                                <img src="icon/social/viber.png" alt="vieber" />
                            </a>
                            <a href="tel:+380679160775" class="mobile__call">(067) 916-07-75</a>
                            <a href="https://telegram.me/alexseva_94" class="mobile__telegrem">
                                <img src="icon/social/telegram.png" alt="telegram" />
                            </a>
                            <a href="tel:+380974211929" class="mobile__call">(097) 421-19-29</a>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header;