import React from 'react';
import { FiCode } from 'react-icons/fi';

const Navbar = (): JSX.Element => {
   return (
      <div className="flex justify-between items-center p-4 border-b">
         <h1 className="text-2xl font-bold tracking-tight">Omni peeps</h1>
         <a
            href="https://github.com/adarshajit/omni-peeps"
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 items-center text-sm font-medium hover:underline"
         >
            <FiCode className="w-4 h-4" />
            Source
         </a>
      </div>
   );
};

export default Navbar;
