import Image from "next/image"
interface ImageCardProps {
  imageUrl: string
  name: string
  doctorType: string
}
const ImageCard = ({ imageUrl, name, doctorType }: ImageCardProps) => {
  return (
    <div className="bg-white w-[95%] max-h-full rounded-lg p-2 cursor-pointer group ">
      <div className="w-full h-52 relative overflow-hidden rounded-md">
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
    </div>
  )
}

export default ImageCard
