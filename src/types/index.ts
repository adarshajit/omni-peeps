import { ChangeEvent } from 'react';

export interface IAvatarStyle {
   head: string;
   face: string;
   facialHair: string;
   accessories: string;
   skinColor: string;
   clothingColor: string;
   facialHairProbability: number;
   accessoriesProbability: number;
}

export interface ISelectField {
   placeholder: string;
   handleChange: (value: string) => void;
   defaultValue: string;
   optionItems: string[];
}
