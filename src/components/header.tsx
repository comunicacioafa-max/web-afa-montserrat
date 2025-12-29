'use client'
import {useState, useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IconArrow from './iconarrow'

function HeaderLink({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <Link
      href={href}
      className="group relative inline-block w-fit py-1 leading-relaxed tracking-wide text-md text-black"
    >
      {children}
      <div className="relative mt-1 h-[2px] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 h-full bg-yellow-600 transition-all duration-300 ease-out w-0 group-hover:w-[51%]"></div>
        <div className="absolute bottom-0 right-0 h-full bg-blue-400 transition-all duration-300 ease-out w-0 group-hover:w-[51%]"></div>
      </div>
    </Link>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (buttonRef.current && !buttonRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [])

  return (
    <header className="sticky backdrop-blur-md top-0 z-50 mx-auto flex h-20 w-full select-none items-center bg-white opacity-75 md:overflow-hidden">
      <nav className="flex w-full items-center justify-between max-w-5xl mx-auto px-4">
        <Link href="/">
          <Image src="/logo_afa.jpeg" alt="Logo AFA" width={60} height={60} />
        </Link>
        <button ref={buttonRef} onClick={toggleMenu} className="md:hidden p-2 border border-black rounded-full">
          <IconArrow className="rotate-90" />
        </button>
        <ul
          className={`fixed top-0 left-0 w-full bg-white flex flex-col md:justify-end items-center space-y-6 py-6 md:static md:flex-row md:space-y-0 md:space-x-8 md:py-0 md:bg-transparent transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}
        >
          <li>
            <HeaderLink href="/">HOME</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/#contact">CONTACTE</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/#comissions">COMISSIONS</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/#faqs">FAQs</HeaderLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
