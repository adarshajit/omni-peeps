import * as FEATURE from './features';

export const SELECT_FIELD_PROPS = [
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
      defaultValue: 'variant02',
      optionItems: FEATURE.SKIN_COLOR,
   },
   {
      feature: 'clothingColor',
      placeholder: 'Choose clothingColor',
      defaultValue: 'yellow01',
      optionItems: FEATURE.CLOTHING_COLOR,
   },
];
