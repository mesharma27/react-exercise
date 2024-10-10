import allEmojis from './resources/emojis.json';


export const fetchingEmojis =async (searchText) => {
  console.log('fetching from api ',searchText);
  const filteredEmojis =  allEmojis.filter((emoji) =>
     emoji.name.includes(searchText)
  );
  return filteredEmojis;
}