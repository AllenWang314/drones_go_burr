import Button from "./Button";
import styles from "./Navbar.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return <div className={styles.navbar}>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <Image
      className={styles.logo}
      src="/ally_logo.svg"
      alt="Next.js Logo"
      width={360}
      height={75}
    />
    <Link href="workflow">
      <Button text="Try it out!" />
    </Link>
  </div>;
};
