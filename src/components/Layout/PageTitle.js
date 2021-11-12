import React from "react";
import Head from "next/Head";

const PageTitle = ({ title }) => {
  return (
    <Head>
      <title>{title} - PalpiteBox</title>
    </Head>
  );
};

export default PageTitle;
