import React, { useState } from 'react';
import Avatar from './components/Avatar';
import { IAvatarStyle } from '../utils/interfaces';
import SelectField from './components/SelectField';
import { SELECT_FIELD_PROPS } from '../utils/constants/selectFieldProps';
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

   const handleChange = (
      feature: string,
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setAvatarStyle({ ...avatarStyle, [feature]: e.target.value });
   };

   return (
      <>
         <h1>People DB</h1>
         {SELECT_FIELD_PROPS.map((item) => (
            <SelectField
               placeholder={item.placeholder}
               handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleChange(item.feature, e)
               }
               defaultValue={item.defaultValue}
               optionItems={item.optionItems}
            />
         ))}

         <Avatar avatarStyle={avatarStyle} />
      </>
   );
};

export default App;
