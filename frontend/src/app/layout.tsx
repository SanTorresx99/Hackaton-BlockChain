"use client";
import type { Metadata } from "next";
import { Turret_Road } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base, zora, optimismSepolia } from "wagmi/chains";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./globals.css";
// import "./globals.css";
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const turret = Turret_Road({
  subsets: ["latin"],
  weight: ["400", "800", "700"],
});

// export const metadata: Metadata = {
//   title: "BlockTOPlus",
//   description: "Projeto do hackathon da NearX",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col justify-between ${turret.className}`}>
        {/* <WagmiProvider config={config}> */}
        {/*   <QueryClientProvider client={queryClient}> */}
        {/*     <RainbowKitProvider> */}
        <Navbar />
        <div className=" h-full">{children}</div>
        <Footer />
        {/*     </RainbowKitProvider> */}
        {/*   </QueryClientProvider> */}
        {/* </WagmiProvider> */}
      </body>
    </html>
  );
}

// turret road
