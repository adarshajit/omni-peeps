import { ChangeEvent } from 'react';

export interface IAvatarStyle {
   head: string;
   face: string;
   facialHair: string;
   accessories: string;
   skinColor: string;
   clothingColor: string;
   backgroundColor: string;
   mask: string;
   facialHairProbability: number;
   accessoriesProbability: number;
   maskProbability: number;
}

export interface ISelectField {
   placeholder: string;
   handleChange: (value: string) => void;
   value: string;
   optionItems: (string | { label: string; value: string })[];
}
