
import { useState } from "react";

import apple_icon from "@/public/images/icons/donate/apple.svg";
import google_icon from "@/public/images/icons/donate/google.png";
import uiw_icon from "@/public/images/icons/donate/uiw_pay.svg";

import Button from "../Button/Button";

import styles from "./Donate.module.css";

interface DonateProps {
}

const paymentAmountData = ["100", "200", "500", "1000"];

const Donate: React.FC<DonateProps> = () => {
  
  const [paymentAmount, setPaymentAmount] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Оберіть Платіж</h2>
      <div className={styles.content}>
        <div className={styles.donate_items}>
          {paymentAmountData.map((item, index) => {
            return (
              <button
                key={index}
                className={styles.item}
                onClick={() => {
                  setPaymentAmount(item.replace(/\D/g, ""));
                }}
              >
                {item} UAH
              </button>
            );
          })}
          <input
            type="text"
            pattern="[0-9]"
            className={styles.input}
            placeholder="Ваша сума: 000000000"
            value={paymentAmount}
          ></input>
        </div>
        <div className={styles.pay_ways}>
          <button className={styles.item_way}>
            <span
              className={styles.apple_icon}
              style={{ backgroundImage: `url(${apple_icon.src})` }}
            />
            <span className={styles.pay_way_text}>Pay</span>
          </button>
          <button className={styles.item_way}>
            <span
              className={styles.google_icon}
              style={{ backgroundImage: `url(${google_icon.src})` }}
            />
            <span className={styles.pay_way_text}>Pay</span>
          </button>
          <button className={styles.item_way}>
            <span
              className={styles.uiw_icon}
              style={{ backgroundImage: `url(${uiw_icon.src})` }}
            />
            <span className={styles.pay_way_text}>Pay</span>
          </button>
        </div>
        <div className={styles.btn_container}>
          <Button>Оплатити</Button>
          <Button outlined >Відмінити</Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
