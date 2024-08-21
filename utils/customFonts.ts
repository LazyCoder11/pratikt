import localFont from "next/font/local";

const Neue = localFont({
  src: [{ path: "../assets/fonts/NeueMontreal-Regular.otf" }],
  variable: "--font-neue-montreal",
});

export { Neue };
