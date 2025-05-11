
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Courts', path: '/courts' },
    { title: 'Coaches', path: '/coaches' },
    { title: 'About Padel', path: '/about' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 bg-gradient-to-br from-padel-blue to-padel-green rounded-full flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="font-bold text-lg md:text-xl">PadelUSA</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden sm:flex gap-1">
            <Link to="/courts/near-me">
              <MapPin size={16} />
              <span>Courts Near Me</span>
            </Link>
          </Button>
          <Button asChild size="sm" className="gap-1">
            <Link to="/courts/near-me">
              <Navigation size={16} />
              <span className="hidden sm:inline">Find Courts</span>
              <span className="sm:hidden">Find</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
