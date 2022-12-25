import React, { useState } from 'react';
import SelectField from './components/SelectField';
import Avatar from './components/Avatar';
import { IAvatarStyle } from '../utils/interfaces';
import * as STYLE from '../utils/constants';
import './App.css';

const App = () => {
   const [avatarStyle, setAvatarStyle] = useState<IAvatarStyle>({
      head: 'noHair1',
      face: 'smile',
      facialHair: '',
      accessories: '',
      skinColor: 'variant02',
      clothingColor: 'yellow01',
      hairColor: 'variant01',
   });

   const handleHeadChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAvatarStyle({ ...avatarStyle, head: e.target.value });
   };

   const handleFaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAvatarStyle({ ...avatarStyle, face: e.target.value });
   };

   const handleFacialHairChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAvatarStyle({ ...avatarStyle, facialHair: e.target.value });
   };

   const handleAccessoriesChange = (
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setAvatarStyle({ ...avatarStyle, accessories: e.target.value });
   };

   const handleSkinColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAvatarStyle({ ...avatarStyle, skinColor: e.target.value });
   };

   const handleClothingColorChange = (
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setAvatarStyle({ ...avatarStyle, clothingColor: e.target.value });
   };
   const handleHairColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setAvatarStyle({ ...avatarStyle, hairColor: e.target.value });
   };

   return (
      <>
         <h1>People DB</h1>
         <SelectField
            placeholder="Choose head style"
            handleChange={handleHeadChange}
            defaultValue="noHair1"
            optionItems={STYLE.HEAD}
         />
         <SelectField
            placeholder="Choose a hair color"
            handleChange={handleHairColorChange}
            defaultValue="variant01"
            optionItems={STYLE.HAIR_COLOR}
         />

         <SelectField
            placeholder="Choose face style"
            handleChange={handleFaceChange}
            defaultValue="smile"
            optionItems={STYLE.FACE}
         />

         <SelectField
            placeholder="Choose a skin color"
            handleChange={handleSkinColorChange}
            defaultValue=""
            optionItems={STYLE.SKIN_COLOR}
         />

         <SelectField
            placeholder="Choose facial hair"
            handleChange={handleFacialHairChange}
            defaultValue=""
            optionItems={STYLE.FACIAL_HAIR}
         />
         <SelectField
            placeholder="Choose accessories"
            handleChange={handleAccessoriesChange}
            defaultValue=""
            optionItems={STYLE.ACCESSORIES}
         />

         <SelectField
            placeholder="Choose a clothing color"
            handleChange={handleClothingColorChange}
            defaultValue=""
            optionItems={STYLE.CLOTHING_COLOR}
         />
         <Avatar avatarStyle={avatarStyle} />
      </>
   );
};

export default App;
