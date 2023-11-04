"use client"
import { ImageCard } from "@/components/ImageCard"
import { Search } from "@/components/Search"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
const Page = () => {
  const [searchValue, setSearchValue] = useState<string>("")

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="mt-7 mb-12"
    >
      <div className="grid grid-cols-2 gap-8">
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
          className="self-end"
        />
        <div className="grid grid-cols-3 gap-12">
          <ImageCard imageUrl="/image1.jpeg" name="Mussa" doctorType="Dental" />
          <ImageCard imageUrl="/image2.avif" name="Mussa" doctorType="Dental" />
          <ImageCard imageUrl="/image3.jpeg" name="Mussa" doctorType="Dental" />
          <ImageCard imageUrl="/image5.jpeg" name="Mussa" doctorType="Dental" />
          <ImageCard imageUrl="/image6.jpeg" name="Mussa" doctorType="Dental" />
          <ImageCard imageUrl="/image4.jpeg" name="Mussa" doctorType="Dental" />
          <ImageCard imageUrl="/image7.jpeg" name="Mussa" doctorType="Dental" />
          <ImageCard
            imageUrl="/image10.jpeg"
            name="Mussa"
            doctorType="Dental"
          />
          <ImageCard imageUrl="/image9.jpeg" name="Mussa" doctorType="Dental" />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Page
