"use client"
import { AboutPage } from "@/components/AboutPage"
import { Hero } from "@/components/Hero"
import { NavBar } from "@/components/NavBar"
import { useState } from "react"

export default function Home() {
  const [pages, setPages] = useState<string>("home")
  return (
    <main className=" bg-[#dce9e2] h-screen">
      <div className="container">
        <NavBar setPages={setPages} />
        {pages === "home" && <Hero />}
        {pages === "about" && <AboutPage />}
      </div>
    </main>
  )
}
