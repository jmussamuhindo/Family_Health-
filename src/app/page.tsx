import { Hero } from "@/components/Hero"
import { NavBar } from "@/components/NavBar"

export default function Home() {
  return (
    <main className=" bg-[#dce9e2] h-screen">
      <div className="container">
        <NavBar />
        <Hero />
      </div>
    </main>
  )
}
