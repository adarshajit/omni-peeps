import React, { useState } from 'react';
import { IAvatarStyle } from './types';
import SelectField from './components/SelectField';
import { SELECT_FIELD_PROPS } from './constants/selectFieldProps';
import { generateAvatar } from './utils/generateAvatar';

const App = () => {
   const [avatarStyle, setAvatarStyle] = useState<IAvatarStyle>({
      head: 'noHair1',
      face: 'smile',
      facialHair: '',
      accessories: '',
      skinColor: 'd08b5b',
      clothingColor: 'fdea6b',
      facialHairProbability: 0,
      accessoriesProbability: 0,
   });
   const [shouldShowGeneratedUrl, setShouldShowGeneratedUrl] = useState(false);

   const IMAGE = generateAvatar(avatarStyle);

   const handleChange = (
      feature: string,
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setAvatarStyle({
         ...avatarStyle,
         [feature]: e.target.value,
      });
      setShouldShowGeneratedUrl(false);
   };

   const handleGenerate = () => {
      setShouldShowGeneratedUrl(true);
   };

   return (
      <div className="p-10">
         <h1 className="text-2xl font-bold">Omni peeps</h1>
         <div className="flex justify-evenly">
            <div className="flex justify-center items-center">
               <img src={IMAGE} width={300} height={300} />
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
            </div>
            {shouldShowGeneratedUrl && <a href={IMAGE}>{IMAGE}</a>}
         </div>
      </div>
   );
};

export default App;
