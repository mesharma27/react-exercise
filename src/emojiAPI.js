const API_KEY ='55711a2b0862491f1c7cdf37730d70c87dbcbad2'
const ENDPOINT = 'https://emoji-api.com/emojis'

export const fetchingEmojis =async (searchText) => {
  const url = `${ENDPOINT}?access_key=${API_KEY}&search=${searchText}`
  console.log('fetching from api ',searchText);
  try{
  const res = await fetch(url);
  const filteredEmojis =  await res.json();

  return filteredEmojis.slice(0,20);
  } catch (err) {
    console.log('Errorr')
  }
}