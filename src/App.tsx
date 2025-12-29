import { useRef, useState } from 'react';
import { IAvatarStyle } from './types';
import SelectField from './components/SelectField';
import { SELECT_FIELD_PROPS } from './constants/selectFieldProps';
import { generateAvatar } from './utils/generateAvatar';
import { FiCopy, FiDownload, FiRefreshCw, FiTrash2 } from 'react-icons/fi';
import { BiExport } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { INITIAL_VALUES } from './constants/avatarStyle';
import FileSaver from 'file-saver';
import * as FEATURE from './constants/features';
import { getRandomItem } from './utils/getRandomItem';
import Navbar from './components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const App = () => {
   const [avatarStyle, setAvatarStyle] = useState<IAvatarStyle>(INITIAL_VALUES);
   const [collections, setCollections] = useState<string[]>([]);
   const formRef = useRef<HTMLFormElement>(null);

   const IMAGE = generateAvatar(avatarStyle);

   const handleChange = (feature: string, value: string) => {
      setAvatarStyle({
         ...avatarStyle,
         [feature]: value,
      });
   };

   const handleGenerate = () => {
      if (!collections.includes(IMAGE)) {
         setCollections((prev) => [...prev, IMAGE]);
         toast.success('Avatar added to collection');
         return;
      }
      toast.error('Avatar already generated');
   };

   const handleCopyUrl = (url: string) => {
      navigator.clipboard.writeText(url);
      toast.success('Copied avatar url to clipboard! ✨');
   };

   const handleReset = () => {
      setAvatarStyle(INITIAL_VALUES);
      if (formRef.current !== null) formRef.current.reset();
   };

   const handleExport = (url: string) => {
      FileSaver.saveAs(url, `${crypto.randomUUID()}.png`);
   };

   const handleGenerateRandomAvatar = () => {
      const randomAvatar = {
         head: getRandomItem(FEATURE.HEAD),
         face: getRandomItem(FEATURE.FACE),
         facialHair: getRandomItem(FEATURE.FACIAL_HAIR),
         accessories: getRandomItem(FEATURE.ACCESSORIES),
         skinColor: getRandomItem(FEATURE.SKIN_COLOR),
         clothingColor: getRandomItem(FEATURE.CLOTHING_COLOR),
         backgroundColor: getRandomItem(FEATURE.BACKGROUND_COLOR),
         facialHairProbability: 0,
         accessoriesProbability: 0,
         mask: '',
      };
      setAvatarStyle({ ...INITIAL_VALUES, ...randomAvatar });
   };

   return (
      <div className="min-h-screen bg-background font-sans text-foreground">
         <Navbar />
         <ToastContainer position="bottom-right" theme="dark" />

         <main className="container mx-auto py-10 px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               {/* Left Column: Avatar Preview */}
               <div className="lg:col-span-4 flex flex-col gap-6">
                  <Card className="overflow-hidden border-2">
                     <CardContent className="p-0 bg-muted/20 flex items-center justify-center min-h-[400px]">
                        <img src={IMAGE} alt="Avatar Preview" className="w-full h-auto max-w-[300px] object-contain" />
                     </CardContent>
                  </Card>

                  <div className="grid grid-cols-2 gap-4">
                     <Button
                        onClick={handleGenerateRandomAvatar}
                        variant="outline"
                        className="w-full flex gap-2"
                     >
                        <FiRefreshCw /> Randomize
                     </Button>
                     <Button
                        onClick={handleReset}
                        variant="destructive"
                        className="w-full flex gap-2"
                     >
                        <FiTrash2 /> Reset
                     </Button>
                  </div>
                  <Button
                     onClick={handleGenerate}
                     size="lg"
                     className="w-full flex gap-2 font-bold"
                  >
                     <FiDownload /> Add to Collection
                  </Button>
               </div>

               {/* Right Column: Controls */}
               <div className="lg:col-span-8">
                  <Card>
                     <CardContent className="p-6">
                        <form ref={formRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {SELECT_FIELD_PROPS.map((item) => (
                              <div key={item.feature} className="space-y-2">
                                 <Label className="capitalize">{item.feature.replace(/([A-Z])/g, ' $1').trim()}</Label>
                                 <SelectField
                                    placeholder={item.placeholder}
                                    handleChange={(value) => handleChange(item.feature, value)}
                                    defaultValue={item.defaultValue || avatarStyle[item.feature as keyof IAvatarStyle] as string}
                                    optionItems={item.optionItems}
                                 />
                              </div>
                           ))}
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </div>

            {/* Collection Section */}
            {collections.length > 0 && (
               <div className="mt-16">
                  <h2 className="text-3xl font-bold mb-8">My Collection</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                     {collections.map((collection, idx) => (
                        <Card key={idx} className="group relative overflow-hidden transition-all hover:shadow-lg">
                           <CardContent className="p-4 bg-muted/20">
                              <img src={collection} width={300} alt={`Collection ${idx}`} />
                           </CardContent>
                           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                              <Button
                                 size="icon"
                                 variant="secondary"
                                 onClick={() => handleExport(collection)}
                                 title="Download PNG"
                              >
                                 <BiExport />
                              </Button>
                              <Button
                                 size="icon"
                                 variant="secondary"
                                 onClick={() => handleCopyUrl(collection)}
                                 title="Copy URL"
                              >
                                 <FiCopy />
                              </Button>
                           </div>
                        </Card>
                     ))}
                  </div>
               </div>
            )}
         </main>
      </div>
   );
};

export default App;
