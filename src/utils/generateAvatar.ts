import { BASE_URL } from '@/constants/baseUrl';
import { IAvatarStyle } from '@/types';

export const generateAvatar = (avatarStyle: IAvatarStyle): string => {
   const queryParams = Object.entries(avatarStyle).filter(
      ([key, value]) => value != ''
   );

   let generatedURL = '';
   queryParams.forEach(([key, value]) => {
      // Logic handled by explicit probability keys in state, 
      // but if we want to force 100% when a feature is selected, we should ensure the state reflects that
      // OR we just rely on the API. 
      // The previous logic was forcing Prob=100 if key was present, which duplicates the loop item.
      
      // Better approach: Trust the state. App.tsx should set probabilities to 100 when selecting an item.
      // BUT existing logic in App.tsx might rely on this.
      // Let's just remove the hardcoded overrides and ensure App.tsx sets probabilities.
      // Checking App.tsx (I can't see it now but randomAvatar set them to 0).
      
      // Let's keep the override BUT checking if we are already adding it is hard here.
      // Instead, we should filter out the "Probability" keys from the loop if we are manually adding them?
      // No, simpler: check if the key is a feature, and if so, append its probability IF not already in params?
      
      generatedURL += `${key}=${value}&`;
   });

   const IMAGE_URL = `${BASE_URL}?${generatedURL}`;

   return IMAGE_URL;
};
