import Head from "next/head";

const HeadMeta = ({ children }: ParentElement) => {
  return (
    <Head>
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      {children}
    </Head>
  );
};

export default HeadMeta;
