import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { sendPayment } from "@/lib/utils/payment";
import apple_icon from "@/public/images/icons/donate/apple.svg";
import google_icon from "@/public/images/icons/donate/google.png";
import mastercard from "@/public/images/icons/donate/logos_mastercard.svg";
import visa from "@/public/images/icons/donate/logos_visaelectron.svg";

import Button from "../Button/Button";

import validationSchema from "./validationSchema";

import styles from "./Donate.module.css";

interface DonateProps {
  paymentAmount: number;
  paymentSystems: string;
}

const paymentAmountData = ["100", "200", "500"];

const Donate: React.FC = () => {
  const sendDonate: SubmitHandler<DonateProps> = async (data) => {
    // if (data.paymentAmount === undefined) setError("paymentAmount", { type: "custom", message: "Вкажіть будь-ласка суму"})
    // if (+paymentAmount > 0) sendPayment(+paymentAmount);
    // console.log(errors.root)
    try {
      await sendPayment(data.paymentAmount, data.paymentSystems);
    } catch (error) {
      console.log(error)
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      paymentAmount: undefined,
      paymentSystems: "",
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(sendDonate)}>
        <h2 className={styles.title}>Оберіть суму внеску</h2>
        <div className={styles.content}>
          <div className={styles.donate_items}>
            {paymentAmountData.map((item, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={styles.item}
                  onClick={() => {
                    setValue("paymentAmount", +item.replace(/\D/g, ""));
                  }}
                >
                  {item} UAH
                </button>
              );
            })}
            <input
              type="number"
              pattern="[0-9]"
              className={styles.input}
              {...register("paymentAmount")}
              placeholder="Інша сума:"
              onChange={(e) => {
                setValue("paymentAmount", +e.target.value.replace(/\D/g, ""));
              }}
            ></input>
            {errors.paymentAmount?.message && (
              <span className={`${styles.error_message} ${styles.error_top}`}>
                {errors.paymentAmount.message}
              </span>
            )}
          </div>
          <h2 className={styles.title_pay_ways}>Оберіть спосіб оплати</h2>
          <div className={styles.pay_ways} {...register("paymentSystems")}>
            <button
              className={styles.item_way}
              type="button"
              onClick={() => setValue("paymentSystems", "applePay")}
            >
              <span className={styles.apple_icon}>
                <Image src={apple_icon} alt={"apple pay"} fill />
              </span>
              <span className={styles.pay_way_text}>Pay</span>
            </button>
            <button
              className={styles.item_way}
              type="button"
              onClick={() => setValue("paymentSystems", "googlePay")}
            >
              <span className={styles.google_icon}>
                <Image src={google_icon} alt={"google pay"} fill />
              </span>
              <span className={styles.pay_way_text}>Pay</span>
            </button>
            <button
              className={styles.item_way}
              type="button"
              onClick={() => setValue("paymentSystems", "card")}
            >
              <span className={styles.visa}>
                <Image src={visa} alt={"visa pay"} fill />
              </span>
              <span className={styles.mastercard}>
                <Image src={mastercard} alt={"visa log pay"} fill />
              </span>
            </button>
          </div>
            {errors.paymentSystems?.message && (
              <span className={styles.error_message}>
                {errors.paymentSystems?.message}
              </span>
            )}
          <div className={styles.btn_container}>
            <Button>Оплатити</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Donate;
