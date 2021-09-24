import Layout from "../../components/layout";
import { getCountryNames, getSpecificCountryData } from "../../lib/posts";
import Image from "next/dist/client/image";
import utilStyles from "../../styles/utils.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Post({ countryData }) {
  console.log(countryData);
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
  const paths = await getCountryNames();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //fetch neessary data for the blog post using params.id
  const countryData = await getSpecificCountryData(params.name);
  return {
    props: {
      countryData,
    },
  };
}
