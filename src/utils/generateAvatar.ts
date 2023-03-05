import { BASE_URL } from '../constants/baseUrl';
import { IAvatarStyle } from '../types';

export const generateAvatar = (avatarStyle: IAvatarStyle): string => {
   const queryParams = Object.entries(avatarStyle).filter(
      ([key, value]) => value != ''
   );

   let generatedURL = '';
   queryParams.forEach(([key, value]) => {
      if (key === 'accessories') {
         generatedURL += `accessoriesProbability=100&`;
      }

      if (key === 'facialHair') {
         generatedURL += `facialHairProbability=100&`;
      }

      if (key === 'mask') {
         generatedURL += `maskProbability=100&`;
      }

      generatedURL += `${key}=${value}&`;
   });

   const IMAGE_URL = `${BASE_URL}?${generatedURL}`;

   return IMAGE_URL;
};
