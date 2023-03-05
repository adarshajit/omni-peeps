export const getRandomItem = (items: string[]) => {
   const randomItemIndex = Math.floor(Math.random() * items.length);
   return items[randomItemIndex];
};
