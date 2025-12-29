export const getRandomItem = <T>(items: T[]): T => {
   const randomItemIndex = Math.floor(Math.random() * items.length);
   return items[randomItemIndex];
};
