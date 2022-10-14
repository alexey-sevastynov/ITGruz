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

                        <img
                            src="../icon/logo.png"
                            alt="logo"
                            class={styles.logo} />

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
                                <svg viewBox="0 0 52 52" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                    <title>Viber</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs></defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                                        <g id="Social-Icons---Isolated" transform="translate(-274.000000, -1061.000000)" fill="#7F4DA0">
                                            <path d="M300,1113 C314.359403,1113 326,1101.3594 326,1087 C326,1072.6406 314.359403,1061 300,1061 C285.640597,1061 274,1072.6406 274,1087 C274,1101.3594 285.640597,1113 300,1113 Z M301.557163,1102.40921 C303.325063,1102.18856 304.753733,1101.76267 306.321233,1100.99809 C307.862939,1100.24374 308.849644,1099.53049 310.155019,1098.23227 C311.37816,1097.00586 312.056551,1096.07704 312.776002,1094.63515 C313.778174,1092.62361 314.348632,1090.2324 314.446219,1087.59999 C314.482254,1086.70203 314.456556,1086.50185 314.25094,1086.24532 C313.86039,1085.74751 313.002091,1085.8297 312.709224,1086.38898 C312.616662,1086.57373 312.590964,1086.73273 312.560135,1087.45118 C312.508729,1088.55443 312.431719,1089.26768 312.27751,1090.11952 C311.671103,1093.46002 310.067654,1096.12837 307.508319,1098.04241 C305.375578,1099.64337 303.170843,1100.42339 300.282692,1100.5927 C299.306228,1100.64914 299.136647,1100.68503 298.915679,1100.85439 C298.504456,1101.17768 298.483974,1101.9371 298.879644,1102.29116 C299.121199,1102.51185 299.290771,1102.54263 300.128492,1102.51697 C300.565327,1102.50158 301.207683,1102.45026 301.557163,1102.40921 L301.557163,1102.40921 Z M289.809012,1101.855 C289.98892,1101.79344 290.266425,1101.64979 290.425756,1101.54714 C291.402134,1100.90056 294.120799,1097.42665 295.009917,1095.69219 C295.518641,1094.70186 295.688213,1093.96806 295.528978,1093.42413 C295.364432,1092.83915 295.092143,1092.53124 293.874123,1091.55113 C293.385891,1091.15606 292.928478,1090.75067 292.856589,1090.6429 C292.67156,1090.37605 292.522471,1089.85266 292.522471,1089.4832 C292.527687,1088.62625 293.082688,1087.07143 293.812475,1085.8758 C294.377717,1084.94702 295.39013,1083.7566 296.392302,1082.84316 C297.569167,1081.76552 298.607278,1081.03182 299.779022,1080.4519 C301.284788,1079.70276 302.204735,1079.51289 302.877996,1079.82586 C303.047567,1079.90285 303.227389,1080.0055 303.284002,1080.05162 C303.335313,1080.09784 303.731079,1080.58022 304.162784,1081.11382 C304.995289,1082.16068 305.185438,1082.33 305.755896,1082.52498 C306.480563,1082.77129 307.220592,1082.70462 307.965742,1082.32489 C308.531079,1082.03237 309.76447,1081.2678 310.561026,1080.71363 C311.609379,1079.97983 313.850063,1078.15304 314.153362,1077.78866 C314.687784,1077.13185 314.780346,1076.29038 314.42053,1075.3615 C314.040222,1074.38149 312.560154,1072.54439 311.527163,1071.75926 C310.591855,1071.05113 309.92893,1070.77925 309.05526,1070.73816 C308.335809,1070.70226 308.037726,1070.76382 307.117779,1071.14355 C299.902394,1074.11464 294.141368,1078.54811 289.567447,1084.63916 C287.177779,1087.82062 285.358473,1091.1201 284.114745,1094.54275 C283.390173,1096.53885 283.354224,1097.40607 283.950294,1098.42722 C284.207307,1098.85823 285.301946,1099.92559 286.098502,1100.52081 C287.424455,1101.50607 288.035983,1101.87041 288.524215,1101.97301 C288.858247,1102.04487 289.438945,1101.98843 289.809012,1101.855 L289.809012,1101.855 Z M301.911773,1098.68893 C305.031324,1098.23227 307.446691,1096.78518 309.029562,1094.43501 C309.91868,1093.11111 310.47368,1091.5563 310.663839,1089.88861 C310.730607,1089.27796 310.730607,1088.16443 310.658718,1087.97968 C310.591855,1087.80525 310.376007,1087.56917 310.190969,1087.47172 C309.990569,1087.36908 309.564079,1087.3793 309.327644,1087.5025 C308.931879,1087.70259 308.813714,1088.02077 308.813714,1088.88284 C308.813714,1090.21185 308.469355,1091.61274 307.873285,1092.70061 C307.194894,1093.9424 306.208198,1094.96867 305.005635,1095.68197 C303.972644,1096.29773 302.4463,1096.7544 301.053579,1096.86728 C300.549889,1096.90837 300.272384,1097.01098 300.082235,1097.23162 C299.789368,1097.56519 299.758454,1098.01675 300.00513,1098.39131 C300.272375,1098.80697 300.683502,1098.87368 301.911773,1098.68893 L301.911773,1098.68893 Z M303.006411,1094.81474 C304.018825,1094.59921 304.794898,1094.21437 305.457823,1093.59345 C306.310906,1092.78788 306.778646,1091.81288 306.984157,1090.41199 C307.122909,1089.4986 307.066382,1089.13942 306.742601,1088.84179 C306.439407,1088.56471 305.879286,1088.55443 305.540048,1088.81613 C305.293372,1089.00088 305.216267,1089.19586 305.15974,1089.72437 C305.092972,1090.42739 304.969591,1090.92 304.758949,1091.37672 C304.306657,1092.34654 303.510101,1092.84943 302.163665,1093.01363 C301.531464,1093.09062 301.341315,1093.16245 301.135794,1093.40359 C300.760607,1093.85004 300.90448,1094.57356 301.423541,1094.84041 C301.618906,1094.9379 301.701131,1094.94817 302.132751,1094.92251 C302.400005,1094.90712 302.79577,1094.86095 303.006411,1094.81474 L303.006411,1094.81474 Z" id="Viber" transform="translate(300.000000, 1087.000000) scale(1, -1) translate(-300.000000, -1087.000000) "></path>
                                        </g>
                                    </g>
                                </svg>
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