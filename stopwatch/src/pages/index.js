import Image from "next/image";
import { Inter } from "next/font/google";
import StopWatch from "@/components/StopWatch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <StopWatch/>
   </>
  );
}
