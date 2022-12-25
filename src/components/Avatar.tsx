import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/open-peeps';
import { IAvatarStyle } from '../../utils/interfaces';

const customisePeep = (avatarStyle: any) => {
   const SVG = createAvatar(style, {
      seed: 'custom-seed',
      size: 200,
      head: [avatarStyle.head],
      face: [avatarStyle.face],
      facialHair: [avatarStyle.facialHair],
      accessories: [avatarStyle.accessories],
      mask: [avatarStyle.mask],
      skinColor: [avatarStyle.skinColor],
      clothingColor: [avatarStyle.clothingColor],
      hairColor: [avatarStyle.hairColor],
   });
   return SVG;
};

const Avatar = ({ avatarStyle }: { avatarStyle: IAvatarStyle }) => (
   <div dangerouslySetInnerHTML={{ __html: customisePeep(avatarStyle) }} />
);

export default Avatar;
