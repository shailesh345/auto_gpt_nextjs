import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import clsx from "clsx";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

const DefaultLayout = (props: LayoutProps) => {
  const description = "Assemble, configure, and deploy autonomous AI Agents.";

  return (
    <div
      className={clsx(
        "flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]",
        props.centered && "items-center justify-center"
      )}
    >
      <Head>
        <title>AiClone</title>
        <meta name="description" content={description} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AiClone 🤖" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:image:width" content="1280" />
        <meta name="twitter:image:height" content="640" />
        <meta property="og:title" content="AiClone: Autonomous AI 🤖" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DottedGridBackground className={clsx("min-w-screen min-h-screen", props.className)}>
        {props.children}
      </DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
