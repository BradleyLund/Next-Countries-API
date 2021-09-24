import Layout from "../../components/layout";
import { getCountryNames, getSpecificCountryData } from "../../lib/posts";
import Image from "next/dist/client/image";

export default function Post({ countryData }) {
  console.log(countryData);
  return (
    <Layout>
      <h1>{countryData[0].name}</h1>
      <Image width={300} height={300} src={countryData[0].flags[0]} />
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
