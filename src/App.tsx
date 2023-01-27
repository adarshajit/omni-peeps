import React, { useState } from 'react';
import Avatar from './components/Avatar';
import { IAvatarStyle } from './types/interfaces';
import SelectField from './components/SelectField';
import { SELECT_FIELD_PROPS } from './constants/selectFieldProps';

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

   let BASE_URL = 'https://avatars.dicebear.com/api/open-peeps/:example.svg';

   let selectFieldProps = SELECT_FIELD_PROPS;

   if (gender === 'female') {
      selectFieldProps = SELECT_FIELD_PROPS.filter(
         (item) => item.feature !== 'facialHair'
      );
      BASE_URL = 'https://avatars.dicebear.com/api/open-peeps/:seed.svg';
   }

   const generateAvatar = (avatarStyle: IAvatarStyle): string => {
      const queryParams = Object.entries(avatarStyle).filter(
         ([key, value]) => value != ''
      );
      const queryString = queryParams.reduce(
         (acc, [key, value]) => acc + `${key}=${value}&`,
         ''
      );

      const IMAGE_URL = `${BASE_URL}?${queryString}`;

      return IMAGE_URL;
   };

   const IMAGE = generateAvatar(avatarStyle);

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
