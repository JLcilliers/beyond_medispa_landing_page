import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Experts', href: '#experts' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary-600 text-white px-3 py-2 rounded font-bold text-xl">
              BP
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'font-medium transition-colors',
                  isScrolled ? 'text-gray-700 hover:text-primary-500' : 'text-white hover:text-secondary-200'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className={cn(
              'px-6 py-2.5 rounded-full font-medium transition-all',
              isScrolled 
                ? 'bg-primary-500 text-white hover:bg-primary-600' 
                : 'bg-white text-primary-600 hover:bg-gray-100'
            )}>
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', isScrolled ? 'text-gray-700' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', isScrolled ? 'text-gray-700' : 'text-white')} />
            )}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary-500 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;