"use client"

import AboutUsBanner from "@/assets/about-us.png";
import Frame from "@/assets/frame.png";
import BankIcon from "@/assets/icons/bank.png";
import DangerIcon from "@/assets/icons/danger.png";
import DisagreeIcon from "@/assets/icons/disagree.png";
import HammerIcon from "@/assets/icons/hammer.png";
import MoneyTreePlantIcon from "@/assets/icons/money-tree-plant.png";
import XHomeIcon from "@/assets/icons/x-home.png";
import Logo from "@/assets/logo-xl.png";
import Project1 from "@/assets/project-1.png";
import Project2 from "@/assets/project-2.png";
import Project3 from "@/assets/project-3.png";
import Project4 from "@/assets/project-4.png";
import CardBenefit, { CardBenefitProps } from "@/components/card-benefit";
import CardBooking from "@/components/card-booking";
import CardProject, { CardProjectProps } from "@/components/card-project";
import TitleSection from "@/components/common/TitleSection";
import { GeneralQuestion } from "@/components/general-question";
import Hero from "@/components/hero";
import Layout from "@/components/layouts";
import RatingList from "@/components/rating/RatingList";
import Image from "next/image";

const BENFITS: CardBenefitProps[] = [
  {
    description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    title: "Tanpa Riba",
    icon: MoneyTreePlantIcon,
    alt: "Icon tanpa riba"
  },
  {
    description: "Tanpa melibatkan pembiayaan bank konvensional, menghindari riba, gharar (ketidakpastian), dan maysir (spekulasi)",
    title: "Tanpa KPR Bank",
    icon: BankIcon,
    alt: "Icon tanpa kpr bank"
  },
  {
    description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    title: "Tanpa Sita",
    icon: XHomeIcon,
    alt: "Icon tanpa sita"
  },
  {
    description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    title: "Tanpa Denda",
    icon: HammerIcon,
    alt: "Icon tanpa denda"
  },
  {
    description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    title: "Tanpa Pinalti",
    icon: DangerIcon,
    alt: "Icon tanpa denda"
  },
  {
    description: "Semua transaksi kami bebas dari bunga (riba) dan dilakukan dengan kejelasan dan adil",
    title: "Tanpa Akad Bermasalah",
    icon: DisagreeIcon,
    alt: "Icon tanpa denda"
  },
];

const PROJECT: CardProjectProps[] = [
  {
    image: Project1,
    address: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    title: "Perumahan Halal Elfida Mulia",
    type: ["Ahsan", "Mumtaz", "Sultan", "Single", "Couple", "Family", "Kavling", "Kavling Hook", "Villa"]
  },
  {
    image: Project2,
    title: "Salima Memorial Park - Sambutan",
    address: "Jl. Sultan Sulaiman Sambutan, Samarinda, Kalimantan Timur",
    type: ["Single", "Couple", "Family", "Ahsan"]
  },
  {
    image: Project3,
    title: "Pesona Elfida",
    address: "Jl. Gn. Lingai Sungai Pinang, Samarinda, Kalimantan Timur",
    type: ["Al Kalam", "Al Karim"]
  },
  {
    image: Project4,
    title: "Royal Garden Panglima",
    address: "Jl. Magelang, Lempake, Samarinda, Kalimantan Timur",
    type: ["Kavling Produktif", "Kavling Villa"]
  },
  {
    image: Project3,
    title: "Mulia Park Regency",
    address: "Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur",
    type: ["Kavling", "Kavling Hook"]
  }
]

const ABOUT_US = [
  {
    total: 6,
    name: "Project Syariah"
  },
  {
    total: 200,
    name: "Telah STR"
  },
  {
    total: 200,
    name: "Telah STR"
  },
  {
    total: 200,
    name: "Telah STR"
  },
  {
    total: 200,
    name: "Telah STR"
  },
]

