import Link from 'next/link';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Roles() {
    return (
      <>
        <h1 className={inter.className}>
              I want to <span>-&gt;</span>
        </h1>
        <h2>
            <ul>
                <li><Link href="/">Search for ____</Link></li>
                <li><Link href="/">See change over time</Link></li>
                <li><Link href="/">Preventative analytics</Link></li>
                <li><Link href="/">Disaster management</Link></li>
            </ul>
        </h2>
      </>
    );
  }