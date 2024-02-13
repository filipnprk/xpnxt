import React, { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Check if service workers are supported
    if ("serviceWorker" in navigator) {
      // Use window load event to keep the performance impact minimal
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/custom-sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []); // The empty array ensures this effect is only run once after the initial render

  return <Component {...pageProps} />;
}
