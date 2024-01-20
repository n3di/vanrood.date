import Head from "next/head";
import React from "react";
import Anniversary from "../components/anniversaryCounter";
import Countdowns from "../components/countdowns";
import Background from "../components/background";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>vanRooD | Stream Date</title>
        <meta name="title" content="vanRooD | Stream Date" />
        <meta
          name="description"
          content="Mityczna strona, która powiada, że vanRooD ten miły, przystojny i czarujący streamer kiedyś ponownie włączy równie dobrą transmisję, i dokona się reset legendarnego licznika."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vanrood.nedi.me/" />
        <meta property="og:title" content="vanRooD | Stream Date" />
        <meta
          property="og:description"
          content="Mityczna strona, która powiada, że vanRooD ten miły, przystojny i czarujący streamer kiedyś ponownie włączy równie dobrą transmisję, i dokona się reset legendarnego licznika."
        />
        <meta
          property="og:image"
          content="https://static-cdn.jtvnw.net/jtv_user_pictures/351d2d6e-6b82-43aa-a5db-67971e726815-profile_image-600x600.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vanrood.nedi.me/" />
        <meta property="twitter:title" content="vanRooD | Stream Date" />
        <meta
          property="twitter:description"
          content="Mityczna strona, która powiada, że vanRooD ten miły, przystojny i czarujący streamer kiedyś ponownie włączy równie dobrą transmisję, i dokona się reset legendarnego licznika."
        />
        <meta
          property="twitter:image"
          content="https://static-cdn.jtvnw.net/jtv_user_pictures/351d2d6e-6b82-43aa-a5db-67971e726815-profile_image-600x600.png"
        />
        <meta name="theme-color" content="#15243a" />
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://vanrood.nedi.me/api/oembed"
        />
        <link
          rel="icon"
          href="https://static-cdn.jtvnw.net/jtv_user_pictures/351d2d6e-6b82-43aa-a5db-67971e726815-profile_image-600x600.png"
        />
      </Head>

      <div className="z-[1] w-[600px] min-h-screen flex flex-col items-center justify-center">
        <Anniversary />
        <Countdowns />
        <Footer />
      </div>
      <Background />
    </>
  );
}
