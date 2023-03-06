import React from 'react';
import { FiCode } from 'react-icons/fi';

const Navbar = () => {
   return (
      <div className="flex justify-between p-3">
         <h1 className="text-2xl font-bold">Omni peeps</h1>
         <a
            href="https://github.com/adarshajit/omni-peeps"
            target="_blank"
            className="flex bg-gray-800 gap-2 h-10 w-24 rounded justify-center items-center hover:bg-black text-white p-3"
         >
            <FiCode />
            Source
         </a>
      </div>
   );
};

export default Navbar;
