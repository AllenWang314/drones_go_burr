import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import UploadButton from "components/UploadButton";
import Search from "components/Search";
import WorkflowItem from "components/workflow-item";
import { useState } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Workflow.module.css";
import Navbar from '@/components/Navbar'
import { useRouter } from "next/router";


const inter = Inter({ subsets: ["latin"] });
const workflow = [
  "upload",
  "search"
]

export default function Workflow() {
  const router = useRouter();
  const projectId = router.query.projectId;

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      <h1>Earthquake Relief Workflow</h1>
      <div className={styles.workflow}>
        <button type="button" className={styles.block}>Upload Drone Footage</button>
        <UploadButton projectId={projectId} />
        {/* <UploadButton style={"opacity=1.0"}/> */}
        {currentStep >= 2 ? <Search projectId={projectId} /> : null}
        <Button className="flex-end" onClick={() => { setCurrentStep(currentStep + 1) }} text="Next Step" />
      </div>
    </>
  );
}
