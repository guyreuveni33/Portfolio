import Image from 'next/image'
import Intro from "@/components/intro";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
        <SectionDivider/>
    </main>
  )
}
