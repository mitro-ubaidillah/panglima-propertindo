import HeroBanner from "@/assets/banner.png";
import HeroIcon from "@/assets/icons/hero-icon.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return(
    <header className="relative min-w-full lg:min-w-[1440px] lg:h-[532px] relative">
      <div className="lg:w-full lg:h-[532px] h-fit flex justify-between absolute right-0 ">
        <div className="bg-accent w-full lg:h-[532px]" />
        <Image src={HeroBanner} alt="Banner Panglima Propertindo" className="lg:max-w-[1141px]" priority />
      </div>
      <div className="relative flex flex-col items-start justify-center w-full h-full px-30 gap-10">
        <div className="relative">
          <h1 className="text-4xl font-semibold text-foreground max-w-[749px] leading-[54px]">
            <span className="text-primary">
              Hidup Nyaman & Berkah &nbsp;
            </span>
            dengan Properti Syariah Kelas Dunia
          </h1>
          <Image src={HeroIcon} alt="Hero icon panglima propertindo" className="absolute top-15 left-85" />
        </div>
        <p className="max-w-[749px] text-xl text-secondary-foreground">
          Developer Properti Syariah terdepan menghadirkan solusi properti tanpa riba dan sesuai prinsip syariah. Daftar dan booking sekarang juga!
        </p>
        <Button>Daftar & Beli NUB</Button>
      </div>
    </header>
  )
}