import Header from "@/components/header";
import Main from "@/components/main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <Main />
    </div>
  );
}
