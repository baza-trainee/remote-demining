import { useState } from "react";

import apple_icon from "@/public/images/icons/donate/apple.svg";
import google_icon from "@/public/images/icons/donate/google.png";
import visa from "@/public/images/icons/donate/logos_visaelectron.svg";
import mastercard from "@/public/images/icons/donate/logos_mastercard.svg";

import Button from "../Button/Button";

import styles from "./Donate.module.css";
import Image from "next/image";

interface DonateProps {}

const paymentAmountData = ["100", "200", "500"];

const Donate: React.FC<DonateProps> = () => {
  const [paymentAmount, setPaymentAmount] = useState("");
  const handleInputValue = (value: string) => {
    const sum = value.replace(/\D/g, "");
    setPaymentAmount(sum);
  }

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
            placeholder="Інша сума:"
            value={paymentAmount}
            onChange={(e) => {handleInputValue(e.target.value)}}
          ></input>
        </div>
        <h2 className={styles.title_pay_ways}>Оберіть спосіб оплати</h2>
        <div className={styles.pay_ways}>
          <button className={styles.item_way}>
            <span className={styles.apple_icon}>
              <Image src={apple_icon} alt={"apple pay"} fill />
            </span>
            <span className={styles.pay_way_text}>Pay</span>
          </button>
          <button className={styles.item_way}>
            <span className={styles.google_icon}>
              <Image src={google_icon} alt={"google pay"} fill />
            </span>
            <span className={styles.pay_way_text}>Pay</span>
          </button>
          <button className={styles.item_way}>
            <span className={styles.visa}>
              <Image src={visa} alt={"visa pay"} fill />
            </span>
            <span className={styles.mastercard}>
              <Image src={mastercard} alt={"visa log pay"} fill />
            </span>
          </button>
        </div>
        <div className={styles.btn_container}>
          <Button>Оплатити</Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
