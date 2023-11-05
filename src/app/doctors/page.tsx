"use client"
import { Appointment } from "@/components/Appointment"
import Empty from "@/components/Icons/Icons"
import { ImageCard } from "@/components/ImageCard"
import { Search } from "@/components/Search"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { useMemo, useState } from "react"
import { v4 } from "uuid"
const Page = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")
  const [isAppointmentOpen, setIsAppointmentOpen] = useState<boolean>(false)

  const doctors = useMemo(
    () => [
      {
        id: v4(),
        name: "ADDY",
        doctorType: "General Health",
        image: "/image8.jpeg"
      },
      {
        id: v4(),
        name: "Mussa",
        doctorType: "Dental",
        image: "/image9.jpeg"
      },
      {
        id: v4(),
        name: "Fisto",
        doctorType: "General Health",
        image: "/image7.jpeg"
      },
      {
        id: v4(),
        name: "Aime",
        doctorType: "Dental",
        image: "/image12.webp"
      },
      {
        id: v4(),
        name: "Brunno",
        doctorType: "Cardiology",
        image: "/image5.jpeg"
      },
      {
        id: v4(),
        name: "Axel",
        doctorType: "General Health",
        image: "/image4.jpeg"
      },
      {
        id: v4(),
        name: "Yva",
        doctorType: "Dental",
        image: "/image3.jpeg"
      },
      {
        id: v4(),
        name: "Yvany",
        doctorType: "General Health",
        image: "/image11.png"
      },
      {
        id: v4(),
        name: "Lion",
        doctorType: "Cardiology",
        image: "/image2.avif"
      }
    ],
    []
  )

  const handleSearch = (text: string) => {
    setSearchValue(text)
    setSelectedDoctor("")
  }

  const results = useMemo(() => {
    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return filtered
  }, [doctors, searchValue])

  const doctorToMap = useMemo(
    () => (searchValue ? results : doctors),
    [doctors, results, searchValue]
  )

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="mt-7 mb-12 "
    >
      <div className="grid grid-cols-2 gap-8 px-2 pr-2">
        <div className="grid place-content-center ">
          <span className="space-y-8 grid place-items-center">
            <h1 className="text-center text-5xl font-bold text-primary">
              Welcome to Your Health Center
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Accusantium aperiam earum ipsa eius,
              inventore nemo labore eaque porro consequatur ex aspernatur.
              Explicabo, excepturi accusantium! Placeat voluptates esse ut optio
              facilis!
            </p>
            <span className="pt-7">
              {" "}
              <Button text="Learn more" className="" />
            </span>
          </span>
        </div>
        <div className="w-full h-[600px] relative">
          <Image
            src={"/bg-doctor.png"}
            fill
            style={{ objectFit: "fill" }}
            alt="Doctor image"
          />
        </div>
      </div>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="mt-12 flex flex-col space-y-5"
      >
        <h1 className="text-4xl font-bold self-center">Our Doctors</h1>
        <Search
          searchValue={searchValue}
          handleSearch={handleSearch}
          className="self-end pr-8"
        />
        <div
          className={cn(
            "grid ",
            doctorToMap.length !== 0 && "grid-cols-3 gap-12"
          )}
        >
          {doctorToMap.length === 0 ? (
            <div className="mt-12 flex flex-col justify-center items-center w-full mx-auto text-center gap-5">
              <Empty />

              <p className="text-[#939499]">Not found</p>
            </div>
          ) : (
            doctorToMap.map((d) => {
              return (
                <ImageCard
                  selectedDoctor={d.id === selectedDoctor}
                  key={d.id}
                  imageUrl={d.image}
                  name={d.name}
                  setIsAppointmentOpen={setIsAppointmentOpen}
                  doctorType={d.doctorType}
                  onClick={() => setSelectedDoctor(d.id)}
                />
              )
            })
          )}
        </div>
      </motion.div>
      {isAppointmentOpen && <Appointment className="mt-16" />}
    </motion.section>
  )
}

export default Page
