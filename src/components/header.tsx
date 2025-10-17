import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='px-5 py-3'>
        <Image src={'/logo.png'} width={120} height={60} alt='logo' />
    </header>
  )
}

export default Header