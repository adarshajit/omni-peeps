import React, { useState } from 'react';
import { IAvatarStyle } from './types';
import SelectField from './components/SelectField';
import { SELECT_FIELD_PROPS } from './constants/selectFieldProps';
import { generateAvatar } from './utils/generateAvatar';
import { FiCopy } from 'react-icons/fi';
import { BiExport } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { INITIAL_VALUES } from './constants/avatarStyle';

const App = () => {
   const [avatarStyle, setAvatarStyle] = useState<IAvatarStyle>(INITIAL_VALUES);
   const [collections, setCollections] = useState<string[]>([]);

   const IMAGE = generateAvatar(avatarStyle);

   const handleChange = (
      feature: string,
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setAvatarStyle({
         ...avatarStyle,
         [feature]: e.target.value,
      });
   };

   const handleGenerate = () => {
      if (!collections.includes(IMAGE))
         setCollections((prev) => [...prev, IMAGE]);
   };

   const handleCopyUrl = (url: string) => {
      navigator.clipboard.writeText(url);
      toast('Copied avatar image url! ✨');
   };

   const handleReset = () => {
      setAvatarStyle(INITIAL_VALUES);
   };

   return (
      <div className="p-10">
         <h1 className="text-2xl font-bold">Omni peeps</h1>
         <ToastContainer />
         <div className="flex justify-evenly">
            <div className="flex justify-center items-center">
               <img src={IMAGE} width={300} />
            </div>

            <div className="flex flex-col justify-center gap-2">
               {SELECT_FIELD_PROPS.map((item, key) => (
                  <React.Fragment key={item.feature}>
                     <SelectField
                        placeholder={item.placeholder}
                        handleChange={(
                           e: React.ChangeEvent<HTMLSelectElement>
                        ) => handleChange(item.feature, e)}
                        defaultValue={item.defaultValue}
                        optionItems={item.optionItems}
                     />
                  </React.Fragment>
               ))}
            </div>
         </div>

         <div className="flex flex-col justify-center items-center gap-2 pt-10">
            <div className="flex gap-2">
               <button
                  className="h-12 w-48 bg-black text-white p-3"
                  onClick={handleGenerate}
               >
                  Generate
               </button>
               <button className="h-12 w-48 bg-black text-white p-3">
                  I'm feeling lucky
               </button>
               <button
                  className="h-12 w-48 bg-black text-white p-3"
                  onClick={handleReset}
               >
                  Reset
               </button>
            </div>
            <a href={IMAGE}>{IMAGE}</a>
            <div className="flex justify-center items-center gap-10 p-5">
               {collections.map((collection) => (
                  <div className="flex flex-col p-5 rounded shadow-xl">
                     <div className="flex justify-end gap-3">
                        <IconContext.Provider value={{ size: '1.75em' }}>
                           <BiExport className="hover:transform hover:scale-110 transition-all duration-300 hover: cursor-pointer" />
                           <FiCopy
                              className="hover:transform hover:scale-110 transition-all duration-300 hover: cursor-pointer"
                              onClick={() => handleCopyUrl(collection)}
                           />
                        </IconContext.Provider>
                     </div>
                     <img src={collection} width={300} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default App;
