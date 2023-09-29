import { Asap, Karla, Loved_by_the_King } from "next/font/google";

export const lovedByTheKing = Loved_by_the_King({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-loved-by-the-king",
});

export const asapFont = Asap({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-asap",
});

export const karlaFont = Karla({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-karla",
});

const fonts = {
  lovedByTheKing,
  asapFont,
  karlaFont,
};

export default fonts;
