import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import Aos from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
