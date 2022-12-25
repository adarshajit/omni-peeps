import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/open-peeps';

const customisePeep = (hairStyle: any) => {
   const SVG = createAvatar(style, {
      seed: 'custom-seed',
      size: 200,
      head: [hairStyle],
      // ... and other options
   });
   return SVG;
};

const Avatar = ({ hairStyle }: { hairStyle: string }) => (
   <div dangerouslySetInnerHTML={{ __html: customisePeep(hairStyle) }} />
);

export default Avatar;
