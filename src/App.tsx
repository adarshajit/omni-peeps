import React, { useRef, useState } from 'react';
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
import FileSaver from 'file-saver';
import * as FEATURE from './constants/features';
import { getRandomItem } from './utils/getRandomItem';

const App = () => {
   const [avatarStyle, setAvatarStyle] = useState<IAvatarStyle>(INITIAL_VALUES);
   const [collections, setCollections] = useState<string[]>([]);
   const formRef = useRef<HTMLFormElement>(null);

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
      toast.success('Copied avatar url to clipboard! ✨');
   };

   const handleReset = () => {
      setAvatarStyle(INITIAL_VALUES);
      if (formRef.current !== null) formRef.current.reset();
   };

   const handleExport = (url: string) => {
      FileSaver.saveAs(url, `${crypto.randomUUID()}.png`);
   };

   const handleGenerateRandomAvatar = () => {
      const randomAvatar = {
         head: getRandomItem(FEATURE.HEAD),
         face: getRandomItem(FEATURE.FACE),
         facialHair: getRandomItem(FEATURE.FACIAL_HAIR),
         accessories: getRandomItem(FEATURE.ACCESSORIES),
         skinColor: getRandomItem(FEATURE.SKIN_COLOR),
         clothingColor: getRandomItem(FEATURE.CLOTHING_COLOR),
         backgroundColor: getRandomItem(FEATURE.BACKGROUND_COLOR),
         facialHairProbability: 0,
         accessoriesProbability: 0,
      };
      setAvatarStyle(randomAvatar);
   };

   return (
      <div className="p-10">
         <h1 className="text-2xl font-bold">Omni peeps</h1>
         <ToastContainer />
         <div className="flex justify-evenly">
            <div className="flex justify-center items-center">
               <img src={IMAGE} width={300} />
            </div>

            <form ref={formRef} className="flex flex-col justify-center gap-2">
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
            </form>
         </div>

         <div className="flex flex-col justify-center items-center gap-2 pt-10">
            <div className="flex gap-2">
               <button
                  className="h-12 w-48 bg-black text-white p-3"
                  onClick={handleGenerate}
               >
                  Generate
               </button>
               <button
                  className="h-12 w-48 bg-black text-white p-3"
                  onClick={handleGenerateRandomAvatar}
               >
                  I'm feeling lucky ✨
               </button>
               <button
                  className="h-12 w-48 bg-black text-white p-3"
                  onClick={handleReset}
               >
                  Reset
               </button>
            </div>
            <div className="flex justify-center items-center gap-10 p-5">
               {collections.map((collection) => (
                  <div className="flex flex-col p-5 rounded border-2 border-black">
                     <img src={collection} width={300} />
                     <div className="flex justify-end gap-3 pt-3">
                        <IconContext.Provider value={{ size: '1.75em' }}>
                           <BiExport
                              className="hover:transform hover:scale-110 transition-all duration-300 hover: cursor-pointer"
                              onClick={() => handleExport(collection)}
                           />
                           <FiCopy
                              className="hover:transform hover:scale-110 transition-all duration-300 hover: cursor-pointer"
                              onClick={() => handleCopyUrl(collection)}
                           />
                        </IconContext.Provider>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default App;
