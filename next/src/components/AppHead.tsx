import Head from "next/head";

const AppHead = () => {
  // Do not translate. Head attributes won't have access to i18n.
  const description = "Assemble, configure, and deploy autonomous AI Agents.";

  return (
    <Head>
      <title>AiClone</title>
      <meta name="description" content={description} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AiClone" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="640" />
      <meta property="og:title" content="AiClone: Autonomous AI Agents" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default AppHead;
