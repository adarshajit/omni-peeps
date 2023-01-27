import React, { useState } from 'react';
import Avatar from './components/Avatar';
import { IAvatarStyle } from './types/interfaces';
import SelectField from './components/SelectField';
import { SELECT_FIELD_PROPS } from './constants/selectFieldProps';
import { BASE_URL } from './constants/baseUrl';
import { generateAvatar } from './utils/generateAvatar';

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

   const [gender, setGender] = useState('');

   let url = `${BASE_URL}/:example.svg`;

   let selectFieldProps = SELECT_FIELD_PROPS;

   if (gender === 'female') {
      selectFieldProps = SELECT_FIELD_PROPS.filter(
         (item) => item.feature !== 'facialHair'
      );
      url = `${BASE_URL}/:seed.svg`;
   }

   const IMAGE = generateAvatar(avatarStyle, url);

   const handleChange = (
      feature: string,
      e: React.ChangeEvent<HTMLSelectElement>
   ) => {
      setAvatarStyle({ ...avatarStyle, [feature]: e.target.value });
   };

   return (
      <>
         <h1>Omni peeps</h1>
         <select onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
         </select>

         {selectFieldProps.map((item) => (
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
         <a href={IMAGE}>{IMAGE}</a>
      </>
   );
};

export default App;
