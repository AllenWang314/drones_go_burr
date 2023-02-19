import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.navbar}>
          <Image
            className={styles.logo}
            src="/ally_logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
          />
          <Link href="workflow">
          <Button text="Try it out!"/>
          </Link>
        </div>
        <div className={styles.splash}>
          <div className={styles.splashContent}>
            <h1>Automated Workflows for Drone Data Management</h1>
            <div>Automated Workflows for Drone Data Management Ally makes drone data management simple, giving you easy access to automated workflows for your drone data. Drag-and-drop tasks into a custom workflow so you can focus on saving lives and leave the rest to us.</div>
          </div>
        
        </div>
      </main>
    </>
  )
}
