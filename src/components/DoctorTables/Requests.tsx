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

const requests = [
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

const Requests = () => {
  return (
    <Table>
      <TableCaption>A list of your appoitments</TableCaption>
      <TableHeader className="w-full text-primary">
        <TableRow className="text-primary hover:bg-transparent">
          <TableHead className="w-[100px] text-primary">Status</TableHead>
          <TableHead className="text-primary">Email</TableHead>
          <TableHead className="text-primary">FullName</TableHead>

          <TableHead className="text-primary">Request Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((req) => (
          <TableRow key={req.id} className="cursor-pointer">
            <TableCell
              className={cn(
                "font-medium",
                req.status === "unRead" && "text-blue-500",
                req.status === "pending" && "text-gray-400",
                req.status === "successfull" && "text-primary"
              )}
            >
              {req.status}
            </TableCell>
            <TableCell>{req.email}</TableCell>
            <TableCell>{req.names}</TableCell>
            <TableCell className="">{req.data}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Requests
