"use client"

import { Edit } from "@/components/Icons/Icons"
import { ProfileImage } from "@/components/ProfileImage"
import { motion } from "framer-motion"

const Profile = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full mt-28"
      >
        <div className="grid grid-cols-3">
          <div className="space-y-4">
            <ProfileImage />
            <span className="w-[300px] flex justify-between items-center">
              <p className="font-medium text-[20px]">Dr. Mussa</p>
              <Edit className="cursor-pointer" />
            </span>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Profile
