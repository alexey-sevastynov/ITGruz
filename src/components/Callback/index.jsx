import styles from './Callback.module.scss'
import { useState, useContext } from 'react';
import { MyContext } from "../../App";
import axios from 'axios';





function Callback() {
    const { callBack, setCallBack } = useContext(MyContext);

    const [tel, setTel] = useState('');
    const [modalActive, setModalActive] = useState(false);


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
        <div class={styles.promo__form} >
            <div class={styles.callback__wrapper}>
                <form id="bot" action="#">

                    <div class="d-flex">
                        <div class={styles.callback__title}>Обратный звонок</div>

                        <div
                            class={styles.callback__close}
                            onClick={() => setCallBack(!callBack)}
                        ></div>
                    </div>

                    {modalActive && <div class="complet complet-none">
                        <div class={styles.callback__wrapper}>
                            <h4 class={styles.complet}>Дуже чудово!<br /><br />Ми Вам перезвонимо,<br /> на цей номер.</h4>
                        </div>
                    </div>}


                    <div class={styles.calback__flex}>
                        <input
                            class={styles.callback__phone}
                            type="phone"
                            id="tel"
                            placeholder="Ваш номер телефона"
                            name="phone"
                            inputmode="text"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)} />

                        <button
                            class={styles.callback__btn}
                            onClick={onSubmit}
                            name='tel'
                            placeholder='Телефон'
                            type="tel"
                        >Позвоните мне</button>

                    </div>

                    <div class={styles.callback__text}>
                        Нажимая кнопку «Позвоните мне», вы соглашаетесь<br />
                        <a href="index-polition.html" target="_blank"> на обработку ваших персональных данных</a>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Callback