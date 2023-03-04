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
   handleChange: any;
   defaultValue: string;
   optionItems: string[];
}
