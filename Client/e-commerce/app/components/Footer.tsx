import Image from "next/image";
import Link from "next/link";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <div className='mt-16 gap-8 flex flex-col items-center md:flex-row md:items-start md:gap-0  bg-gray-800 p-8 rounded-lg md:justify-between'>
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href="/" className='flex items-center'>
        <Image src="/logo.png"
                width={36}
                height={36}
                alt="TrendLama"
                className='w-6 h-6 md:w-9 h-9' 
                />
        <p className='hidden md:block text-md font-medium tracking-wide text-white '>TRENDALAMA.</p>

      </Link>
        <p className='text-sm text-gray-400'>© 2025 Trendlama</p>
        <p className='text-sm text-gray-400'>All rights reserved</p>
      </div>
      <FooterColumn header="Links" first="Homepage" second="Contact" third ="Terms Of Service" forth="Privacy Policy"/>
      <FooterColumn header="Products" first="All Products" second="New Arrivals" third ="Best sellers" forth="Sale"/>
      <FooterColumn header="Company" first="About" second="Contact" third ="Blog" forth="Affiliate Program"/>
    </div>
  )
}

export default Footer