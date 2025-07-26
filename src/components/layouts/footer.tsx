import FbLogo from "@/assets/icons/fb-logo.png";
import InstagramLogo from "@/assets/icons/instagram-logo.png";
import Xlogo from "@/assets/icons/x-logo.png";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-background-dark flex gap-8 py-14 px-6 lg:px-20 items-start lg:flex-nowrap flex-wrap">
        <div className="flex flex-col space-y-5 min-w-fit lg:min-w-[488px]">
          <Image src={Logo} alt="Logo Panglima Propertindo" />
          <span className="text-primary-foreground text-sm">Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur</span>
        </div>
        <ul className="text-primary-foreground space-y-5 text-sm min-w-fit w-full">
          <li className="font-medium">Panglima Propertindo</li>
          <li>Tentang Kami</li>
          <li>Project</li>
          <li>Pertanyaan Umum</li>
        </ul>
        <ul className="text-primary-foreground space-y-5 text-sm min-w-fit w-full">
          <li className="font-medium">Kontak</li>
          <li>081224090989 (chat)</li>
          <li>(021) 2829-0901</li>
          <li>Layanan@panglimapropertindo.com</li>
        </ul>
      </div>
      <div className="bg-primary py-5 px-6 lg:px-20 flex lg:justify-between justify-end flex-wrap gap-5">
        <span className="text-primary-foreground text-sm">&copy; Copyright Panglima Propertindo 2024. All Right Reserved</span>
        <div className="flex space-x-8 items-center">
          <Image src={FbLogo} alt="Fb logo" className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]" />
          <Image src={Xlogo} alt="X logo" className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]" />
          <Image src={InstagramLogo} alt="Instagram Logo" className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]" />
        </div>
      </div>
    </footer>
  )
}