const GENERAL_QUESTION = [
  {
    value: "item-1",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus exercitationem voluptates pariatur aliquid nesciunt neque unde quod voluptatum iure dicta, numquam at corrupti eius quis assumenda, voluptatibus minima. Commodi, quasi?"
  },
  {
    value: "item-2",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus exercitationem voluptates pariatur aliquid nesciunt neque unde quod voluptatum iure dicta, numquam at corrupti eius quis assumenda, voluptatibus minima. Commodi, quasi?"
  },
  {
    value: "item-3",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus exercitationem voluptates pariatur aliquid nesciunt neque unde quod voluptatum iure dicta, numquam at corrupti eius quis assumenda, voluptatibus minima. Commodi, quasi?"
  },
  {
    value: "item-4",
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus exercitationem voluptates pariatur aliquid nesciunt neque unde quod voluptatum iure dicta, numquam at corrupti eius quis assumenda, voluptatibus minima. Commodi, quasi?"
  },
]

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="bg-background-dark min-h-[644px] w-full relative" id="benefit">
        <Image 
          src={Frame} 
          alt="frame image" 
          className="w-full absolute h-full" 
          priority 
        />
        <div className="relative xl:px-30 md:px-10 px-8 lg:px-20 xl:py-20 lg:py-12 md:py-10 py-8 grid grid-cols-1 gap-10">
          <div className="flex justify-between flex-col md:flex-row md:gap-10 gap-4 md:items-center">
            <h2 className="lg:text-3xl md:text-xl text-lg font-semibold text-primary-foreground flex flex-col gap-2 lg:min-w-[324px] md:min-w-[250px] lg:leading-[48px] md:leading-[32px]">
              <span>Kenapa Harus</span>
              <span className="text-secondary">Panglima Propertindo?</span>
            </h2>
            <p className="max-w-[836px] text-primary-foreground leading-[28px] text-sm md:text-base">
              Dengan komitmen penuh pada prinsip-prinsip syariah, kami menghadirkan properti berkualitas tinggi yang memberikan keamanan dan keberkahan bagi Anda dan keluarga.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 relative gap-8">
            {
              BENFITS.map((item, key) => (
                <CardBenefit 
                  {...item}
                  key={key}
                />
              ))
            }
          </div>
        </div>
      </section>
      <section id="project" className="bg-background-secondary xl:py-20 lg:py-16 md:py-14 py-10 xl:px-30 lg:px-20 md:px-10 px-8 space-y-10">
        <div className="lg:space-y-4 xl:space-y-4 space-y-3">
          <TitleSection>Project</TitleSection>
          <p className="text-muted-foreground md:text-base text-sm">Berikut adalah daftar project dari Panglima Propertindo</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {
            PROJECT.map((item, key) => (
              <CardProject {...item} key={key} />
            ))
          }
        </div>
      </section>
      <section id="tentang-kami" className="xl:p-20 lg:p-20 md:p-10 p-8 space-y-10 bg-white">
        <TitleSection>Tentang Kami</TitleSection>
        <div className="flex gap-5 items-center justify-between md:flex-row flex-col">
          <Image src={Logo} alt="Logo panglima propertindo" />
          <p className="text-accent-foreground max-w-[976px] md:text-base text-sm">
            Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan Lingkungan yang Baik.
          </p>
        </div>
        <div className="relative w-full lg:h-[295px]">
          <Image src={AboutUsBanner} alt="client image" className="rounded-lg absolute z-10 w-full h-full object-cover" />
          <div className="w-full bg-black/40 h-full absolute rounded-lg top-0 left-0 z-20" />
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 relative z-30 h-full items-center justify-center p-5">
            {
              ABOUT_US.map((item, key) => (
                <div className="rounded-lg bg-primary border-border border-2 p-5 text-center w-full" key={key}>
                  <p className="text-primary-foreground text-lg md:text-xl font-semibold">{item.total}+</p>
                  <span className="text-primary-foreground md:text-base text-sm">{item.name}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="border-border border bg-background p-5 space-y-5 rounded-lg">
          <h3 className="text-foreground font-semibold xl:text-xl lg:text-xl text-lg">Visi</h3>
          <p className="text-accent-foreground lg:text-base xl:text-base text-sm">Menjadi Developer Property Syariah Kelas Dunia, pengembang lingkungan pemukiman yang baik yang Menenangkan Hati.</p>
        </div>
        <div className="border-border border bg-background p-5 space-y-5 rounded-lg">
          <h3 className="text-foreground font-semibold xl:text-xl lg:text-xl text-lg">Misi</h3>
          <ul className="list-disc pl-5 space-y-2 text-accent-foreground lg:text-base xl:text-base text-sm">
            <li>Mengembangkan proyek Property yang memberi value terbaik & ketenangan hati.</li>
            <li>Membentuk lingkungan yang berperan nyata dalam pembentukan Peradaban Mulia.</li>
            <li>Bertumbuh dengan Cepat dan berkesinambungan sehingga dapat mensejahterakan para pemangku kepentingan</li>
          </ul>
        </div>
      </section>
      <section id="rating" className=" p-8 md:py-14 md:px-20 bg-[#F4F4F5CC] space-y-12">
        <TitleSection>
          Ulasan dari  Konsumen
        </TitleSection>
        <RatingList data={[
          {
            name: "Anisa Mahdiana Awalin",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
          {
            name: "Anisa Mahdiana Awalin2",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
          {
            name: "Anisa Mahdiana Awalin3",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
          {
            name: "Anisa Mahdiana Awalin4",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
          {
            name: "Anisa Mahdiana Awalin5",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
          {
            name: "Anisa Mahdiana Awalin6",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
          {
            name: "Anisa Mahdiana Awalin",
            comment: "RatingList",
            photo: "",
            rating: 5
          },
        ]} />
      </section>
      <section id="pertanyaan-umum" className="bg-white md:p-20 p-8 md:space-y-10 space-y-4">
        <TitleSection>
          Pertanyaan Umum
        </TitleSection>
        <GeneralQuestion data={GENERAL_QUESTION} />
      </section>
      <CardBooking />
    </Layout>
  );
}
