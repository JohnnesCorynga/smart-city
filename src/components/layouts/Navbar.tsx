
// import {  } from 'react-icons'
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="flex justify-between sticky top-0 items-center bg-slate-900 border-b border-zinc-800 text-slate-300 px-6 md:px-2 py-3">
            <Link href="/" className="flex items-center gap-2">
                <span className="font-extrabold text-4xl font-sans text-slate-900 px-2 rounded border border-spacing-1 bg-amber-200 border-yellow-600 ">SMART CITY</span>
                {/* <FaRegLightbulb size={24} className="text-[#009A90]"  /> */}
                <Image width={40} height={40} src="/eco-light.png" alt="image eco" />
            </Link>
            <div className="flex justify-center items-center font-bold bg-[#009A90] w-11 h-11 rounded-full">
                US
            </div>
        </header>
    )
}