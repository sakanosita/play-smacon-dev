import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground - smacon.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          play.smacon.dev
        </h2>

        <p className={styles.description}>
          playground of{' '}
          <a href="https://nextjs.org" class="underline">www.smacon.dev</a>
        </p>

        <div className={styles.grid}>
          <a href="/solidity" className={styles.card}>
            <h2>Solidity &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

          <a
            href="/motoko" className={styles.card}
          >
            <h2>Motoko &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.smacon.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by smacon.dev
        </a>
      </footer>
    </div>
  )
}
