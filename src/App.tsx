import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FileSaver from 'file-saver';

import { IAvatarStyle } from '@/types';
import { generateAvatar } from '@/utils/generateAvatar';
import { getRandomItem } from '@/utils/getRandomItem';
import { INITIAL_VALUES } from '@/constants/avatarStyle';
import * as FEATURE from '@/constants/features';

import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import AvatarPreview from '@/components/AvatarPreview';
import AvatarControls from '@/components/AvatarControls';
import CollectionGrid from '@/components/CollectionGrid';

const App = () => {
   const [collections, setCollections] = useState<string[]>([]);
   const [editingIndex, setEditingIndex] = useState<number | null>(null);

   const { control, setValue, watch, reset } = useForm<IAvatarStyle>({
      defaultValues: INITIAL_VALUES,
   });

   const avatarStyle = watch();
   const IMAGE = generateAvatar(avatarStyle as IAvatarStyle);

   const handleReset = useCallback(() => {
      reset(INITIAL_VALUES);
      setEditingIndex(null);
   }, [reset]);

   const handleUpdate = useCallback(() => {
      if (editingIndex !== null) {
         setCollections((prev) => {
            const newCollections = [...prev];
            newCollections[editingIndex] = IMAGE;
            return newCollections;
         });
         setEditingIndex(null);
         toast.success('Avatar updated in collection');
         handleReset();
      }
   }, [editingIndex, IMAGE, handleReset]);

   const handleAdd = useCallback(() => {
      // Need to check current collections state, so we use functional update or dependency.
      // But IMAGE is needed.
      if (!collections.includes(IMAGE)) {
         setCollections((prev) => [...prev, IMAGE]);
         toast.success('Avatar added to collection');
         setEditingIndex(null);
      } else {
         toast.error('Avatar already generated');
      }
   }, [collections, IMAGE]);

   // Optimization: handleAdd depends on `collections` which changes often.
   // To make it more stable, we could check duplication inside setCollections,
   // but preventing the toast error from showing if duplicated is harder.
   // Given the scale, this dependency is acceptable.

   const handleCopyUrl = useCallback((url: string) => {
      navigator.clipboard.writeText(url);
      toast.success('Copied avatar url to clipboard! ✨');
   }, []);

   const handleDelete = useCallback((index: number) => {
      setCollections((prev) => prev.filter((_, i) => i !== index));
      setEditingIndex((prevEditingIndex) => {
         if (prevEditingIndex === index) {
            handleReset();
            return null;
         } else if (prevEditingIndex !== null && prevEditingIndex > index) {
            return prevEditingIndex - 1;
         }
         return prevEditingIndex;
      });
      toast.success('Avatar removed from collection');
   }, [handleReset]);

   const handleExport = useCallback((url: string) => {
      FileSaver.saveAs(url, `${crypto.randomUUID()}.png`);
   }, []);

   const handleGenerateRandomAvatar = useCallback(() => {
      const getRandomValue = (
         items: (string | { value: string; label: string })[]
      ) => {
         const item = getRandomItem(items);
         return typeof item === 'string' ? item : item.value;
      };

      const randomAvatar = {
         head: getRandomValue(FEATURE.HEAD),
         face: getRandomValue(FEATURE.FACE),
         facialHair: getRandomValue(FEATURE.FACIAL_HAIR),
         accessories: getRandomValue(FEATURE.ACCESSORIES),
         skinColor: getRandomValue(FEATURE.SKIN_COLOR),
         clothingColor: getRandomValue(FEATURE.CLOTHING_COLOR),
         backgroundColor: getRandomValue(FEATURE.BACKGROUND_COLOR),
         facialHairProbability: 0,
         accessoriesProbability: 0,
         mask: '',
         maskProbability: 0,
      };
      reset({ ...INITIAL_VALUES, ...randomAvatar });
   }, [reset]);

   const handleEdit = useCallback((url: string, index: number) => {
      try {
         const urlObj = new URL(url);
         const params = new URLSearchParams(urlObj.search);
         const newStyle = { ...INITIAL_VALUES };

         params.forEach((value, key) => {
            if (Object.prototype.hasOwnProperty.call(newStyle, key)) {
               // @ts-ignore - dynamic key access
               newStyle[key] = value;
            }
         });

         reset(newStyle);
         setEditingIndex(index);
         toast.success('Avatar loaded for editing');
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
         console.error('Failed to parse avatar URL', error);
         toast.error('Failed to load avatar for editing');
      }
   }, [reset]);

   return (
      <div className="min-h-screen bg-background font-sans text-foreground">
         <Navbar />
         <Toaster />

         <main className="container mx-auto py-10 px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
               {/* Left Column: Avatar Preview */}
               <AvatarPreview
                  imageUrl={IMAGE}
                  onRandomize={handleGenerateRandomAvatar}
                  onReset={handleReset}
                  onUpdate={handleUpdate}
                  onAdd={handleAdd}
                  isEditing={editingIndex !== null}
                  isDuplicate={collections.includes(IMAGE)}
               />

               {/* Right Column: Controls */}
               <AvatarControls control={control} setValue={setValue} />
            </div>

            {/* Collection Section */}
            <CollectionGrid
               collections={collections}
               handleEdit={handleEdit}
               handleDelete={handleDelete}
               handleCopyUrl={handleCopyUrl}
               handleExport={handleExport}
            />
         </main>
      </div>
   );
};

export default App;
