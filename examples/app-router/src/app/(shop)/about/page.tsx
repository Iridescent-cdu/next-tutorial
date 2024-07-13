'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import DouyinPng from "../../../../public/images/douyin.png";
import NextSvg from "../../../../public/next.svg";
import styles from "./page.module.css";

export default function AboutPage() {
  const [countDown, setCountDown] = useState(60);

  useEffect(() => {
    if (countDown === 0) {
      return
    }
    const timer = setTimeout(() => {
      setCountDown(countDown => countDown - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [countDown])

  return <>
    <h1 className={styles.main}>About Us</h1>
    <h1 className={styles.main}>{countDown}</h1>
    <Image src={NextSvg} alt={""}></Image>
    <Image src={DouyinPng} alt={""}></Image>
  </>
}
