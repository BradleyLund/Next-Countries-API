import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getCountryData, getSortedPostsData } from "../lib/posts";
// import { getCountryData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const allCapitals = await getCountryData();

  console.log(allCapitals);

  console.log(allPostsData);

  return {
    props: { allCapitals },
  };
}

export default function Home({ allCapitals }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allCapitals.map(({ name }) => (
            <li className={utilStyles.listItem}>{name}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
