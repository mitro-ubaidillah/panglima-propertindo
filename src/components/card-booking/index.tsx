import Frame from "@/assets/frame-booking.png";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CardBooking() {
  return (
    <div className="bg-secondary rounded-xl py-10 md:py-20 flex flex-col items-center m-8 md:m-10 relative space-y-10 max-h-[324px]">
      <div className="space-y-5 z-20 text-center">
        <h3 className="md:text-3xl text-xl text-primary-foreground font-semibold">Booking Sekarang!</h3>
        <p className="text-primary-foreground text-sm md:text-base">Tunggu apalagi, booking sekarang property syariah impian Anda</p>
      </div>
      <Button className="z-20">
        <ShoppingCart />
        Daftar & Beli NUB
      </Button>
      <Image src={Frame} alt="Frame image" className="w-full absolute bottom-0 z-10" />
    </div>
  )
}