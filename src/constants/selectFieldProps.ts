import * as FEATURE from './features';

interface ISelectFieldData {
   feature: string;
   placeholder: string;
   defaultValue: string;
   optionItems: (string | { label: string; value: string })[];
}

export const SELECT_FIELD_PROPS: ISelectFieldData[] = [
   {
      feature: 'head',
      placeholder: 'Choose head style',
      defaultValue: 'noHair1',
      optionItems: FEATURE.HEAD,
   },
   {
      feature: 'face',
      placeholder: 'Choose face style',
      defaultValue: 'smile',
      optionItems: FEATURE.FACE,
   },
   {
      feature: 'facialHair',
      placeholder: 'Choose facial hair',
      defaultValue: '',
      optionItems: FEATURE.FACIAL_HAIR,
   },
   {
      feature: 'accessories',
      placeholder: 'Choose accessories',
      defaultValue: '',
      optionItems: FEATURE.ACCESSORIES,
   },
   {
      feature: 'skinColor',
      placeholder: 'Choose skin color',
      defaultValue: 'd08b5b',
      optionItems: FEATURE.SKIN_COLOR,
   },
   {
      feature: 'clothingColor',
      placeholder: 'Choose clothingColor',
      defaultValue: 'fdea6b',
      optionItems: FEATURE.CLOTHING_COLOR,
   },
   {
      feature: 'mask',
      placeholder: 'Choose mask',
      defaultValue: '',
      optionItems: FEATURE.MASK,
   },
   {
      feature: 'backgroundColor',
      placeholder: 'Choose background',
      defaultValue: 'b6e3f4',
      optionItems: FEATURE.BACKGROUND_COLOR,
   },
];
