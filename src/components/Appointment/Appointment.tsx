import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { addDays, format } from "date-fns"
import { motion } from "framer-motion"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "../ui/input"
interface AppointmentProps {
  className?: string
}
const Appointment = ({ className }: AppointmentProps) => {
  const [names, setNames] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [date, setDate] = useState<Date>()
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  console.log(selectedDoctor)

  return (
    <motion.div
      initial={{ opacity: 0.5, y: -1000 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className={cn("w-full h-full grid place-content-center", className)}
    >
      <h1 className=" text-5xl text-center text-primary">
        Make an Appointment
      </h1>
      <div className="mt-20 w-full space-y-6">
        <span className="grid grid-cols-2 place-content-center gap-y-6 gap-x-12 ">
          <Input
            placeholder="Enter your full name"
            type="text"
            className="py-6"
            onChange={(e) => setNames(e.target.value)}
          />
          <Input
            placeholder="Enter your Email"
            type="email"
            className="py-6"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Popover>
            <PopoverTrigger asChild className="py-6">
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
              <Select
                onValueChange={(value) =>
                  setDate(addDays(new Date(), parseInt(value)))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar mode="single" selected={date} onSelect={setDate} />
              </div>
            </PopoverContent>
          </Popover>

          <Select onValueChange={(e) => setSelectedDoctor(e)}>
            <SelectTrigger className="w-full py-6">
              <SelectValue placeholder="Select medical specialties" />
            </SelectTrigger>
            <SelectContent className="mx-0">
              <SelectGroup>
                <SelectItem value="general-health">General health</SelectItem>
                <SelectItem value="dental">Dental</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="orthopaedics">Orthopaedics</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="general-practitione">
                  General Practitioner
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <RadioGroup defaultValue="male" onValueChange={(e) => setGender(e)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="r1" />
              <Label htmlFor="r1">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="famale" id="r2" />
              <Label htmlFor="r2">Famale</Label>
            </div>
          </RadioGroup>
          <Input
            placeholder="Phone number"
            type="text"
            className="py-6"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </span>
        <Textarea
          className="focus:border-primary focus:ring-primary"
          placeholder="Type your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </motion.div>
  )
}

export default Appointment
