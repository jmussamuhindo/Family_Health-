import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../ui/button"
const AboutPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full mt-24"
    >
      <div className="flex justify-between ">
        <motion.div
          initial={{ y: -300, opacity: 0.2 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-[300px] h-[400px] relative rounded-t-full overflow-hidden  mt-[210px] group"
        >
          <Image
            src="/aboutDoctorPc.jpeg"
            fill
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            alt="profile image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <div className="flex flex-col space-y-52 mt-5 max-w-[500px]">
          <div>
            {" "}
            <span className="flex space-x-2 justify-center items-center text-[60px] font-serif">
              <h1 className="">About</h1>
              <motion.h1
                initial={{ rotate: 75 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.7, ease: "easeInOut" }}
                className=" text-[#ffadde]"
              >
                us
              </motion.h1>
            </span>
            <p className="text-center text-lg font-serif">
              Helped is a patient-first company focused on improving the patient
              journey from beginning to end. We educate and connect patients to
              vetted specialists that best fit their needs.
            </p>
          </div>

          <span className="space-y-5 text-center">
            <p className="text-xs">
              Do you want an appoitment with our doctors?
              <br /> press this button 👇
            </p>
            <Button text="Apoitment" className="text-white bg-black" />
          </span>
        </div>
        <motion.div
          initial={{ y: -300, opacity: 0.2 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-[350px] h-[450px] relative  overflow-hidden group  mt-[180px] hexagon-image"
        >
          <Image
            src="/aboutDoctorPc2.jpeg"
            fill
            className=" transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            alt="profile image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutPage
