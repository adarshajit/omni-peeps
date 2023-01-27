import { IAvatarStyle } from '../types';

export const generateAvatar = (
   avatarStyle: IAvatarStyle,
   url: string
): string => {
   const queryParams = Object.entries(avatarStyle).filter(
      ([key, value]) => value != ''
   );
   const queryString = queryParams.reduce(
      (acc, [key, value]) => acc + `${key}=${value}&`,
      ''
   );

   const IMAGE_URL = `${url}?${queryString}`;

   return IMAGE_URL;
};
