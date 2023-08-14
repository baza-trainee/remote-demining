"use client";
import Image from "next/image";
import { FC, useRef, useState } from "react";

import closedIcon from "@/public/images/socrat/Closed-Question.svg";
import openIcon from "@/public/images/socrat/Open-Question.svg";

import { IFaqs } from "../faqs";

import styles from "./FAQItem.module.css";

interface FAQItemProps {
  faq: IFaqs;
}

const FAQItem: FC<FAQItemProps> = ({ faq }) => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef<HTMLDivElement | null>(null);

  const { question, answer, answerList } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <li className={styles.accordion_item}>
      <button className={styles.button} onClick={handleToggle}>
        <div className={styles.question}>{question}</div>
        <span className={styles.icon_wrapper}>
          {clicked ? (
            <Image src={openIcon.src} alt="open icon" fill />
          ) : (
            <Image src={closedIcon.src} alt="close icon" fill />
          )}
        </span>
        <div
          ref={contentEl}
          className={styles.answer_wrapper}
          style={
            clicked
              ? { height: contentEl.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className={styles.answer}>{answer}</div>
          {answerList && (
            <ul className={styles.answer_list}>
              {answerList.map((answer, i) => (
                <li key={i}>{answer}</li>
              ))}
            </ul>
          )}
        </div>
      </button>
    </li>
  );
};

export default FAQItem;
