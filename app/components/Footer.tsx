import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

type NavItem = {
  name: string
  href: string
}

type SocialItem = {
  name: string
  href: string
  icon: IconType
}
//item navigasi
const navItems: NavItem[] = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "/about" },
  //   { name: "Experiences", href: "/experiences" },
  //   { name: "Projects", href: "/projects" },
]
//item sosialmedia
//item sosial media
const socialItems: SocialItem[] = [
  { name: 'GitHub', href: 'https://github.com/Dhanuwrdhn', icon: FaGithub },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhanuwardhana',
    icon: FaLinkedin,
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/yourusername",
  //   icon: FaTwitter,
  // },
]

export default function Footer() {
  const hasNavItems = navItems.length > 0

  return (
    <footer className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            hasNavItems ? 'md:flex-row justify-between' : 'justify-center'
          } items-center`}
        >
          {hasNavItems && (
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-4 md:mb-0">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
          <div className={`flex space-x-6 ${!hasNavItems && 'mt-4'}`}>
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <item.icon className="h-6 w-6" />
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Syahrial Danu. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
///sasda
