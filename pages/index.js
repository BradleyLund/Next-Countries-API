import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getCountryData } from "../lib/countries";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/dist/client/link";

export async function getStaticProps() {
  // pull in the country data using the function in the lib/countries.js file
  const countryData = await getCountryData();

  return {
    props: { countryData },
  };
}

export default function Home({ countryData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Click on one of the countries below to find out more information about
          it
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Container>
          <Row lg={3}>
            {/* mapping through each of the countries in africa and using next link which will redirect to each countries page  */}
            {countryData.map(({ name }) => (
              <Col className="text-center" key={name}>
                <Link href={`/countries/${name}`}>
                  <button className="button-17">{name}</button>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 
      found the styling for the button at this website, it is a google style button
      https://getcssscan.com/css-buttons-examples */}
      <style jsx>
        {`
          p {
            text-align: center;
          }

          .button-17 {
            align-items: center;
            appearance: none;
            background-color: #fff;
            border-radius: 24px;
            border-style: none;
            box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
              rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
            box-sizing: border-box;
            color: #3c4043;
            cursor: pointer;
            display: inline-flex;
            fill: currentcolor;
            font-family: "Google Sans", Roboto, Arial, sans-serif;
            font-size: 14px;
            font-weight: 500;
            height: 48px;
            justify-content: center;
            letter-spacing: 0.25px;
            line-height: normal;
            max-width: 100%;
            margin-top: 20px;
            overflow: visible;
            padding: 2px 24px;
            position: relative;
            text-align: center;
            text-transform: none;
            transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
              opacity 15ms linear 30ms,
              transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: 250px;
            will-change: transform, opacity;
            z-index: 0;
          }

          .button-17:hover {
            background: #f6f9fe;
            color: #174ea6;
          }

          .button-17:active {
            box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
              0 8px 12px 6px rgb(60 64 67 / 15%);
            outline: none;
          }

          .button-17:focus {
            outline: none;
            border: 2px solid #4285f4;
          }
        `}
      </style>
    </Layout>
  );
}
