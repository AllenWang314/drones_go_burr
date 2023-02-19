import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles.splash}>
        <div className={styles.splashContent}>
          <h1 className={styles.title}>Automated Workflows for Drone Data Management</h1>
          <div>Automated Workflows for Drone Data Management Ally makes drone data management simple, giving you easy access to automated workflows for your drone data. Drag-and-drop tasks into a custom workflow so you can focus on saving lives and leave the rest to us.
          </div>

          <Button
            text="Try it out!"
            onClick={() => {
              router.push("/workflow");
            }}
          />
        </div>
        <div className={styles.splashImage}>
          <Image
            className={styles.logo}
            src="/splash_graphic.svg"
            alt="Splash Graphic"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div className={styles.waitlist}>
        <div className={styles.email}>Email</div>
        <div className={styles.join}>Join Waitlist</div>
      </div>
    </>
  )
}
