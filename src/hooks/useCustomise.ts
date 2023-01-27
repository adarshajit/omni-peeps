import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/open-peeps';

const useCustomise = (avatarStyle: any) => {
   const generatedAvatar = createAvatar(style, {
      seed: 'custom-seed',
      size: 200,
      head: [avatarStyle.head],
      face: [avatarStyle.face],
      facialHair: [avatarStyle.facialHair],
      accessories: [avatarStyle.accessories],
      skinColor: [avatarStyle.skinColor],
      clothingColor: [avatarStyle.clothingColor],
      hairColor: [avatarStyle.hairColor],
   });
   return generatedAvatar;
};

export default useCustomise;
