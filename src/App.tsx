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
            placeholder="Choose face style"
            handleChange={handleFaceChange}
            defaultValue="smile"
            optionItems={STYLE.FACE}
         />
         <SelectField
            placeholder="Choose facial hair"
            handleChange={handleFacialHairChange}
            defaultValue=""
            optionItems={STYLE.FACIAL_HAIR}
         />
         <Avatar avatarStyle={avatarStyle} />
      </>
   );
};

export default App;
