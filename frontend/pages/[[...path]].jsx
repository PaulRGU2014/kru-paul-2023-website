import Head from "next/head";
import ComponentLoader from "../components/ComponentLoader";
import Header from "../components/block/Header/Header";
import Footer from "../components/block/Footer/Footer";

let DATA_URL = process.env.DATA_URL;
if(!DATA_URL){
  DATA_URL = "http://localhost:1337/api";
}
console.log('USING DATA URL:', DATA_URL);

export default function Page ({content, footerData }){
  console.log(content)
  return(
    <>
      <Head>
        <title>{content.pageTitle} | Paul Thanataweenont's Official Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,600;0,700;1,200;1,300;1,400;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <Header isDark={content.isDark}/>
      <ComponentLoader  key={Math.random()} components={content.components} />
      <Footer content={footerData}/>
    </>
  )
}

export async function getStaticPaths() {
  let pageData = await fetch(`${DATA_URL}/pages`);
  pageData = (await pageData.json()).data;
  // pageData = pageData.filter(pd => pd.attributes.path !== '/brews') //excluding brews from standard pages becuase it needs special handling
  // pageData = pageData.filter(pd => pd.attributes.path !== '/brews/barrel-aged-series') //excluding brews from standard pages becuase it needs special handling
  return {
    paths: pageData.map((pd) => pd.attributes.path),
    fallback: "blocking",
  };
}


export async function getStaticProps({ params }) {
  console.log(params)
  const path = params.path ? params.path.join("/") : "";
  const responses = await Promise.all([
    fetch(`${DATA_URL}/pages?filters[path][$eq]=${encodeURIComponent(`/${path}`)}&populate=deep,6`),
    //  fetch(`${DATA_URL}/navigation?populate=*`),
    //  fetch(`${DATA_URL}/site-setting?populate=*`),
    fetch(`${DATA_URL}/footer?populate=deep,6`),

  ]);
  const [content, footerData ] = await Promise.all(responses.map(r => r.json()));
  console.log(path)
  if(!content.data[0]?.attributes){
    return {
      notFound: true,
      revalidate: 30,
    }
  }
  return {
    props: {
      key: content.data[0].id,
      content: content.data[0]?.attributes,
      footerData: footerData.data.attributes
    },
    revalidate: 30,
  };
}