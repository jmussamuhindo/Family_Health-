import { cn } from "@/lib/utils"
import Image from "next/image"
interface ImageCardProps {
  imageUrl: string
  name: string
  doctorType: string
  selectedDoctor: boolean
  onClick: () => void
  setIsAppointmentOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ImageCard = ({
  imageUrl,
  name,
  doctorType,
  selectedDoctor,
  onClick,
  setIsAppointmentOpen
}: ImageCardProps) => {
  return (
    <div
      className={cn(
        "relative bg-white w-[95%] max-h-full rounded-lg p-2 cursor-pointer group border border-transparent hover:bg-[#04CC00]/20 transition duration-300 ease-in-out overflow-hidden",
        selectedDoctor &&
          "border-[#04CC00] bg-[#04CC00]/20 ring-[3px] ring-primary/30"
      )}
      onClick={onClick}
    >
      <div className="w-full h-52 relative overflow-hidden rounded-md bg-white">
        <Image
          src={imageUrl}
          fill
          className="transform group-hover:scale-105 duration-300 ease-in-out"
          style={{ objectFit: "cover" }}
          alt="image card"
        />
      </div>
      <div className="space-y-2 pt-2">
        <h1 className="text-lg font-serif font-bold">Dr.{name}</h1>
        <p className="font-serif">{doctorType}</p>
      </div>
      <div
        className={cn(
          "p-2 inline-flex items-center gap-4 bg-[#F8F8F8] rounded-[14px] absolute bottom-0 right-4 translate-y-full group-hover:translate-y-0 group-hover:bottom-3 transition duration-300 ease-in-out",
          selectedDoctor && "translate-y-0 bottom-3"
        )}
        onClick={() => setIsAppointmentOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          className="fill-primary"
          viewBox="0 0 256 256"
        >
          <path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z" />
        </svg>

        <p className="font-serif text-primary">Ask for appointemt</p>
      </div>
    </div>
  )
}

export default ImageCard
