import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import WorkflowItem from "components/workflow-item";
import {useState} from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Workflow.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Workflow() {

  const [currentStep, setCurrentStep] = useState(1);

  const uploadComponent = () => {
    return <div>Step 1: Doing stuff</div>;
  };

  const searchComponent = () => {
    return <div>Step 2: Doing more stuff</div>;
  };

  const mapComponent = () => {
    return <div>Step 3: Doing even more stuff</div>;
  };

  const generateBody = (step) => {
      return (
        <div className={styles.workflowStep}>
          <WorkflowItem name={'Upload'} />
          <WorkflowItem name={'Search'} />
          <WorkflowItem name={'Map'} />
        </div>
      )
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
          />
          <Link href="workflow">
            <Button text="Try it out!" />
          </Link>
        </div>
        <div></div>
        <div className={styles.workflow}>
          <h1>Earthquake Relief Workflow</h1>
          {generateBody(currentStep)}
          <Button onClick={() => {setCurrentStep(currentStep+1)}} text="Next Step"/>
        </div>
      </main>
    </>
  );
}
