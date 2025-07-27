import { MessagesSquare } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";


export default function NotificationBox() {
  return (
    <Card className="border-primary">
      <CardContent className="space-y-5">
        <h3 className="text-foreground font-semibold text-lg flex gap-2 items-center">
          <MessagesSquare size={24} fill="#09090B" />
          <span>Jangan Lupa Untuk Memberi Ulasan</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          Sepertinya Anda belum memberikan ulasan untuk Feedback yang sudah selesai di bawah ini
        </p>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button>
          <MessagesSquare />
          A12-75-111124
        </Button>
        <Button>
          <MessagesSquare />
          A12-75-111120
        </Button>
      </CardFooter>
    </Card>
  )
}