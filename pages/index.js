import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content='&amp;&lt;快訊&amp;&gt; 沈
指出 &amp;"應徹底嚴查&amp;"…黃部長 &amp;"從此案開
始&amp;"'
        />
        <meta property="dable:item_id" content="2015111202028" />
        <meta property="og:url" content="https://dable-next.vercel.app" />
        <meta property="dable:title" content="Item Title" />
        <meta
          property="og:description"
          content="Dable 是由具有10 年
以上從業經驗，出身於Naver·SK Planet 數據技術專家組成，擁有處理世界
級大數據的能力，透過記錄用戶的使用行為再次反映到推薦結果中，自動提高
推薦品質，保證高收益率。"
        />
        <meta property="dable:image" content="/favicon.ico" />
        <meta property="dable:author" content="Dable Reporter" />
        <meta property="article:section" content="Dable testing" />
        <meta
          property="article:published_time"
          content="2015-07-17T13:20:00+09:00"
        />
        <meta property="product:availability" content="oos" />
      </Head>

      <main className={styles.main}>
        <div itemProp="articleBody">
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
