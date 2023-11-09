/* eslint-disable react/no-unescaped-entities */
"use client"

import { Appointments, Requests } from "@/components/DoctorTables"
import { ArrowDawn, Edit } from "@/components/Icons/Icons"
import { ProfileImage } from "@/components/ProfileImage"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

const Profile = () => {
  const [table, setTable] = useState<
    "appointement" | "patients-requests" | "messages"
  >("appointement")

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full mt-40 space-y-5"
      >
        <div className="grid place-content-center">
          <h1 className="text-5xl text-primary mx-auto ">WELCOME,DR.MUSSA</h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="space-y-2">
            <ProfileImage />
            <span className="w-[250px] flex justify-between items-center">
              <p className="font-medium text-[20px]">Dr. Mussa</p>
              <Edit className="cursor-pointer" />
            </span>
            <span className="w-[250px] flex justify-between items-center">
              <p className="font-medium text-[15px]">
                {" "}
                Specialization: Cardiology{" "}
              </p>
              <Edit className="cursor-pointer" />
            </span>
            <span className="w-[250px] flex justify-between items-center">
              <p className="font-medium text-[15px]"> Years of Practice: 10</p>
              <Edit className="cursor-pointer" />
            </span>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl text-primary font-bold pb-2">
              Recent Medical Journals
            </h1>

            <span className="space-y-3">
              <p>Study on Heart Diseases</p>
              <p>New Surgical Techniques </p>
              <p>Mental Health in 2023</p>
            </span>
          </div>
        </div>
        <Separator className="my-4 bg-primary" />
        <div className="flex justify-between items-center space-x-4 ">
          <span className="flex items-end justify-center space-x-5">
            <p
              className={cn(
                "text-[20px] cursor-pointer hover:text-primary font-semibold transition duration-500 ease-in-out",
                table === "appointement" && "text-primary"
              )}
              onClick={() => setTable("appointement")}
            >
              Today's Appointments
            </p>

            <ArrowDawn
              className={cn(
                "transition duration-500 ease-in-out",
                table === "appointement" && "rotate-180 fill-primary"
              )}
            />
          </span>

          <Separator orientation="vertical" className="bg-primary w-px h-8" />
          <span className="flex items-end justify-center space-x-5">
            <p
              className={cn(
                "text-[20px] cursor-pointer hover:text-primary font-semibold transition duration-500 ease-in-out",
                table === "patients-requests" && "text-primary"
              )}
              onClick={() => setTable("patients-requests")}
            >
              {" "}
              New Patient Requests
            </p>

            <ArrowDawn
              className={cn(
                "transition duration-500 ease-in-out",
                table === "patients-requests" && "rotate-180 fill-primary"
              )}
            />
          </span>

          <Separator orientation="vertical" className="bg-primary w-px h-8" />
          <span className="flex items-end justify-center space-x-5">
            <p
              className={cn(
                "text-[20px] cursor-pointer hover:text-primary font-semibold transition duration-500 ease-in-out",
                table === "messages" && "text-primary"
              )}
              onClick={() => setTable("messages")}
            >
              Urgent Messages{" "}
            </p>
            <ArrowDawn
              className={cn(
                "transition duration-500 ease-in-out",
                table === "messages" && "rotate-180 fill-primary"
              )}
            />
          </span>
        </div>
        <div>
          {table === "appointement" && <Appointments />}
          {table === "patients-requests" && <Requests />}
        </div>
      </motion.section>
    </>
  )
}

export default Profile
