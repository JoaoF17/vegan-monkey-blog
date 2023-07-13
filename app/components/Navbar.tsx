import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/Asset 22@4x.png'
import { FaHome } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className='bg-slate-600 sticky top-0 drop-shadow-xl z-10'>
            <div className='prose prose-xl mx-auto flex flex-row items-center'>
                <div className='prose prose-xl mx-auto'>
                    <Link rel="stylesheet" href="/" className='grid place-content-center mb-2 md:mb-0'>
                        <Image src={logo} alt="Vegan Monkey" width={150} />
                    </Link>
                </div>
                <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4'>
                    <Link href="https://veganmonkey.co/" target='_blank' className=' text-4xl text-white/70 hover:text-white'>
                        <FaHome />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
