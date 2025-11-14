import Link from 'next/link'
import Image from "next/image";
import SearchBar from './SearchBar';
import { Bell, Home, ShoppingBag } from 'lucide-react';


const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href="/" className='flex items-center'>
        <Image src="/logo.png"
                width={36}
                height={36}
                alt="TrendLama"
                className='w-6 h-6 md:w-9 h-9' 
                />
        <p className='hidden md:block text-md font-medium tracking-wide '>TRENDALAMA.</p>
      </Link>

      {/* RIGHT */}
      <div className='flex gap-6 items-center'>
      <SearchBar/>
      <Link href="">
      <Home className='w-4 h-4 text-gray-600'/>
      </Link>
      <Bell className='w-4 h-4 text-gray-600'/>
      <ShoppingBag className='w-4 h-4 text-gray-600'/>
      <Link href="/login">Sign in</Link>
      </div>
    </nav>
  )
}

export default NavBar