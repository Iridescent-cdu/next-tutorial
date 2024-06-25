import styles from "./page.module.css";
import Image from "next/image";
import NextSvg from "../../../public/next.svg";
import DouyinPng from "../../../public/douyin.png";

export default function AboutPage() {
  return <>
    <h1 className={styles.main}>About Us</h1>
    <Image src={NextSvg} alt={""}></Image>
    <Image src={DouyinPng} alt={""}></Image>
  </>
}
