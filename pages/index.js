import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RapidConnect-POC</title>
        <meta name="description" content="RapidConnect-POC" />
        <link rel="icon" href="/favicon.ico" />      
      </Head>
      

      <main className={styles.main}>
        <h1 className={`${styles.title} mb-[5rem]`}>
            RapidConnect-POC
        </h1>
        <div className="flex justify-between mt-[2rem]">
        <Link className="bg-[#0d3d56] hover:bg-[#3c6478] text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline" href="/form">Go To Form</Link>
        <Link className="bg-[#0d3d56] hover:bg-[#3c6478] text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline" href="/template">Go To Template</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      
    </div>
  )
}
