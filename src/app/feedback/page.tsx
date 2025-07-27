import AppBreadcrumb from "@/components/feedback/Breadcrumb";
import CardFeedback from "@/components/feedback/CardFeedback";
import Layout from "@/components/feedback/layouts";
import NotificationBox from "@/components/feedback/Notification";
import InputLabel from "@/components/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, MessagesSquare, PlusSquare, Search } from "lucide-react";

const BREADCRUMBS = [
  {
    name: "",
    url: "/feedback",
    icon: Home
  },
  {
    name: "Feedback",
    url: "/feedback",
    icon: MessagesSquare
  }
]

export default function Feedback() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <AppBreadcrumb data={BREADCRUMBS} />
        <Button>
          <PlusSquare />
          Buat Feedback
        </Button>
      </div>
      <NotificationBox />
      <div className="flex justify-between">
        <h1 className="text-lg text-foreground font-semibold">Daftar Feedback</h1>
        <div className="grid grid-cols-3 gap-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Unit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <InputLabel 
            starticon={Search}
            placeholder="Cari no. Tiket" 
            id="search-input"
          />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <CardFeedback 
          category="Fasilitas Umum & Lingkungan"
          created_at="2025-04-08 07:45:35"
          id={1}
          keluhan="Terdapat beberapa dinding yg retak atau Retak rambut : 1. Di kamar lantai 1 2. ⁠dikamar lantai 2, kamar pertama dekat tangga (dekat atas jendela dan dinding dekat colokan listrik 3. ⁠dekat tangga 4. ⁠dekat wc lantai 2 (dinding diatas pintu wc) 5. tembok halaman belakang 6. tembok teras depan"
          status="resolved"
          sub_category="Drainase Lingkungan, Listrik, test"
          unit="F9 - Kavling"
        />
        <CardFeedback 
          category="Fasilitas Umum & Lingkungan"
          created_at="2025-04-08 07:45:35"
          id={2}
          keluhan="Terdapat beberapa dinding yg retak atau Retak rambut : 1. Di kamar lantai 1 2. ⁠dikamar lantai 2, kamar pertama dekat tangga (dekat atas jendela dan dinding dekat colokan listrik 3. ⁠dekat tangga 4. ⁠dekat wc lantai 2 (dinding diatas pintu wc) 5. ⁠tembok halaman belakang 6. ⁠tembok teras depan"
          status="in_progress"
          sub_category="Drainase Lingkungan, Listrik, test"
          unit="F9 - Kavling"
        />
        <CardFeedback 
          category="Fasilitas Umum & Lingkungan"
          created_at="2025-04-08 07:45:35"
          id={3}
          keluhan="Terdapat beberapa dinding yg retak atau Retak rambut : 1. Di kamar lantai 1 2. ⁠dikamar lantai 2, kamar pertama dekat tangga (dekat atas jendela dan dinding dekat colokan listrik 3. ⁠dekat tangga 4. ⁠dekat wc lantai 2 (dinding diatas pintu wc) 5. ⁠tembok halaman belakang 6. ⁠tembok teras depan"
          status="waiting"
          sub_category="Drainase Lingkungan, Listrik, test"
          unit="F9 - Kavling"
        />
      </div>
    </Layout>
  )
}