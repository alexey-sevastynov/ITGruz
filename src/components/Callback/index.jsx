import styles from './Callback.module.scss'
import { useState, useContext } from 'react';
import { MyContext } from "../../App";
import axios from 'axios';

import { useTranslation } from "react-i18next";
import '../../i18next'





function Callback() {
    const { callBack, setCallBack } = useContext(MyContext);

    const [tel, setTel] = useState('');
    const [modalActive, setModalActive] = useState(false);

    const { t } = useTranslation();


    const TOKEN = '5633139025:AAHDghDftlYUF74VwJ7MDesIGflyPZEf2q4';
    const CHAD_ID = '-1001673147021';
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


    const onSubmit = (e) => {
        e.preventDefault();

        let message = `<b>Заявка с сайта!</b>\n`;
        message += `<b>Телефон на который перезвонить: </b> ${tel}\n`;


        axios.post(URL_API, {
            chat_id: CHAD_ID,
            parse_mode: 'html',
            text: message
        }).then(() => {
            setTel('');

        })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setModalActive(true);
                setTimeout(() => {
                    setModalActive(false);
                }, 2000);

            })
    }



    return (
        <div className={styles.promo__form} >
            <div className={styles.callback__wrapper}>
                <form id="bot" action="#">

                    <div className="d-flex">
                        <div className={styles.callback__title}>{t("callback.title")}</div>

                        <div
                            className={styles.callback__close}
                            onClick={() => setCallBack(!callBack)}
                        ></div>
                    </div>

                    {modalActive && <div className="complet complet-none">
                        <div className={styles.callback__wrapper}>
                            <h4 className={styles.complet}>{t("callback.complet1")}<br /><br />{t("callback.complet2")}<br />{t("callback.complet3")}</h4>
                        </div>
                    </div>}


                    <div className={styles.calback__flex}>
                        <input
                            className={styles.callback__phone}
                            type="phone"
                            id="tel"
                            placeholder={t("callback.placeholder")}
                            name="phone"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)} />

                        <button
                            className={styles.callback__btn}
                            onClick={onSubmit}
                        >{t("callback.btn")}</button>

                    </div>

                    <div className={styles.callback__text}>
                        {t("callback.copyright1")}<br />
                        <a href="index-polition.html" target="_blank">{t("callback.copyright2")}</a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Callback