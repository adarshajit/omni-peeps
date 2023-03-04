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

   let selectFieldProps = SELECT_FIELD_PROPS;

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

   return (
      <>
         <h1>Omni peeps</h1>

         {selectFieldProps.map((item, key) => (
            <SelectField
               key={item.feature}
               placeholder={item.placeholder}
               handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleChange(item.feature, e)
               }
               defaultValue={item.defaultValue}
               optionItems={item.optionItems}
            />
         ))}

         <img src={IMAGE} width={200} height={200} />
         <a href={IMAGE}>{IMAGE}</a>
      </>
   );
};

export default App;
