import React from "react";
import { useContext } from "react";
import { MyContext } from "../../App";

import styles from './Cars.module.scss';

import { useTranslation } from "react-i18next";
import '../../i18next'





function Cars() {

    const { t } = useTranslation();

    const cars = [
        {
            photo: 'img/reno.jpg',
            title: "Renault",
            priceTariff: t("car.tariff"),
            price: 300,
            priceUAH: t("car.price"),
            weightText: t("car.weightText"),
            weight: 1800,
            weightKg: t("car.kilograms"),
            lengthText: t("car.lengthText"),
            length: 3.5,
            metrs: t("car.metrs"),
            widthText: t("car.widthText"),
            width: 1.7,
            heightText: t("car.heightText"),
            height: 1.8,
            squareText: t("car.squareText"),
            square: 11,
            minimalClockText: t("car.minimal"),
            minimalClock: 2,
            clock: t("car.clock"),
            btn: t("car.btn")

        },
        {
            photo: 'img/sprinter.jpg',
            title: "Mercedes Sprinter",
            priceTariff: t("car.tariff"),
            price: 350,
            priceUAH: t("car.price"),
            weightText: t("car.weightText"),
            weight: 1600,
            weightKg: t("car.kilograms"),
            lengthText: t("car.lengthText"),
            length: 4.5,
            metrs: t("car.metrs"),
            widthText: t("car.widthText"),
            width: 2.1,
            heightText: t("car.heightText"),
            height: 2.1,
            squareText: t("car.squareText"),
            square: 20,
            minimalClockText: t("car.minimal"),
            minimalClock: 2,
            clock: t("car.clock"),
            btn: t("car.btn")
        },
        {
            photo: 'img/mercedes.jpg',
            title: "Mercedes",
            priceTariff: t("car.tariff"),
            price: 500,
            priceUAH: t("car.price"),
            weightText: t("car.weightText"),
            weight: 3000,
            weightKg: t("car.kilograms"),
            lengthText: t("car.lengthText"),
            length: 5.2,
            metrs: t("car.metrs"),
            widthText: t("car.widthText"),
            width: 2.3,
            heightText: t("car.heightText"),
            height: 2.3,
            squareText: t("car.squareText"),
            square: 28,
            minimalClockText: t("car.minimal"),
            minimalClock: 3,
            clock: t("car.clock"),
            btn: t("car.btn")
        }
    ];

    const { callBack, setCallBack } = useContext(MyContext);

    return (

        <section className={styles.car}>
            <div className="container">
                <div className={styles.title}>{t("car.title")}</div>
                <div className={styles.car__wrapper}>
                    {cars.map((car, id) => (
                        <div key={id} className={styles.car__section}>
                            <div className={styles.section__photo}>
                                <img src={car.photo} alt="car" />
                            </div>
                            <div className={styles.section__title}>{car.title}</div>

                            <div className={styles.section__price}>
                                <div className={styles.section__price_text}>{car.priceTariff}</div>
                                <div className={styles.section__price_text}>{car.price}
                                    <span> {car.priceUAH}</span>
                                </div>
                            </div>
                            <div className={styles.section__description_flex}>
                                <div >{car.weightText}</div>
                                <div >{[car.weight, car.weightKg].join(' ')}</div>
                            </div>
                            <div className={styles.section__description_grid}>
                                <div >{car.lengthText}</div>
                                <div >{[car.length, car.metrs].join(' ')}</div>


                                <div >{car.widthText}</div>
                                <div className={styles.section__description_num} >{[car.width, car.metrs].join(' ')}</div>

                                <div >{car.heightText}</div>
                                <div className={styles.section__description_num}>{[car.height, car.metrs].join(' ')}</div>


                                <div>{car.squareText}</div>
                                <div>{[car.square, car.metrs].join(' ')}<sup>2</sup></div>
                            </div>
                            <div className={styles.section__minimal}>{[car.minimalClockText, car.minimalClock, car.clock].join(' ')}</div>
                            <button
                                className={styles.section__btn}
                                onClick={() => setCallBack(!callBack)}
                            >{car.btn}</button>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}

export default Cars;