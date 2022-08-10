import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Head from "next/head";
import { useRouter } from "next/router";

const App = () => {
  const router = useRouter();

  const router_steep = router?.query?.router_steep;

  const steep = isNaN(+router_steep) || +router_steep < 0 ? 0 : +router_steep;
  const setSteep = (router_steep) =>
    router.push(
      `${window.location.href}?router_steep=${router_steep}`,
      undefined,
      { shallow: true }
    );

  console.log("steep", router);

  return (
    <div>
      <Head>
        <title>Trying out next.js</title>
      </Head>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div>Steep {steep}</div>
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 200
          }}
        >
          <button onClick={() => setSteep(steep + 1)}>Preview</button>
          <button onClick={() => setSteep(steep - 1)}>Next</button>
        </div>
      </main>
    </div>
  );
};

render(<App />, document.getElementById("root"));
