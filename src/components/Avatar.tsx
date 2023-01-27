import useCustomise from '../hooks/useCustomise';
import { IAvatarStyle } from '../types';

const Avatar = ({ avatarStyle }: { avatarStyle: IAvatarStyle }) => {
   const generatedAvatar = useCustomise(avatarStyle);

   return <div dangerouslySetInnerHTML={{ __html: generatedAvatar }} />;
};

export default Avatar;
