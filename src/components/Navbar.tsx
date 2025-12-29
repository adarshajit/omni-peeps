import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

const Navbar = (): JSX.Element => {
   return (
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container mx-auto px-4 md:px-0 flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
               <span className="text-xl font-bold tracking-tight">
                  🦄 Omni Peeps
               </span>
            </div>
            <div className="flex items-center gap-2">
               <Button variant="ghost" size="sm" asChild>
                  <a
                     href="https://github.com/adarshajit/omni-peeps"
                     target="_blank"
                     rel="noreferrer"
                     className="flex items-center gap-2"
                  >
                     <FiGithub className="h-4 w-4" />
                     <span className="hidden sm:inline">GitHub</span>
                  </a>
               </Button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
