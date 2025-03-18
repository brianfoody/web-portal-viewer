
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-subtle" : "bg-transparent",
        className
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M12 4L20 12M20 12V7M20 12H15" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-medium text-lg tracking-tight">WebPortal</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            Home
          </Link>
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
