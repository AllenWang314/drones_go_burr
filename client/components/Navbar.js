import Button from "./Button";
import styles from "./Navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  return <div className={styles.navbar}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <Link href="/">
      <Image
        className={styles.logo}
        src="/ally_logo.svg"
        alt="Next.js Logo"
        width={360}
        height={75}
      />
    </Link>
    <Link href="/projects">
      <div className={styles["navbar-link"]}>Demo</div>
    </Link>
  </div>;
};
