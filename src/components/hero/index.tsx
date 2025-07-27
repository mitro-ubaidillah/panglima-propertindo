import HeroBanner from "@/assets/banner.png";
import HeroIcon from "@/assets/icons/hero-icon.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {

  return(
    <header className="relative w-full lg:h-[532px] md:h-[350px] relative">
      <div className="lg:w-full h-[532px] md:h-[350px] grid grid-cols-4 absolute right-0 bg-[#f5f5f5]">
        <div
          className="w-full lg:h-[532px] md:h-[350px]" 
          style={{ 
            background: "linear-gradient(104.08deg, #F4F4F5 20.95%, rgba(244, 244, 245, 0.8) 30.19%, rgba(244, 244, 245, 0.6) 37.33%, rgba(244, 244, 245, 0.4) 43.94%, rgba(244, 244, 245, 0.2) 55.31%, rgba(244, 244, 245, 0.1) 60.07%, rgba(244, 244, 245, 0) 65.12%)"
          }}
        />
        <Image src={HeroBanner} alt="Banner Panglima Propertindo" className="w-full col-span-3 h-full" priority />
      </div>
      <div className="relative flex flex-col items-start justify-center w-full h-full lg:px-20 xl:px-30 md:px-10 px-8 py-8 gap-10">
        <div className="relative">
          <h1 className="lg:text-4xl md:text-2xl text-lg font-semibold text-foreground lg:max-w-[749px] md:max-w-[500px] lg:leading-[54px] md:leading-[38px]">
            <span className="text-primary">
              Hidup Nyaman & Berkah&nbsp;
            </span>
            dengan Properti Syariah Kelas Dunia
          </h1>
          <Image src={HeroIcon} alt="Hero icon panglima propertindo" className="absolute lg:top-15 lg:left-85 md:top-10 top-7 md:left-58 sm:left-44 left-44 xs:left-0 md:w-[100px] lg:w-[144px] w-[75px]" />
        </div>
        <p className="lg:max-w-[749px] md:max-w-[500px] lg:text-xl md:text-base text-sm text-secondary-foreground">
          Developer Properti Syariah terdepan menghadirkan solusi properti tanpa riba dan sesuai prinsip syariah. Daftar dan booking sekarang juga!
        </p>
        <Button>
          Daftar & Beli NUB
        </Button>
      </div>
    </header>
  )
}