import Footer from "@/components/Global/Footer";
import { NavigationMenu } from "@/components/Global/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <NavigationMenu/>
    <h1 className="text-6xl text-center flex-auto py-[20rem]">WELCOME TO THE GDGRCC WEBSITE</h1>
    <Footer/>
    </>
  );
}
