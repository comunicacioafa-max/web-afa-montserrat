import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-20 w-full select-none items-center bg-white opacity-75 md:overflow-hidden">
      <nav className="flex w-full items-center justify-around md:justify-between max-w-5xl mx-auto md:px-0 px-4">
        <Link href="/">
          <Image className="hidden md:block" src="/logo_afa.jpeg" alt="Logo AFA" width={60} height={60} />
        </Link>
        <ul className="flex space-x-4">
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
