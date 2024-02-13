import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <GoogleTagManager gtmId="GTM-W9KS29KB" />
      <h1> Hello NextJS </h1>
    </>
  );
}
