import { FiShoppingCart, FiHeart, FiUser, FiMenu } from 'react-icons/fi'
import { useState } from 'react'

interface HeaderProps {
  quantity: number;
}

const Header: React.FC<HeaderProps> = ({ quantity }) => {
  const navLinks = ['Shop', 'Collective', 'Designers', 'About us', 'Contact']
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-french-grey">
      <div className="container max-w-screen-xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo section */}
        <div className="w-1/4">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex w-2/4 justify-center">
          <ul className="flex justify-center space-x-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-space-cadet hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu size={24} />
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 left-0 bg-white shadow-lg p-4 w-48 lg:hidden">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-space-cadet hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Icons section */}
        <div className="w-1/4 flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <button className="text-space-cadet hover:text-primary transition-colors">
              <FiHeart size={24} />
            </button>
            <button className="text-space-cadet hover:text-primary transition-colors">
              <FiUser size={24} />
            </button>
            <div className="h-6 w-px bg-french-grey mx-6"></div>
            <li>
              <a href="#" className="relative">
                <FiShoppingCart size={24} />
                {quantity > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                    {quantity}
                  </span>
                )}
              </a>
            </li>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
