import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { v4 } from "uuid"

const appointements = [
  {
    id: v4(),
    status: "unRead",
    email: "mussa@email.com",
    names: "Mussa JMV",
    data: "11/12/2023"
  },
  {
    id: v4(),
    status: "pending",
    email: "yvan@email.com",
    names: "Yvan tuyishime",
    data: "11/12/2023"
  },
  {
    id: v4(),
    status: "successfull",
    email: "paccya@email.com",
    names: "pacifique mbanza",
    data: "11/12/2023"
  },
  {
    id: v4(),
    status: "pending",
    email: "ayany@email.com",
    names: "Ayanny yvan",
    data: "11/12/2023"
  }
]

const Appointments = () => {
  return (
    <Table>
      <TableCaption>A list of your appoitments</TableCaption>
      <TableHeader className="w-full text-primary">
        <TableRow className="text-primary hover:bg-transparent">
          <TableHead className="w-[100px] text-primary">Status</TableHead>
          <TableHead className="text-primary">Email</TableHead>
          <TableHead className="text-primary">FullName</TableHead>

          <TableHead className="text-primary">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointements.map((appointement) => (
          <TableRow key={appointement.id} className="cursor-pointer">
            <TableCell
              className={cn(
                "font-medium",
                appointement.status === "unRead" && "text-blue-500",
                appointement.status === "pending" && "text-gray-400",
                appointement.status === "successfull" && "text-primary"
              )}
            >
              {appointement.status}
            </TableCell>
            <TableCell>{appointement.email}</TableCell>
            <TableCell>{appointement.names}</TableCell>
            <TableCell className="">{appointement.data}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Appointments
