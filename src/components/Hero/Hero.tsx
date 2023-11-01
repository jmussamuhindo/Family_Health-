"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Arrow } from "../Icons/Icons"
import { Input } from "../ui/input"

const Hero = () => {
  const [containerHeight, setContainerHeight] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight)
    }
  }, [])

  const marqueeVariants = {
    animate: {
      y: ["0px", `-${containerHeight - 1250}px`],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
          delay: 1
        }
      }
    }
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="h-screen relative overflow-hidden "
      style={{ backgroundImage: "url('/fam.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="grid grid-cols-2 gap-6 h-full">
        <div className="mt-20">
          <h1 className="font-lato  text-[60px] pl-28">Healthy Living</h1>
          <h1 className="font-domine text-[30px] text-white text-center">
          Your family's health is our priority. We ensure the highest standards of data protection, keeping your health information safe and secure
          </h1>
          <div className="bg-green-300/25 py-20 px-4 mt-28  rounded-xl grid grid-cols-2 ">
            <h1 className="font-extrabold w-full text-[25px]  text-center leading-8 ">
              Let us be your advantage now
            </h1>
            <span className="space-y-4 ">
              <Input
                type="email"
                placeholder="Enter your work Email"
                className="h-full border-none focus:border-none pb-4 pt-2"
              />
              <div className=" bg-black relative group hover:bg-secondary transition duration-300 ease-in-out grid place-items-center rounded-lg  py-2 ">
                <span className=" transition duration-300 ease-in-out h-full flex items-center justify-center ">
                  <p className="text-white font-bold">Try for free Now</p>
                  <Arrow
                    width={20}
                    height={16}
                    className=" absolute bottom-[30%] right-[1rem] md:right-[2.8rem]  md:group-hover:right-[2rem] group-hover:right-[4rem] group-hover: group-transition duration-300 ease-in-out"
                  />
                </span>
              </div>
            </span>
          </div>
        </div>

        <div className="h-full z-20 overflow-hidden py-24">
          <motion.div
            ref={containerRef}
            variants={marqueeVariants}
            animate="animate"
            className="max-w-[500px] mx-auto grid grid-cols-2 gap-4"
          >
            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image2.avif"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image1.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image3.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image4.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image5.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image6.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image7.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image8.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image9.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image10.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image11.png"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image12.webp"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image2.avif"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image1.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image3.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image4.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image5.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image6.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image7.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image8.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image9.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image10.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className=" w-full h-[300px] relative rounded ">
              <Image
                src={"/image1.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" w-full h-[300px] relative rounded-lg ">
              <Image
                src={"/image8.jpeg"}
                fill
                alt="profile image"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero
