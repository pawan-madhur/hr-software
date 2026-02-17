import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";


export const clashGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clash",
  display: "swap",
});

// export const publicSans = localFont({
//   src: [
//     {
//       path: "../public/fonts/PublicSans-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/PublicSans-Medium.ttf",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/PublicSans-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/PublicSans-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-public-sans",
//   display: "swap",
// });


export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});