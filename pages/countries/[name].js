import Layout from "../../components/layout";
import { getCountryNames, getSpecificCountryData } from "../../lib/countries";
import Image from "next/dist/client/image";
import utilStyles from "../../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// the dynamic routing page that will be created for each country and have a dynamic url

export default function Post({ countryData }) {
  return (
    <Layout>
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <div id="details">
              <h1 className={utilStyles.heading2Xl}>{countryData[0].name}</h1>
              <h2>Capital City: {countryData[0].capital}</h2>
              <h2>Currency: {countryData[0].currencies[0].name}</h2>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                className="flagBorderered"
                width={400}
                height={300}
                src={countryData[0].flags[0]}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>
        {`
          h1 {
            text-align: center;
          }

          .flagBordered {
            border: 5px solid black !important;
            overflow: hidden;
          }
        `}
      </style>
    </Layout>
  );
}

export async function getStaticPaths() {
  // return a list of the possible values for name of the country
  // so that next can know which pages will be made and with what name i.e. zimbabwe, angola, etc
  const paths = await getCountryNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch necessary data for the country page using params.name and we will request to the api specific to the country name
  const countryData = await getSpecificCountryData(params.name);
  return {
    props: {
      countryData,
    },
  };
}
