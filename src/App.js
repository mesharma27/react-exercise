import styled from 'styled-components';
import { Input, Loader } from 'semantic-ui-react';
import { useState } from 'react';
import { EmojiRow } from './EmojiRow';
import { fetchingEmojis } from './emojiAPI';
import debounce from 'debounce';
export const App = () => {


  const[emojis, setEmojis] = useState([]);
  const[isLoading,setLoading] = useState(false);


  const debounceGetEmojis = debounce((searchText) => {
    getEmojis(searchText);
  }, 500);

  const getEmojis = async (searchText) => {
    setLoading(true);
    const filteredEmojis = await fetchingEmojis(searchText);
    setEmojis(filteredEmojis);
    setLoading(false);
  }

  return <AppContainer>
    <SearchContainer>
    <Input
      fluid
    icon={"search"}
    placeholder="Search"
    onChange={(e)=> {
      debounceGetEmojis(e.target.value)
    }}
    />
    <EmojiContainer>{
      (isLoading ? <Loader active inline={'centered'}/> : emojis?.map((emoji, index) => {
        return (
          <EmojiRow emoji={ emoji} key={index}/>
        )
      }))
      }
    </EmojiContainer>
    </SearchContainer>
  </AppContainer>;
};

const AppContainer = styled.div`
margin-top: 200px;
    display: flex;
    justify-content: center
`;
const SearchContainer = styled.div`
  width: 50%;
`;
const EmojiContainer = styled.div`
    margin: 10px 0 0 0;
    padding:0 10px 0 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    div:last-child {
        border-bottom: 0;
    }
`;


