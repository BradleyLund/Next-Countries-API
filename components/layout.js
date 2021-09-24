import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Africa Info";
export const siteTitle = "Africa Info";

// Layout component that is used in all the pages

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* the next head section where we can add html meta data and other stuff */}
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      {/* header component which displays the Africa info logo and the title when on the home page and then the same but smaller and 
      with a return back to home link if we are not on the home page */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/africaOutline.png"
              height={200}
              width={200}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/africaOutline.png"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingXl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Home</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
