import "@/styles/globals.css";
import { PostProvider } from "@/context/PostContext";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
    </>
  );
}
