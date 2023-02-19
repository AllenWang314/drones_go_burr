import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import UploadButton from "components/UploadButton";
import SearchButton from "components/SearchButton";
import WorkflowItem from "components/workflow-item";
import {useState} from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Workflow.module.css";

const inter = Inter({ subsets: ["latin"] });
const workflow = [
  "upload",
  "search"
]

export default function Workflow() {

  const [currentStep, setCurrentStep] = useState(1);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setCurrentStep(currentStep + 1);
  // }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.navbar}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&family=Open+Sans&display=swap" rel="stylesheet"/>
          <Image
            className={styles.logo}
            src="/ally_logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
          />
        </div>
        <div></div>
        <div className={styles.workflow}>
        <button type="button" className={styles.block}>Upload Drone Footage</button>
          <h1>Earthquake Relief Workflow</h1>
            <UploadButton/>
            {/* <UploadButton style={"opacity=1.0"}/> */}
            {currentStep >= 2?  <SearchButton /> : null }
            <Button onClick={() => {setCurrentStep(currentStep+1)}} text="Next Step"/>
        </div>
      </main>
    </>
  );
}
